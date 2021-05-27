import { Client } from 'discord.js';

const bot = new Client();

bot.on('ready', () => console.log(`${bot.user.username} Is Now Online!`));
bot.on('message', async (msg) => {
    if (msg.author.bot) return;

    await msg.reply('Hi!');
})
bot.login('ODIxMDQ1MDcxNjQxMzEzMjkx.YE9_zw.FZ5O0MKwwNRQsYNPkQwKYQq6ijw');
