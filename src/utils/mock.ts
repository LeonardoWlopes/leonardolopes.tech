import type { IContactLink } from '@/interfaces/contact'
import type { ITechCardList } from '@/interfaces/tech'
import type { IExperience } from '@/interfaces/experience'
import { ETechCategory, ETechTag } from '@/enums/tech'

import javascript from '@/assets/icons/javascript.svg'
import typescript from '@/assets/icons/typescript.svg'
import python from '@/assets/icons/python.svg'
import react from '@/assets/icons/react.svg'
import next from '@/assets/icons/next.svg'
import expo from '@/assets/icons/expo.svg'
import node from '@/assets/icons/node.svg'
import express from '@/assets/icons/express.svg'
import fastify from '@/assets/icons/fastify.svg'
import nest from '@/assets/icons/nest.svg'
import tailwind from '@/assets/icons/tailwind.svg'
import styled from '@/assets/images/styled-components.png'
import prisma from '@/assets/icons/prisma.svg'
import mongo from '@/assets/icons/mongo.svg'
import postgres from '@/assets/icons/postgres.svg'
import hookForm from '@/assets/images/hook-form.png'
import reactQuery from '@/assets/images/react-query.png'
import zustand from '@/assets/images/zustand.png'
import zod from '@/assets/icons/zod.svg'
import vite from '@/assets/icons/vite.svg'
import vitest from '@/assets/icons/vitest.svg'
import jest from '@/assets/icons/jest.svg'
import cypress from '@/assets/icons/cypress.svg'
import docker from '@/assets/icons/docker.svg'
import rust from '@/assets/icons/rust.svg'
import bun from '@/assets/icons/bun.svg'

import build from '@/assets/images/buildbox.jpeg'
import nkey from '@/assets/images/nkey.jpeg'
import genezys from '@/assets/images/genezys.jpeg'
import modu from '@/assets/images/modu.jpeg'

import {
	Linkedin,
	Github,
	Mail,
	Instagram,
	MessageCircle,
	Home,
	UserRound,
	Atom,
	Briefcase,
} from 'lucide-react'

// utils
import { CONSTANTS } from './constants'
import { env } from '@/utils/env'
import { parseISO } from 'date-fns'

export const TECH_CATEGORIES = [
	{
		name: 'languages',
		category: ETechCategory.LANGUAGE,
	},
	{
		name: 'frameworks',
		category: ETechCategory.FRAMEWORK,
	},
	{
		name: 'libraries',
		category: ETechCategory.LIBRARY,
	},
	{
		name: 'tools',
		category: ETechCategory.TOOL,
	},
	{
		name: 'databases',
		category: ETechCategory.DATABASE,
	},
	{
		name: 'tests',
		category: ETechCategory.TESTING,
	},
] as const

