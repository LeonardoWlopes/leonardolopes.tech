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
import apachekafka from '@/assets/icons/apachekafka.svg'
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
import opentelemetry from '@/assets/icons/opentelemetry.svg'
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
import hookForm from '@/assets/images/hook-form.png'
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
		name: 'Languages',
		category: ETechCategory.LANGUAGE,
	},
	{
		name: 'Runtimes',
		category: ETechCategory.RUNTIME,
	},
	{
		name: 'Build, package managers, and bundlers',
		category: ETechCategory.BUILD,
	},
	{
		name: 'Frameworks',
		category: ETechCategory.FRAMEWORK,
	},
	{
		name: 'Libraries and UI',
		category: ETechCategory.LIBRARY,
	},
	{
		name: 'Databases and ORMs',
		category: ETechCategory.DATABASE,
	},
	{
		name: 'Testing',
		category: ETechCategory.TESTING,
	},
	{
		name: 'Tooling and DX',
		category: ETechCategory.TOOL,
	},
	{
		name: 'Cloud, platform, and streaming',
		category: ETechCategory.CLOUD,
	},
	{
		name: 'Operating systems and devices',
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
		name: 'Go',
		image: go,
		link: 'https://go.dev/',
		category: ETechCategory.LANGUAGE,
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
		link: 'https://www.digitalocean.com/',
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
		category: ETechCategory.BUILD,
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
		name: 'OpenTelemetry',
		image: opentelemetry,
		link: 'https://opentelemetry.io/',
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
		name: 'Gin',
		image: go,
		link: 'https://gin-gonic.com/',
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
		name: 'GORM',
		image: go,
		link: 'https://gorm.io/',
		category: ETechCategory.DATABASE,
	},
	{
		name: 'MongoDB',
		image: mongo,
		link: 'https://www.mongodb.com/',
		category: ETechCategory.DATABASE,
	},
	{
		name: 'PostgreSQL',
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
		name: 'Apache Kafka',
		image: apachekafka,
		link: 'https://kafka.apache.org/',
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
		category: ETechCategory.BUILD,
	},
	{
		name: 'PNPM',
		image: pnpm,
		link: 'https://pnpm.io/',
		category: ETechCategory.BUILD,
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
		category: ETechCategory.BUILD,
	},
	{
		name: 'Turborepo',
		image: turborepo,
		link: 'https://turbo.build/repo',
		category: ETechCategory.BUILD,
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
		category: ETechCategory.BUILD,
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
				title: 'Tech Lead @Linda Lifetech',
				startDate: parseISO('2025-07-01'),
				endDate: null,
				description:
					'Healthtech product for early breast-cancer detection using AI, mobile diagnostics, and secure clinical workflows. Led modernization of a live system for thousands of users: zero-downtime migration from a monolith to Go and Node.js/TypeScript microservices, micro frontends, and React Native. Cut cloud cost by about 59% while improving performance and reliability. Introduced OpenTelemetry for tracing, metrics, and security visibility; defined infrastructure as code with Terraform. Built React Native native bridges in Kotlin to integrate external diagnostic hardware.',
			},
			{
				title: 'Software Engineer @Lactalis Group',
				startDate: parseISO('2024-11-01'),
				endDate: parseISO('2025-08-01'),
				description:
					'National pricing platform for the world’s largest dairy company (85+ countries, USD 17B+ turnover), supporting the pricing team across all 27 Brazilian states with regional tax and commercial rules for accurate, auditable national pricing. Node.js, TypeScript, and full-stack collaboration in a large enterprise, domain-driven context.',
			},
			{
				title: 'Software Engineer @Grupo Petrópolis',
				startDate: parseISO('2023-05-01'),
				endDate: parseISO('2024-11-01'),
				description:
					'One of Brazil’s largest beverage companies ($4B+ annual revenue, 700k+ customers), where a mobile app drives about 97% of revenue. Built an internal web platform for managers and supervisors to streamline operations. Cut main app load time by about 50% and reduced resource use by about half on critical paths; improved latency, stability, and mobile UX for high-volume B2B field sales. Stack: React, React Native, and Node.js.',
			},
			{
				title: 'Software Engineer @MSD',
				startDate: parseISO('2022-05-01'),
				endDate: parseISO('2023-05-01'),
				description:
					'Web and mobile clients for a custom internal gamification platform at a global pharmaceutical company (130+ years, 140+ countries). Delivered the project in about half the estimated time with near-zero production defects. Integrated statistical insights for data-driven decisions and supported internal engagement aligned with company strategy.',
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
				title: 'Software Engineer @Poliedro Educacao',
				startDate: parseISO('2021-08-01'),
				endDate: parseISO('2022-04-30'),
				description:
					'Content distribution platform for Poliedro Sistema de Ensino, a leading Brazilian edtech provider. Designed and built a Go microservice for MP4 ingest, HLS chunking, and adaptive streaming, using Go’s concurrency model for high-throughput parallel encoding. The pipeline served peak load from 580+ teaching units and reduced end-user streaming latency for students and educators nationwide.',
			},
		],
	},
	{
		company: {
			name: 'Freelance',
			icon: expo,
		},
		roles: [
			{
				title: 'Mobile Engineer',
				startDate: parseISO('2020-06-01'),
				endDate: parseISO('2021-07-31'),
				description:
					'Multiple client projects across industries, owning requirements through delivery: new features, performance tuning, and production fixes in React Native. Strengthened state management and UI performance, reduced crash rate, and improved responsiveness on client apps. Foundation in mobile architecture and client communication that supported the move into larger product teams.',
			},
		],
	},
]
