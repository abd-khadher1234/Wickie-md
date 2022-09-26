//photo editor by khadher
const { Function, Imgur, deleteFromImgur, isPublic} = require ('../lib/')

Function (
	{
		pattern: 'piceditor ?(.*)',
		fromMe: isPublic,
		desc: 'photo editer menu',
		type: 'misc',
	},async (message, match) => { 
let msg = '```'
await message.send(msg +`═════════════════════════════
🄿🄷🄾🅃🄾 🄴🄳🄸🅃🄾🅁 🄲🄾🄼🄼🄰🄽🄳🅂
═════════════════════════════


 𝟷  ᴀᴅs
 𝟸  𝙿𝙸𝚇𝙴𝙻𝙰𝚃𝙴
 𝟹  𝚁𝙰𝙸𝙽𝙱𝙾
 𝟺  𝙷𝙾𝚁𝙽𝚈
 𝟻  𝙱𝚆
 𝟼  𝚁𝙴𝙳
 𝟽  𝙶𝚁𝙴𝙴𝙽
 𝟾  𝙱𝙻𝚄𝙴
 𝟿  𝙶𝙰𝚈
 𝟷𝟶 𝙶𝙻𝙰𝚂𝚂
 𝟷𝟷 𝚆𝙰𝚂𝚃𝙴𝙳
 𝟷𝟸 𝙿𝙰𝚂𝚂𝙴𝙳
 𝟷𝟹 𝙹𝙰𝙸𝙻
 𝟷𝟺 𝙲𝙾𝙼𝚁𝙰𝙳𝙴
 𝟷𝟻 𝙸𝙽𝚅𝙴𝚁𝚃
 𝟷𝟼 𝟸𝙸𝙽𝚅𝙴𝚁𝚃
 𝟷𝟽 𝙶𝙾𝙻𝙳𝙴𝙽
 𝟷𝟾 𝚂𝙸𝙼𝙿𝙲𝙰𝚁𝙳
 𝟷𝟿 𝚃𝙷𝚁𝙴𝚂𝙷𝙾𝙻𝙳
 𝟸𝟶 ʙʀɪɢʜᴛ
 𝟸𝟷 ᴜɴᴄᴏᴠᴇʀ
 𝟸𝟸 ᴄʟᴏᴡɴ
 

═════════════════════════════ ` + '```',{quoted: message.data});});

Function(
	{
		pattern: 'ads ?(.*)',
		fromMe: isPublic,
		desc: 'photo as advertised',
		type: 'misc',
	},async (message, match) => {
try{
if (
			!message.reply_message ||
			(!message.reply_message.image && !message.reply_message.video)
		)
			return await message.reply('*_Reply to a image ♻️_*')
const media = await message.reply_message.downloadAndSaveMedia()
const res = await Imgur(media)
await message.client.sendFromUrl(message.jid, `https://api.popcat.xyz/ad?image=${res.link}`)
await deleteFromImgur(res.deletehash)
} catch(e) { message.reply(`${e}`)}
})

Function(
	{
		pattern: 'pixelate ?(.*)',
		fromMe: isPublic,
		desc: 'photo blur',
		type: 'misc',
	},async (message, match) => {
try{
if (
			!message.reply_message ||
			(!message.reply_message.image && !message.reply_message.video)
		)
			return await message.reply('*_Reply to a image ♻️_*')
const media = await message.reply_message.downloadAndSaveMedia()
const res = await Imgur(media)
await message.client.sendFromUrl(message.jid, `https://some-random-api.ml/canvas/pixelate?avatar=${res.link}`)
await deleteFromImgur(res.deletehash)
} catch(e) { message.reply(`${e}`)}
})


Function(
	{
		pattern: 'horny ?(.*)',
		fromMe: isPublic,
		desc: 'pic editor',
		type: 'misc',
	},async (message, match) => {
try{
if (
			!message.reply_message ||
			(!message.reply_message.image && !message.reply_message.video)
		)
			return await message.reply('*_Reply to a image ♻️_*')
const media = await message.reply_message.downloadAndSaveMedia()
const res = await Imgur(media)
await message.client.sendFromUrl(message.jid, `https://some-random-api.ml/canvas/horny?avatar=${res.link}`)
await deleteFromImgur(res.deletehash)} catch(e) { message.reply(`${e}`)}
})


