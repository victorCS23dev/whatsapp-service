import { BASE_URL } from "./config/index.js";

// Lista de plantillas para exponer al front-end
export const templateList = [
  {
    id: 1,
    name: "DISEÑO Y DESARROLLO WEB",
    messages: {
      1: {
        text: `Hola [nombre usuario] 👋
Gracias por contactarnos. Soy [nombre del responsable] de DIGIMEDIA 🚀

¿Sabías que el 75% de usuarios juzga la credibilidad de tu negocio por tu sitio web?
✅ Sin una web profesional, pierdes clientes antes de que te conozcan
✅ Un diseño optimizado convierte visitas en ventas reales 💰
💬 Cuéntame: ¿Cual es tu negocio?¿ya tienes web o necesitas crear una desde cero? 👇`,
        image: "imagenes/desarrollo_web/1-1.png",
      },
      2: {
        text: `Hola [nombre] 👋
 Solo para asegurarme de que viste mi mensaje.
Tu web es la primera impresión de tu negocio, y una buena web convierte visitas en ventas reales 💻✨
 Si deseas, puedo guiarte GRATIS sobre qué tipo de web te conviene.
👉 ¿Ya tienes web o estás empezando desde cero?
Responde cuando puedas y te asesoro 🙌
`,
        image: "imagenes/desarrollo_web/1-2.png",
      },
      3: {
        text: `Hola [nombre] 👋
Sabias que el 75% de los clientes decide si confiar o no en tu marca en los primeros 5 segundos… solo por su web. ⏳💻
Si tu sitio no transmite profesionalismo, puedes estar perdiendo ventas sin darte cuenta.
Si deseas, puedo revisar GRATIS y decirte 3 mejoras clave.
¿Te gustaría? 😊✨
`,
        image: "imagenes/desarrollo_web/1-3.png",
      }
    }
  },

  {
    id: 2,
    name: "GESTIÓN DE REDES SOCIALES",
    messages: {
      1: {
        text: `Hola {nombre} 👋
Gracias por contactarnos. Soy [nombre del responsable] de DIGIMEDIA 🚀
¿Sabías que el 73% de las empresas que gestionan bien sus redes duplican sus ventas en menos de 6 meses ?💰
⚠️Tu competencia podría estar captando a TU próximo cliente ahora mismo 
💬 Cuéntame: ¿cuál es tu negocio y cuál es tu mayor desafío con tus redes ahora mismo? 👇
`,
        image: "imagenes/gestion_redes/2-1.png",
      },
      2: {
        text: `Hola [nombre] 👋
Hace unos días te escribí porque vi que estás interesado(a) en mejorar tus redes.
Solo quería asegurarme de que pudiste ver mi mensaje.
 Hoy en día, las marcas que publican con estrategia son las que realmente venden 📈✨
Si quieres, puedo darte ideas RÁPIDAS Y GRATUITAS para mejorar tus redes HOY MISMO.
 ¿Qué plataforma es tu prioridad ahora: Facebook, Instagram o TikTok? 👇`,
        image: "imagenes/gestion_redes/2-2.png",
      },
      3: {
        text: `Hola [nombre] 😊
¿Sabías que las marcas con estrategia en redes crecen hasta el 120% en ventas? 🚀
A empresas como FitMarket les pasó solo mejorando contenido + constancia.
Si quieres, te doy 3 ideas GRATIS para mejorar tu alcance.
¿Te interesa? ✨
`,
        image: "imagenes/gestion_redes/2-3.png",
      }
    }
  },

  {
    id: 3,
    name: "MARKETING Y GESTIÓN DIGITAL",
    messages: {
      1: {
        text: `Hola [nombre usuario] 👋
Gracias por contactarnos. Soy [nombre del responsable] de DIGIMEDIA 🚀
¿Sabías que el 68% de empresas invierte en digital pero solo el 22% ve resultados reales? 📊
La diferencia está en la ESTRATEGIA, no solo en estar presente 🎯
💬Cuéntame, ¿Cual es tu negocio y cómo están funcionando tus campañas digitales? ¿Logras atraer clientes, o sientes que podrías estar perdiendo oportunidades?👇 `,
        image: "imagenes/marketing_digital/3-1.png",
      },
      2: {
        text: `Hola [nombre] 👋
 Hace unos días te escribí sobre tus campañas digitales.
Muchas empresas invierten, pero pocas saben dónde están perdiendo dinero 💸
 Si quieres, puedo revisar contigo y darte recomendaciones GRATIS y DIRECTAS.
👉 ¿Estás haciendo anuncios ahora o aún no has empezado?
Estoy aquí para ayudarte 😊
`,
        image: "imagenes/marketing_digital/3-2.png",
      },
      3: {
        text: `Hola [nombre] 👋
Sabías que el 78% de los negocios no obtiene resultados en digital por mala ESTRATEGIA.
Cuando se optimiza bien, las conversiones pueden subir por ejemplo Oxígeno Fit aumentó sus leads en +214% en solo 60 días). 📊🔥
Si quieres, reviso tu estrategia GRATIS y te digo dónde puedes mejorar.
¿Te gustaría? 🚀
`,
        image: "imagenes/marketing_digital/3-3.png",
      }
    }
  },

  {
    id: 4,
    name: "BRANDING Y DISEÑO",
    messages: {
      1: {
        text: `Hola [nombre usuario] 👋
Gracias por contactarnos. Soy [nombre del responsable] de DIGIMEDIA 🚀
¿Sabías que el 77% de consumidores compra por marcas que reconoce visualmente?🎨✨
⚠️ Si tu marca no te representa, pierdes CONEXIÓN  Y VENTAS 📉
🔥 Tu identidad visual es tu carta de presentación. Cuando funciona, vende sola
💬 Cuéntame: ¿Cual es tu negocio?¿quieres crear tu branding desde cero o renovarlo? 👇
`,
        image: "imagenes/branding_diseño/4-1.png",
      },
      2: {
        text: ` Te escribo nuevamente para saber si pudiste ver mi mensaje.
Una identidad visual fuerte hace que tu marca sea recordada, confiable y más vendible 🎨🔥
 Puedo darte una guía rápida y GRATUITA según tu negocio.
👉 ¿Quieres crear tu marca desde cero o mejorar la que ya tienes?
Estoy disponible para ayudarte 💬✨
`,
        image: "imagenes/branding_diseño/4-2.png",
      },
      3: {
        text: `Hola [nombre] 👋
Hoy en día, crecer online ya no es opcional, es clave.
Las marcas que aplican estrategias digitales bien hechas logran clientes más fieles y aumentan sus resultados entre 2 y 3 veces (por ejemplo: más leads, más ventas o más alcance real). 📊✨
Si quieres, reviso tu estrategia GRATIS y te digo qué potenciar. 🚀
¿Te gustaría? 🚀
`,
        image: "imagenes/branding_diseño/4-3.png",
      }
    }
  },
];


