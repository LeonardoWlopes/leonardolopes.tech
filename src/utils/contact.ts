export interface IContactMessage {
	name: string
	subject: string
	content: string
}

export function buildContactText({ name, subject, content }: IContactMessage) {
	return `Hello, my name is ${name.trim()} and I would like to talk about ${subject.trim()}.\n\n${content.trim()}`
}

export function buildWhatsAppUrl(phone: string, message: IContactMessage) {
	return `https://wa.me/${phone}?text=${encodeURIComponent(buildContactText(message))}`
}
