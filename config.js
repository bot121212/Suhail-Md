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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_18_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNixcbiAgICAgICAgMTE0LFxuICAgICAgICA0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExLFxuICAgICAgICA4MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjA0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDkxLFxuICAgICAgICA1NyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTksXG4gICAgICAgIDM4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTgsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjksXG4gICAgICAgIDExNixcbiAgICAgICAgMTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDcxLFxuICAgICAgICAxODUsXG4gICAgICAgIDc4LFxuICAgICAgICA1NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1LFxuICAgICAgICA2OCxcbiAgICAgICAgNSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgODAsXG4gICAgICAgIDEzLFxuICAgICAgICAyNSxcbiAgICAgICAgODEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODIsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODMsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDg1LFxuICAgICAgICA1NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc0LFxuICAgICAgICA5NCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlh1LzFwcGIxbk9vRVN3d3VqUlNxQnJLcmIvVmhqRDE3UGVtMmkveFF6UVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTk0NDAzNjEzNDIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxNzQ0MEQwMkRDRThFM0Q1ODU2MjY3QTUxNjQ0RTY0RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTEyOTY2OTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5OTQ0MDM2MTM0MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQzNEUyRDVBRjU2MjUyOTI2MUY0MUVEMTNENjVCODU0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1MTI5NjY5NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJudVk0eWtSMlFhSzROQXNiRzAycGx3XCIsXG4gIFwicGhvbmVJZFwiOiBcImIzM2NjOTdmLTc3NDEtNDZmMi05NjhhLTBlMDdiZmM3ODYyY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTQsXG4gICAgICAzMixcbiAgICAgIDE2NCxcbiAgICAgIDYsXG4gICAgICA4NyxcbiAgICAgIDIzOSxcbiAgICAgIDEwNixcbiAgICAgIDE0MyxcbiAgICAgIDI1LFxuICAgICAgMTE3LFxuICAgICAgMzcsXG4gICAgICAxNzEsXG4gICAgICA3LFxuICAgICAgMyxcbiAgICAgIDIwMyxcbiAgICAgIDIxNixcbiAgICAgIDMyLFxuICAgICAgMTE1LFxuICAgICAgMTMxLFxuICAgICAgNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NyxcbiAgICAgIDE1MyxcbiAgICAgIDgzLFxuICAgICAgNTUsXG4gICAgICAyMjUsXG4gICAgICAxOTYsXG4gICAgICAyNyxcbiAgICAgIDY3LFxuICAgICAgNzAsXG4gICAgICA1MyxcbiAgICAgIDEwNyxcbiAgICAgIDQ3LFxuICAgICAgMzUsXG4gICAgICAxNzUsXG4gICAgICAyNTQsXG4gICAgICA3OSxcbiAgICAgIDE3NyxcbiAgICAgIDE5LFxuICAgICAgNjcsXG4gICAgICAxODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJeVR1TXNDRUsvVmlzTUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInRBT1NaMDBOQTVXYjgrelBaU3I4cGxOcWJEWG5kRGpHYnVOaDFWZVZHQXM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieWtuR0x6U2tPL0ZONjBmWU5qZlVuWWxMdTNReXdYVkU3UU1ZRVFkbi9YQVEwOEcyNWNtZjhheVozN1kwWlBjTy9BRS9odlZJdXBtK1JWUUNrKzU0Q3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSzBuZ3VORSt5WGlzaVpuZ045a2hDNnZhQk15aDJNczVTZXVudHJKWm5GQ1I5MFA3dnlNTzVsRlc1Z2Erd1VteWJvMjJpMXN5ZTF5SWhLMnBmZHM4QXc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5OTQ0MDM2MTM0MjA6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3MzUwNDM5Nzg0ODU4OTozMUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCZ8J2QovCdkIPwnZCiIPCdkIzwnZCA8J2Qi/CdkIjwnZCK4oGwwrnCsvCfjLhcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk5NDQwMzYxMzQyMDozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTEyOTY2ODksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUJzQUFJVkhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlWRy5qc29uIjogIntcImtleURhdGFcIjpcIlkydVlGVk1oc0swTXQ2am05bm1ENkY3N2hYVzdFTi9EZHNzUkhuOXNrTkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njk1MDc3MjYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTEyOTYxMDkyMTVcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJVkkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNZHhsK1ZQUm9YZzBDNGtSaWxRQWJOZ1NOZmtLRlBGbHZFOXRzdndrbDBFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI2MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSVZKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOVU3Um93cjFGS1F4U3ZKbWRoWEdybGg2dHphU0dLUHY0V0xIR2ZseGYzcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTUwNzcyNjAsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlWSy5qc29uIjogIntcImtleURhdGFcIjpcIlB3bFE5eTE5MzQwZzFBaDhXeUhOTk80SXhiOGI0NUNRTDU2cGZiL0NyV3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Njk1MDc3MjYwLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJVkwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCSjBrVFhaTEE5aUxRQzQ4eVFJTXVIYzhpM0VBZDh5VmsyNVZ3TERNKzhVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY5NTA3NzI2MCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUxMjk2Njc3MTQ5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFCc0FBSVZILmpzb24iOiAie1wia2V5RGF0YVwiOlwiN0locFdHZTI5OTVRTTI2bWsvTEJNcjBlK0I4TUttT2VCeFA1QTF6UlRLbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2OTUwNzcyNjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDI3XX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTEyOTYyNTIwMTBcIn0iCn0="  // PUT your SESSION_ID 


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
