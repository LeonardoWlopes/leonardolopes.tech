import type { ITechCardProps } from '@/components/tech-card'
import { ETechCategory } from '@/enums/tech'

//assets
import javascript from '@/assets/icons/javascript.svg'
import typescript from '@/assets/icons/typescript.svg'
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
import docker from '@/assets/icons/docker.svg'


export const DEVELOPMENT_CARDS: ITechCardProps[] = [
	{
		name: 'Javascript',
		image: javascript,
		category: ETechCategory.LANGUAGE,
	},
	{
		name: 'Typescript',
		image: typescript,
		category: ETechCategory.LANGUAGE,
	},
	{
		name: 'Vite',
		image: vite,
		category: ETechCategory.TOOL,
	},
	{
		name: 'React',
		image: react,
		category: ETechCategory.LIBRARY,
	},
	{
		name: 'Next JS',
		image: next,
		category: ETechCategory.FRAMEWORK,
	},
	{
		name: 'Tailwind CSS',
		image: tailwind,
		category: ETechCategory.CSS,
	},
	{
		name: 'Styled Components',
		image: styled,
		category: ETechCategory.FRAMEWORK,
	},
	{
		name: 'React Native',
		image: react,
		category: ETechCategory.MOBILE,
	},
	{
		name: 'Expo',
		image: expo,
		category: ETechCategory.MOBILE,
	},
	{
		name: 'Hook Form',
		image: hookForm,
		category: ETechCategory.VALIDATION,
	},
	{
		name: 'React Query',
		image: reactQuery,
		category: ETechCategory.GLOBAL_STATE,
	},
	{
		name: 'Zustand',
		image: zustand,
		category: ETechCategory.GLOBAL_STATE,
	},
	{
		name: 'Zod',
		image: zod,
		category: ETechCategory.VALIDATION,
	},
	{
		name: 'Node',
		image: node,
		category: ETechCategory.RUNTIME,
	},
	{
		name: 'Express',
		image: express,
		category: ETechCategory.FRAMEWORK,
	},
	{
		name: 'Fastify',
		image: fastify,
		category: ETechCategory.FRAMEWORK,
	},
	{
		name: 'Nest',
		image: nest,
		category: ETechCategory.FRAMEWORK,
	},
	{
		name: 'Prisma',
		image: prisma,
		category: ETechCategory.ORM,
	},
	{
		name: 'MongoDB',
		image: mongo,
		category: ETechCategory.DATABASE,
	},
	{
		name: 'PostgresSQL',
		image: postgres,
		category: ETechCategory.DATABASE,
	},
	{
		name: 'Docker',
		image: docker,
		category: ETechCategory.TOOL,
	},
	{
		name: 'Jest',
		image: jest,
		category: ETechCategory.TESTING,
	},
	{
		name: 'Vitest',
		image: vitest,
		category: ETechCategory.TESTING,
	},
]
