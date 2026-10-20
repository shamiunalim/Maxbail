import type { AnyMessageContent, MiscMessageGenerationOptions, WAMessage } from '../Types'

/**
 * Send a post/update to a WhatsApp Channel (Newsletter).
 *
 * This helper intentionally delegates to the socket's existing sendMessage
 * pipeline, preserving the fork's current media upload and newsletter encoder.
 * It does not bypass WhatsApp's server-side permissions or protocol support.
 */
export const sendNewsletterStatus = async (
	socket: {
		sendMessage: (
			jid: string,
			content: AnyMessageContent,
			options?: MiscMessageGenerationOptions
		) => Promise<WAMessage | undefined>
	},
	newsletterJid: string,
	content: AnyMessageContent,
	options: MiscMessageGenerationOptions = {}
): Promise<WAMessage | undefined> => {
	if (typeof newsletterJid !== 'string' || !/^\d+@newsletter$/.test(newsletterJid)) {
		throw new TypeError('SWCH: newsletterJid must be a valid WhatsApp Channel JID ending in @newsletter')
	}

	if (!content || typeof content !== 'object') {
		throw new TypeError('SWCH: content must be a valid Baileys message content object')
	}

	return socket.sendMessage(newsletterJid, content, options)
}
