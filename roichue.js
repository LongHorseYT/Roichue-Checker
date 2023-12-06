//ROİCHUE - TURKHACKTEAM.ORG/NET

const fs = require('fs');
const { Client } = require('discord.js-selfbot-v13');

async function checkTokenStatus(token) {
  try {
    const client = new Client({
      checkUpdate: false
    });

    client.once('ready', () => {
      console.log(`${token} | Token Durumu: \x1b[32mAktif\x1b[0m`);
      client.destroy();
    });

    await client.login(token);
  } catch (error) {
    console.log(`${token} | Token Durumu: \x1b[31mPasif\x1b[0m`);
  }
}

async function calistir() {
  try {
    const tokenler = fs.readFileSync('tokenler.txt', 'utf8').split('\n').map(line => line.trim());

    await Promise.all(tokenler.map(token => checkTokenStatus(token)));

    console.log('Tüm tokenler kontrol edildi.');
  } catch (error) {
    console.error(error);
  }
}

calistir();

process.on('unhandledRejection', error => {
  console.error(error);
});

process.on('uncaughtException', error => {
  console.error(error);
});