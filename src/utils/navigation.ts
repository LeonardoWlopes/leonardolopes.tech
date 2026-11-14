import { Atom, Briefcase, Home, Mail, UserRound } from 'lucide-react'

export const NAV_LINKS = [
	{ label: 'Home', href: '/', Icon: Home },
	{ label: 'About', href: '/about', Icon: UserRound },
	{ label: 'Experiences', href: '/experiences', Icon: Briefcase },
	{ label: 'Technologies', href: '/technologies', Icon: Atom },
	{ label: 'Contact', href: '/contact', Icon: Mail },
]

export function isActiveRoute(pathname: string, href: string) {
	if (href === '/') return pathname === '/'
	return pathname === href || pathname.startsWith(`${href}/`)
}
