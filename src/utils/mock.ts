// types
import type { IContactLink } from '@/interfaces/contact'
import type { ITechCardProps } from '@/components/tech-card'
import { ETechCategory } from '@/enums/tech'

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
import { Linkedin, Github, Mail } from 'lucide-react'

// utils
import { env } from '@/env'

export const DEVELOPMENT_CARDS: ITechCardProps[] = [
	{
		name: 'Javascript',
		image: javascript,
		category: ETechCategory.LANGUAGE,
		link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
	},
	{
		name: 'Typescript',
		image: typescript,
		category: ETechCategory.LANGUAGE,
		link: 'https://www.typescriptlang.org/',
	},
	{
		name: 'Python',
		image: python,
		category: ETechCategory.LANGUAGE,
		link: 'https://www.python.org/',
	},
	{
		name: 'Vite',
		image: vite,
		category: ETechCategory.TOOL,
		link: 'https://vitejs.dev/',
	},
	{
		name: 'React',
		image: react,
		category: ETechCategory.LIBRARY,
		link: 'https://reactjs.org/',
	},
	{
		name: 'Next JS',
		image: next,
		category: ETechCategory.FRAMEWORK,
		link: 'https://nextjs.org/',
	},
	{
		name: 'Tailwind CSS',
		image: tailwind,
		category: ETechCategory.CSS,
		link: 'https://tailwindcss.com/',
	},
	{
		name: 'Styled Components',
		image: styled,
		category: ETechCategory.FRAMEWORK,
		link: 'https://styled-components.com/',
	},
	{
		name: 'React Native',
		image: react,
		category: ETechCategory.MOBILE,
		link: 'https://reactnative.dev/',
	},
	{
		name: 'Expo',
		image: expo,
		category: ETechCategory.MOBILE,
		link: 'https://expo.dev/',
	},
	{
		name: 'Hook Form',
		image: hookForm,
		category: ETechCategory.VALIDATION,
		link: 'https://react-hook-form.com/',
	},
	{
		name: 'React Query',
		image: reactQuery,
		category: ETechCategory.GLOBAL_STATE,
		link: 'https://react-query.tanstack.com/',
	},
	{
		name: 'Zustand',
		image: zustand,
		category: ETechCategory.GLOBAL_STATE,
		link: 'https://zustand-demo.pmnd.rs/',
	},
	{
		name: 'Zod',
		image: zod,
		category: ETechCategory.VALIDATION,
		link: 'https://zod.dev/',
	},
	{
		name: 'Node',
		image: node,
		category: ETechCategory.RUNTIME,
		link: 'https://nodejs.org/',
	},
	{
		name: 'Express',
		image: express,
		category: ETechCategory.FRAMEWORK,
		link: 'https://expressjs.com/',
	},
	{
		name: 'Fastify',
		image: fastify,
		category: ETechCategory.FRAMEWORK,
		link: 'https://www.fastify.io/',
	},
	{
		name: 'Nest',
		image: nest,
		category: ETechCategory.FRAMEWORK,
		link: 'https://nestjs.com/',
	},
	{
		name: 'Prisma',
		image: prisma,
		category: ETechCategory.ORM,
		link: 'https://www.prisma.io/',
	},
	{
		name: 'MongoDB',
		image: mongo,
		category: ETechCategory.DATABASE,
		link: 'https://www.mongodb.com/',
	},
	{
		name: 'PostgresSQL',
		image: postgres,
		category: ETechCategory.DATABASE,
		link: 'https://www.postgresql.org/',
	},
	{
		name: 'Docker',
		image: docker,
		category: ETechCategory.TOOL,
		link: 'https://www.docker.com/',
	},
	{
		name: 'Jest',
		image: jest,
		category: ETechCategory.TESTING,
		link: 'https://jestjs.io/',
	},
	{
		name: 'Vitest',
		image: vitest,
		category: ETechCategory.TESTING,
		link: 'https://vitest.dev/',
	},
	{
		name: 'Cypress',
		image: cypress,
		category: ETechCategory.TESTING,
		link: 'https://www.cypress.io/',
	},
]

export const CONTACT_LINKS: IContactLink[] = [
	{
		href: `mailto:${env.CONTACT_EMAIL}`,
		Icon: Mail,
	},
	{
		href: env.LINKEDIN_URL,
		Icon: Linkedin,
	},
	{
		href: env.GITHUB_URL,
		Icon: Github,
	},
]
