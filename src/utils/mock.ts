import { parseISO } from 'date-fns'
import { CalendarDays, Mail, MessageCircle } from 'lucide-react'
import android from '~/assets/icons/android.svg'
import apachekafka from '~/assets/icons/apachekafka.svg'
import apple from '~/assets/icons/apple.svg'
import aws from '~/assets/icons/aws.svg'
import azure from '~/assets/icons/azure.svg'
import bash from '~/assets/icons/bash.svg'
import biome from '~/assets/icons/biome.svg'
import bun from '~/assets/icons/bun.svg'
import chatgpt from '~/assets/icons/chatgpt.svg'
import claude from '~/assets/icons/claude.svg'
import cloudflare from '~/assets/icons/cloudflare.svg'
import cloudwatch from '~/assets/icons/cloudwatch.svg'
import copilot from '~/assets/icons/copilot.svg'
import cursor from '~/assets/icons/cursor.svg'
import cypress from '~/assets/icons/cypress.svg'
import datadog from '~/assets/icons/datadog.svg'
import deno from '~/assets/icons/deno.svg'
import digitalOcean from '~/assets/icons/digital-ocean.svg'
import docker from '~/assets/icons/docker.svg'
import docusaurus from '~/assets/icons/docusaurus.svg'
import drizzle from '~/assets/icons/drizzle.svg'
import electron from '~/assets/icons/electron.svg'
import elysiajs from '~/assets/icons/elysiajs.svg'
import eslint from '~/assets/icons/eslint.svg'
import expo from '~/assets/icons/expo.svg'
import express from '~/assets/icons/express.svg'
import fastify from '~/assets/icons/fastify.svg'
import figma from '~/assets/icons/figma.svg'
import firebase from '~/assets/icons/firebase.svg'
import git from '~/assets/icons/git.svg'
import github from '~/assets/icons/github.svg'
import githubActions from '~/assets/icons/github-actions.svg'
import go from '~/assets/icons/go.svg'
import googleCloud from '~/assets/icons/google-cloud.svg'
import grafana from '~/assets/icons/grafana.svg'
import graphql from '~/assets/icons/graphql.svg'
import grok from '~/assets/icons/grok.svg'
import javascript from '~/assets/icons/javascript.svg'
import jest from '~/assets/icons/jest.svg'
import jwt from '~/assets/icons/jwt.svg'
import kotlin from '~/assets/icons/kotlin.svg'
import kubernetes from '~/assets/icons/kubernetes.svg'
import linux from '~/assets/icons/linux.svg'
import loki from '~/assets/icons/loki.svg'
import mariadb from '~/assets/icons/mariadb.svg'
import mongo from '~/assets/icons/mongo.svg'
import mysql from '~/assets/icons/mysql.svg'
import nest from '~/assets/icons/nest.svg'
import next from '~/assets/icons/next.svg'
import ngrok from '~/assets/icons/ngrok.svg'
import node from '~/assets/icons/node.svg'
import notion from '~/assets/icons/notion.svg'
import npm from '~/assets/icons/npm.svg'
import opentelemetry from '~/assets/icons/opentelemetry.svg'
import pnpm from '~/assets/icons/pnpm.svg'
import postgres from '~/assets/icons/postgres.svg'
import prettier from '~/assets/icons/prettier.svg'
import prisma from '~/assets/icons/prisma.svg'
import prometheus from '~/assets/icons/prometheus.svg'
import pulumi from '~/assets/icons/pulumi.svg'
import python from '~/assets/icons/python.svg'
import raycast from '~/assets/icons/raycast.svg'
import react from '~/assets/icons/react.svg'
import reactQuery from '~/assets/icons/react-query.svg'
import redis from '~/assets/icons/redis.svg'
import rust from '~/assets/icons/rust.svg'
import sequelize from '~/assets/icons/sequelize.svg'
import shadcn from '~/assets/icons/shadcn.svg'
import socketio from '~/assets/icons/socketio.svg'
import sql from '~/assets/icons/sql.svg'
import sqlite from '~/assets/icons/sqlite.svg'
import sst from '~/assets/icons/sst.svg'
import storybook from '~/assets/icons/storybook.svg'
import styled from '~/assets/icons/styled-components.svg'
import supabase from '~/assets/icons/supabase.svg'
import swagger from '~/assets/icons/swagger.svg'
import tailwind from '~/assets/icons/tailwind.svg'
import tauri from '~/assets/icons/tauri.svg'
import tempo from '~/assets/icons/tempo.svg'
import terraform from '~/assets/icons/terraform.svg'
import threejs from '~/assets/icons/threejs.svg'
import turbopack from '~/assets/icons/turbopack.svg'
import turborepo from '~/assets/icons/turborepo.svg'
import twilio from '~/assets/icons/twilio.svg'
import typescript from '~/assets/icons/typescript.svg'
import v0 from '~/assets/icons/v0.svg'
import vercel from '~/assets/icons/vercel.svg'
import vite from '~/assets/icons/vite.svg'
import vitest from '~/assets/icons/vitest.svg'
import vscode from '~/assets/icons/vscode.svg'
import windows from '~/assets/icons/windows.svg'
import yarn from '~/assets/icons/yarn.svg'
import zod from '~/assets/icons/zod.svg'
import build from '~/assets/images/buildbox.jpeg'
import hookForm from '~/assets/images/hook-form.png'
import nkey from '~/assets/images/nkey.jpeg'
import zustand from '~/assets/images/zustand.png'
import {
	GithubIcon,
	InstagramIcon,
	LinkedinIcon,
} from '~/components/brand-icons'
import { ETechCategory } from '~/enums/tech'
import type { IContactLink } from '~/interfaces/contact'
import type { IExperience } from '~/interfaces/experience'
import type { IOutcome, IStackGroup } from '~/interfaces/outcome'
import type { ITech } from '~/interfaces/tech'
import { env } from '~/utils/env'
import { CONSTANTS } from './constants'
import { toSlug } from './slug'

