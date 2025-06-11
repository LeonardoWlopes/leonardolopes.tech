import type { IContactLink } from '@/interfaces/contact'
import type { ITechCardList } from '@/interfaces/tech'
import type { IExperience } from '@/interfaces/experience'
import { ETechCategory } from '@/enums/tech'

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
import go from '@/assets/icons/go.svg'
import deno from '@/assets/icons/deno.svg'
import terraform from '@/assets/icons/terraform.svg'
import aws from '@/assets/icons/aws.svg'
import cloudflare from '@/assets/icons/cloudflare.svg'
import github from '@/assets/icons/github.svg'
import githubActions from '@/assets/icons/github-actions.svg'
import eslint from '@/assets/icons/eslint.svg'
import sqlite from '@/assets/icons/sqlite.svg'
import mysql from '@/assets/icons/mysql.svg'
import redis from '@/assets/icons/redis.svg'
import digitalOcean from '@/assets/icons/digital-ocean.svg'
import tauri from '@/assets/icons/tauri.svg'
import electron from '@/assets/icons/electron.svg'
import biome from '@/assets/images/biome.png'
import prettier from '@/assets/icons/prettier.svg'
import drizzle from '@/assets/icons/drizzle.svg'
import vercel from '@/assets/icons/vercel.svg'
import supabase from '@/assets/icons/supabase.svg'

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
		name: 'runtimes',
		category: ETechCategory.RUNTIME,
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
		name: 'databases / orm',
		category: ETechCategory.DATABASE,
	},
	{
		name: 'cloud / infra',
		category: ETechCategory.CLOUD,
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
		link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
		category: ETechCategory.LANGUAGE,
	},
	{
		name: 'Typescript',
		image: typescript,
		link: 'https://www.typescriptlang.org/',
		category: ETechCategory.LANGUAGE,
	},
	{
		name: 'Python',
		image: python,
		link: 'https://www.python.org/',
		category: ETechCategory.LANGUAGE,
		nonProfessional: true,
	},
	{
		name: 'Rust',
		image: rust,
		link: 'https://www.rust-lang.org/',
		category: ETechCategory.LANGUAGE,
		nonProfessional: true,
	},
	{
		name: 'Golang',
		image: go,
		link: 'https://go.dev/',
		category: ETechCategory.LANGUAGE,
		nonProfessional: true,
	},
	{
		name: 'Deno',
		image: deno,
		link: 'https://deno.com/',
		category: ETechCategory.RUNTIME,
		nonProfessional: true,
	},
	{
		name: 'Terraform',
		image: terraform,
		link: 'https://www.terraform.io/',
		category: ETechCategory.CLOUD,
	},
	{
		name: 'AWS',
		image: aws,
		link: 'https://aws.amazon.com/',
		category: ETechCategory.CLOUD,
	},
	{
		name: 'Cloudflare',
		image: cloudflare,
		link: 'https://www.cloudflare.com/',
		category: ETechCategory.CLOUD,
	},
	{
		name: 'GitHub',
		image: github,
		link: 'https://github.com/',
		category: ETechCategory.CLOUD,
	},
	{
		name: 'GitHub Actions',
		image: githubActions,
		link: 'https://github.com/features/actions',
		category: ETechCategory.CLOUD,
	},
	{
		name: 'SQLite',
		image: sqlite,
		link: 'https://www.sqlite.org/',
		category: ETechCategory.DATABASE,
	},
	{
		name: 'MySQL',
		image: mysql,
		link: 'https://www.mysql.com/',
		category: ETechCategory.DATABASE,
	},
	{
		name: 'Redis',
		image: redis,
		link: 'https://redis.io/',
		category: ETechCategory.DATABASE,
	},
	{
		name: 'Drizzle',
		image: drizzle,
		link: 'https://orm.drizzle.team/',
		category: ETechCategory.DATABASE,
	},
	{
		name: 'ESLint',
		image: eslint,
		link: 'https://eslint.org/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'Prettier',
		image: prettier,
		link: 'https://prettier.io/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'Digital Ocean',
		image: digitalOcean,
		link: 'https://prettier.io/',
		category: ETechCategory.CLOUD,
		nonProfessional: true,
	},
	{
		name: 'Docker',
		image: docker,
		link: 'https://www.docker.com/',
		category: ETechCategory.TOOL,
	},

	{
		name: 'Biome',
		image: biome,
		link: 'https://biomejs.dev/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'Vercel',
		image: vercel,
		link: 'https://vercel.com/',
		category: ETechCategory.CLOUD,
	},
	{
		name: 'Supabase',
		image: supabase,
		link: 'https://supabase.com/',
		category: ETechCategory.DATABASE,
		nonProfessional: true,
	},
	{
		name: 'Tauri',
		image: tauri,
		link: 'https://tauri.app/',
		category: ETechCategory.FRAMEWORK,
		nonProfessional: true,
	},
	{
		name: 'Electron',
		image: electron,
		link: 'https://www.electronjs.org/',
		category: ETechCategory.FRAMEWORK,
		nonProfessional: true,
	},
	{
		name: 'Vite',
		image: vite,
		link: 'https://vitejs.dev/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'React',
		image: react,
		link: 'https://reactjs.org/',
		category: ETechCategory.LIBRARY,
	},
	{
		name: 'Next JS',
		image: next,
		link: 'https://nextjs.org/',
		category: ETechCategory.FRAMEWORK,
	},
	{
		name: 'Tailwind CSS',
		image: tailwind,
		link: 'https://tailwindcss.com/',
		category: ETechCategory.LIBRARY,
	},
	{
		name: 'Styled Components',
		image: styled,
		link: 'https://styled-components.com/',
		category: ETechCategory.LIBRARY,
	},
	{
		name: 'React Native',
		image: react,
		link: 'https://reactnative.dev/',
		category: ETechCategory.FRAMEWORK,
	},
	{
		name: 'Expo',
		image: expo,
		link: 'https://expo.dev/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'Hook Form',
		image: hookForm,
		link: 'https://react-hook-form.com/',
		category: ETechCategory.LIBRARY,
	},
	{
		name: 'React Query',
		image: reactQuery,
		link: 'https://react-query.tanstack.com/',
		category: ETechCategory.LIBRARY,
	},
	{
		name: 'Zustand',
		image: zustand,
		link: 'https://zustand-demo.pmnd.rs/',
		category: ETechCategory.LIBRARY,
	},
	{
		name: 'Zod',
		image: zod,
		link: 'https://zod.dev/',
		category: ETechCategory.LIBRARY,
	},
	{
		name: 'Node',
		image: node,
		link: 'https://nodejs.org/',
		category: ETechCategory.RUNTIME,
	},
	{
		name: 'Bun',
		image: bun,
		link: 'https://bun.sh/',
		category: ETechCategory.RUNTIME,
		nonProfessional: true,
	},
	{
		name: 'Express',
		image: express,
		link: 'https://expressjs.com/',
		category: ETechCategory.FRAMEWORK,
	},
	{
		name: 'Fastify',
		image: fastify,
		link: 'https://www.fastify.io/',
		category: ETechCategory.FRAMEWORK,
	},
	{
		name: 'Nest',
		image: nest,
		link: 'https://nestjs.com/',
		category: ETechCategory.FRAMEWORK,
	},
	{
		name: 'Prisma',
		image: prisma,
		link: 'https://www.prisma.io/',
		category: ETechCategory.DATABASE,
	},
	{
		name: 'MongoDB',
		image: mongo,
		link: 'https://www.mongodb.com/',
		category: ETechCategory.DATABASE,
	},
	{
		name: 'PostgresSQL',
		image: postgres,
		link: 'https://www.postgresql.org/',
		category: ETechCategory.DATABASE,
	},
	{
		name: 'Jest',
		image: jest,
		link: 'https://jestjs.io/',
		category: ETechCategory.TESTING,
	},
	{
		name: 'Vitest',
		image: vitest,
		link: 'https://vitest.dev/',
		category: ETechCategory.TESTING,
	},
	{
		name: 'Cypress',
		image: cypress,
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
	{ label: 'Home', href: '/', Icon: Home },
	{ label: 'About', href: '/about', Icon: UserRound },
	{ label: 'Experiences', href: '/experiences', Icon: Briefcase },
	{ label: 'Technologies', href: '/technologies', Icon: Atom },
	{ label: 'Contact', href: '/contact', Icon: Mail },
]

