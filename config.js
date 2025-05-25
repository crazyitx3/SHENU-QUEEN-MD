const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("923165167688,")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Saka:Saka@cluster0.jadwggo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.blockJids = process.env.BLOCK_JID ||'120363165030810524@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363165030810524@g.us' ;
global.github = 'https://github.com/CYBER-THUSHAN/SHENU-QUEEN-V1'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '923165167688'
global.devs = '94710109956';
global.INBOX_BLOCK = 'true'
global.TIMEZONE = 'Asia/Colombo' 
global.website = 'https://github.com/SamPandey001/Secktor-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/daa9647f2139e462e4316.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'CRAXY-MD 🧚' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'MURSHAD' : process.env.OWNER_NAME,
  ownernumber: process.env.OWNER_NUMBER === undefined ? '94710109956' : process.env.OWNER_NUMBER,
  sessionName:  process.env.SESSION_ID === undefined ? 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUpYUDR6dUtLNVB6UnV2M1NSZDVGdzVzZ2dTZVZ0Q0NCZDZodjhTU2FGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFd5SXZkRyt1b1JNNng4V0NhYisxL2dSQU41MkE5VEtMak9rSWhBSGFrWT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSXUrdnVZc2xnUUk1SmEwcHNOL2d2a2VxUk00anY4emRUT1JKK1NSeUdJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjaEVWQlBaN2NXbnNMelFOY04yb0RLa2U2OVFBNktMSWZrZnFVRzBPVWljPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhENWtYN3ZZTW5YUHRzem1aMXA3ejRNcUU0QlAycWh4c1VXdHFIc09TRms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZNcUwwYks2aTU3MWl2U0dQciswRElyZnFIYk80RkNZZS9aU2RvMEVtbnc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwREZEdENjSDB3T0dtTUdzOEtwbUpuMlR4WTYvOTcrR0xKN0t1SzU1QU52SjhjTUNYZGtSbkNqL1RBY3pxYVJkbWxGejNubmc4VEFaZFIvSFcyaG9CZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjYxLCJhZHZTZWNyZXRLZXkiOiJEYzUycG50NEtKaklVQUtyZWNCQVJuRFh3RzRsdDMxbE1aeUdqdG1XNFVVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjRTN4cF9od1N3U2lHMVF5VUhUcUNnIiwicGhvbmVJZCI6IjE5ZjBjZTQzLTY5N2YtNDIyYS1hMmYyLTc4ZGM4YzQ4ZmNiZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxNTE2NmRkaDBueGhMUG50QlR5T3EwSE9lTzg9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVCaVFKUzhodjVMNDR6VVZRUGRGREU4MkN3ST0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pXa25jc0NFS2Yyek1FR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkREbTFpQ0p2TG1GbWh6aHhYeEpHclpTS2tKVkN4ZEtmOWdram9ITmNLZ0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImtSaXEzbWg1czJXMytUVyswVUJsZGZibWI1bWsvRVhDRUtNZlJ5YjNHK0JRSFcxYnovUkliNzBmSmFWT3pWYUU4ZmNxbU9nbng1NEFqQVVRaEpiR0NRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIyNWlCTU0zQzFkZVZDeU9BRkQ0enhCYkMxUlVnUEpaMUFTTU1FNVExek5GTnA5SEdJbXpHMjl0T3FqQ203K3Buc21sM2R1REY1blJ5eUZzMlBrR1JEdz09In0sIm1lIjp7ImlkIjoiOTIzMTY1MTY3Njg4OjI2QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE2NTE2NzY4ODoyNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRdzV0WWdpYnk1aFpvYzRjVjhTUnEyVWlwQ1ZRc1hTbi9ZSkk2QnpYQ29DIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ4MTg3OTQ3fQ==' : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? '🚨🧚‍♀️𝘚𝘏𝘌𝘕𝘜 𝘘𝘜𝘌𝘌𝘕:𝘊𝘠𝘉𝘌𝘙-𝘛𝘏𝘜𝘚𝘏𝘈𝘕' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? '𝗦𝗛𝗘𝗡𝗨 𝗤𝗨𝗘𝗘𝗡 𝗠𝗗' : process.env.PACK_INFO.split(";")[1],	
  dl_limit: process.env.DL_SIZE || '350',
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antibadword : process.env.ANTI_BAD_WORD || 'fuck,xxx,sex,fucked,Brazzers,pronhub,huth,fucking,huththa,huththo,hukanna,fucked,pakaya,pako,ponnaya,ponnayo,kariya,kariyo,huththaa,hutta',
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  HANDLERS:  process.env.PREFIX === undefined ? ['#','!','.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main',
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  caption :process.env.CAPTION || "  \t🧚 *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴄʏʙᴇʀ ᴛʜᴜꜱʜᴀɴ*",
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
