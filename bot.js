const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const Jimp = require('jimp')
//try to make the bot which takes the photo and returns another version of the same photo
const TOKEN = '';

const bot = new Telegraf(TOKEN);

bot.start((ctx) => ctx.reply('Отправь мне свое селфи'));

bot.on(message('photo'), (ctx) => ctx.replyWithPhoto('https://meme-arsenal.com/create/meme/3348091'));

bot.hears('hi', (ctx) => ctx.reply('Hey there'));


bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));