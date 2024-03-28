import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
	server: {
		LINKEDIN_URL: z.string().url(),
		GITHUB_URL: z.string().url(),
		INSTAGRAM_URL: z.string().url(),
		CONTACT_EMAIL: z.string().email(),
		CV_URL: z.string().url(),
	},

	client: {
		NEXT_PUBLIC_CONTACT_NUMBER: z.string(),
	},

	runtimeEnv: {
		LINKEDIN_URL: process.env.LINKEDIN_URL,
		GITHUB_URL: process.env.GITHUB_URL,
		CV_URL: process.env.CV_URL,
		INSTAGRAM_URL: process.env.INSTAGRAM_URL,
		CONTACT_EMAIL: process.env.CONTACT_EMAIL,
		NEXT_PUBLIC_CONTACT_NUMBER: process.env.NEXT_PUBLIC_CONTACT_NUMBER,
	},
})