Function(
	{
		pattern: 'rainbo ?(.*)',
		fromMe: isPublic,
		desc: 'rainbow effect',
		type: 'misc',
	},async (message, match) => {
try{
if (
			!message.reply_message ||
			(!message.reply_message.image && !message.reply_message.video)
		)
			return await message.reply('*_Reply to a image ♻️_*')
const media = await message.reply_message.downloadAndSaveMedia()
const res = await Imgur(media)
await message.client.sendFromUrl(message.jid, `https://some-random-api.ml/canvas/lgbt?avatar=${res.link}`)
await deleteFromImgur(res.deletehash)} catch(e) { message.reply(`${e}`)}
})


Function(
	{
		pattern: 'bw ?(.*)',
		fromMe: isPublic,
		desc: 'black and white effect',
		type: 'misc',
	},async (message, match) => {
try{
if (
			!message.reply_message ||
			(!message.reply_message.image && !message.reply_message.video)
		)
			return await message.reply('*_Reply to a image ♻️_*')
const media = await message.reply_message.downloadAndSaveMedia()
const res = await Imgur(media)
await message.client.sendFromUrl(message.jid, `https://some-random-api.ml/canvas/greyscale?avatar=${res.link}`)
await deleteFromImgur(res.deletehash)} catch(e) { message.reply(`${e}`)}
})


Function(
	{
		pattern: 'bright ?(.*)',
		fromMe: isPublic,
		desc: 'brighten image',
		type: 'misc',
	},async (message, match) => {
try{
if (
			!message.reply_message ||
			(!message.reply_message.image && !message.reply_message.video)
		)
			return await message.reply('*_Reply to a image ♻️_*')
const media = await message.reply_message.downloadAndSaveMedia()
const res = await Imgur(media)
await message.client.sendFromUrl(message.jid, `https://some-random-api.ml/canvas/brightness?avatar=${res.link}&brightness=${50}`)
await deleteFromImgur(res.deletehash)} catch(e) { message.reply(`${e}`)}
})


Function(
	{
		pattern: 'red ?(.*)',
		fromMe: isPublic,
		desc: 'red effect',
		type: 'misc',
	},async (message, match) => {
try{
if (
			!message.reply_message ||
			(!message.reply_message.image && !message.reply_message.video)
		)
			return await message.reply('*_Reply to a image ♻️_*')
const media = await message.reply_message.downloadAndSaveMedia()
const res = await Imgur(media)
await message.client.sendFromUrl(message.jid, `https://some-random-api.ml/canvas/red?avatar=${res.link}`)
await deleteFromImgur(res.deletehash)} catch(e) { message.reply(`${e}`)}
})


Function(
	{
		pattern: 'blue ?(.*)',
		fromMe: isPublic,
		desc: 'blue effect',
		type: 'misc',
	},async (message, match) => {
try{
if (
			!message.reply_message ||
			(!message.reply_message.image && !message.reply_message.video)
		)
			return await message.reply('*_Reply to a image ♻️_*')
const media = await message.reply_message.downloadAndSaveMedia()
const res = await Imgur(media)
await message.client.sendFromUrl(message.jid, `https://some-random-api.ml/canvas/blue?avatar=${res.link}`)
await deleteFromImgur(res.deletehash)} catch(e) { message.reply(`${e}`)}
})


Function(
	{
		pattern: 'green ?(.*)',
		fromMe: isPublic,
		desc: 'green effect',
		type: 'misc',
	},async (message, match) => {
try{
if (
			!message.reply_message ||
			(!message.reply_message.image && !message.reply_message.video)
		)
			return await message.reply('*_Reply to a image ♻️_*')
const media = await message.reply_message.downloadAndSaveMedia()
const res = await Imgur(media)
await message.client.sendFromUrl(message.jid, `https://some-random-api.ml/canvas/green?avatar=${res.link}`)
await deleteFromImgur(res.deletehash)} catch(e) { message.reply(`${e}`)}
})


