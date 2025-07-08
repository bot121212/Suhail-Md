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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_23_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MSxcbiAgICAgICAgODMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgODMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgODcsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgODQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NixcbiAgICAgICAgODcsXG4gICAgICAgIDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4LFxuICAgICAgICAzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkwLFxuICAgICAgICA4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgNzksXG4gICAgICAgIDQxLFxuICAgICAgICA1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxOCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgODYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA2OCxcbiAgICAgICAgNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDU4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgODAsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDc3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTksXG4gICAgICAgIDM0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDUyLFxuICAgICAgICA4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvWkJMQnZiNkc0aFhNSEtWMlVnc2RzcmlDdmNmeU1rNUlHczZKTG02a3dVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhTVZnY01IWlJYMmZXYjdibUR4aEpnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU2ZWZhYTgwLTk1NmQtNDJmYy1iMmY5LTMxODM5YWJkYjYxMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjEsXG4gICAgICAxNTIsXG4gICAgICAxMzMsXG4gICAgICAxNjEsXG4gICAgICAxNDMsXG4gICAgICAyMTksXG4gICAgICAyNCxcbiAgICAgIDI0OCxcbiAgICAgIDI0MSxcbiAgICAgIDE5NCxcbiAgICAgIDc4LFxuICAgICAgMjIyLFxuICAgICAgNzAsXG4gICAgICA0NSxcbiAgICAgIDE5NixcbiAgICAgIDE0NixcbiAgICAgIDYsXG4gICAgICAyNDAsXG4gICAgICA2MSxcbiAgICAgIDIyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ0LFxuICAgICAgMTI3LFxuICAgICAgNTUsXG4gICAgICAxNzIsXG4gICAgICAxODEsXG4gICAgICAyMDEsXG4gICAgICAyMDYsXG4gICAgICAwLFxuICAgICAgMTUyLFxuICAgICAgMTc3LFxuICAgICAgMTQxLFxuICAgICAgMjQ2LFxuICAgICAgMTI4LFxuICAgICAgMTg4LFxuICAgICAgMjU1LFxuICAgICAgMTA2LFxuICAgICAgMTMsXG4gICAgICAxNzcsXG4gICAgICA0MSxcbiAgICAgIDE4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kyVHVNc0NFTytudGNNR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidEFPU1owME5BNVdiOCt6UFpTcjhwbE5xYkRYbmREakdidU5oMVZlVkdBcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1c1JOWVkxNXNUWnJlQytRWUd6Q0dBc1VTT0VOWWNVYmFneG5QYWhpenNyT2NSd3lQNFYzMWRET2RKNy95ZjNVSVd6d281M09yWlBHVTBzazdOTU1EZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4VjRGQ0RwNlkrenhSeFJnam9mSkhlTmI5WERnUGEwMkR4U1N5TFVoOUUvTm1FcUVMNVpnZWRpOUc0Qy9KN0N0Y0I5aGFXUHRoUzVCQWZlNFZUYktpUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk5NDQwMzYxMzQyMDozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTczNTA0Mzk3ODQ4NTg5OjM1QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTk0NDAzNjEzNDIwOjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc1MTk5NTM4MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUM1bFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQzVsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiM2llTnBoQkQvd1YzM3E4Nk8wdFdlY1RHT3lDY3cxK0gxaE5RTk8xakRWaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTUwNzcyNjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1MTk5NDUyMzc0OFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUM1bi5qc29uIjogIntcImtleURhdGFcIjpcInhDWlhreXg2MDM4aVVYNzFqemE5OXMvVlRxVHFNWDFKVGsyWEpTTnpnOGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njk1MDc3MjYxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTE5OTQ2MTAyMzNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDNXAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJab2JaSGEwbFhSTzY1Yk9tQXZBT0p6Y21tNjRTWlhuVmJXZENWR1JoUVpJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI2MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQzVxLmpzb24iOiAie1wia2V5RGF0YVwiOlwidDBYUnNFVkNWMExab21CSERmRXhuWkJnYlZ5ZTVPcEhrQWs0NUNOKzlNRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTUwNzcyNjEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1MTk5NTM2NDQyOVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQ0VBQUM1bS5qc29uIjogIntcImtleURhdGFcIjpcIk1yd0gyRy9GWTFyVFZYTDMvNUlqcjFELzNMeE9IRXZRYVdydWxZMWxBN2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njk1MDc3MjYxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwzM119LFwidGltZXN0YW1wXCI6XCIxNzUxOTk0NTU3Mjc2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFDRUFBQzVvLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZVkxMmQvOCtWbEN2WEc3WG8wT21NaFB6K3NxSVFVenRySmFRRHBmYnlXVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTUwNzcyNjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDMzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTE5OTQ2OTQ2ODdcIn0iCn0="  // PUT your SESSION_ID 


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
