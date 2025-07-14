const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "03046316500";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_32_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzksXG4gICAgICAgIDM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3MixcbiAgICAgICAgMjU0LFxuICAgICAgICA1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExLFxuICAgICAgICA2MixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjksXG4gICAgICAgIDU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDk4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA1NyxcbiAgICAgICAgNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDUwLFxuICAgICAgICA0MixcbiAgICAgICAgODUsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4OSxcbiAgICAgICAgODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA4LFxuICAgICAgICA3LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDUzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODAsXG4gICAgICAgIDExMixcbiAgICAgICAgOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDcxLFxuICAgICAgICA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDY0LFxuICAgICAgICA2MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTczLFxuICAgICAgICA0OSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzREtsVHRNS01qU1kyclRIOVQrUm5hT2gvNllEVFFKdldLRUZ4SS9ESitzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk5NDQwMzYxMzQyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOURGOTM2MTJFMDE1MjQ2MDA1MzM0RTE3OEY1M0JCMDlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzUyNDc4MzI1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTk0NDAzNjEzNDIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMDRFOTgxODM2RTk0MjZDMDFCNzdCRTM1RTE0NkZGMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTI0NzgzMjhcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiakRNVV9iS3NRemV0RW94MUctWlU3d1wiLFxuICBcInBob25lSWRcIjogXCI0YzA5YzNmMi1iYjM0LTQ4ZjMtOTA1My04NTk4ODk3MzEzNWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgxLFxuICAgICAgMTI3LFxuICAgICAgMTkyLFxuICAgICAgMTIzLFxuICAgICAgMTM4LFxuICAgICAgNjQsXG4gICAgICAxMzgsXG4gICAgICAxNTksXG4gICAgICAxNCxcbiAgICAgIDExMyxcbiAgICAgIDIyMixcbiAgICAgIDE0LFxuICAgICAgMjQxLFxuICAgICAgMTk0LFxuICAgICAgMjM3LFxuICAgICAgMTY0LFxuICAgICAgMjYsXG4gICAgICAxNTUsXG4gICAgICA1MCxcbiAgICAgIDE5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM4LFxuICAgICAgMjM4LFxuICAgICAgMTk3LFxuICAgICAgMTU2LFxuICAgICAgMTM1LFxuICAgICAgMTgsXG4gICAgICA0NSxcbiAgICAgIDIxLFxuICAgICAgMTIsXG4gICAgICAxNTUsXG4gICAgICAxMzEsXG4gICAgICA4OSxcbiAgICAgIDIyOSxcbiAgICAgIDIyNixcbiAgICAgIDgwLFxuICAgICAgMjM3LFxuICAgICAgMTc1LFxuICAgICAgMjMsXG4gICAgICAxMTUsXG4gICAgICA2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0k2VHVNc0NFTy9rMHNNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidEFPU1owME5BNVdiOCt6UFpTcjhwbE5xYkRYbmREakdidU5oMVZlVkdBcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsTkJyRnJCekdqNHpGazViZkkrTnBDaDF3ZWhCRWpERk1oS0VqbnVvaWY4UUVucy9xRTJMTE1OSEdxRnppRUJSa3A1QjNzZTkwVW1oV1pMZ2VCQmdBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtcGNJaEpVL0txc0VuUEZqMkZCM29JLzZQRHYvaTB4MmRjcEJEb25wb2RzNTVra3B1QVJMcFFJbjFadWRXbG9sN3FFVzRqQXhEUFVNRlZ3aVpOM3JBQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk5NDQwMzYxMzQyMDo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTczNTA0Mzk3ODQ4NTg5OjQ2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTk0NDAzNjEzNDIwOjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1MjQ3ODMyMlxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "🌸ضـ۬ـۧۛـ𝆊۬ـ۬ــــ۬ـۧۛـ𝆊۬دی مــّْ͢ـْــلـ۬ـۧۛـ𝆊۬ک⁰¹²🩷03247116683🤌🏻",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
