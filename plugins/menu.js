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

  const validCommands = ['menu','menu2'];

  if (validCommands.includes(cmd)) {
    const mainMenu = `
╭━━━〔 *🕸ᴍᴇɢᴀʟᴏᴅᴏɴ ᴍᴅ 🕸* 〕━━━┈⊷
┃✰╭──────────────
┃✰│ ᴏᴡɴᴇʀ : *${config.owner_name}*
┃✰│ ᴜsᴇʀ : *$${m.pushname}*
┃✰│ ʙᴀɪʟᴇʏs : *ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ*
┃✰│ ᴛʏᴘᴇ : *ɴᴏᴅᴇᴊs*
┃✰│ ᴍᴏᴅᴇ : *${mode}*
┃✰│ ᴘʟᴀᴛғᴏʀᴍ : *${os.platform()}*
┃✰│ ᴘʀᴇғɪx : [${prefix}]
┃✰│ ᴠᴇʀsɪᴏɴ : *𝟷.𝟶.𝟶*
┃✰╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

> ${pushwish} ${m.pushName}

╭━━〔 *ᴍᴇɴᴜ ʟɪsᴛ* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• 𝟷. ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ      
┃◈┃• 𝟸. ᴄᴏɴᴠᴇʀᴛᴇʀ ᴍᴇɴᴜ        
┃◈┃• 𝟹. ᴀɪ ᴍᴇɴᴜ  
┃◈┃• 𝟺. ᴛᴏᴏʟs ᴍᴇɴᴜ  
┃◈┃• 𝟻. ɢʀᴏᴜᴘ ᴍᴇɴᴜ 
┃◈┃• 𝟼. sᴇᴀʀᴄʜ ᴍᴇɴᴜ   
┃◈┃• 𝟽. ᴍᴀɪɴ ᴍᴇɴᴜ
┃◈┃• 𝟾. ᴏᴡɴᴇʀ ᴍᴇɴᴜ 
┃◈┃• 𝟿. sᴛᴀʟᴋ ᴍᴇɴᴜ     
┃◈┃•    ᴜᴘᴅᴀᴛᴇ
┃◈└───────────┈⊷
╰──────────────┈⊷
> *ʀᴇᴘʟʏ ᴡɪᴛʜ ᴛʜᴇ ɴᴜᴍʙᴇʀ (𝟷-𝟿)*`;

    // Function to get menu image
    const getMenuImage = async () => {
      if (config.MENU_IMAGE && config.MENU_IMAGE.trim() !== '') {
        try {
          const response = await axios.get(config.MENU_IMAGE, { responseType: 'arraybuffer' });
          return Buffer.from(response.data, 'binary');
        } catch (error) {
          console.error('Error fetching menu image from URL, falling back to local image:', error);
          return fs.readFileSync('https://files.catbox.moe/230q0c.jpg');
        }
      } else {
        return fs.readFileSync('https://files.catbox.moe/230q0c.jpg');
      }
    };

    const menuImage = await getMenuImage();

    const sentMessage = await Matrix.sendMessage(m.from, {
      image: menuImage,
      caption: mainMenu,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363397722863547@newsletter',
          newsletterName: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴇɢᴀʟᴏᴅᴏɴ ᴍᴅ",
          serverMessageId: 143
        }
      }
    }, {
      quoted: m
    });
    
    

    // Send audio after sending the menu
    await Matrix.sendMessage(m.from, {
      audio: { url: 'https://files.catbox.moe/rvfjap.mp3' },
      mimetype: 'audio/mp4',
      ptt: true
    }, { quoted: m });

    // Set up listener for menu selection
    Matrix.ev.on('messages.upsert', async (event) => {
      const receivedMessage = event.messages[0];
      if (!receivedMessage?.message?.extendedTextMessage) return;

      const receivedText = receivedMessage.message.extendedTextMessage.text.trim();
      if (receivedMessage.message.extendedTextMessage.contextInfo?.stanzaId !== sentMessage.key.id) return;

      let menuResponse;
      let menuTitle;
      
      switch (receivedText) {
        case "1":
          menuTitle = "Download Menu";
          menuResponse = `
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
╰──────────────┈⊷`;
          break;
          
        case "2":
          menuTitle = "Converter Menu";
          menuResponse = `
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
╰──────────────┈⊷`;
          break;
          
        case "3":
          menuTitle = "AI Menu";
          menuResponse = `
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
╰──────────────┈⊷`;
          break;
          
        case "4":
          menuTitle = "Tools Menu";
          menuResponse = `
╭━━〔 *ᴛᴏᴏʟs ᴍᴇɴᴜ* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ᴄᴀʟᴄᴜʟᴀᴛᴏʀ
┃◈┃• ᴛᴇᴍᴘᴍᴀɪʟ
┃◈┃• ᴄʜᴇᴄᴋᴍᴀɪʟ
┃◈┃• ᴛʀᴛ
┃◈┃• ᴛᴛs
┃◈└───────────┈⊷
╰──────────────┈⊷`;
          break;
          
        case "5":
          menuTitle = "Group Menu";
          menuResponse = `
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
╰──────────────┈⊷`;
          break;
          
        case "6":
          menuTitle = "Search Menu";
          menuResponse = `
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
╰──────────────┈⊷`;
          break;
          
        case "7":
          menuTitle = "Main Menu";
          menuResponse = `
╭━━〔 *ᴍᴀɪɴ ᴍᴇɴᴜ* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ᴘɪɴɢ
┃◈┃• ᴀʟɪᴠᴇ
┃◈┃• ᴏᴡɴᴇʀ
┃◈┃• ᴍᴇɴᴜ
┃◈┃• ɪɴғᴏʙᴏᴛ
┃◈└───────────┈⊷
╰──────────────┈⊷`;
          break;
          
        case "8":
          menuTitle = "Owner Menu";
          menuResponse = `
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
╰──────────────┈⊷`;
          break;
          
        case "9":
          menuTitle = "Stalk Menu";
          menuResponse = `
╭━━〔 *sᴛᴀʟᴋ ᴍᴇɴᴜ* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ᴛʀᴜᴇᴄᴀʟʟᴇʀ
┃◈┃• ɪɴsᴛᴀsᴛᴀʟᴋ
┃◈┃• ɢɪᴛʜᴜʙsᴛᴀʟᴋ
┃◈└───────────┈⊷
╰──────────────┈⊷`;
          break;
          
        default:
          menuTitle = "Invalid Choice";
          menuResponse = "*Invalid Reply Please Reply With A Number Between 1 to 9*";
      }

      // Format the full response with title and description
      const fullResponse = `
╭━━━〔 *ᴍᴇɢᴀʟᴏᴅᴏɴ ᴍᴅ- ${ᴍᴇɴᴜᴛɪᴛʟᴇ}* 〕━━━┈⊷
┃★╭──────────────
┃★│• ᴏᴡɴᴇʀ : *${config.owner_name}*
┃★│• ᴜsᴇʀ : *${m.pushname}*
┃★│• ᴘʀᴇғɪx : [${prefix}]
┃★│• ᴠᴇʀsɪᴏɴ : *𝟷.𝟶.𝟶*
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

${menuResponse}

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴇɢᴀʟᴏᴅᴏɴ ᴍᴅ*`;

      // Send the response with image and context info
      await Matrix.sendMessage(m.from, {
        image: menuImage,
        caption: fullResponse,
        contextInfo: {
          mentionedJid: [m.sender],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363397722863547@newsletter',
            newsletterName: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴇɢᴀʟᴏᴅᴏɴ ᴍᴅ",
            serverMessageId: 143
          }
        }
      }, {
        quoted: receivedMessage
      });
    });
  }
};

export default menu;
