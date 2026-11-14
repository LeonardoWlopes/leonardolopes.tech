import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
	server: {
		CV_URL: z.url(),
		APP_URL: z.url(),
		SCHEDULE_LINK: z.url(),
	},

	client: {
		NEXT_PUBLIC_CONTACT_NUMBER: z.string(),
	},

	runtimeEnv: {
		CV_URL: process.env.CV_URL,
		NEXT_PUBLIC_CONTACT_NUMBER: process.env.NEXT_PUBLIC_CONTACT_NUMBER,
		APP_URL: process.env.APP_URL,
		SCHEDULE_LINK: process.env.NEXT_PUBLIC_SCHEDULE_LINK,
	},
})
