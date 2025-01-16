


import {
  GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
} from "@google/generative-ai"
// import { response } from "express";


const genAI = new GoogleGenerativeAI("AIzaSyBM4W0puuefKFDgRzKMzEHKZarHhYHU2og");

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function runChat(prompt) {
  const chat = model.startChat({
    generationConfig,
    history: [
    ],
  });

  const result = await chat.sendMessage(prompt);
  const response = result.response;
  console.log(response.text());
//   return response.text();
  
}

export default runChat;