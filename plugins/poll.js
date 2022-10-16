const { Function, poll } = require('../lib/')
Function({
	pattern: 'poll ?(.*)',
	fromMe: true,
	desc: 'send poll message',
	type: 'whatsapp'
}, async (message, match) => {
if (!match) return await message.send('_Need options!_\n*Example: poll head,khadher1,khadher2,khadher3....*')
await poll(message, match)
})
