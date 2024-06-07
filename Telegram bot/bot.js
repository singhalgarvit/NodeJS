const TelegramBot = require('node-telegram-bot-api');
const OpenAI = require("openai");
const dotenv=require('dotenv')
dotenv.config()

const token =process.env.token;
const OPENAI_API_KEY=process.env.OPENAI_API_KEY;

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    baseURL: "https://api.aimlapi.com",
  });

const bot = new TelegramBot(token, { polling: true });
bot.on('message',async (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;
  
    if (messageText === '/start') {
      bot.sendMessage(chatId, 'Welcome to the Garvit Singhal bot! Ask your question');
    }
    else{
        const chatCompletion = await openai.chat.completions.create({
            model: "mistralai/Mistral-7B-Instruct-v0.2",
            messages: [
              { role: "system", content: "You are a chat bot , answer in a sweet and helpful manner but keep the answer short   " },
              { role: "user", content: messageText}
            ],
            temperature: 0.7,
            max_tokens: 128,
          });
        bot.sendMessage(chatId,chatCompletion.choices[0].message.content);
    }
  });



 