// components
import { Button } from '@/components/button'
import { KnowCard } from '@/components/know-card'
import { CodeXml } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

//assets
import blink from '@/assets/images/avatar-blink.png'
//import notebook from '@/assets/icons/notebook.svg'
//import techStack from '@/assets/images/tech-stack.png'

// utils
import { env } from '@/env'

export default function Home() {
	return (
		<main className="flex w-full max-w-limit flex-col">
			<section className="relative mb-32 flex flex-col sm:mb-60">
				<h1 className="mb-8 font-bold sm:text-5xl text-4xl text-dark-gray md:text-6xl">
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

				<div className="flex gap-4 m-auto sm:m-0 flex-col sm:flex-row max-w-64 sm:max-w-full">
					<Link href={env.CV_URL} target="_blank">
						<Button className="w-full">Veja meu currículo</Button>
					</Link>

					<Link href={'/about'}>
						<abbr title="Calma la, ainda to trabalhando nisso!">
							<Button
								disabled
								className="w-full cursor-not-allowed opacity-70"
								variant="secondary"
							>
								Entre em contato
							</Button>
						</abbr>
					</Link>
				</div>

				<CodeXml className="absolute right-0 hidden h-80 w-80 text-dark-gray/20 sm:block" />
			</section>

			<section className="grid grid-cols-1 gap-4 md:grid-cols-2">
				<h2 className="mb-8 text-center font-bold text-4xl text-white md:text-start">
					Conheça-me
				</h2>

				<span />

				<KnowCard
					title="Sobre"
					description="Quem eu sou e o que eu faço"
					href="/about"
				>
					<Image
						className="m-auto h-1/2 object-contain sm:h-2/3"
						src={blink}
						alt="iphone memoji"
					/>
				</KnowCard>

				{/* <KnowCard
					title="Notebook"
					description="Meus pensamentos, ideias e aprendizados"
					href="/notebook"
				>
					<Image
						className=""
						src={notebook}
						alt="notebook image"
						width={230}
					/>
				</KnowCard> */}

				{/* <KnowCard
					title="Tecnologias"
					description="As tecnologias que eu uso e recomendo"
					href="/tech"
				>
					<Image
						className="object-cover"
						src={techStack}
						alt="iphone memoji"
					/>
				</KnowCard> */}
			</section>
		</main>
	)
}
