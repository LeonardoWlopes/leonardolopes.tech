import { Timer } from '@/components/timer'
import { Button } from '@/components/button'
import { PageSubtitle, PageTitle } from '@/components/typography'
import Link from 'next/link'
import Image from 'next/image'
import { FastForward } from 'lucide-react'
import signature from '@/assets/icons/signature.svg'
import { CONSTANTS } from '@/utils/constants'
import { differenceInYears } from 'date-fns'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'About',
	description:
		'Get to know a little more about me, my experiences, skills, and professional goals.',
}

export default function About() {
	const age = differenceInYears(new Date(), CONSTANTS.BIRTHDAY)

	return (
		<div className="flex w-full max-w-limit flex-col">
			<PageTitle className="mb-3">A little about me</PageTitle>

			<PageSubtitle>Who I am and what I do</PageSubtitle>

			<hr className="my-8 border-black/10 md:my-16 dark:border-white/10" />

			<div className="grid gap-2 md:grid-cols-[2fr_1fr]">
				<div className="mb-8 flex flex-col text-justify text-sm sm:text-base md:mb-0">
					<span className="mb-1 font-semibold text-onyx uppercase dark:text-medium-gray">
						WHO I AM
					</span>

					<p className="mb-8 dark:text-dark-gray">
						Hey! I'm Leo, a FullStack software engineer from the
						interior of São Paulo and passionate about technology. I
						am {age} years old with <Timer /> of market experience,
						and I am currently studying Systems Analysis and
						Development.
					</p>

					<span className="mb-1 font-semibold text-onyx uppercase dark:text-medium-gray">
						WHAT I DO
					</span>

					<p className="mb-8 dark:text-dark-gray">
						I develop scalable and high-performance digital
						solutions, with experience in FrontEnd, Backend, and
						Mobile development. I have developed various types of
						projects, both independently and in teams. My experience
						ranges from Web3 and crypto assets to landing pages,
						blogs, management systems, e-commerce, news, and sales
						applications, among others. Additionally, I have often
						acted as a leader in development teams, reviewing code,
						architecting solutions, and guiding my team members.
					</p>

					<span className="mb-1 font-semibold text-onyx uppercase dark:text-medium-gray">
						AND OUTSIDE OF CODE?
					</span>

					<p className="mb-8 dark:text-dark-gray">
						In the rare moments when I'm not dealing with code,
						whether in personal projects or studying, I love
						watching movies, series, and animes. I exercise every
						day to keep my body and mind healthy, spend great
						moments with my friends, and pamper my Siberian Husky a
						lot. And of course, I play video games whenever I can!
					</p>

					<span className="mb-1 font-semibold text-onyx uppercase dark:text-medium-gray">
						MY FUTURE
					</span>

					<p className="mb-8 dark:text-dark-gray">
						I have great ambitions and fight for them every day. I
						want to be a reference in what I do and be known in the
						DEV community, aspiring to become a GitHub Star one day
						just like my idols. Moreover, I have the dream of
						working abroad, whether remotely or in person, as one of
						my biggest life goals is to live in Canada.
					</p>

					<p className="mb-8 dark:text-dark-gray">
						Let's build something amazing together?
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
							Get in touch
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}
