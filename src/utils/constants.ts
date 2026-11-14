import { parseISO } from 'date-fns'
import { enUS } from 'date-fns/locale/en-US'

export const CONSTANTS = {
	// GitHub serves the current profile photo here, so the site follows it
	AVATAR_URL: 'https://avatars.githubusercontent.com/LeonardoWlopes',
	CONTACT_EMAIL: 'leonardolopesdeveloper@gmail.com',
	GITHUB_URL: 'https://github.com/LeonardoWlopes',
	LINKEDIN_URL: 'https://www.linkedin.com/in/leonardowilliamlopes/',
	INSTAGRAM_URL: 'https://www.instagram.com/leonardowlopes/',
	LINKEDIN_EXPERIENCE_URL:
		'https://www.linkedin.com/in/leonardowilliamlopes/details/experience/',
	BIRTHDAY: parseISO('2003-11-10T00:00:00Z'),
}

export const DATE_FNS_LOCALE = enUS
