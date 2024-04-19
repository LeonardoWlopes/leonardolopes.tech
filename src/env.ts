import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
	server: {
		LINKEDIN_URL: z.string().url(),
		GITHUB_URL: z.string().url(),
		INSTAGRAM_URL: z.string().url(),
		CONTACT_EMAIL: z.string().email(),
		CV_URL: z.string().url(),
		APP_URL: z.string().url(),
		AVATAR_URL: z.string().url(),
		GOOGLE_ANALYTICS_ID: z.string(),
	},

	client: {
		NEXT_PUBLIC_CONTACT_NUMBER: z.string(),
		NEXT_PUBLIC_LINKEDIN_URL: z.string().url(),
		NEXT_PUBLIC_GITHUB_URL: z.string().url(),
	},

	runtimeEnv: {
		LINKEDIN_URL: process.env.NEXT_PUBLIC_LINKEDIN_URL,
		NEXT_PUBLIC_LINKEDIN_URL: process.env.NEXT_PUBLIC_LINKEDIN_URL,
		GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL,
		NEXT_PUBLIC_GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL,
		CV_URL: process.env.CV_URL,
		INSTAGRAM_URL: process.env.INSTAGRAM_URL,
		CONTACT_EMAIL: process.env.CONTACT_EMAIL,
		NEXT_PUBLIC_CONTACT_NUMBER: process.env.NEXT_PUBLIC_CONTACT_NUMBER,
		APP_URL: process.env.APP_URL,
		AVATAR_URL: process.env.AVATAR_URL,
		GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
	},
})
