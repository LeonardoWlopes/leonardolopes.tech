import type { ITechCardProps } from '@/components/tech-card'
import type { ETechCategory } from '@/enums/tech'

export interface ITechCardList extends ITechCardProps {
	category: ETechCategory
}
