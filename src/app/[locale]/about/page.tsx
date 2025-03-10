// components
import { Timer } from '@/components/timer'
import { Button } from '@/components/button'
import { PageSubtitle, PageTitle } from '@/components/typography'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'

// assets
import { FastForward } from 'lucide-react'
import signature from '@/assets/icons/signature.svg'

// utils
import { CONSTANTS } from '@/utils/constants'
import { getTranslations } from 'next-intl/server'
import { differenceInYears } from 'date-fns'

// types
import type { Metadata } from 'next'

// hooks
import { useTranslations } from 'next-intl'

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations('about._meta')

	return {
		title: t('title'),
		description: t('description'),
	}
}

export const revalidate = 60 * 60 * 12 // 12 hours

export default function About() {
	const t = useTranslations('about')

	const age = differenceInYears(new Date(), CONSTANTS.BIRTHDAY)

	return (
		<div className="flex w-full max-w-limit flex-col">
			<PageTitle className="mb-3">{t('title')}</PageTitle>

			<PageSubtitle>{t('subtitle')}</PageSubtitle>

			<hr className="my-8 border-black/10 md:my-16 dark:border-white/10" />

			<div className="grid gap-2 md:grid-cols-[2fr_1fr]">
				<div className="mb-8 flex flex-col text-justify text-sm sm:text-base md:mb-0">
					<span className="mb-1 font-semibold text-onyx uppercase dark:text-medium-gray">
						{t('who_i_am.title')}
					</span>

					<p className="mb-8 dark:text-dark-gray">
						{t.rich('who_i_am.content', {
							age: age.toString(),
							time: () => <Timer />,
						})}
					</p>

					<span className="mb-1 font-semibold text-onyx uppercase dark:text-medium-gray">
						{t('what_i_do.title')}
					</span>

					<p className="mb-8 dark:text-dark-gray">
						{t('what_i_do.content')}
					</p>

					<span className="mb-1 font-semibold text-onyx uppercase dark:text-medium-gray">
						{t('outside_work.title')}
					</span>

					<p className="mb-8 dark:text-dark-gray">
						{t('outside_work.content')}
					</p>

					<span className="mb-1 font-semibold text-onyx uppercase dark:text-medium-gray">
						{t('my_future.title')}
					</span>

					<p className="mb-8 dark:text-dark-gray">
						{t('my_future.content')}
					</p>

					<p className="mb-8 dark:text-dark-gray">{t('slug')}</p>

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
							{t('button')}
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}
