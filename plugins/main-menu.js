import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';
import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import config from '../config.cjs';
import axios from 'axios';

// Get total memory and free memory in bytes
const totalMemoryBytes = os.totalmem();
const freeMemoryBytes = os.freemem();

// Define unit conversions
const byteToKB = 1 / 1024;
const byteToMB = byteToKB / 1024;
const byteToGB = byteToMB / 1024;

// Function to format bytes to a human-readable format
function formatBytes(bytes) {
  if (bytes >= Math.pow(1024, 3)) {
    return (bytes * byteToGB).toFixed(2) + ' GB';
  } else if (bytes >= Math.pow(1024, 2)) {
    return (bytes * byteToMB).toFixed(2) + ' MB';
  } else if (bytes >= 1024) {
    return (bytes * byteToKB).toFixed(2) + ' KB';
  } else {
    return bytes.toFixed(2) + ' bytes';
  }
}

// Bot Process Time
const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds

// Uptime
const uptimeMessage = `*I am alive now since ${day}d ${hours}h ${minutes}m ${seconds}s*`;
const runMessage = `*☀️ ${day} Day*\n*🕐 ${hours} Hour*\n*⏰ ${minutes} Minutes*\n*⏱️ ${seconds} Seconds*\n`;

const xtime = moment.tz("Africa/Nairobi").format("HH:mm:ss");
const xdate = moment.tz("Africa/Nairobi").format("DD/MM/YYYY");
const time2 = moment().tz("Africa/Nairobi").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `Good Afternoon 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `Good Evening 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `Good Evening 🌃`;
} else {
  pushwish = `Good Night 🌌`;
}