export const TECH_CARDS: ITechCardList[] = [
	{
		name: 'Javascript',
		image: javascript,
		tag: ETechTag.LANGUAGE,
		link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
		category: ETechCategory.LANGUAGE,
	},
	{
		name: 'Typescript',
		image: typescript,
		tag: ETechTag.LANGUAGE,
		link: 'https://www.typescriptlang.org/',
		category: ETechCategory.LANGUAGE,
	},
	{
		name: 'Python',
		image: python,
		tag: ETechTag.LANGUAGE,
		link: 'https://www.python.org/',
		category: ETechCategory.LANGUAGE,
	},
	{
		name: 'Rust',
		image: rust,
		tag: ETechTag.LANGUAGE,
		link: 'https://www.rust-lang.org/',
		category: ETechCategory.LANGUAGE,
	},

	{
		name: 'Vite',
		image: vite,
		tag: ETechTag.TOOL,
		link: 'https://vitejs.dev/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'React',
		image: react,
		tag: ETechTag.LIBRARY,
		link: 'https://reactjs.org/',
		category: ETechCategory.LIBRARY,
	},
	{
		name: 'Next JS',
		image: next,
		tag: ETechTag.FRAMEWORK,
		link: 'https://nextjs.org/',
		category: ETechCategory.FRAMEWORK,
	},
	{
		name: 'Tailwind CSS',
		image: tailwind,
		tag: ETechTag.CSS,
		link: 'https://tailwindcss.com/',
		category: ETechCategory.LIBRARY,
	},
	{
		name: 'Styled Components',
		image: styled,
		tag: ETechTag.LIBRARY,
		link: 'https://styled-components.com/',
		category: ETechCategory.LIBRARY,
	},
	{
		name: 'React Native',
		image: react,
		tag: ETechTag.MOBILE,
		link: 'https://reactnative.dev/',
		category: ETechCategory.FRAMEWORK,
	},
	{
		name: 'Expo',
		image: expo,
		tag: ETechTag.MOBILE,
		link: 'https://expo.dev/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'Hook Form',
		image: hookForm,
		tag: ETechTag.VALIDATION,
		link: 'https://react-hook-form.com/',
		category: ETechCategory.LIBRARY,
	},
	{
		name: 'React Query',
		image: reactQuery,
		tag: ETechTag.GLOBAL_STATE,
		link: 'https://react-query.tanstack.com/',
		category: ETechCategory.LIBRARY,
	},
	{
		name: 'Zustand',
		image: zustand,
		tag: ETechTag.GLOBAL_STATE,
		link: 'https://zustand-demo.pmnd.rs/',
		category: ETechCategory.LIBRARY,
	},
	{
		name: 'Zod',
		image: zod,
		tag: ETechTag.VALIDATION,
		link: 'https://zod.dev/',
		category: ETechCategory.LIBRARY,
	},
	{
		name: 'Node',
		image: node,
		tag: ETechTag.RUNTIME,
		link: 'https://nodejs.org/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'Bun',
		image: bun,
		tag: ETechTag.RUNTIME,
		link: 'https://bun.sh/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'Express',
		image: express,
		tag: ETechTag.FRAMEWORK,
		link: 'https://expressjs.com/',
		category: ETechCategory.FRAMEWORK,
	},
	{
		name: 'Fastify',
		image: fastify,
		tag: ETechTag.FRAMEWORK,
		link: 'https://www.fastify.io/',
		category: ETechCategory.FRAMEWORK,
	},
	{
		name: 'Nest',
		image: nest,
		tag: ETechTag.FRAMEWORK,
		link: 'https://nestjs.com/',
		category: ETechCategory.FRAMEWORK,
	},
	{
		name: 'Prisma',
		image: prisma,
		tag: ETechTag.ORM,
		link: 'https://www.prisma.io/',
		category: ETechCategory.DATABASE,
	},
	{
		name: 'MongoDB',
		image: mongo,
		tag: ETechTag.DATABASE,
		link: 'https://www.mongodb.com/',
		category: ETechCategory.DATABASE,
	},
	{
		name: 'PostgresSQL',
		image: postgres,
		tag: ETechTag.DATABASE,
		link: 'https://www.postgresql.org/',
		category: ETechCategory.DATABASE,
	},
	{
		name: 'Docker',
		image: docker,
		tag: ETechTag.TOOL,
		link: 'https://www.docker.com/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'Jest',
		image: jest,
		tag: ETechTag.TESTING,
		link: 'https://jestjs.io/',
		category: ETechCategory.TESTING,
	},
	{
		name: 'Vitest',
		image: vitest,
		tag: ETechTag.TESTING,
		link: 'https://vitest.dev/',
		category: ETechCategory.TESTING,
	},
	{
		name: 'Cypress',
		image: cypress,
		tag: ETechTag.TESTING,
		link: 'https://www.cypress.io/',
		category: ETechCategory.TESTING,
	},
]

export const CONTACT_LINKS: IContactLink[] = [
	{
		href: `mailto:${CONSTANTS.CONTACT_EMAIL}`,
		Icon: Mail,
	},
	{
		href: CONSTANTS.LINKEDIN_URL,
		Icon: Linkedin,
	},
	{
		href: CONSTANTS.GITHUB_URL,
		Icon: Github,
	},
	{
		href: CONSTANTS.INSTAGRAM_URL,
		Icon: Instagram,
	},
	{
		href: `https://wa.me/${env.NEXT_PUBLIC_CONTACT_NUMBER}`,
		Icon: MessageCircle,
	},
]

export const NAV_LINKS = [
	{ label: 'home', href: '/', Icon: Home },
	{ label: 'about', href: '/about', Icon: UserRound },
	{ label: 'experience', href: '/experiences', Icon: Briefcase },
	{ label: 'tech', href: '/technologies', Icon: Atom },
	{ label: 'contact', href: '/contact', Icon: Mail },
] as const

