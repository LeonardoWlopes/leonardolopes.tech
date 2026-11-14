import { Atom, Briefcase, Home, Mail, UserRound } from 'lucide-react'

/** `shortLabel` is what the mobile dock shows, where five full labels do not fit */
export const NAV_LINKS = [
	{ label: 'Home', shortLabel: 'Home', href: '/', Icon: Home },
	{ label: 'About', shortLabel: 'About', href: '/about', Icon: UserRound },
	{
		label: 'Experience',
		shortLabel: 'Work',
		href: '/experiences',
		Icon: Briefcase,
	},
	{
		label: 'Technologies',
		shortLabel: 'Stack',
		href: '/technologies',
		Icon: Atom,
	},
	{ label: 'Contact', shortLabel: 'Contact', href: '/contact', Icon: Mail },
]

export function isActiveRoute(pathname: string, href: string) {
	if (href === '/') return pathname === '/'
	return pathname === href || pathname.startsWith(`${href}/`)
}
