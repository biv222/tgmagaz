const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const token = process.env.REACT_APP_BOT_TOKEN;
const webAppUrl = 'https://myrobux.shop';

const bot = new TelegramBot(token, { polling: true });
const app = express();

app.use(express.json());
app.use(cors());

// Обработка команды /start
bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  
  await bot.sendMessage(chatId, 'Добро пожаловать в наш магазин! 🛍️', {
    reply_markup: {
      keyboard: [[{
        text: 'Открыть магазин 🏪',
        web_app: { url: webAppUrl }
      }]],
      resize_keyboard: true
    }
  });
});

// Обработка данных из веб-приложения
bot.on('web_app_data', async (msg) => {
  const chatId = msg.chat.id;
  const data = JSON.parse(msg.web_app_data.data);
  
  await bot.sendMessage(chatId, `Заказ получен!\nСумма: ${data.totalSum}₽`);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
}); 