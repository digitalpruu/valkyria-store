const title = "Valkyria Store";
const email = ""; // No se proporcionó correo electrónico
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573208637250"; // Incluido el prefijo +57

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Valkyria Store, nos apasiona la moda y nos dedicamos a ofrecerte una selección exclusiva de ropa que destaca por su calidad y diseño. Cada prenda es cuidadosamente elegida para garantizar que encuentres la combinación perfecta entre estilo y comodidad.",
        description2: "Nuestro compromiso es brindarte una experiencia de compra excepcional, donde cada cliente se sienta especial y valorado. Creemos que la moda es una forma de expresión, y en Valkyria Store, te ayudamos a expresar tu personalidad a través de nuestra colección única.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Estilo y confort para todos.",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=100089100311273", // Enlace a Facebook proporcionado
        instagram: "https://www.instagram.com/valkyriaxstore?igsh=MXBiam1sNWtramNnaA==", // Enlace a Instagram proporcionado
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
