const {
	Function,
	isPublic
} = require('../lib/')

/* 
Function({pattern: 'sample', fromMe: true}
*/

// ------------------------------------------------------------------------------------------------
//              TEXT SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

Function({
	pattern: 'text ?(.*)',
	fromMe: isPublic,
	desc: 'Sends text',
	type: 'misc',
}, async (message, match) => {
	await message.send("*TEXT HERE*")
});

// ------------------------------------------------------------------------------------------------
//              IMAGE SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

Function({
	pattern: 'image ?(.*)',
	fromMe: isPublic,
	desc: 'Sends image',
	type: 'misc',
}, async (message, match) => {
	await message.client.sendMessage(message.chat, {image: {url: 'https://i.imgur.com/biqxAoi.jpeg'}, caption: "abd_khadher"})
});

// ------------------------------------------------------------------------------------------------
//              VIDEO SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

Function({
	pattern: 'video ?(.*)',
	fromMe: isPublic,
	desc: 'Sends video',
	type: 'misc',
}, async (message, match) => {
	await message.client.sendMessage(message.chat, {video: {url: 'https://i.imgur.com/NCifJWe.mp4'}, caption: "abd_khadher"})
});


// ------------------------------------------------------------------------------------------------
//          MENTION TEXT SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

Function({
	pattern: 'mentiontext ?(.*)',
	fromMe: isPublic,
	desc: 'Sends mention text',
	type: 'misc',
}, async (message, match) => {

await message.client.sendMessage(message.chat, { text: `*MENTION :* @${message.sender.split("@")[0]}`, mentions: [message.sender] })

});

// ------------------------------------------------------------------------------------------------
//          REACTION SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

Function({
	pattern: 'reaction ?(.*)',
	fromMe: isPublic,
	desc: 'Sends reaction',
	type: 'misc',
}, async (message, match) => {
	const reactionMessage = {
    react: {
        text: "💖", // Your emoji here
        key: message.data.key
    }
}

await message.client.sendMessage(message.chat, reactionMessage)
});

// ------------------------------------------------------------------------------------------------
//          LIST BUTTON SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

Function({
	pattern: 'listbutton ?(.*)',
	fromMe: isPublic,
	desc: 'Sends list button',
	type: 'misc',
}, async (message, match) => {

const sections = [
    {
	title: "Section 1",
	rows: [
	    {title: "Option 1", rowId: "option1"},
	    {title: "Option 2", rowId: "option2", description: "This is a description"}
	]
    },
   {
	title: "Section 2",
	rows: [
	    {title: "Option 3", rowId: "option3"},
	    {title: "Option 4", rowId: "option4", description: "This is a description V2"}
	]
    },
]

const listMessage = {
  text: "This is a list",
  footer: "nice footer, link: https://google.com",
  title: "Amazing boldfaced list title",
  buttonText: "Required, text on the button to view the list",
  sections
}

await message.client.sendMessage(message.chat, listMessage)
})


// ------------------------------------------------------------------------------------------------
//          BUTTON TEXT SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

Function({
	pattern: 'buttontext ?(.*)',
	fromMe: isPublic,
	desc: 'Sends button text',
	type: 'misc',
}, async (message, match) => {

const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'abd_khadher'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'abd_khadher'}, type: 1},
  {buttonId: 'id3', buttonText: {displayText: 'abd_khadher'}, type: 1}
]

const buttonMessage = {
    text: "Hi it's button message",
    footer: 'Hello World',
    buttons: buttons,
    headerType: 1
}

await message.client.sendMessage(message.chat, buttonMessage)

})


// ------------------------------------------------------------------------------------------------
//          BUTTON IMAGE SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

Function({
	pattern: 'buttonimage ?(.*)',
	fromMe: isPublic,
	desc: 'Sends button image',
	type: 'misc',
}, async (message, match) => {

const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'abd_khadher'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'abd_khadher'}, type: 1},
  {buttonId: 'id3', buttonText: {displayText: 'abd_khadher'}, type: 1}
]

const buttonMessage = {
    image: {url: 'https://i.imgur.com/biqxAoi.jpeg'},
    caption: "Hi it's button message",
    footer: 'Hello World',
    buttons: buttons,
    headerType: 1
}

await message.client.sendMessage(message.chat, buttonMessage)

})

