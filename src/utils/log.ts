function formatArg(arg: unknown): string {
	if (arg instanceof Error) return arg.stack ?? `${arg.name}: ${arg.message}`
	if (typeof arg !== 'object' || arg === null) return String(arg)

	try {
		return JSON.stringify(arg, null, 2)
	} catch {
		return String(arg)
	}
}

function formatMessage(...args: unknown[]) {
	const message = args.map((arg) => ` ${formatArg(arg)}`).join('')
	const timestamp = new Date().toLocaleTimeString()
	return `${timestamp}${message}`
}

function isDev() {
	return process.env.NODE_ENV === 'development'
}

export function devLog(...args: unknown[]) {
	if (isDev()) console.log(formatMessage(...args))
}

export function devError(...args: unknown[]) {
	if (isDev()) console.error(formatMessage(...args))
}

export function devWarn(...args: unknown[]) {
	if (isDev()) console.warn(formatMessage(...args))
}
