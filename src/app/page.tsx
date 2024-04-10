// components
import { Button } from '@/components/button'
import { KnowCard } from '@/components/know-card'
import { CodeXml, FastForward } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

//assets
import blink from '@/assets/images/avatar-blink.png'
import techStack from '@/assets/images/tech-stack.png'

// utils
import { env } from '@/env'

export default function Home() {
	return (
		<div className="flex w-full max-w-limit flex-col">
			<section className="relative mb-32 flex flex-col sm:mb-60">
				<h1 className="mb-8 font-bold text-4xl text-dark-gray md:text-6xl sm:text-5xl">
					Eu sou <br />
					<strong className="font-bold text-white">
						Leonardo Lopes
					</strong>
				</h1>

				<p className="mb-10 max-w-[730px] text-start text-dark-gray text-sm md:text-lg">
					Engenheiro de Software Full Stack especializado em
					desenvolver soluções digitais escaláveis e performáticas.
					Com experiência em desenvolvimento frontend e backend, meu
					foco está na criação de aplicativos modernos para web e
					mobile.
				</p>

				<div className="m-auto flex max-w-64 flex-col gap-4 sm:m-0 sm:max-w-full sm:flex-row">
					<Link href={env.CV_URL} target="_blank">
						<Button className="w-full" data-cy="resume-button">
							Veja meu currículo
						</Button>
					</Link>

					<Link href={'/contact'}>
						<Button
							className="w-full"
							variant="secondary"
							data-cy="contact-button"
						>
							Entre em contato
						</Button>
					</Link>
				</div>

				<CodeXml className="absolute right-0 hidden h-80 w-80 text-dark-gray/20 sm:block" />
			</section>

			<section className="mb-24 grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 md:justify-items-start">
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

				<KnowCard
					title="Tecnologias"
					description="As tecnologias que eu uso e recomendo"
					href="/technologies"
				>
					<Image
						className="object-cover"
						src={techStack}
						alt="technologies layout"
					/>
				</KnowCard>
			</section>

			<section className="flex flex-col items-center justify-between gap-8 md:flex-row">
				<div className="flex max-w-[500px] flex-col gap-2">
					<h2 className="font-bold text-4xl text-white">
						Vamos trabalhar juntos?
					</h2>

					<p className="text-start text-dark-gray text-sm md:text-lg">
						Gostaria de discutir a oportunidade de criar algo
						incrível juntos? estou pronto se você estiver.
					</p>
				</div>

				<Link href={'/contact'}>
					<Button data-cy="contact-button">
						<FastForward />
						Entre em contato
					</Button>
				</Link>
			</section>
		</div>
	)
}
