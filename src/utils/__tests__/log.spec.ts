import { describe, expect, it, vi } from 'vitest'
import { devError, devLog, devWarn } from '../log'

describe('dev logs', () => {
	it('prints in development, formatting errors and objects', () => {
		vi.stubEnv('NODE_ENV', 'development')
		const log = vi.spyOn(console, 'log').mockImplementation(() => {})
		const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
		const error = vi.spyOn(console, 'error').mockImplementation(() => {})

		devLog('hello', { a: 1 }, null)
		devWarn('careful')
		devError(new Error('boom'))

		expect(log.mock.calls[0][0]).toContain('hello')
		expect(log.mock.calls[0][0]).toContain('"a": 1')
		expect(warn.mock.calls[0][0]).toContain('careful')
		expect(error.mock.calls[0][0]).toContain('boom')
	})

	it('falls back to String() for errors without a stack and circular objects', () => {
		vi.stubEnv('NODE_ENV', 'development')
		const log = vi.spyOn(console, 'log').mockImplementation(() => {})
		const circular: Record<string, unknown> = {}
		circular.self = circular
		const error = new Error('no stack')
		error.stack = undefined

		devLog(circular, error)

		expect(log.mock.calls[0][0]).toContain('[object Object]')
		expect(log.mock.calls[0][0]).toContain('Error: no stack')
	})

	it('stays silent outside development', () => {
		vi.stubEnv('NODE_ENV', 'production')
		const log = vi.spyOn(console, 'log').mockImplementation(() => {})

		devLog('hidden')
		devWarn('hidden')
		devError('hidden')

		expect(log).not.toHaveBeenCalled()
	})
})
