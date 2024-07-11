import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

type JsonValue =
	| string
	| number
	| boolean
	| null
	| JsonValue[]
	| { [key: string]: JsonValue }

class JsonSorter {
	private static sortObjectByKeys(unsorted: { [key: string]: JsonValue }): {
		[key: string]: JsonValue
	} {
		return Object.keys(unsorted)
			.sort()
			.reduce((result: { [key: string]: JsonValue }, key) => {
				const value = unsorted[key]
				result[key] =
					typeof value === 'object' &&
					value !== null &&
					!Array.isArray(value)
						? JsonSorter.sortObjectByKeys(value)
						: value
				return result
			}, {})
	}

	static exec() {
		const __filename = fileURLToPath(import.meta.url)
		const __dirname = path.dirname(__filename)
		const __rootPath = path.resolve(__dirname, '../')

		const directoryPath = path.join(__rootPath, './i18n/locales')

		fs.readdir(directoryPath, (err, files) => {
			if (err) {
				return console.error('Unable to scan directory: ', err)
			}

			for (const file of files) {
				if (path.extname(file) === '.json') {
					const filePath = path.join(directoryPath, file)

					fs.readFile(filePath, 'utf8', (err, data) => {
						if (err) {
							console.error('Error reading file:', err)
							return
						}

						const jsonData: JsonValue = JSON.parse(data)
						const sortedJsonData = JsonSorter.sortObjectByKeys(
							jsonData as { [key: string]: JsonValue },
						)

						fs.writeFile(
							filePath,
							JSON.stringify(sortedJsonData, null, '\t'),
							'utf8',
							(err) => {
								if (err) {
									console.error('Error writing file:', err)
								}
							},
						)
					})
				}
			}
		})
	}
}

JsonSorter.exec()
