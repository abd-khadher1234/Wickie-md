const {Function,isPublic,Menu,RandomFancy,prefix} = require('../lib/');
const {BOT_INFO} = require('../config')

Function({pattern: 'owner ?(.*)', fromMe: isPublic, dontAddCommandList: false, type: 'info'}, async (m, text, client) => {
const message= await RandomFancy(await Menu(m))
await client.sendMessage(m.chat, {
templateButtons: [{urlButton: {displayText: 'Whatsapp group', url: 'https://chat.whatsapp.com/J2s0xRg4kZJ3ep0AncmbTJ'}},{urlButton: {displayText: 'Contact Owner', url: `https://wa.me/${BOT_INFO.split(";")[2]}`}},{quickReplyButton: {displayText: 'Menu', id: prefix + 'menu'}}]
})
});
