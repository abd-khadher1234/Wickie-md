const {Function,isPublic,getUrl} = require("../lib/");
Function({pattern: 'ss ?(.*)', fromMe: isPublic, desc: 'Take website screenshot', type: 'download'}, async (message, match) => {
match = getUrl(match || message.reply_message.text)
if (!match) return await message.send('_Need a Url_\n*Example : ss instagram.com/abd_khadher___*')
await message.client.sendFromUrl(message.jid, `https://shot.screenshotapi.net/screenshot?&url=${match}&fresh=true&output=image&file_type=png&block_ads=true&no_cookie_banners=true&destroy_screenshot=true&dark_mode=true&wait_for_event=networkidle`)
})
Function({pattern: 'fullss ?(.*)', fromMe: isPublic, desc: 'Take website Full screenshot', type: 'download'}, async (message, match) => {
match = getUrl(match || message.reply_message.text)
if (!match) return await message.send('_Need a Url_\n*Example : fullss instagram.com/abd_khadher___*')
await message.client.sendFromUrl(message.jid, `https://shot.screenshotapi.net/screenshot?&url=${match}&full_page=true&output=image&file_type=png&block_ads=true&no_cookie_banners=true&destroy_screenshot=true&dark_mode=true&wait_for_event=networkidle`)
})
