/*
Hallo iam Ramlan:)
SC By : RAMLAN GANS
*/
//YANG ATAS JANGAN DI UBAH UM:)
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange,
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./ADITYA/color')
const { menu } = require('./ADITYA/menu')
const { help } = require('./ADITYA/help')
const { donasi } = require('./ADITYA/donasi')
const { info } = require('./ADITYA/info')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, success, close } = require('./ADITYA/functions')
const { fetchJson } = require('./ADITYA/fetcher')
const { recognize } = require('./ADITYA/ocr')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const lolis = require('lolis.life')
const loli = new lolis()
const welkom = JSON.parse(fs.readFileSync('./ADITYA/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./ADITYA/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./ADITYA/simi.json'))
const vcard = 'BEGIN:VCARD\n' // OM JANGAN DI UBAH OM
            + 'VERSION:3.0\n' // INI WEEM RAMLAN GANS
            + 'FN:Aditya ID\n' // UBAH INI
            + 'ORG:Owner BOT;\n' // UBAH INI
            + 'TEL;type=CELL;type=VOICE;waid=6289623463774:+62 896-2346-3774\n' // UBAH INI
            + 'END:VCARD' // WEEM DIHAPUS GUE BERHENTI UPDATE SCRIPT
BotName = 's4dnessBotz'
groupName = 'IES-TEAM'
aktif = '08:00-15:00'
instagram = '@adityadg_'
ow = 'Aditya ID'
prefix = '!'
blocked = []

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./Ramlan.json') && client.loadAuthInfo('./Ramlan.json')
	client.on('connecting', () => {
		start('2', 'Connecting...')
	})
	client.on('open', () => {
		success('2', 'Connected')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Ramlan.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        setInterval(function () {
  for (i = 0; i < 3; i++) {
    console.log(`[ ${moment().format("HH:mm:ss")} ] => Hallo Bot Is Running :)`)
  }
}, 15000)
	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				 try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `[ *WELCOME IN GC ${mdata.subject}* ] \n___________________________\n@${num.split('@')[0]} Selamat Datang:) \nPatuhi Semua Rulez Disini ya!\n*___________________________*\nSemoga betah Di group!!`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, teks,MessageType.text, {contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				 try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*SELAMAT TINGGAL... @${num.split('@')[0]}👋* \n_Kalo balik nitip gorengan um_\n___________________________\n*Powered By ${BotName}*`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, teks,MessageType.text, {contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'Nkwp9oR7Eg9yyKbejBpm'
			const vhtear = 'BELI_APIKEY_NYA'
			const apiTobz = 'BotWeA'
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)

			mess = {
				wait: '🌀 Sedang di Prosess 🌀',
				waitt: 'Perintah diterima,saya akan keluar >//<',
				wait2: '[❗] WAIT GAN',
				wait3: '[❗] Sabar tod pasti kemren nih',
				wait4: '[❗] Sabar dumlu yakan',
				success: '✔️ Berhasil ✔️',
				error: {
					stick: '❌ Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌',
					Iv: '❌ Link tidak valid ❌'
				},
				only: {
					group: '❌ Fitur ini hanya bisa di gunakan dalam group! ❌',
					ownerG: '❌ Fitur ini hanya bisa di gunakan oleh owner group! ❌',
					ownerB: '❌ Fitur ini hanya bisa di gunakan oleh owner bot! ❌',
					ownerBT: '❌ Fitur ini hanya bisa di gunakan oleh owner bot! ketik *!owner* Untuk meminta izin mengaktifkan fitur ini! ❌',
					admin: '❌ Fitur ini hanya bisa di gunakan oleh admin group! ❌',
					Badmin: '❌ Fitur ini hanya bisa di gunakan ketika bot menjadi admin! ❌'
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = ["6289623463774@s.whatsapp.net"] // Ganti pake nomor lu
			const ramlanNumber = ["6285559240360@s.whatsapp.net"] // JANGAN DI UBAH 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isRamlan = ramlanNumber.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			switch(command) {
				case 'menu':
					client.sendMessage(from, menu(prefix), text, { quoted: mek })
					break
				 case 'help':
					client.sendMessage(from, help(prefix), text, { quoted: mek })
					break
				case 'donasi':
				case 'donate':
					client.sendMessage(from, donasi(prefix), text, { quoted: mek })
					break
				 case 'info':
					client.sendMessage(from, info(prefix), text, { quoted: mek })
					break
				case 'blocklist':
					teks = 'Daftar beban kontak :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}\n___________________________\n*Powered By ${BotName}*`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'owner':
                case 'creator':
                  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
               client.sendMessage(from, 'Nih nomor pacarku😍, ehh ownerku hehee😁 jangan di galakin ya:*',MessageType.text)
                break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break
				case 'stiker':
				case 'sticker':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						await removeBackgroundFromImageFile({path: media, apiKey: vhtear, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					break
				case 'tts':
				err = `Kode bahasanya mana um? \n> ${prefix}tts id Owner Ganteng`
				err2 = `Textnya mana um? \n$> {prefix}tts id Owner Ganteng`
					if (args.length < 1) return reply(err, {quoted: mek})
					const gtts = require('./ADITYA/gtts')(args[0])
					if (args.length < 2) return reply(err2, {quoted: mek})
					reply(mess.wait)
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						client.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break
				case 'meme':
					meme = await kagApi.memes()
					reply(mess.wait)
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'memeindo':
					memein = await kagApi.memeindo()
					reply(mess.wait)
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'setprefix':
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Masukan New Prefix')
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break
				case 'hilih':
					if (args.length < 1) return reply('Teksnya mana um?')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
				case 'ytmp3':
				err = `Urlnya mana um? \n> ${prefix}ytmp3 https://youtu.be/tOMFR0nQt48`
					if (args.length < 1) return reply(err, {quoted: mek})
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/yta?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}\n___________________________\n*Powered By ${BotName}*`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
					case 'igstalk':
					err = `User ig yang mau di stalk mana um? \n> ${prefix}igstalk adityadg_`
					if (args.length < 1) return reply(err, {quoted: mek})
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/stalk?username=${body.slice(9)}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.Profile_pic)
					teks = `*Username* : ${anu.Username}\n*Nama* : ${anu.Name}\n*Bio* : ${anu.Biodata}\n*Jumlah Mengikuti* : ${anu.Jumlah_Followers}\n*Jumlah Di Ikuti* : ${anu.Jumlah_Following}\n*Jumlah Post* : ${anu.Jumlah_Post}\n*Jumlah Stroy* : ${anu.Jumlah_Story}\n___________________________\n*Powered By ${BotName}*`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					break
					case 'ytstalk':
					err = `Textnya mana um? \n> ${prefix}ytstalk jess no limit`
					if (args.length < 1) return reply(err, {quoted: mek})
					anu = await fetchJson(`https://mhankbarbar.tech/api/ytsearch?q=${body.slice(10)}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* : ${i.id}\n*Published* : ${i.publishTime}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					break
				case 'tiktod':
				err = `Urlnya mana um? \n> ${prefix}tiktod linkvideo`
					if (args.length < 1) return reply(err, {quoted: mek})
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/tiktok?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {quoted: mek})
					break
				case 'tiktokstalk':
					try {
						err = `Textnya mana um? \n> ${prefix}tiktokstalk notnot8`
						if (args.length < 1) return reply(err, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n___________________________\n*Powered By ${BotName}*`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Kemungkinan username tidak valid')
					}
					break
					case 'wiki':
					err = `Textnya mana um? \n> ${prefix}wiki Soekarno`
					if (args.length < 1) return reply(err, {quoted: mek})
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/wiki?q=${body.slice(6)}&lang=id&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Hasil* : \n${anu.result}\n___________________________\n*Powered By ${BotName}*`
					client.sendMessage(from, teks,MessageType.text, {quoted: mek})
					break
					case 'kkbi':
					err = `Textnya mana um? \n> ${prefix}kkbi makan`
					if (args.length < 1) return reply('Yang mau di cari apaan um?')
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/kbbi?query=${body.slice(6)}&lang=id&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Hasil* : \n${anu.result}\n___________________________\n*Powered By ${BotName}*`
					client.sendMessage(from, teks,MessageType.text, {quoted: mek})
					break
					case 'infogempa':
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/infogempa?apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Lokasi* : ${anu.lokasi}\n*Koordinat* : ${anu.koordinat}\n*Kedalaman* : ${anu.kedalaman}\n*Magnitudo* : ${anu.magnitudo}\n*Waktu* : ${anu.waktu}\n___________________________\n*Powered By ${BotName}*`
					client.sendMessage(from, teks,MessageType.text, {quoted: mek})
					break
					case 'jadwalsholat':
					err = `Masukkan daerahnya um:) \n> ${prefix}jadwalsholat Pekanbaru`
					 if (args.length < 1) return reply(err, {quoted: mek})
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/jadwalshalat?daerah=${body.slice(14)}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Subuh* : ${anu.Subuh}\n*Imsyak* : ${anu.Imsyak}\n*Dzuhur* : ${anu.Dzuhur}\n*Ashar* : ${anu.Ashar}\n*Maghrib* : ${anu.Maghrib}\n*Isya* : ${anu.Isya}\n*Dhuha* : ${anu.Dhuha}\n___________________________\n*Powered By ${BotName}*`
					client.sendMessage(from, teks,MessageType.text, {quoted: mek})
					break
					case 'chordgitar':
					err = `Nama lagunya mana um? \n> ${prefix}chordgitar Laskar Pelangi`
					if (args.length < 1) return reply(err, {quoted: mek})
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/chord?q=${body.slice(12)}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Hasil* : \n${anu.result}\n___________________________\n*Powered By ${BotName}*`
					client.sendMessage(from, teks,MessageType.text, {quoted: mek})
					break
					case 'infocuaca':
					err = `Nama daerahnya mana um? \n> ${prefix}infocuaca Pekanbaru`
					if (args.length < 1) return reply(err, {quoted: mek})
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/cuaca?q=${body.slice(11)}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Tempat* : ${anu.result.tempat}\n*Desk* : ${anu.result.desk}\n*Udara* : ${anu.result.udara}\n*Suhu* : ${anu.result.suhu}\n*Kelembapan* : ${anu.result.kelembapan}\n*Cuaca* : ${anu.result.cuaca}\n*Angin* : ${anu.result.angin}\n___________________________\n*Powered By ${BotName}*`
					client.sendMessage(from, teks,MessageType.text, {quoted: mek})
					break
					case 'quotes':
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/randomquotes`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `${anu.quotes}\n*-${anu.author}*\n___________________________\n*Powered By ${BotName}*`
					client.sendMessage(from, teks,MessageType.text, {quoted: mek})
					break
					case 'bitly':
					err = `Urlnya mana um? \n> ${prefix}bitly https://kpu.go.id`
					if (args.length < 1) return reply(err, {quoted: mek})
					reply(mess.wait)
					anu = await fetchJson(` https://tobz-api.herokuapp.com/api/bitly?url=${body.slice(7)}&apikey=${apiTobz}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `${anu.result}\n___________________________\n*Powered By ${BotName}*`
					client.sendMessage(from, teks,MessageType.text, {quoted: mek})
					break
					case 'nulis':
				case 'tulis':
				err = `Yang mau di tulis apaan um? \n> ${prefix}nulis Owner sedang rapat`
					if (args.length < 1) return reply(err, {quoted: mek})
					ramlan = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/nulis?text=${ramlan}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
					break
					case 'bikinquotes':
					var gh = body.slice(12)
					dit1 = gh.split("&")[0];
					dit2 = gh.split("&")[1];
					err = `Kata-kata bijakmu mana um? \n> ${prefix}bikinquotes Pernah Sakit&Namamu`
					if (args.length < 1) return reply(err, {quoted: mek})
				    reply(mess.wait)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${dit1}&author=${dit2}&tipe=rain`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
					break
					case 'pubg':
					var gh = body.slice(6)
					dit1 = gh.split("&")[0];
					dit2 = gh.split("&")[1];
					err = `Textnya mana um? \n> ${prefix}pubg Adit&Kun`
					if (args.length < 1) return reply(err, {quoted: mek})
				    reply(mess.wait)
					anu = await fetchJson(` https://tobz-api.herokuapp.com/api/photooxy?theme=pubg&text1=${dit1}&text2=${dit2}&apikey=${apiTobz}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
					break
					case 'neonlight':
					if (args.length < 1) return reply('Yang mau di cari apaan um?')
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=neon_light&text=${body.slice(11)}&apikey=${apiTobz}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
					break
				case 'ssweb':
					tipelist = ['desktop','tablet','mobile']
					err = `Tipenya mana um? \n> ${prefix}ssweb desktop https://kpu.go.id`
					err2 = `Urlnhamana um? \n> ${prefix}ssweb desktop https://kpu.go.id`
					if (args.length < 1) return reply(err, {quoted: mek})
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply(err2, {quoted: mek})
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					teks = `*Size* : ${anu.filesize}`
					client.sendMessage(from, buff, image, {caption: teks, quoted: mek})
					break
				case 'ttp':
				err = `Textnya mana um? \n> ${prefix}ttp OwnerKun`
					if (args.length < 1) return reply(err, {quoted: mek})
					reply(mess.wait)
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'dogtag':
					if (args.length < 1) return reply('.......')
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					members_id = []
					adit = body.slice(8)
					teks = `${adit}\n`
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'tagall':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'tagall2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                                case 'tagall3':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
				case 'clearall':
					if (!isOwner) return reply(mess.only.ownerB)
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('Sukses delete all chat :)')
					break
				case 'bc':
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `⟪ *${BotName} [ Ini Broadcast ]* ⟫\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `⟪ *${BotName} [ Ini Broadcast ]* ⟫\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
                                case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add siapa? !add 628***')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					reply(mess.wait)
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'admin':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                                case 'linkgrup':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (!isGroupAdmins) return reply(mess.only.admin)
                                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                                        linkgc = await client.groupInviteCode(from)
                                        reply('https://chat.whatsapp.com/'+linkgc)
                                        break
                                case 'leave':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (isOwner) {
                                        	reply(mess.waitt)
                                        	client.groupLeave(from)
                                        } else {
                                            reply(mess.only.ownerB)
                                        }
                                        break
                case 'hidetag':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isOwner) return reply('Lu siapa tod?')
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
				case 'toimg':
					if (!isQuotedSticker) return reply('❌ reply stickernya um ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
				case 'simi':
					if (args.length < 1) return reply('Textnya mana um?')
					teks = body.slice(5)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./ADITYA/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./ADITYA/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
				case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerBT)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./ADITYA/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./ADITYA/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                                      break
				case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja mas')
					}
					break
					//GABUT
					case 'apakah':
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Mungkin','Sedikit']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					break
				case 'rate':
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					break
				case 'watak':
					watak = body.slice(1)
					const wa =['penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik Hati','penyabar','Uwu>/<','top deh, pokoknya','Suka Membantu','Nyebelin','Nyusahin']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					break
				case 'hobby':
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
					break
				case 'bisakah':
					bisakah = body.slice(1)
					const bisa =['Bisa','Sedikit','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					break
				case 'kapankah':
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					break
				case 'truth':
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					break
				case 'dare':
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					break
//LOGO MAKER
case 'pornhub':
					var gh = body.slice(8)
					lan1 = gh.split("&")[0];
					lan2 = gh.split("&")[1];
					if (args.length < 1) return reply('Teks nya mana um?')
					reply(mess.wait2)
					ramlan = await getBuffer(`https://api.vhtear.com/pornlogo?text1=${lan1}&text2=${lan2}&apikey=${vhtear}`)
					client.sendMessage(from, ramlan, image, {quoted: mek, caption: 'Pasti pemain bokep:v'})
					break
case 'hartatahta':
					var gh = body.slice(11)
					if (args.length < 1) return reply('Teks nya mana um?')
					reply('[❗] Hirti Tihti Tai Anjg :v')
					ramlan = await getBuffer(`https://api.vhtear.com/hartatahta?text=${gh}&apikey=${vhtear}`)
					client.sendMessage(from, ramlan, image, {quoted: mek})
					break
case 'galaxytext':
					var gh = body.slice(11)
					if (args.length < 1) return reply('Teks nya mana um?')
					reply(mess.wait2)
					ramlan = await getBuffer(`https://api.vhtear.com/galaxytext?text=${gh}&apikey=${vhtear}`)
					client.sendMessage(from, ramlan, image, {quoted: mek, caption: 'Anjay bah'})
					break
case 'glitchtext':
					var gh = body.slice(11)
					lan1 = gh.split("&")[0];
					lan2 = gh.split("&")[1];
					if (args.length < 1) return reply('Teks nya mana um?')
					reply(mess.wait3)
					ramlan = await getBuffer(`https://api.vhtear.com/glitchtext?text1=${lan1}&text2=${lan2}&apikey=${vhtear}`)
					client.sendMessage(from, ramlan, image, {quoted: mek})
					break
case 'lovetext':
					var gh = body.slice(9)
					if (args.length < 1) return reply('Teks nya mana um?')
					reply(mess.wait4)
					ramlan = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${gh}&apikey=${vhtear}`)
					client.sendMessage(from, ramlan, image, {quoted: mek})
					break
case 'glowtext':
					var gh = body.slice(9)
					if (args.length < 1) return reply('Teks nya mana um?')
					reply(mess.wait2)
					ramlan = await getBuffer(`https://api.vhtear.com/glowtext?text=${gh}&apikey=${vhtear}`)
					client.sendMessage(from, ramlan, image, {quoted: mek})
					break
case 'gugeltext':
					var gh = body.slice(10)
					lan1 = gh.split("&")[0];
					lan2 = gh.split("&")[1];
					lan3 = gh.split("&")[2];
					if (args.length < 1) return reply('Teks nya mana um?')
					reply(mess.wait)
					ramlan = await getBuffer(`https://api.vhtear.com/googletext?text1=${lan1}&text2=${lan2}&text3=${lan3}&apikey=${vhtear}`)
					client.sendMessage(from, ramlan, image, {quoted: mek})
					break
case 'bucintext':
					var gh = body.slice(10)
					if (args.length < 1) return reply('Teks nya mana um?')
					reply(mess.wait4)
					ramlan = await getBuffer(`https://api.vhtear.com/romancetext?text=${gh}&apikey=${vhtear}`)
					client.sendMessage(from, ramlan, image, {quoted: mek})
					break
case 'partytext':
					var gh = body.slice(10)
					if (args.length < 1) return reply('Teks nya mana um?')
					reply(mess.wait)
					ramlan = await getBuffer(`https://api.vhtear.com/partytext?text=${gh}&apikey=${vhtear}`)
					client.sendMessage(from, ramlan, image, {quoted: mek})
					break
case 'thundername':
					var gh = body.slice(12)
					if (args.length < 1) return reply('Teks nya mana um?')
					reply(mess.wait2)
					ramlan = await getBuffer(`https://api.vhtear.com/thundertext?text=${gh}&apikey=${vhtear}`)
					client.sendMessage(from, ramlan, image, {quoted: mek, caption: 'Nih tod :v'})
					break
//MENU COMLI

//
				default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
