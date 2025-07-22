import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hello: 'Hello!',
      nameIs: 'my name is',
      pitch: 'A driven, solution-oriented, and a skilled facilitator who fosters collaboration and collective problem-solving within the team.',
      aboutMe: 'ABOUT ME',
      projects: 'PROJECTS',
      Skills: 'Skills',
      hoAmI: 'Who am I?',
      openCV: 'Open CV',
      wilmasAgentRowOne: 'Hi!',
      wilmasAgentRowTwo: 'I am Wilma\'s AI agent',
      wilmasAgentRowThree: 'Click here to chat with me',
      askSomething: 'Ask something about Wilma',
      writeAMessage: 'Write a message...',
      send: 'Send',
      sendingMessage: 'Sending question...',
      tooManyRequests: 'Too many requests, please try again later.',
      welcomeMessage: 'Hi! 👋 I am Wilma\'s AI bot. I can answer questions about Wilma and her experiences as a frontend developer.\n\nHere are some examples of what you can ask:\n• What has Wilma worked on before?\n• Why did Wilma choose to become a frontend developer?\n• How was her thesis project?',
      somethingWentWrong: 'Wilma is currently working on deploying the backend – please come back later to test the Catbot!',
      hoAmIText: 'Hi! I\'m Wilma, a frontend developer. with a strong interest in creating intuitive and user-friendly digital solutions. Structured and organized, I manage development processes efficiently with a problem-solving and communicative approach. I thrive both in teams and independently, and my eye for detail ensures that I always strive for high quality in both function and design. As the tech industry is constantly evolving, I am flexible and curious – always ready to learn something new. I am now looking for a role where I can combine my creativity with my technical skills while utilizing my communication abilities.',
      projectDescriptionsGardenPlanner: 'A garden planner with React, Konva.js for 2D graphics, Zustand for state management, and Firestore for saving and loading user designs.',
      projectDescriptionsChappy: 'Chappy a chat application built with Node.js, Express, and TypeScript for RESTful CRUD operations, using MongoDB as the database and JWT for authentication.',
      projectDescriptionsDivingDelights: 'A webshop with React, React Router (HashRouter), Zustand for state management, and Firestore for data storage.',
      projectDescriptionsNotes: 'Create and delete notes. Switch between dark and light mode. Search notes using the search field. Notes are stored locally in the browser.',
      projectDescriptionsHangman: 'A group project that combines JavaScript, HTML, and CSS. A classic Hangman game that saves the player\'s results locally.',
      projectDescriptionsPokemon: 'Search for Pokémon from an external API. Add and remove Pokémon from your team and move them to the reserve list.',
    }
  },
  sv: {
    translation: {
      hello: 'Hej!',
      nameIs: 'mitt namn är',
      pitch: 'En driven, lösningorienterad och en skicklig facilitator som främjar samarbete och gemensam problemlösning i teamet.',
      aboutMe: 'OM MIG',
      projects: 'PROJEKT',
      hoAmI: 'Vem är jag?',
      Skills: 'Färdigheter',
      openCV: 'Öppna CV',
      wilmasAgentRowOne: 'Hej!',
      wilmasAgentRowTwo: 'Jag är Wilmas AI-agent',
      wilmasAgentRowThree: 'Klicka här för att chatta med mig',
      askSomething: 'Ställ en fråga om Wilma',
      writeAMessage: 'Skriv ett meddelande...',
      send: 'Skicka',
      sendingMessage: 'Skickar fråga...',
      welcomeMessage: 'Hej! 👋 Jag är Wilmas AI-bot. Jag kan svara på frågor om Wilma och hennes erfarenheter som frontendutvecklare.\n\nHär är några exempel på vad du kan fråga:\n• Vad har Wilma jobbat med tidigare?\n• Varför valde Wilma att bli frontendutvecklare? \n• Hur var hennes examensarbete?',
      tooManyRequests: 'För många förfrågningar, försök igen senare.',
      somethingWentWrong: 'Wilma jobbar just nu med att deploya backend – kom gärna tillbaka senare för att testa Catbotten!',
      hoAmIText: 'Det är jag som är Wilma, en frontendutvecklare med ett stort intresse för att skapa intuitiva och användarvänliga digitala lösningar. Strukturerad och organiserad, hanterar jag utvecklingsprocesser effektivt och med en problemlösande och kommunikativ inställning. Jag trivs både i team och självständigt, och har ett öga för detaljer vilket gör att jag alltid strävar efter hög kvalitet i både funktion och design. Eftersom teknikbranschen ständigt utvecklas, är jag flexibel och nyfiken – alltid redo att lära mig något nytt. Jag söker nu en roll där jag kan kombinera min kreativitet med min tekniska kompetens och samtidigt använda min kommunikativa förmåga.',
      projectDescriptionsGardenPlanner: 'En trädgårdsplanerare med React, Konva.js för 2D-grafik, Zustand för state management och Firestore för att spara och ladda användarens design.',
      projectDescriptionsChappy: 'Chappy en chattapplikation som är byggt med Node.js, Express och TypeScript för RESTful CRUD-operationer, med MongoDB som databas och JWT för autentisering.',
      projectDescriptionsDivingDelights: 'En webbshop med React, React Router (HashRouter), Zustand för state management och Firestore för datalagring.',
      projectDescriptionsNotes: 'Skapa och ta bort anteckningar. Växla mellan mörkt och ljust läge. Sök anteckningar med sökfältet. Anteckningarna lagras lokalt i webbläsaren.',
      projectDescriptionsHangman: 'Ett grupparbete som kombinerar JavaScript, HTML och CSS. Klassiskt hänga gubbe-spel som sparar spelarens resultat lokalt.',
      projectDescriptionsPokemon: 'Sök efter Pokémon från ett externt API. Lägg till och ta bort Pokémon i ditt lag och flytta till reservlistan.',
    }
  }
};

i18n.use(initReactI18next) 
  .init({
    resources,
    lng: 'en',  // Default language
    keySeparator: false, 
    interpolation: {
      escapeValue: false  // Not needed for React
    }
  });

export default i18n;
