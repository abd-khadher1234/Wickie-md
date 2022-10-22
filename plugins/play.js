const { Function, h2k, prefix, isPublic, runtime } = require('../lib')
const yts = require("yt-search")
Function({pattern: 'play ?(.*)', fromMe: isPublic, desc: 'Music search', type: 'search'}, async (message, match) => {
if (!match) return await message.reply('*Give me a song name*')
const videos = await yts(match)
const text = `
╭──────━•
│👀 Title: ${videos.all[0].title}
│👅 Views : ${h2k(videos.all[0].views)}
│📛 Duration : ${runtime(videos.all[0].duration.seconds)}
│📅 Published : ${videos.all[0].ago}
│🧿 Channel : ${videos.all[0].author.name}
┗──────━•\n\n`
let buttons = [
  {buttonId: `${prefix}yta ${videos.all[0].url}`, buttonText: {displayText: '🎧 ᴀᴜᴅɪᴏ 🎧'}, type: 1},
  {buttonId: `${prefix}ytv ${videos.all[0].url}`, buttonText: {displayText: '📽 ᴠɪᴅᴇᴏ 📽'}, type: 1},
]
const buttonMessage = {
image: {url: `${videos.all[0].image}` },
caption: text,
footer: `\n©𝞓𝞑𝘿_𝞙𝞖𝞓𝘿𝞖𝞢𝞒 \n`,
buttons: buttons,
headerType: 1
}
await message.client.sendMessage(m.chat, buttonMessage)
})
