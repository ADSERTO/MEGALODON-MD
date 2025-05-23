# MEGALODON-MD


<p align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Black+Ops+One&size=80&pause=1000&color=8A2BE2&center=true&vCenter=true&width=1000&height=200&lines=MEGALODON-MD;VERSION+2025;BY+DYBY+TECH" alt="Typing SVG" />
  </a>
</p>

<h1 align="center">✨ THE NEXT GEN WHATSAPP BOT ✨<br>BY DYBY TECH</h1>

---

<p align="center">
  <img src="https://files.catbox.moe/rful77.jpg" width="700"/>
</p>

---

<p align="center">
  <a href="https://github.com/DybyTech">
    <img title="Author" src="https://img.shields.io/badge/Author-Dyby%20Tech-ff004d?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="https://whatsapp.com/channel/0029VatK7Ab6buMGF3Dq6q0V">
    <img title="Join WhatsApp Channel" src="https://img.shields.io/badge/Join-WhatsApp%20Channel-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />
  </a>
</p>

<p align="center">
  <img src="https://profile-counter.glitch.me/MEGALODON-MD/count.svg" alt="Visitor Count" />
</p>

---

## ✨ Features

- ✅ QR Code Generator for WhatsApp Pairing  
- ✅ Session Sharing System  
- ✅ Fully Open Source  
- ✅ Auto QR to DM  
- ✅ Session ID Generator (`MEGALODON-SESSION-ID`)  
- ✅ Multi Deploy Options (Render, Heroku, Koyeb, etc.)

---

## ⚙️ Deploy Easily

### 🔑 Get Your Session ID
[![MEGALODON MD SESSION](https://img.shields.io/badge/MEGALODON%20-MD%20SESSION-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://meg-lodon-session.onrender.com/)

---

### 🚀 Fork This Repo

<p align="center">
  <a href="https://github.com/DybyTech/MEGALODON-MD/fork">
    <img src="https://img.shields.io/badge/Fork%20This-Repository-8A2BE2?style=for-the-badge&logo=github&logoColor=white" />
  </a>
</p>

---

### ☁️ Deploy To Platforms

<p align="center">
  <a href="https://replit.com/github/DybyTech/MEGALODON-MD">
    <img src="https://img.shields.io/badge/Deploy%20To%20Replit-FFA500?style=for-the-badge&logo=replit&logoColor=white" />
  </a>
  <a href="https://railway.app/new/template?template=https://github.com/DybyTech/MEGALODON-MD">
    <img src="https://img.shields.io/badge/Deploy%20To%20Railway-8B5CF6?style=for-the-badge&logo=railway&logoColor=white" />
  </a>
  <a href="https://render.com/">
    <img src="https://img.shields.io/badge/Deploy%20To%20Render-06B6D4?style=for-the-badge&logo=render&logoColor=white" />
  </a>
</p>

<p align="center">
  <a href="https://dashboard.heroku.com/new?template=https://github.com/DybyTech/MEGALODON-MD/tree/main">
    <img src="https://img.shields.io/badge/Deploy-Heroku-FF004D?style=for-the-badge&logo=heroku&logoColor=white" />
  </a>
  <a href="https://host.talkdrove.com/share-bot/82">
    <img src="https://img.shields.io/badge/Deploy-TaikDrove-6971FF?style=for-the-badge&logo=google-cloud&logoColor=white" />
  </a>
  <a href="https://app.koyeb.com/services/deploy?type=git&repository=DybyTech/MEGALODON-MD&ports=3000">
    <img src="https://img.shields.io/badge/Deploy-Koyeb-FF009D?style=for-the-badge&logo=koyeb&logoColor=white" />
  </a>
</p>

---

### 📦 Download the Bot File

<p align="center">
  <a href="https://github.com/DybyTech/MEGALODON-MD/archive/refs/heads/main.zip">
    <img src="https://img.shields.io/badge/Download%20Bot-file-FF009D?style=for-the-badge&logo=github&logoColor=white" alt="Download Bot File" />
  </a>
</p>

Credits & Contributors

> <a href="https://github.com/DybyTech">
  <img alt="MEGALODON MD- OWNER" src="https://img.shields.io/badge/OWNER-DYBY%20TECH-FF0000?style=for-the-badge&logo=github" />
</a>  

 <a href="https://github.com/Itxxwasi"><img src="https://github.com/Itxxwasi.png" width="250" height="250" alt="Itxx Me Wasi"/></a>

<p><b>THANKS TO WASI TECH.</b></p>

---

### ⚙️ Configuration `.env` File

```env
SESSION_ID="MEGALODON~MD~"
AUTO_READ_STATUS=true
STATUS_READ_MSG="*Status Seen By MEGALODON-MD ⚡*"
AUTO_STATUS_REPLY=false
AUTO_REJECT_CALLS=false
MODE="public"
WELCOME=false
AUTO_READ_MESSAGES=false
AUTO_TYPING=false
OWNER_NAME="MEGALODON-MD"
OWNER_NUMBER="50934960331"
AUTO_RECORDING=false
ALWAYS_ONLINE=false
AUTO_BLOCK=true
AUTO_REACT=false
PREFIX="."
```

### ⚙️ .github/workflows/deploy.yml

```workflows
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  schedule:
    - cron: '0 */6 * * *'  

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Install FFmpeg
      run: sudo apt-get install -y ffmpeg

    - name: Start application with timeout
      run: |
        timeout 21590s npm start  # Limite l'exécution à 5h 59m 50s

    - name: Save state (Optional)
      run: |
        ./save_state.sh

     