export const TECH_CATEGORIES = [
	{
		name: 'Languages and runtimes',
		category: ETechCategory.LANGUAGE,
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
		name: 'Observability',
		category: ETechCategory.OBSERVABILITY,
	},
	{
		name: 'Operating systems and devices',
		category: ETechCategory.OS,
	},
] as const

export const TECH_CARDS: ITech[] = [
	{
		name: 'JavaScript',
		image: javascript,
		link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
		category: ETechCategory.LANGUAGE,
	},
	{
		name: 'TypeScript',
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
		name: 'Kotlin',
		image: kotlin,
		link: 'https://kotlinlang.org/',
		category: ETechCategory.LANGUAGE,
	},
	{
		name: 'SQL',
		image: sql,
		link: 'https://en.wikipedia.org/wiki/SQL',
		category: ETechCategory.LANGUAGE,
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
		category: ETechCategory.LANGUAGE,
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
		name: 'Google Cloud',
		image: googleCloud,
		link: 'https://cloud.google.com/',
		category: ETechCategory.CLOUD,
	},
	{
		name: 'Azure',
		image: azure,
		link: 'https://azure.microsoft.com/',
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
		name: 'DigitalOcean',
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
		name: 'Next.js',
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
		name: 'styled-components',
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
		category: ETechCategory.FRAMEWORK,
	},
	{
		name: 'OpenTelemetry',
		image: opentelemetry,
		link: 'https://opentelemetry.io/',
		category: ETechCategory.OBSERVABILITY,
	},
	{
		name: 'Grafana',
		image: grafana,
		link: 'https://grafana.com/',
		category: ETechCategory.OBSERVABILITY,
	},
	{
		name: 'Loki',
		image: loki,
		link: 'https://grafana.com/oss/loki/',
		category: ETechCategory.OBSERVABILITY,
	},
	{
		name: 'Tempo',
		image: tempo,
		link: 'https://grafana.com/oss/tempo/',
		category: ETechCategory.OBSERVABILITY,
	},
	{
		name: 'Prometheus',
		image: prometheus,
		link: 'https://prometheus.io/',
		category: ETechCategory.OBSERVABILITY,
	},
	{
		name: 'Datadog',
		image: datadog,
		link: 'https://www.datadoghq.com/',
		category: ETechCategory.OBSERVABILITY,
	},
	{
		name: 'CloudWatch',
		image: cloudwatch,
		link: 'https://aws.amazon.com/cloudwatch/',
		category: ETechCategory.OBSERVABILITY,
	},
	{
		name: 'Docusaurus',
		image: docusaurus,
		link: 'https://docusaurus.io/',
		category: ETechCategory.FRAMEWORK,
	},
	{
		name: 'React Hook Form',
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
		name: 'Node.js',
		image: node,
		link: 'https://nodejs.org/',
		category: ETechCategory.LANGUAGE,
	},
	{
		name: 'Bun',
		image: bun,
		link: 'https://bun.sh/',
		category: ETechCategory.LANGUAGE,
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
		name: 'NestJS',
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
		name: 'iOS',
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
		name: 'npm',
		image: npm,
		link: 'https://www.npmjs.com/',
		category: ETechCategory.BUILD,
	},
	{
		name: 'pnpm',
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
		name: 'Linux',
		image: linux,
		link: 'https://www.kernel.org/',
		category: ETechCategory.OS,
	},
	{
		name: 'macOS',
		image: apple,
		link: 'https://www.apple.com/macos/',
		category: ETechCategory.OS,
	},
	{
		name: 'v0',
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
		name: 'shadcn/ui',
		image: shadcn,
		link: 'https://ui.shadcn.com/',
		category: ETechCategory.LIBRARY,
	},
]

