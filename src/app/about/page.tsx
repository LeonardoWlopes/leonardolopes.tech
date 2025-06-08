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

export const revalidate = 60 * 60 * 12 // 12 hours

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
						Hey! I'm Leo, a Full Stack Software Engineer from the
						interior of São Paulo, passionate about technology,
						performance, and clean architecture. I'm {age} years old
						with <Timer /> of professional experience and currently
						study Systems Analysis and Development. I’m recognized
						for combining technical depth with excellent
						communication and leadership skills.
					</p>

					<span className="mb-1 font-semibold text-onyx uppercase dark:text-medium-gray">
						WHAT I DO
					</span>

					<p className="mb-8 dark:text-dark-gray">
						I build scalable, high-performance systems across Web,
						Mobile, and Cloud environments. From architecture to
						deployment, I’ve led mission-critical projects for
						global clients like MSD, Grupo Petrópolis, and Lactalis,
						delivering measurable results in performance and
						operational efficiency. I frequently act as a Tech Lead,
						setting engineering standards, mentoring developers, and
						driving initiatives in CI/CD and infrastructure with AWS
						and Terraform.
					</p>

					<span className="mb-1 font-semibold text-onyx uppercase dark:text-medium-gray">
						AND OUTSIDE OF CODE?
					</span>

					<p className="mb-8 dark:text-dark-gray">
						When I’m not coding, I’m likely studying, mentoring, or
						writing. But I also make time for movies, anime,
						workouts, and caring for my Siberian Husky. I’m a gamer
						at heart and believe balance is essential for great
						performance, both human and software.
					</p>

					<span className="mb-1 font-semibold text-onyx uppercase dark:text-medium-gray">
						MY FUTURE
					</span>

					<p className="mb-8 dark:text-dark-gray">
						I aspire to be a technical reference in the community
						and aim to become a GitHub Star one day. My dream is to
						work abroad, ideally in Canada, contributing to
						meaningful products at global scale, sharing knowledge,
						and continuously evolving alongside world-class
						professionals.
					</p>

					<p className="mb-8 dark:text-dark-gray">
						Let’s build something fast, scalable, and valuable
						together?
					</p>

					<Image
						style={{ transform: 'rotate(-10deg)' }}
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
						alt="Leonardo Lopes"
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