Function(
	{
		pattern: 'gay ?(.*)',
		fromMe: isPublic,
		desc: 'vibgyor',
		type: 'misc',
	},async (message, match) => {
try{
if (
			!message.reply_message ||
			(!message.reply_message.image && !message.reply_message.video)
		)
			return await message.reply('*_Reply to a image ♻️_*')
const media = await message.reply_message.downloadAndSaveMedia()
const res = await Imgur(media)
await message.client.sendFromUrl(message.jid, `https://some-random-api.ml/canvas/gay?avatar=${res.link}`)
await deleteFromImgur(res.deletehash)} catch(e) { message.reply(`${e}`)}
})


Function(
	{
		pattern: 'passed ?(.*)',
		fromMe: isPublic,
		desc: 'mission passed effect',
		type: 'misc',
	},async (message, match) => {
try{
if (
			!message.reply_message ||
			(!message.reply_message.image && !message.reply_message.video)
		)
			return await message.reply('*_Reply to a image ♻️_*')
const media = await message.reply_message.downloadAndSaveMedia()
const res = await Imgur(media)
await message.client.sendFromUrl(message.jid, `https://some-random-api.ml/canvas/passed?avatar=${res.link}`)
await deleteFromImgur(res.deletehash)} catch(e) { message.reply(`${e}`)}
})

Function(
	{
		pattern: 'wasted ?(.*)',
		fromMe: isPublic,
		desc: 'wasted effect',
		type: 'misc',
	},async (message, match) => {
try{
if (
			!message.reply_message ||
			(!message.reply_message.image && !message.reply_message.video)
		)
			return await message.reply('*_Reply to a image ♻️_*')
const media = await message.reply_message.downloadAndSaveMedia()
const res = await Imgur(media)
await message.client.sendFromUrl(message.jid, `https://some-random-api.ml/canvas/wasted?avatar=${res.link}`)
await deleteFromImgur(res.deletehash)} catch(e) { message.reply(`${e}`)}
})


Function(
	{
		pattern: 'glass ?(.*)',
		fromMe: isPublic,
		desc: 'glass effect',
		type: 'misc',
	},async (message, match) => {
try{
if (
			!message.reply_message ||
			(!message.reply_message.image && !message.reply_message.video)
		)
			return await message.reply('*_Reply to a image ♻️_*')
const media = await message.reply_message.downloadAndSaveMedia()
const res = await Imgur(media)
await message.client.sendFromUrl(message.jid, `https://some-random-api.ml/canvas/glass?avatar=${res.link}`)
await deleteFromImgur(res.deletehash)} catch(e) { message.reply(`${e}`)}
})


Function(
	{
		pattern: 'uncover ?(.*)',
		fromMe: isPublic,
		desc: 'pic as uncovered',
		type: 'misc',
	},async (message, match) => {
try{
if (
			!message.reply_message ||
			(!message.reply_message.image && !message.reply_message.video)
		)
			return await message.reply('*_Reply to a image ♻️_*')
const media = await message.reply_message.downloadAndSaveMedia()
const res = await Imgur(media)
await message.client.sendFromUrl(message.jid, `https://api.popcat.xyz/uncover?image=${res.link}`)
await deleteFromImgur(res.deletehash)} catch(e) { message.reply(`${e}`)}
})



Function(
	{
		pattern: 'jail ?(.*)',
		fromMe: isPublic,
		desc: 'picture in jail',
		type: 'misc',
	},async (message, match) => {
try{
if (
			!message.reply_message ||
			(!message.reply_message.image && !message.reply_message.video)
		)
			return await message.reply('*_Reply to a image ♻️_*')
const media = await message.reply_message.downloadAndSaveMedia()
const res = await Imgur(media)
await message.client.sendFromUrl(message.jid, `https://some-random-api.ml/canvas/jail?avatar=${res.link}`)
await deleteFromImgur(res.deletehash)} catch(e) { message.reply(`${e}`)}
})

Function(
	{
		pattern: 'invert ?(.*)',
		fromMe: isPublic,
		desc: 'pic editor',
		type: 'misc',
	},async (message, match) => {
try{
if (
			!message.reply_message ||
			(!message.reply_message.image && !message.reply_message.video)
		)
			return await message.reply('*_Reply to a image ♻️_*')
const media = await message.reply_message.downloadAndSaveMedia()
const res = await Imgur(media)
await message.client.sendFromUrl(message.jid, `https://some-random-api.ml/canvas/invert?avatar=${res.link}`)
await deleteFromImgur(res.deletehash)} catch(e) { message.reply(`${e}`)}
})


