import { parseISO } from 'date-fns'
import {
	Atom,
	Briefcase,
	CalendarDays,
	Github,
	Home,
	Instagram,
	Linkedin,
	Mail,
	MessageCircle,
	UserRound,
} from 'lucide-react'
import android from '@/assets/icons/android.svg'
import apple from '@/assets/icons/apple.svg'
import aws from '@/assets/icons/aws.svg'
import bash from '@/assets/icons/bash.svg'
import biome from '@/assets/icons/biome.svg'
import bun from '@/assets/icons/bun.svg'
import chatgpt from '@/assets/icons/chatgpt.svg'
import claude from '@/assets/icons/claude.svg'
import cloudflare from '@/assets/icons/cloudflare.svg'
import copilot from '@/assets/icons/copilot.svg'
import cursor from '@/assets/icons/cursor.svg'
import cypress from '@/assets/icons/cypress.svg'
import deno from '@/assets/icons/deno.svg'
import digitalOcean from '@/assets/icons/digital-ocean.svg'
import docker from '@/assets/icons/docker.svg'
import drizzle from '@/assets/icons/drizzle.svg'
import electron from '@/assets/icons/electron.svg'
import elysiajs from '@/assets/icons/elysiajs.svg'
import eslint from '@/assets/icons/eslint.svg'
import expo from '@/assets/icons/expo.svg'
import express from '@/assets/icons/express.svg'
import fastify from '@/assets/icons/fastify.svg'
import figma from '@/assets/icons/figma.svg'
import firebase from '@/assets/icons/firebase.svg'
import git from '@/assets/icons/git.svg'
import github from '@/assets/icons/github.svg'
import githubActions from '@/assets/icons/github-actions.svg'
import go from '@/assets/icons/go.svg'
import graphql from '@/assets/icons/graphql.svg'
import grok from '@/assets/icons/grok.svg'
import javascript from '@/assets/icons/javascript.svg'
import jest from '@/assets/icons/jest.svg'
import jwt from '@/assets/icons/jwt.svg'
import kubernetes from '@/assets/icons/kubernetes.svg'
import mariadb from '@/assets/icons/mariadb.svg'
import mongo from '@/assets/icons/mongo.svg'
import mysql from '@/assets/icons/mysql.svg'
import nest from '@/assets/icons/nest.svg'
import next from '@/assets/icons/next.svg'
import ngrok from '@/assets/icons/ngrok.svg'
import node from '@/assets/icons/node.svg'
import notion from '@/assets/icons/notion.svg'
import npm from '@/assets/icons/npm.svg'
import pnpm from '@/assets/icons/pnpm.svg'
import postgres from '@/assets/icons/postgres.svg'
import prettier from '@/assets/icons/prettier.svg'
import prisma from '@/assets/icons/prisma.svg'
import pulumi from '@/assets/icons/pulumi.svg'
import python from '@/assets/icons/python.svg'
import raycast from '@/assets/icons/raycast.svg'
import react from '@/assets/icons/react.svg'
import reactQuery from '@/assets/icons/react-query.svg'
import redis from '@/assets/icons/redis.svg'
import rust from '@/assets/icons/rust.svg'
import sequelize from '@/assets/icons/sequelize.svg'
import shadcn from '@/assets/icons/shadcn.svg'
import socketio from '@/assets/icons/socketio.svg'
import sqlite from '@/assets/icons/sqlite.svg'
import sst from '@/assets/icons/sst.svg'
import storybook from '@/assets/icons/storybook.svg'
import styled from '@/assets/icons/styled-components.svg'
import supabase from '@/assets/icons/supabase.svg'
import swagger from '@/assets/icons/swagger.svg'
import tailwind from '@/assets/icons/tailwind.svg'
import tauri from '@/assets/icons/tauri.svg'
import terraform from '@/assets/icons/terraform.svg'
import threejs from '@/assets/icons/threejs.svg'
import turbopack from '@/assets/icons/turbopack.svg'
import turborepo from '@/assets/icons/turborepo.svg'
import twilio from '@/assets/icons/twilio.svg'
import typescript from '@/assets/icons/typescript.svg'
import ubuntu from '@/assets/icons/ubuntu.svg'
import v0 from '@/assets/icons/v0.svg'
import vercel from '@/assets/icons/vercel.svg'
import vite from '@/assets/icons/vite.svg'
import vitest from '@/assets/icons/vitest.svg'
import vscode from '@/assets/icons/vscode.svg'
import windows from '@/assets/icons/windows.svg'
import yarn from '@/assets/icons/yarn.svg'
import zod from '@/assets/icons/zod.svg'
import build from '@/assets/images/buildbox.jpeg'
import genezys from '@/assets/images/genezys.jpeg'
import hookForm from '@/assets/images/hook-form.png'
import modu from '@/assets/images/modu.jpeg'
import nkey from '@/assets/images/nkey.jpeg'
import zustand from '@/assets/images/zustand.png'
import { ETechCategory } from '@/enums/tech'
import type { IContactLink } from '@/interfaces/contact'
import type { IExperience } from '@/interfaces/experience'
import type { ITechCardList } from '@/interfaces/tech'
import { env } from '@/utils/env'
// utils
import { CONSTANTS } from './constants'