export const ELSE_WHERE_LINKS = [
	{ label: 'github', href: CONSTANTS.GITHUB_URL },
	{ label: 'linkedin', href: CONSTANTS.LINKEDIN_URL },
	{ label: 'email', href: `mailto:${CONSTANTS.CONTACT_EMAIL}` },
	{ label: 'instagram', href: CONSTANTS.INSTAGRAM_URL },
] as const

export const EXPERIENCES: IExperience[] = [
	{
		company: {
			name: 'Buildbox',
			icon: build,
			link: 'https://buildbox.com.br/?utm_source=leo-gratis',
		},
		roles: [
			{
				title: 'Technical Governance Member',
				startDate: parseISO('2025-01-01'),
				endDate: null,
				description:
					'As a founding member of the Technical Governance team, I play a key role in defining engineering standards, best practices, and project guidelines that shape the entire technical team’s workflow. My contributions ensure consistency, maintainability, and scalability across projects. Additionally, I am actively involved in the BX++ project, where I provide technical consulting and mentorship to other team members, fostering knowledge-sharing and continuous improvement.',
			},
			{
				title: 'Senior Software Engineer @Lactalis Group',
				startDate: parseISO('2024-11-01'),
				endDate: null,
				description:
					'Lactalis Group is the world’s largest dairy producer, with a turnover of USD 17 billion and operations in 85 countries, the company is a global leader in cheese, milk, butter, and cream. br My team is responsible for developing and maintaining an innovative app that assists the pricing team in managing products across various segments in all 27 states of Brazil while accounting for the complexities of state-specific taxes.',
			},
			{
				title: 'Senior FullStack Engineer @Grupo Petrópolis',
				startDate: parseISO('2023-05-01'),
				endDate: parseISO('2024-11-01'),
				description:
					'Grupo Petrópolis is a leading insurance company in Brazil, providing a wide range of insurance products and services to individuals and businesses. My team is responsible for developing and maintaining an innovative app that assists the pricing team in managing products across various segments in all 27 states of Brazil while accounting for the complexities of state-specific taxes.',
			},
			{
				title: 'Middle FullStack Engineer @MSD',
				startDate: parseISO('2022-05-01'),
				endDate: parseISO('2023-05-01'),
				description:
					'MSD is a global pharmaceutical company with over 130 years of history, committed to developing innovative medicines and vaccines to improve human and animal health. Operating in more than 140 countries, MSD focuses on breakthrough solutions in oncology, infectious diseases, and chronic conditions.',
			},
		],
	},
	{
		company: {
			name: 'Nkey',
			icon: nkey,
			link: 'https://nkey.com.br/',
		},
		roles: [
			{
				title: 'Middle Frontend Engineer',
				startDate: parseISO('2022-08-01'),
				endDate: parseISO('2022-11-01'),
				description:
					'Played a key role in designing and developing the content distribution platform for Poliedro Sistema de Ensino, one of Brazil’s leading educational technology providers. Focused on scalability, performance, and system reliability to ensure seamless content delivery.',
			},
		],
	},
	{
		company: {
			name: 'Genezys',
			icon: genezys,
			link: 'https://genezys.io/',
		},
		roles: [
			{
				title: 'Middle Frontend Engineer (Web 3)',
				startDate: parseISO('2022-02-01'),
				endDate: parseISO('2022-05-01'),
				description:
					'Worked as a React developer on a crypto exchange platform, focusing on frontend development, performance optimization, and user experience improvements. Contributed to building a secure and scalable financial system in a highly regulated industry.',
			},
		],
	},
	{
		company: {
			name: 'MODU Gestão do Cuidado',
			icon: modu,
		},
		roles: [
			{
				title: 'Middle Frontend Engineer',
				startDate: parseISO('2021-08-01'),
				endDate: parseISO('2022-03-10'),
				description:
					'Developed a comprehensive platform for managing elderly care services, including features for scheduling appointments, tracking patient progress, and integrating with third-party healthcare providers. Implemented responsive design and user-friendly interfaces to enhance the overall user experience.',
			},
		],
	},
	{
		company: {
			name: 'Frelance',
			icon: build,
		},
		roles: [
			{
				title: 'Junior Mobile Engineer',
				startDate: parseISO('2021-08-01'),
				endDate: parseISO('2022-03-10'),
				description:
					'Developed a comprehensive platform for managing elderly care services, including features for scheduling appointments, tracking patient progress, and integrating with third-party healthcare providers. Implemented responsive design and user-friendly interfaces to enhance the overall user experience.',
			},
		],
	},
]