Function(
	{
		pattern: '2invert ?(.*)',
		fromMe: isPublic,
		desc: 'pic editor',
		type: 'misc',
	},async (message, match) => {
try{
if (
			!message.reply_message ||
			(!message.reply_message.image && !message.reply_message.video)
		)
			return await message.reply('*_Reply to a image ♻️_*')
const media = await message.reply_message.downloadAndSaveMedia()
const res = await Imgur(media)
await message.client.sendFromUrl(message.jid, `https://some-random-api.ml/canvas/invertgreyscale?avatar=${res.link}`)
await deleteFromImgur(res.deletehash)} catch(e) { message.reply(`${e}`)}
})


Function(
	{
		pattern: 'comrade ?(.*)',
		fromMe: isPublic,
		desc: 'comrade effect',
		type: 'misc',
	},async (message, match) => {
try{
if (
			!message.reply_message ||
			(!message.reply_message.image && !message.reply_message.video)
		)
			return await message.reply('*_Reply to a image ♻️_*')
const media = await message.reply_message.downloadAndSaveMedia()
const res = await Imgur(media)
await message.client.sendFromUrl(message.jid, `https://some-random-api.ml/canvas/comrade?avatar=${res.link}`)
await deleteFromImgur(res.deletehash)} catch(e) { message.reply(`${e}`)}
})


Function(
	{
		pattern: 'golden ?(.*)',
		fromMe: isPublic,
		desc: 'change main colours to gold',
		type: 'misc',
	},async (message, match) => {
try{
if (
			!message.reply_message ||
			(!message.reply_message.image && !message.reply_message.video)
		)
			return await message.reply('*_Reply to a image ♻️_*')
const media = await message.reply_message.downloadAndSaveMedia()
const res = await Imgur(media)
await message.client.sendFromUrl(message.jid, `https://some-random-api.ml/canvas/sepia?avatar=${res.link}`)
await deleteFromImgur(res.deletehash)} catch(e) { message.reply(`${e}`)}
})


Function(
	{
		pattern: 'simpcard ?(.*)',
		fromMe: isPublic,
		desc: 'photo in simpcard',
		type: 'misc',
	},async (message, match) => {
try{
if (
			!message.reply_message ||
			(!message.reply_message.image && !message.reply_message.video)
		)
			return await message.reply('*_Reply to a image ♻️_*')
const media = await message.reply_message.downloadAndSaveMedia()
const res = await Imgur(media)
await message.client.sendFromUrl(message.jid, `https://some-random-api.ml/canvas/simpcard?avatar=${res.link}`)
await deleteFromImgur(res.deletehash)} catch(e) { message.reply(`${e}`)}
})


Function(
	{
		pattern: 'threshold ?(.*)',
		fromMe: isPublic,
		desc: 'darken bg',
		type: 'misc',
	},async (message, match) => {
try{
if (
			!message.reply_message ||
			(!message.reply_message.image && !message.reply_message.video)
		)
			return await message.reply('*_Reply to a image ♻️_*')
const media = await message.reply_message.downloadAndSaveMedia()
const res = await Imgur(media)
await message.client.sendFromUrl(message.jid, `https://some-random-api.ml/canvas/threshold?avatar=${res.link}&threshold=100`)
await deleteFromImgur(res.deletehash)} catch(e) { message.reply(`${e}`)}
})


Function(
	{
		pattern: 'clown ?(.*)',
		fromMe: isPublic,
		desc: 'clown model',
		type: 'misc',
	},async (message, match) => {
try{
if (
			!message.reply_message ||
			(!message.reply_message.image && !message.reply_message.video)
		)
			return await message.reply('*_Reply to a image ♻️_*')
const media = await message.reply_message.downloadAndSaveMedia()
const res = await Imgur(media)
await message.client.sendFromUrl(message.jid, `https://api.popcat.xyz/clown?image=${res.link}`)
await deleteFromImgur(res.deletehash)} catch(e) { message.reply(`${e}`)}
})
