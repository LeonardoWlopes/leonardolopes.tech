import packageJson from '../../package.json'
import { CONSTANTS } from './constants'

/** Released version: semantic-release writes it to package.json on every release */
export const APP_VERSION = packageJson.version

/** GitHub release page of the running version (tags carry the "v" prefix) */
export const APP_RELEASE_URL = `${CONSTANTS.REPOSITORY_URL}/releases/tag/v${APP_VERSION}`
