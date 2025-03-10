import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
	server: {
		CV_URL: z.string().url(),
		APP_URL: z.string().url(),
		GOOGLE_ANALYTICS_ID: z.string(),
	},

	client: {
		NEXT_PUBLIC_CONTACT_NUMBER: z.string(),
	},

	runtimeEnv: {
		CV_URL: process.env.CV_URL,
		NEXT_PUBLIC_CONTACT_NUMBER: process.env.NEXT_PUBLIC_CONTACT_NUMBER,
		APP_URL: process.env.APP_URL,
		GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
	},
})