// ------------------------------------------------------------------------------------------------
//          BUTTON VIDEO SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

Function({
	pattern: 'buttonvideo ?(.*)',
	fromMe: isPublic,
	desc: 'Sends button video',
	type: 'misc',
}, async (message, match) => {

const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'abd_khadher'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'abd_khadher'}, type: 1},
  {buttonId: 'id3', buttonText: {displayText: 'abd_khadher'}, type: 1}
]

const buttonMessage = {
    video: {url: 'https://i.imgur.com/NCifJWe.mp4'},
    caption: "Hi it's button message",
    footer: 'Hello World',
    buttons: buttons,
    headerType: 1
}

await message.client.sendMessage(message.chat, buttonMessage)

})

// ------------------------------------------------------------------------------------------------
//          TEMPLATE BUTTON TEXT SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

Function({
	pattern: 'templatebuttontext ?(.*)',
	fromMe: isPublic,
	desc: 'Sends template button text',
	type: 'misc',
}, async (message, match) => {

const templateButtons = [
    {index: 1, urlButton: {displayText: 'follow on instagram!', url: 'instagram.com/abd_khadher___'}},
    {index: 2, callButton: {displayText: 'Call me!', phoneNumber: '+917560920774'}},
    {index: 3, quickReplyButton: {displayText: 'This is a reply, just like normal buttons!', id: 'Khadher'}},
]

const templateMessage = {
    text: "Hi it's a template message",
    footer: 'Hello World',
    templateButtons: templateButtons
}

await message.client.sendMessage(message.chat, templateMessage)

})

// ------------------------------------------------------------------------------------------------
//          TEMPLATE BUTTON IMAGE SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

Function({
	pattern: 'templatebuttonimage ?(.*)',
	fromMe: isPublic,
	desc: 'Sends template button image',
	type: 'misc',
}, async (message, match) => {

const templateButtons = [
    {index: 1, urlButton: {displayText: 'follow on instagram!', url: 'instagram.com/abd_khadher___'}},
    {index: 2, callButton: {displayText: 'Call me!', phoneNumber: '+917560920774'}},
    {index: 3, quickReplyButton: {displayText: 'This is a reply, just like normal buttons!', id: 'Khadher'}},
]
const templateMessage = {
    image: {url: 'https://i.imgur.com/biqxAoi.jpeg'},
    caption: "Hi it's a template message",
    footer: 'Hello World',
    templateButtons: templateButtons
}

await message.client.sendMessage(message.chat, templateMessage)

})

// ------------------------------------------------------------------------------------------------
//          TEMPLATE BUTTON VIDEO SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

Function({
	pattern: 'templatebuttonvideo ?(.*)',
	fromMe: isPublic,
	desc: 'Sends template button video',
	type: 'misc',
}, async (message, match) => {

const templateButtons = [
    {index: 1, urlButton: {displayText: 'follow on instagram!', url: 'instagram.com/abd_khadher___'}},
    {index: 2, callButton: {displayText: 'Call me!', phoneNumber: '+917560920774'}},
    {index: 3, quickReplyButton: {displayText: 'This is a reply, just like normal buttons!', id: 'Khadher'}},
]

const templateMessage = {
    video: {url: 'https://i.imgur.com/NCifJWe.mp4'},
    caption: "Hi it's a template message",
    footer: 'abd_khadher',
    templateButtons: templateButtons
}

await message.client.sendMessage(message.chat, templateMessage)

})


// ------------------------------------------------------------------------------------------------
//          CONTACT SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

Function({
	pattern: 'contact ?(.*)',
	fromMe: isPublic,
	desc: 'Sends contact',
	type: 'misc',
}, async (message, match) => {

const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Jeff Singh\n' // full name
            + 'ORG:Ashoka Uni;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=917560920774:+917560920774\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(
    message.chat,
    { 
        contacts: { 
            displayName: 'Jeff', 
            contacts: [{ vcard }] 
        }
    }
)

})

// ------------------------------------------------------------------------------------------------
//          LOCATION SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

Function({
	pattern: 'location ?(.*)',
	fromMe: isPublic,
	desc: 'Sends location',
	type: 'misc',
}, async (message, match) => {

await message.client.sendMessage(
    message.chat, 
    { location: { degreesLatitude: 24.121231, degreesLongitude: 55.1121221 } }
)

})
