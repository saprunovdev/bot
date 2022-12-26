const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const Jimp = require('jimp')

const TOKEN = '5637821156:AAHO5v4jrvK-RlBiBW092H4ZhgpQIuUWMYY';

const bot = new Telegraf(TOKEN);

bot.start((ctx) => ctx.reply('Отправь мне свое селфи'));

bot.on(message('photo'), (ctx) => ctx.replyWithPhoto('https://meme-arsenal.com/create/meme/3348091'));

bot.hears('hi', (ctx) => ctx.reply('Hey there'));


bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));