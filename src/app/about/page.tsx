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

export const revalidate = 43200 // 12 hours

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
						Hey! I'm Leo, an Experienced Software Engineer
						passionate about building scalable, high-performance
						applications. I'm {age} years old with <Timer /> of
						professional experience. I'm recognized for combining
						technical depth with excellent communication and
						leadership skills, always focused on delivering
						exceptional results and driving innovation in every
						project I undertake.
					</p>

					<span className="mb-1 font-semibold text-onyx uppercase dark:text-medium-gray">
						WHAT I DO
					</span>

					<p className="mb-8 dark:text-dark-gray">
						I specialize in Node.js, React, and React Native, with
						strong skills in system architecture, technical
						governance, cloud infrastructure (AWS), and CI/CD
						pipelines. My expertise extends to designing and
						implementing robust solutions that scale efficiently
						while maintaining high performance and security
						standards. I've proven leadership in managing
						development teams, optimizing mission-critical systems,
						and delivering business-driven solutions. I'm passionate
						about learning, mentoring, and fostering engineering
						excellence in fast-paced environments, always pushing
						the boundaries of what's possible in software
						development. I'm the kind of professional you look for
						when your app or infrastructure isn't delivering the
						value it should, or when your tech team needs clear
						standards, processes, and direction that actually make a
						difference.
					</p>

					<span className="mb-1 font-semibold text-onyx uppercase dark:text-medium-gray">
						AND OUTSIDE OF CODE?
					</span>

					<p className="mb-8 dark:text-dark-gray">
						I believe that a strong body creates a healthy mind,
						which is why I'm a dedicated capoeirista and maintain a
						regular exercise routine. When I'm not coding, you'll
						find me spending quality time with friends, indulging my
						Siberian Husky's every whim, or diving deep into gaming.
						I'm a hardcore gamer who loves spending hours pursuing
						that elusive 100% achievement completion in games. If
						you check my Steam achievements, you'll see I've spent
						countless hours chasing nearly impossible challenges, so
						you can be sure that no professional challenge will ever
						shake my determination.
					</p>

					<span className="mb-1 font-semibold text-onyx uppercase dark:text-medium-gray">
						MY FUTURE
					</span>

					<p className="mb-8 dark:text-dark-gray">
						I aspire to create something truly impactful on a global
						scale. I want to be able to look at something that
						everyone knows or uses and say, "I was part of that." I
						dream of becoming a reference in the tech community and,
						who knows, maybe one day becoming a GitHub Star. Beyond
						my professional goals, I have a personal dream of living
						in a cold country like Canada, experiencing a different
						culture and way of life.
					</p>

					<p className="mb-8 dark:text-dark-gray">
						Let's build something fast, scalable, and valuable
						together?
					</p>

					<Image
						style={{ transform: 'rotate(-10deg)' }}
						src={signature}
						alt="leonardo lopes as signature"
					/>
				</div>

				<div className="flex flex-col items-center">
					<div className="sticky top-24 flex flex-col items-center">
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
		</div>
	)
}
