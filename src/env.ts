import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
	server: {
		LINKEDIN_URL: z.string().url(),
		GITHUB_URL: z.string().url(),
		CV_URL: z.string().url(),
	},

	client: {},

	runtimeEnv: {
		LINKEDIN_URL: process.env.LINKEDIN_URL,
		GITHUB_URL: process.env.GITHUB_URL,
		CV_URL: process.env.CV_URL,
	},
})
