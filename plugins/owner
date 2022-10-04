const { Function, isPublic,getBuffer } = require('../lib/')
const { generateWAMessage, proto } = require('@adiwajshing/baileys');
const image = 'https://i.imgur.com/XAOymru.jpeg' //MAIN IMAGE URL HERE
const logo = 'https://i.imgur.com/0CSP79W.png'

Function(
	{
		pattern: 'khadher',
	fromMe: isPublic,
        desc: 'Shows My Intro',
	type: 'info'
	},   async (message, match) => {
        const jid = message.jid
        const number = message.client.user.jid
        const thumb = await getBuffer(image)
        const thumbnail = await getBuffer(logo)
        const options = {}
	options.contextInfo = {
		forwardingScore: 999, // change it to 999 for many times forwarded
		isForwarded: false,
	}
        // ADDED /* TO REMOVE LINK PREVIEW TYPE
        options.linkPreview = {
               renderLargerThumbnail: true,
               showAdAttribution: true,
               title: "ᴀʙᴅ ᴋʜᴀᴅʜᴇʀ",
               body: "ᴄʟɪᴄᴋ ʜᴇʀᴇ 🦋 !!",
               mediaType: 1,
               thumbnail: thumb,
               sourceUrl: "http://wa.me/917560920774?text=_៚ʜᴇʟʟᴏ+ᴀʙᴅ+ᴋʜᴀᴅʜᴇʀ+ʙɪɢ+ꜰᴀɴ+ʙʀᴏʜ+❤️_"
             }
        // ADDED */ TO REMOVE LINK PREVIEW TYPE
        options.quoted = {
            key: {
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast"
            },
            message: {
			'contactMessage': {
				'displayName': `${message.pushName}`, //ADD `${message.client.user.name}` TO DISPLAY CLIENT USER NAME.
				'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${message.client.user.name},;;;\nFN:${message.client.user.name},\nitem1.TEL;waid=${number.split('@')[0]}:${number.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
				'jpegThumbnail': thumbnail
			}
            }
        }
        
let messages = await generateWAMessage(message.jid, { text: `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」*
│ *Name      : Aʙᴅ_Kʜᴀᴅʜᴇʀ*
│ *Place       :* ᴋᴇʀᴀʟᴀ
│ *Gender   :*  ᴍᴀʟᴇ
│ *Age          :* 16
│ *Phone     :* wa.me/917560920774
│ *IG ID        :* abd_Khadher___
│ *Status     :* single and ready to committed 💞
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙`}, {quoted: message.quoted || ''})

await message.client.forwardMessage(message.jid, await proto.WebMessageInfo.fromObject(messages), options)

    }
);
