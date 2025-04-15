import { Button } from '@/components/button'
import { KnowCard } from '@/components/know-card'
import { PageTitle } from '@/components/typography'
import Link from 'next/link'
import Image from 'next/image'
import blink from '@/assets/images/avatar-blink.png'
import techStack from '@/assets/images/tech-stack.png'
import { CodeXml, FastForward } from 'lucide-react'
import { env } from '@/utils/env'

export default function Home() {
	return (
		<div className="flex w-full max-w-limit flex-col">
			<section className="relative mb-32 flex flex-col sm:mb-60">
				<PageTitle className="mb-8 text-dark-gray">
					I am <br />
					<span className="font-bold text-primary">
						Leonardo Lopes
					</span>
				</PageTitle>

				<p className="mb-10 max-w-[730px] text-start text-dark-gray text-sm md:text-lg">
					Full Stack Software Engineer specializing in developing
					scalable and high-performance digital solutions. With
					experience in frontend and backend development, my focus is
					on creating modern web and mobile applications.
				</p>

				<div className="m-auto flex max-w-64 flex-col gap-4 sm:m-0 sm:max-w-full sm:flex-row">
					<Link href={env.CV_URL} target="_blank">
						<Button className="w-full" data-cy="resume-button">
							Check my resume
						</Button>
					</Link>

					<Link href={'/contact'}>
						<Button
							className="w-full"
							variant="secondary"
							data-cy="contact-button"
						>
							Get in touch
						</Button>
					</Link>
				</div>

				<CodeXml className="absolute right-0 hidden h-80 w-80 text-primary opacity-10 sm:block" />
			</section>

			<section className="mb-24 grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 md:justify-items-start">
				<h2 className="mb-8 text-center font-bold text-4xl text-secondary md:text-start">
					Get to know me
				</h2>

				<span />

				<KnowCard
					title={'About'}
					description={'Who I am and what I do'}
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
					title={'Technologies'}
					description={'Tools and languages I master'}
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
					<h2 className="font-bold text-4xl text-secondary">
						Let's work together?
					</h2>

					<p className="text-start text-dark-gray text-sm md:text-lg">
						Would you like to discuss the opportunity to create
						something amazing together? I'm ready if you are.
					</p>
				</div>

				<Link href={'/contact'}>
					<Button data-cy="contact-button">
						<FastForward />
						Get in touch
					</Button>
				</Link>
			</section>
		</div>
	)
}
