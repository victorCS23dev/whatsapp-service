import { BASE_URL } from "./config/index.js";

// Lista de plantillas para exponer al front-end
export const templateList = [
  {
    id: "1",
    name: "DISEÑO Y DESARROLLO WEB",
    text: `¡Hola {nombre}!👋
Gracias por contactarnos. Soy un encargado de DIGIMEDIA 🚀

¿Sabías que el 75% de usuarios juzga la credibilidad de tu negocio por tu sitio web?
✅ Sin una web profesional, pierdes clientes antes de que te conozcan
✅ Un diseño optimizado convierte visitas en ventas reales 💰

💬 Cuéntame: ¿Cual es tu negocio?¿ya tienes web o necesitas crear una desde cero? 👇`,
    image: "imagenes/1.png",
  },
  {
    id: "2",
    name: "GESTIÓN DE REDES SOCIALES",
    text: `¡Hola {nombre}!👋
Gracias por contactarnos. Soy un encargado de DIGIMEDIA 🚀

¿Sabías que el 73% de las empresas que gestionan bien sus redes duplican sus ventas en menos de 6 meses ?💰
⚠️ Tu competencia podría estar captando a TU próximo cliente ahora mismo 

💬 Cuéntame: ¿cuál es tu negocio y cuál es tu mayor desafío con tus redes ahora mismo? 👇`,
    image: "imagenes/3.png",
  },
  {
    id: "3",
    name: "MARKETING Y GESTIÓN DIGITAL",
    text: `¡Hola {nombre}!👋
Gracias por contactarnos. Soy un encargado de DIGIMEDIA 🚀

¿Sabías que el 68% de empresas invierte en digital pero solo el 22% ve resultados reales? 📊
La diferencia está en la ESTRATEGIA, no solo en estar presente 🎯

💬Cuéntame, ¿Cual es tu negocio y cómo están funcionando tus campañas digitales? 👇`,
    image: "imagenes/4.png",
  },
  {
    id: "4",
    name: "BRANDING Y DISEÑO",
    text: `Hola {nombre}👋
Gracias por contactarnos. Soy un encargado de DIGIMEDIA 🚀

¿Sabías que el 77% de consumidores compra por marcas que reconoce visualmente?🎨✨
⚠️ Si tu marca no te representa, pierdes CONEXIÓN Y VENTAS 📉
🔥 Tu identidad visual es tu carta de presentación. Cuando funciona, vende sola

💬 Cuéntame: ¿Cual es tu negocio?¿quieres crear tu branding desde cero o renovarlo? 👇`,
    image: "imagenes/7.png",
  },
  {
    id: "5",
    name: "Prueba",
    text: `Hola {nombre}👋
Gracias por contactarnos. Soy un encargado de DIGIMEDIA 🚀

¿Sabías que el 77% de consumidores compra por marcas que reconoce visualmente?🎨✨
⚠️ Si tu marca no te representa, pierdes CONEXIÓN Y VENTAS 📉
🔥 Tu identidad visual es tu carta de presentación. Cuando funciona, vende sola

💬 Cuéntame: ¿Cual es tu negocio?¿quieres crear tu branding desde cero o renovarlo? 👇`,
    image: "imagenes/7.png",
  },
];

// Función existente
export function getTemplate(option, params = {}) {
  const { nombre = "", image = "" } = params;
  const template = templateList.find(t => t.id === option);

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

  return {
    name: template.name,
    text: template.text.replace('{nombre}', nombre),  // Reemplaza el placeholder
    image: image || template.image,
  };
}