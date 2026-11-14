import type { MetadataRoute } from 'next'
import { env } from '~/utils/env'

// Every crawler, AI search included, may read the site; /styleguide stays
// crawlable so its noindex tag is seen, and it is left out of the sitemap
export default function robots(): MetadataRoute.Robots {
	return {
		rules: [{ userAgent: '*', allow: '/' }],
		sitemap: new URL('/sitemap.xml', env.APP_URL).toString(),
	}
}