const menu = async (m, Matrix) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const mode = config.MODE === 'public' ? 'public' : 'private';
  const pref = config.PREFIX;

  const validCommands = ['menu2', 'listmenu'];

  if (validCommands.includes(cmd)) {
    const str = `
╭━━━〔 *ᴍᴇɢᴀʟᴏᴅᴏɴ ᴍᴅ* 〕━━━┈⊷
┃✰╭──────────────
┃✰│ ᴏᴡɴᴇʀ : *${ᴄᴏɴғɪɢ.ᴏᴡɴᴇʀ_ɴᴀᴍᴇ}*
┃✰│ ᴜsᴇʀ : *${ᴍ.ᴘᴜsʜɴᴀᴍᴇ}*
┃✰│ ʙᴀɪʟᴇʏs : *ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ*
┃✰│ ᴛʏᴘᴇ : *ɴᴏᴅᴇᴊs*
┃✰│ ᴍᴏᴅᴇ : *${ᴍᴏᴅᴇ}*
┃✰│ ᴘʟᴀᴛғᴏʀᴍ : *${ᴏs.ᴘʟᴀᴛғᴏʀᴍ()}*
┃✰│ ᴘʀᴇғɪx : [${ᴘʀᴇғɪx}]
┃✰│ ᴠᴇʀsɪᴏɴ : *𝟷.𝟶.𝟶*
┃✰╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

> ${pushwish} *${m.pushName}*!

╭━━〔 *ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ᴀᴘᴋ
┃◈┃• ғᴀᴄᴇʙᴏᴏᴋ
┃◈┃• ᴍᴇᴅɪᴀғɪʀᴇ
┃◈┃• ᴘɪɴᴛᴇʀᴇsᴛᴅʟ
┃◈┃• ɢɪᴛᴄʟᴏɴᴇ
┃◈┃• ɢᴅʀɪᴠᴇ
┃◈┃• ɪɴsᴛᴀ
┃◈┃• ʏᴛᴍᴘ𝟹
┃◈┃• ʏᴛᴍᴘ𝟺
┃◈┃• ᴘʟᴀʏ
┃◈┃• sᴏɴɢ
┃◈┃• ᴠɪᴅᴇᴏ
┃◈┃• ʏᴛᴍᴘ𝟹ᴅᴏᴄ
┃◈┃• ʏᴛᴍᴘ𝟺ᴅᴏᴄ
┃◈┃• ᴛɪᴋᴛᴏᴋ
┃◈└───────────┈⊷
╰──────────────┈⊷

╭━━〔 *ᴄᴏɴᴠᴇʀᴛᴇʀ ᴍᴇɴᴜ* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ᴀᴛᴛᴘ
┃◈┃• ᴀᴛᴛᴘ𝟸
┃◈┃• ᴀᴛᴛᴘ𝟹
┃◈┃• ᴇʙɪɴᴀʀʏ
┃◈┃• ᴅʙɪɴᴀʀʏ
┃◈┃• ᴇᴍᴏᴊɪᴍɪx
┃◈┃• ᴍᴘ𝟹
┃◈└───────────┈⊷
╰──────────────┈⊷

╭━━〔 *ᴀɪ ᴍᴇɴᴜ* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ᴀɪ
┃◈┃• ʙᴜɢ
┃◈┃• ʀᴇᴘᴏʀᴛ
┃◈┃• ɢᴘᴛ
┃◈┃• ᴅᴀʟʟᴇ
┃◈┃• ʀᴇᴍɪɴɪ
┃◈┃• ɢᴇᴍɪɴɪ
┃◈└───────────┈⊷
╰──────────────┈⊷

╭━━〔 *ᴛᴏᴏʟs ᴍᴇɴᴜ* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ᴄᴀʟᴄᴜʟᴀᴛᴏʀ
┃◈┃• ᴛᴇᴍᴘᴍᴀɪʟ
┃◈┃• ᴄʜᴇᴄᴋᴍᴀɪʟ
┃◈┃• ᴛʀᴛ
┃◈┃• ᴛᴛs
┃◈└───────────┈⊷
╰──────────────┈⊷

╭━━〔 *ɢʀᴏᴜᴘ ᴍᴇɴᴜ* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ʟɪɴᴋɢᴄ
┃◈┃• sᴇᴛᴘᴘɢᴄ
┃◈┃• sᴇᴛɴᴀᴍᴇ
┃◈┃• sᴇᴛᴅᴇsᴄ
┃◈┃• ɢʀᴏᴜᴘ
┃◈┃• ɢᴄsᴇᴛᴛɪɴɢ
┃◈┃• ᴡᴇʟᴄᴏᴍᴇ
┃◈┃• ᴀᴅᴅ
┃◈┃• ᴋɪᴄᴋ
┃◈┃• ᴋɪᴄᴋᴀʟʟ
┃◈┃• ᴘʀᴏᴍᴏᴛᴇ
┃◈┃• ᴘʀᴏᴍᴏᴛᴇᴀʟʟ
┃◈┃• ᴅᴇᴍᴏᴛᴇ
┃◈┃• ᴅᴇᴍᴏᴛᴇᴀʟʟ
┃◈┃• ʜɪᴅᴇᴛᴀɢ
┃◈┃• ᴛᴀɢᴀʟʟ
┃◈┃• ᴀɴᴛɪʟɪɴᴋ
┃◈┃• ᴀɴᴛɪᴛᴏxɪᴄ
┃◈┃• ɢᴇᴛʙɪᴏ
┃◈└───────────┈⊷
╰──────────────┈⊷

╭━━〔 *sᴇᴀʀᴄʜ ᴍᴇɴᴜ* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ᴘʟᴀʏ
┃◈┃• ʏᴛs
┃◈┃• ɪᴍᴅʙ
┃◈┃• ɢᴏᴏɢʟᴇ
┃◈┃• ɢɪᴍᴀɢᴇ
┃◈┃• ᴘɪɴᴛᴇʀᴇsᴛ
┃◈┃• ᴡᴀʟʟᴘᴀᴘᴇʀ
┃◈┃• ᴡɪᴋɪᴍᴇᴅɪᴀ
┃◈┃• ʏᴛsᴇᴀʀᴄʜ
┃◈┃• ʀɪɴɢᴛᴏɴᴇ
┃◈┃• ʟʏʀɪᴄs
┃◈└───────────┈⊷
╰──────────────┈⊷

╭━━〔 *ᴍᴀɪɴ ᴍᴇɴᴜ* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ᴘɪɴɢ
┃◈┃• ᴀʟɪᴠᴇ
┃◈┃• ᴏᴡɴᴇʀ
┃◈┃• ᴍᴇɴᴜ
┃◈┃• ɪɴғᴏʙᴏᴛ
┃◈└───────────┈⊷
╰──────────────┈⊷

╭━━〔 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ᴊᴏɪɴ
┃◈┃• ʟᴇᴀᴠᴇ
┃◈┃• ʙʟᴏᴄᴋ
┃◈┃• ᴜɴʙʟᴏᴄᴋ
┃◈┃• sᴇᴛᴘᴘʙᴏᴛ
┃◈┃• ᴀɴᴛɪᴄᴀʟʟ
┃◈┃• sᴇᴛsᴛᴀᴛᴜs
┃◈┃• sᴇᴛɴᴀᴍᴇʙᴏᴛ
┃◈┃• ᴀᴜᴛᴏᴛʏᴘɪɴɢ
┃◈┃• ᴀʟᴡᴀʏsᴏɴʟɪɴᴇ
┃◈┃• ᴀᴜᴛᴏʀᴇᴀᴅ
┃◈┃• ᴀᴜᴛᴏsᴠɪᴇᴡ
┃◈└───────────┈⊷
╰──────────────┈⊷

╭━━〔 *sᴛᴀʟᴋ ᴍᴇɴᴜ* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ᴛʀᴜᴇᴄᴀʟʟᴇʀ
┃◈┃• ɪɴsᴛᴀsᴛᴀʟᴋ
┃◈┃• ɢɪᴛʜᴜʙsᴛᴀʟᴋ
┃◈└───────────┈⊷
╰──────────────┈⊷
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴇɢᴀʟᴏᴅᴏɴ ᴍᴅ*`;

    // Check if MENU_IMAGE exists in config and is not empty
    let menuImage;
    if (config.MENU_IMAGE && config.MENU_IMAGE.trim() !== '') {
      try {
        // Try to fetch the image from URL
        const response = await axios.get(config.MENU_IMAGE, { responseType: 'arraybuffer' });
        menuImage = Buffer.from(response.data, 'binary');
      } catch (error) {
        console.error('Error fetching menu image from URL, falling back to local image:', error);
        menuImage = fs.readFileSync('https://files.catbox.moe/230q0c.jpg');
      }
    } else {
      // Use local image if MENU_IMAGE is not configured
      menuImage = fs.readFileSync('https://files.catbox.moe/230q0c.jpg');
    }

    await Matrix.sendMessage(m.from, {
      image: menuImage,
      caption: str,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363397722863547@newsletter',
          newsletterName: "MEGALODON MD",
          serverMessageId: 143
        }
      }
    }, {
      quoted: m
    });
    
    await Matrix.sendMessage(m.from, { react: { text: "💫", key: m.key } });

    // Send audio after sending the menu
    await Matrix.sendMessage(m.from, {
      audio: { url: 'https://files.catbox.moe/rvfjap.mp3' },
      mimetype: 'audio/mp4',
      ptt: true
    }, { quoted: m });
  }
};

export default menu;