export const TECH_CATEGORIES = [
	{
		name: 'languages',
		category: ETechCategory.LANGUAGE,
	},
	{
		name: 'runtimes / bundlers / package managers',
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
	{
		name: 'OS',
		category: ETechCategory.OS,
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
		category: ETechCategory.RUNTIME,
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
		category: ETechCategory.RUNTIME,
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
	{
		name: 'Android',
		image: android,
		link: 'https://developer.android.com/',
		category: ETechCategory.OS,
	},
	{
		name: 'IOS',
		image: apple,
		link: 'https://developer.apple.com/',
		category: ETechCategory.OS,
	},
	{
		name: 'Bash',
		image: bash,
		link: 'https://www.gnu.org/software/bash/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'ChatGPT',
		image: chatgpt,
		link: 'https://chat.openai.com/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'Claude',
		image: claude,
		link: 'https://claude.ai/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'Copilot',
		image: copilot,
		link: 'https://github.com/features/copilot',
		category: ETechCategory.TOOL,
	},
	{
		name: 'Cursor',
		image: cursor,
		link: 'https://cursor.sh/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'ElysiaJS',
		image: elysiajs,
		link: 'https://elysiajs.com/',
		category: ETechCategory.FRAMEWORK,
	},
	{
		name: 'Figma',
		image: figma,
		link: 'https://www.figma.com/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'Firebase',
		image: firebase,
		link: 'https://firebase.google.com/',
		category: ETechCategory.CLOUD,
	},
	{
		name: 'Git',
		image: git,
		link: 'https://git-scm.com/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'GraphQL',
		image: graphql,
		link: 'https://graphql.org/',
		category: ETechCategory.LIBRARY,
	},
	{
		name: 'Grok',
		image: grok,
		link: 'https://grok.x.ai/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'JWT',
		image: jwt,
		link: 'https://jwt.io/',
		category: ETechCategory.LIBRARY,
	},
	{
		name: 'Kubernetes',
		image: kubernetes,
		link: 'https://kubernetes.io/',
		category: ETechCategory.CLOUD,
	},
	{
		name: 'MariaDB',
		image: mariadb,
		link: 'https://mariadb.org/',
		category: ETechCategory.DATABASE,
	},
	{
		name: 'Ngrok',
		image: ngrok,
		link: 'https://ngrok.com/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'Notion',
		image: notion,
		link: 'https://www.notion.so/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'NPM',
		image: npm,
		link: 'https://www.npmjs.com/',
		category: ETechCategory.RUNTIME,
	},
	{
		name: 'PNPM',
		image: pnpm,
		link: 'https://pnpm.io/',
		category: ETechCategory.RUNTIME,
	},
	{
		name: 'Pulumi',
		image: pulumi,
		link: 'https://www.pulumi.com/',
		category: ETechCategory.CLOUD,
	},
	{
		name: 'Raycast',
		image: raycast,
		link: 'https://www.raycast.com/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'Sequelize',
		image: sequelize,
		link: 'https://sequelize.org/',
		category: ETechCategory.DATABASE,
	},
	{
		name: 'Socket.IO',
		image: socketio,
		link: 'https://socket.io/',
		category: ETechCategory.LIBRARY,
	},
	{
		name: 'SST',
		image: sst,
		link: 'https://sst.dev/',
		category: ETechCategory.CLOUD,
	},
	{
		name: 'Storybook',
		image: storybook,
		link: 'https://storybook.js.org/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'Swagger',
		image: swagger,
		link: 'https://swagger.io/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'Three.js',
		image: threejs,
		link: 'https://threejs.org/',
		category: ETechCategory.LIBRARY,
		nonProfessional: true,
	},
	{
		name: 'Turbopack',
		image: turbopack,
		link: 'https://turbo.build/pack',
		category: ETechCategory.TOOL,
	},
	{
		name: 'Turborepo',
		image: turborepo,
		link: 'https://turbo.build/repo',
		category: ETechCategory.TOOL,
	},
	{
		name: 'Twilio',
		image: twilio,
		link: 'https://www.twilio.com/',
		category: ETechCategory.CLOUD,
	},
	{
		name: 'Ubuntu',
		image: ubuntu,
		link: 'https://ubuntu.com/',
		category: ETechCategory.OS,
	},
	{
		name: 'V0',
		image: v0,
		link: 'https://v0.dev/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'VS Code',
		image: vscode,
		link: 'https://code.visualstudio.com/',
		category: ETechCategory.TOOL,
	},
	{
		name: 'Windows',
		image: windows,
		link: 'https://www.microsoft.com/windows',
		category: ETechCategory.OS,
	},
	{
		name: 'Yarn',
		image: yarn,
		link: 'https://yarnpkg.com/',
		category: ETechCategory.RUNTIME,
	},
	{
		name: 'Shadcn',
		image: shadcn,
		link: 'https://ui.shadcn.com/',
		category: ETechCategory.LIBRARY,
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
	{
		href: env.SCHEDULE_LINK,
		Icon: CalendarDays,
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