export const CONTACT_LINKS: IContactLink[] = [
	{
		href: `mailto:${CONSTANTS.CONTACT_EMAIL}`,
		Icon: Mail,
		label: 'Email',
	},
	{
		href: env.SCHEDULE_LINK,
		Icon: CalendarDays,
		label: 'Schedule a call',
	},
	{
		href: `https://wa.me/${env.NEXT_PUBLIC_CONTACT_NUMBER}`,
		Icon: MessageCircle,
		label: 'WhatsApp',
	},
	{
		href: CONSTANTS.LINKEDIN_URL,
		Icon: LinkedinIcon,
		label: 'LinkedIn',
	},
	{
		href: CONSTANTS.GITHUB_URL,
		Icon: GithubIcon,
		label: 'GitHub',
	},
	{
		href: CONSTANTS.INSTAGRAM_URL,
		Icon: InstagramIcon,
		label: 'Instagram',
	},
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
					'Led the full modernization of a live healthtech platform for early breast-cancer detection, used by thousands, with zero downtime: from a monolith to Node.js/TypeScript microservices, micro frontends and React Native. Migrated the whole cloud infrastructure from AWS to GCP, cutting the monthly bill by about 38% while raising per-cluster service performance. Built and launched a clinical-trial version of the product for clinical studies in Canada. Defined the infrastructure as code with Terraform and built Kotlin native bridges so the React Native app talks to external diagnostic hardware.',
			},
			{
				title: 'Software Engineer @Lactalis Group',
				startDate: parseISO('2024-11-01'),
				endDate: parseISO('2025-08-01'),
				description:
					'Built the national pricing platform for Lactalis, the world’s largest dairy group and Brazil’s #1 dairy company (23 factories, 16 brands such as Parmalat, Président and Itambé), used by the pricing team across all 27 Brazilian states. It applies each state’s tax and commercial rules so national pricing stays accurate and auditable. Built with Node.js and TypeScript in a large, domain-driven codebase.',
			},
			{
				title: 'Software Engineer @Grupo Petrópolis',
				startDate: parseISO('2023-05-01'),
				endDate: parseISO('2024-11-01'),
				description:
					'Cut the worst-case load time of the main app at Grupo Petrópolis from 8 minutes to 1 min 37 s (about 80%). It is the field-sales app behind about 97% of the revenue of Brazil’s largest Brazilian-owned brewer, around USD 4B a year. Also halved resource use on critical paths, improved latency, stability and mobile UX for high-volume B2B sales, and built an internal web platform for managers and supervisors. Built with React, React Native and Node.js.',
			},
			{
				title: 'Software Engineer @MSD',
				startDate: parseISO('2022-05-01'),
				endDate: parseISO('2023-05-01'),
				description:
					'Built the web and mobile clients of a custom internal gamification platform for MSD Brazil, part of Merck & Co., the 130-year-old pharmaceutical company with USD 65B in yearly sales. Delivered it in about half the estimated time with near-zero production defects, and added statistical insights so the company could track engagement against its strategy.',
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
				title: 'Software Engineer @Poliedro Educação',
				startDate: parseISO('2021-08-01'),
				endDate: parseISO('2022-04-30'),
				description:
					'Designed and built the Go microservice behind the content distribution platform of Poliedro Sistema de Ensino, a leading Brazilian edtech provider: MP4 ingest, HLS chunking and adaptive streaming, using Go’s concurrency model for parallel encoding. The pipeline handled peak load from 580+ teaching units and cut streaming latency for students and educators nationwide.',
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
					'React Native apps for clients across industries, from requirements to delivery: new features, performance tuning and production fixes. Improved state management and UI performance, reduced crash rates and made client apps more responsive. This is where I learned mobile architecture and how to work directly with clients.',
			},
		],
	},
]

