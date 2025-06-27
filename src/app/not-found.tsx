import Image from 'next/image'
import Link from 'next/link'
import obiwan from '@/assets/images/obiwan.png'
import { Button } from '@/components/button'
import { PageTitle } from '@/components/typography'

export default function NotFound() {
	return (
		<div className="flex w-full max-w-limit flex-col items-center">
			<PageTitle className="mb-3">404</PageTitle>

			<p className="mb-8 text-xl">
				These are not the droids you are looking for
			</p>

			<Image
				className="aspect-square max-w-sm"
				src={obiwan}
				width={1024}
				height={1024}
				alt="Obi-Wan"
			/>

			<hr className="my-8 w-full border-black/10 md:my-16 dark:border-white/10" />

			<Link href="/">
				<Button className="w-full">Back to home page</Button>
			</Link>
		</div>
	)
}
