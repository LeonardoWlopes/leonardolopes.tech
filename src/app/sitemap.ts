import type { MetadataRoute } from 'next'
import { env } from '~/utils/env'
import { SITEMAP_PATHS } from '~/utils/seo'

export default function sitemap(): MetadataRoute.Sitemap {
	return SITEMAP_PATHS.map((path) => ({
		url: new URL(path, env.APP_URL).toString(),
		changeFrequency: 'monthly',
		priority: path === '/' ? 1 : 0.8,
	}))
}