/** Home hero copy, from the owner's confirmed facts and EXPERIENCES */
export const HOME_HERO = {
	role: 'Tech Lead · Software Engineer & Architect',
	current:
		'Tech Lead at Buildbox, leading the Linda Lifetech platform modernization',
	availability:
		'Open to full-time, contract and freelance · Remote from Brazil (UTC−3) or relocation',
	slabCaption:
		'Monthly cloud bill of the Linda Lifetech platform, from about USD 2,100 to about USD 1,300, after a zero-downtime move from AWS to GCP.',
}

const roleAnchor = (title: string) => `/experiences#${toSlug(title)}`

export const OUTCOMES: IOutcome[] = [
	{
		metric: '−38%',
		unit: 'cloud cost',
		summary:
			'Led a zero-downtime modernization of a live healthtech platform and moved its cloud from AWS to GCP.',
		role: 'Tech Lead',
		client: 'Linda Lifetech',
		employer: 'Buildbox',
		period: '2025 – Present',
		href: roleAnchor('Tech Lead @Linda Lifetech'),
		stack: [
			'Node.js',
			'TypeScript',
			'React Native',
			'Kotlin',
			'Google Cloud',
			'Terraform',
		],
		isCurrent: true,
		ratio: 0.62,
	},
	{
		metric: '−80%',
		unit: 'worst-case app load time',
		summary:
			'Took the worst-case load of the field-sales app behind about 97% of Grupo Petrópolis’ USD 4B yearly revenue from 8 minutes to 1 min 37 s.',
		role: 'Software Engineer',
		client: 'Grupo Petrópolis',
		employer: 'Buildbox',
		period: '2023 – 2024',
		href: roleAnchor('Software Engineer @Grupo Petrópolis'),
		stack: ['React', 'React Native', 'Node.js'],
		ratio: 0.5,
	},
	{
		metric: '27',
		unit: 'Brazilian states, one pricing platform',
		summary:
			'National pricing platform with regional tax rules for Lactalis, the largest dairy group in the world.',
		role: 'Software Engineer',
		client: 'Lactalis Group',
		employer: 'Buildbox',
		period: '2024 – 2025',
		href: roleAnchor('Software Engineer @Lactalis Group'),
		stack: ['Node.js', 'TypeScript'],
	},
	{
		metric: '½',
		unit: 'the estimated delivery time',
		summary:
			'Shipped the internal web and mobile gamification platform for MSD Brazil with near-zero production defects.',
		role: 'Software Engineer',
		client: 'MSD',
		employer: 'Buildbox',
		period: '2022 – 2023',
		href: roleAnchor('Software Engineer @MSD'),
		ratio: 0.5,
	},
	{
		metric: '580+',
		unit: 'teaching units served',
		summary:
			'Go service that turns MP4 uploads into adaptive HLS streams for Poliedro, built for peak load.',
		role: 'Software Engineer',
		client: 'Poliedro',
		employer: 'Nkey',
		period: '2021 – 2022',
		href: roleAnchor('Software Engineer @Poliedro Educação'),
		stack: ['Go', 'HLS'],
	},
]

export const STACK_GROUPS: IStackGroup[] = [
	{
		title: 'Interfaces',
		techs: [
			'React',
			'Next.js',
			'React Native',
			'Expo',
			'Tailwind CSS',
			'Storybook',
		],
	},
	{
		title: 'Services',
		techs: ['TypeScript', 'Node.js', 'Go', 'NestJS', 'GraphQL', 'Fastify'],
	},
	{
		title: 'Data and messaging',
		techs: [
			'PostgreSQL',
			'MongoDB',
			'Redis',
			'Apache Kafka',
			'Prisma',
			'MySQL',
		],
	},
	{
		title: 'Cloud and infrastructure',
		techs: [
			'AWS',
			'Google Cloud',
			'Azure',
			'Terraform',
			'Kubernetes',
			'OpenTelemetry',
		],
	},
]
