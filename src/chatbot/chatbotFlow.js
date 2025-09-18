// chatbotFlow.js

// export const chatbotFlow = {
//   start: {
//     message: `👋 BIENVENIDO\n\nESCOGE EL SERVICIO QUE DESEAS INFORMACIÓN:\n1️⃣ Desarrollo\n2️⃣ Tester\n3️⃣ Diseño`,
//     next: { 
//       "1": "desarrollo", 
//       "2": "tester", 
//       "3": "diseño" 
//     }
//   },

//   desarrollo: {
//     message: `💻 DESARROLLO\n\nEscoge una de las siguientes opciones:\n1️⃣ PHP\n2️⃣ Python\n3️⃣ Cierre`,
//     next: { 
//       "1": "php", 
//       "2": "python", 
//       "3": "cierre" 
//     }
//   },

//   tester: {
//     message: `🧪 TESTER\n\nTenemos información sobre QA manual y automatizado.`,
//     next: {}
//   },

//   diseño: {
//     message: `🎨 DISEÑO\n\nOpciones:\n1️⃣ UX/UI\n2️⃣ Gráfico`,
//     next: {}
//   },

//   php: { message: `📘 Has escogido PHP 🚀`, next: {} },
//   python: { message: `🐍 Has escogido Python ⚡`, next: {} },
//   cierre: { message: `✅ Gracias por tu interés, un asesor se pondrá en contacto contigo.`, next: {} }
// };
// chatbotFlow.js
export const chatbotFlow = {
  start: {
    // message: "👋 BIENVENIDO\n\nESCOGE EL SERVICIO QUE DESEAS INFORMACIÓN:",
    message: "PROBANDO",

    buttons: [
      { buttonId: "desarrollo", buttonText: { displayText: "💻 Desarrollo" }, type: 1 },
      { buttonId: "tester", buttonText: { displayText: "🧪 Tester" }, type: 1 },
      { buttonId: "diseño", buttonText: { displayText: "🎨 Diseño" }, type: 1 },
    ],
  //   templateButtons: [
  //   { index: 1, quickReplyButton: { displayText: "💻 Desarrollo", id: "desarrollo" } },
  //   { index: 2, quickReplyButton: { displayText: "🧪 Tester", id: "tester" } },
  //   { index: 3, quickReplyButton: { displayText: "🎨 Diseño", id: "diseño" } }
  // ],  
    // hydratedButtons: [
    //   { quickReplyButton: { displayText: "💻 Desarrollo", id: "desarrollo" } },
    //   { quickReplyButton: { displayText: "🧪 Tester", id: "tester" } },
    //   { quickReplyButton: { displayText: "🎨 Diseño", id: "diseño" } }
    // ],
    next: {
      desarrollo: "desarrollo",
      tester: "tester",
      diseño: "diseño",
    },
  },

  desarrollo: {
    message: "💻 DESARROLLO\n\nEscoge una de las siguientes opciones:",
    buttons: [
      { buttonId: "php", buttonText: { displayText: "📘 PHP" }, type: 1 },
      { buttonId: "python", buttonText: { displayText: "🐍 Python" }, type: 1 },
      { buttonId: "cierre", buttonText: { displayText: "✅ Cerrar" }, type: 1 },
    ],
    next: {
      php: "php",
      python: "python",
      cierre: "cierre",
    },
  },

  php: { message: "📘 Has escogido PHP 🚀", next: {} },
  python: { message: "🐍 Has escogido Python ⚡", next: {} },
  cierre: { message: "✅ Gracias por tu interés, un asesor se pondrá en contacto contigo.", next: {} },
};

