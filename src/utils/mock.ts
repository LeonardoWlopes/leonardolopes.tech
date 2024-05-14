// types
import type { IContactLink } from '@/interfaces/contact'
import type { ITechCardList } from '@/interfaces/tech'
import { ETechCategory, ETechTag } from '@/enums/tech'

//assets
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
import { env } from '@/env'

export const DEVELOPMENT_CARDS: ITechCardList[] = [
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
		category: ETechCategory.RUNTIME,
	},
	{
		name: 'Bun',
		image: bun,
		tag: ETechTag.RUNTIME,
		link: 'https://bun.sh/',
		category: ETechCategory.RUNTIME,
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
	{ label: 'Home', href: '/', Icon: Home },
	{ label: 'Sobre', href: '/about', Icon: UserRound },
	{ label: 'Experiencias', href: '/experiences', Icon: Briefcase },
	{ label: 'Tecnologias', href: '/technologies', Icon: Atom },
	{ label: 'Contato', href: '/contact', Icon: Mail },
]
