import { describe, expect, it } from 'vitest'
import packageJson from '../../../package.json'
import { APP_RELEASE_URL, APP_VERSION } from '../app-version'

describe('app version', () => {
	it('reads the semver version from package.json', () => {
		expect(APP_VERSION).toBe(packageJson.version)
		expect(APP_VERSION).toMatch(/^\d+\.\d+\.\d+$/)
	})

	it('links to the GitHub release tag of that version', () => {
		expect(APP_RELEASE_URL).toBe(
			`https://github.com/LeonardoWlopes/leonardolopes.tech/releases/tag/v${APP_VERSION}`,
		)
	})
})
