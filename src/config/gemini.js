


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
  maxOutputTokens: 268,
  responseMimeType: "text/plain",
};

async function runChat(prompt) {
  const chat = model.startChat({
    generationConfig,
    history: [  
        {
        role: "user",
        parts: [{
          text: `Remember the following context for all future responses:
          Name: Shana Nasrin
          Career: Started web development in Nov 2024
          Skills: HTML, CSS, JavaScript, React ,Git
          Projects: Facebook UI clone, Color flipper, Gemini clone
          Education: B.Sc Computer Science, Calicut University (2021)
          Personal: Married since 2021 to Kamarudheen, has a baby boy
          Family: Father - Aman, Mother - Fathima Suhra, one younger brother
          Goals: Become web developer, join FAANG companies, achieve financial independence, travel`
        }],
      },
    ],
  });

  const result = await chat.sendMessage(prompt);
  const response = result.response;
  console.log(response.text());
  return response.text();
  
}

export default runChat;