export function getTemplate(id_servicio, messageNumber, params = {}) {
  const { nombre = "" } = params;

  const template = templateList.find(p => p.id === id_servicio);

  if (!template) return { 
    name: "General",
    text: `✨ ¡Hola ${nombre}! Te saluda Digimedia. 💻🚀

          Potencia tu presencia online con una página web profesional y personalizada para tu marca.

          Te ayudamos con:

            🌐 Diseño web *moderno y a tu medida*.
            ⚡ Desarrollo optimizado y veloz.
            📱 100% adaptable a móviles.
            🎯 SEO listo para posicionarte en Google.
            💰 Inversión inteligente que multiplica tus ventas.

            👉 Todo en un solo servicio creado para hacer crecer tu negocio sin límites.

              "Sí tu negocio no 𝘦𝘴𝘵𝘢́ en internet, tu negocio no existe." -Bill gates

          Tu negocio no puede esperar más para crecer.

          Hazlo digital con *DigiMedia.*`,
    image: 'imagenes/Flyer.jpg'
  };

  const message = template.messages[messageNumber];

  if (!message) return { 
    name: "General",
    text: `✨ ¡Hola ${nombre}! Te saluda Digimedia. 💻🚀

          Potencia tu presencia online con una página web profesional y personalizada para tu marca.

          Te ayudamos con:

            🌐 Diseño web *moderno y a tu medida*.
            ⚡ Desarrollo optimizado y veloz.
            📱 100% adaptable a móviles.
            🎯 SEO listo para posicionarte en Google.
            💰 Inversión inteligente que multiplica tus ventas.

            👉 Todo en un solo servicio creado para hacer crecer tu negocio sin límites.

              "Sí tu negocio no 𝘦𝘴𝘵𝘢́ en internet, tu negocio no existe." -Bill gates

          Tu negocio no puede esperar más para crecer.

          Hazlo digital con *DigiMedia.*`,
    image: 'imagenes/Flyer.jpg'
  };

  return {
    name: template.name,
    text: message.text.replace('{nombre}', nombre),  // Reemplaza el placeholder
    image: message.image || 'imagenes/Flyer.jpg',
  };
}