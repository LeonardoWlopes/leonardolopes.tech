// components
import { Timer } from '@/components/timer'
import { Button } from '@/components/button'
import Image from 'next/image'
import Link from 'next/link'

//assets
import { FastForward } from 'lucide-react'
import signature from '@/assets/icons/signature.svg'

// utils
import { CONSTANTS } from '@/utils/constants'

//types
import type { Metadata } from 'next'

// next
export const metadata: Metadata = {
	title: 'Sobre',
	description:
		'Conheça um pouco mais sobre minha trajetória profissional e pessoal.',
}

export const revalidate = 60 * 60 * 12 // 12 hours

export default function About() {
	return (
		<div className="flex w-full max-w-limit flex-col">
			<h1 className="mb-3 font-bold text-4xl text-secondary md:text-6xl sm:text-5xl">
				Um pouco sobre min
			</h1>

			<h2 className="text-medium-gray md:text-2xl sm:text-xl">
				Quem eu sou e o que faço
			</h2>

			<hr className="my-8 border-white/10 md:my-16" />

			<div className="grid gap-2 md:grid-cols-[2fr_1fr]">
				<div className="mb-8 text-justify text-sm md:mb-0 sm:text-base">
					<span className="mb-2 font-semibold text-primary/40 uppercase">
						quem eu sou
					</span>

					<p className="mb-8 text-primary">
						E aí! Sou o Léo, engenheiro de software FullStack do
						interior de São Paulo. Aqui, entre bits e bytes, sou o
						cara que faz a mágica acontecer! Fanático por tecnologia
						desde que me entendo por gente.
					</p>

					<span className="mb-2 font-semibold text-primary/40 uppercase">
						O que eu faço
					</span>

					<p className="mb-8 text-primary">
						Em uma jornada de <Timer /> repleta de descobertas, me
						apaixonei por diversas tecnologias, mas atualmente sou
						especializado em TypeScript, React, React Native e
						Node.js, utilizando-os para dar vida a aplicações web e
						mobile. Ao longo desse percurso, tive a oportunidade de
						colaborar com importantes players do cenário nacional e
						internacional, o que contribuiu significativamente para
						o desenvolvimento das minhas habilidades tanto como
						programador quanto como líder.
					</p>

					<span className="mb-2 font-semibold text-primary/40 uppercase">
						E fora do código?
					</span>

					<p className="mb-12 text-primary">
						Nas raras ocasiões em que não estou codando, aproveito
						para cuidar da minha saúde física e mental, seja
						treinando e passeando com o amor da minha vida (meu dog)
						ou simplesmente desfrutando de momentos de descontração
						com meus amigos. Acredito que um corpo saudável
						contribui para uma mente saudável, então busco
						equilibrar minha vida profissional com atividades que
						promovam bem-estar em todos os aspectos.
					</p>

					<p className="mb-12 text-primary [&>a]:text-secondary [&>a]:underline">
						Se quiser acompanhar mais de perto o que faço, sinta-se
						à vontade para me seguir no
						<Link href={CONSTANTS.INSTAGRAM_URL} target="_blank">
							{' '}
							Instagram
						</Link>
						. Para conhecer mais sobre minha trajetória
						profissional, dê uma olhada no meu{' '}
						<Link href={CONSTANTS.LINKEDIN_URL} target="_blank">
							LinkedIn
						</Link>
						. E se preferir um contato mais direto, mande-me um{' '}
						<Link
							href={`mailto:${CONSTANTS.CONTACT_EMAIL}`}
							target="_blank"
						>
							e-mail
						</Link>{' '}
						para iniciarmos uma conversa.
					</p>

					<p className="mb-8 text-primary">
						Vamos construir algo incrível juntos?
					</p>

					<Image
						style={{
							transform: 'rotate(-10deg)',
						}}
						src={signature}
						alt="leonardo lopes as signature"
					/>
				</div>

				<div className="flex flex-col items-center">
					<Image
						className="mb-20 aspect-[9/12] w-56 rounded-lg object-cover"
						src={CONSTANTS.AVATAR_URL}
						width={460}
						height={460}
						alt="Leonardo lopes"
					/>

					<Link href={'/contact'}>
						<Button>
							<FastForward />
							Entre em contato
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}
