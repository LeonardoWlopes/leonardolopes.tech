// components
import { Button } from '@/components/button'
import { CodeXml } from 'lucide-react'
import Link from 'next/link'

// utils
import { env } from '@/env'

export default function Home() {
	return (
		<main className="w-full max-w-limit">
			<section className="relative flex flex-col">
				<h1 className="mb-8 font-bold text-4xl text-dark-gray md:text-6xl">
					Eu sou <br />
					<strong className="font-bold text-white">
						Leonardo Lopes
					</strong>
				</h1>

				<p className="z-10 mb-10 max-w-[730px] text-start text-dark-gray text-sm md:text-lg">
					Engenheiro de Software Full Stack especializado em
					desenvolver soluções digitais escaláveis e performáticas.
					Com experiência em desenvolvimento frontend e backend, meu
					foco está na criação de aplicativos modernos para web e
					mobile.
				</p>

				<div className="flex gap-4">
					<Link href={env.CV_URL} target="_blank">
						<Button className="">Veja meu currículo</Button>
					</Link>

					{/* <Button>Entre em contato</Button> */}
				</div>

				<CodeXml className="absolute right-0 hidden h-80 w-80 text-dark-gray/20 sm:block" />
			</section>
		</main>
	)
}