export const ELSE_WHERE_LINKS = [
	{ label: 'GitHub', href: CONSTANTS.GITHUB_URL },
	{ label: 'LinkedIn', href: CONSTANTS.LINKEDIN_URL },
	{ label: 'Email', href: `mailto:${CONSTANTS.CONTACT_EMAIL}` },
	{ label: 'Instagram', href: CONSTANTS.INSTAGRAM_URL },
] as const

export const EXPERIENCES: IExperience[] = [
	{
		company: {
			name: 'Buildbox',
			icon: build,
		},
		roles: [
			{
				title: 'Technical Governance Member',
				startDate: parseISO('2025-01-01'),
				endDate: null,
				description:
					'As a founding member of the Technical Governance team, I’ve been instrumental in establishing engineering standards, best practices, and project guidelines that define how the entire tech organization operates. My work directly contributes to creating a consistent, maintainable, and scalable development environment across all teams. My responsibilities also include the ideation and implementation of cloud architectures on AWS, internal technical consulting, and development team management, always with a focus on performance, scalability, and long-term sustainability.',
			},
			{
				title: 'Senior Software Engineer @Lactalis Group',
				startDate: parseISO('2024-11-01'),
				endDate: null,
				description:
					'Lactalis Group is the world’s largest dairy producer, with operations in 85 countries and a turnover exceeding USD 17 billion. The company is a global leader in cheese, milk, butter, and cream. I was part of the team responsible for developing and maintaining an innovative application designed to support the pricing team in managing products across all 27 Brazilian states. The solution was built to handle the complexities of region-specific taxation, ensuring accurate and efficient pricing operations at a national scale.',
			},
			{
				title: 'Senior FullStack Engineer @Grupo Petrópolis',
				startDate: parseISO('2023-05-01'),
				endDate: parseISO('2024-11-01'),
				description:
					'Grupo Petrópolis is one of Brazil’s largest beverage companies, generating over $2 billion in annual revenue and serving more than 700,000 customers nationwide. The company’s core sales operations depend on a mobile application responsible for 97% of total revenue, making performance, stability, and scalability absolutely critical. As a key contributor, I led several strategic initiatives to improve performance, streamline processes, and elevate the user experience, directly impacting the company’s primary revenue channel.',
			},
			{
				title: 'Middle FullStack Engineer @MSD',
				startDate: parseISO('2022-05-01'),
				endDate: parseISO('2023-05-01'),
				description:
					'MSD is a global pharmaceutical leader with over 130 years of history, operating in more than 140 countries. The company is dedicated to developing innovative medicines and vaccines that advance both human and animal health, with a strong focus on oncology, infectious diseases, and chronic conditions. I was responsible for leading the development of web and mobile interfaces for a custom gamification platform, tailored to enhance internal engagement and strategic alignment at MSD.',
			},
		],
	},
	{
		company: {
			name: 'Nkey',
			icon: nkey,
		},
		roles: [
			{
				title: 'Middle Frontend Engineer',
				startDate: parseISO('2022-08-01'),
				endDate: parseISO('2022-11-01'),
				description:
					'Played a key role in designing and developing the content distribution platform for Poliedro Sistema de Ensino, one of Brazil’s leading educational technology providers. Focused on scalability, performance, and system reliability to ensure seamless content delivery across a wide network of institutions.',
			},
		],
	},
	{
		company: {
			name: 'Genezys',
			icon: genezys,
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
			name: 'MODU',
			icon: modu,
		},
		roles: [
			{
				title: 'Middle Frontend Engineer',
				startDate: parseISO('2021-08-01'),
				endDate: parseISO('2022-03-10'),
				description:
					'Led the frontend development of a healthcare management system used by Wanda Horta Health Complex, a multidisciplinary medical institution. Focused on performance, usability, and scalability, ensuring efficient management of patients, staff, sales, and revenue',
			},
		],
	},
	{
		company: {
			name: 'Frelance',
			icon: expo,
		},
		roles: [
			{
				title: 'Junior Mobile Engineer',
				startDate: parseISO('2020-06-01'),
				endDate: parseISO('2021-07-10'),
				description:
					'Worked as a React Native developer, contributing to various mobile applications in different industries. Developed new features, optimized performance, and maintained existing apps, gaining hands-on experience in the full mobile development lifecycle.',
			},
		],
	},
]
