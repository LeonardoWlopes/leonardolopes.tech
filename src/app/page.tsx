import { CodeXml } from 'lucide-react'

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

				<p className="z-10 max-w-[730px] text-start text-dark-gray text-sm md:text-lg">
					Engenheiro de Software Full Stack especializado em
					desenvolver soluções digitais escaláveis e performáticas.
					Com experiência em desenvolvimento frontend e backend, meu
					foco está na criação de aplicativos modernos para web e
					mobile.
				</p>

				<CodeXml className="absolute right-0 hidden h-80 w-80 text-dark-gray/5 sm:block" />
			</section>
		</main>
	)
}
