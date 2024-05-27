// components
import { Button } from '@/components/button'
import { PageTitle } from '@/components/typography'
import Link from 'next/link'
import Image from 'next/image'

//assets
import obiwan from '@/assets/icons/obiwan.svg'

export default function NotFound() {
	return (
		<div className="flex w-full max-w-limit flex-col items-center">
			<PageTitle className="mb-3">404</PageTitle>

			<p className="mb-8 text-xl">
				Estes não são os droides que você procura
			</p>

			<Image src={obiwan} alt="Obi-Wan" />

			<hr className="my-8 w-full border-black/10 md:my-16 dark:border-white/10" />

			<Link href="/">
				<Button className="w-full">Voltar para a página inicial</Button>
			</Link>
		</div>
	)
}
