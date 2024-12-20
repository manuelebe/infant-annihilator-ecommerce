import db from "../db/db.js"
import { addDoc, collection } from "firebase/firestore"

const products = [
    {
        name: "Pack de 5 botones",
        description: [`Infant Annihilator "Pack de 5 Botones".`,
        `- Mercancía oficial de Infant Annihilator.`,
        `- Botones de 1" en tarjeta de respaldo impresa.`],
        stock: 100,
        price: "9800",
        src: "/img/album-buttons.webp",
        category: "otros",
    },
    {
        name: "Annihilation - Buzo",
        description: [`Buzo negro "Annihilation" de Infant Annihilator.`,
        `- Mercancía oficial de Infant Annihilator.`,
        `- Impreso en prenda unisex estándar.`],
        stock: 100,
        price: "49000",
        src: "/img/annihilation-hood.webp",
        category: "vestimenta",
    },
    {
        name: "Cheeky - Camiseta",
        description: [`Camiseta impresa unisex.`],
        stock: 100,
        price: "24500",
        src: "/img/cheeky-shirt.webp",
        category: "vestimenta",
    },
    {
        name: "Chewer - Fingerboard",
        description: [`Fingerboard "Chewer" de Infant Annihilator.`,
        `- Mercancía oficial de Infant Annihilator.`,
        `- Finger skateboard profesional 32mm x 97mm (aprox. 1.26" x 3.82") con cubierta de madera contrachapada real de 5 capas.`,
        `- Ruedas de doble dureza con rodamientos, ejes de metal pulido y agarre con patrón de espuma.`,
        `- Incluye un llavero de herramienta de skate de metal y un estuche de almacenamiento de plástico (no incluye tarjeta de respaldo).`],
        stock: 100,
        price: "19600",
        src: "/img/chewer-fingerboard.webp",
        category: "otros",
    },
    {
        name: "Childchewer - Camiseta",
        description: [`Camiseta impresa unisex.`],
        stock: 100,
        price: "24500",
        src: "/img/childchewer-shirt.webp",
        category: "vestimenta",
    },
    {
        name: "Childsnatcher - Buzo",
        description: [`Buzo impreso unisex.`],
        stock: 100,
        price: "49000",
        src: "/img/childsnatcher-hood.webp",
        category: "vestimenta",
    },
    {
        name: "Crucifucked - Camiseta",
        description: [`Camiseta impresa unisex.`],
        stock: 100,
        price: "24500",
        src: "/img/crucifucked-shirt.webp",
        category: "vestimenta",
    },
    {
        name: "Cthulhu - Camiseta",
        description: [`Camiseta negra de una cara "Cthulhu" de Infant Annihilator.`,
        `- Mercancía oficial de Infant Annihilator.`,
        `- Camiseta impresa unisex.`],
        stock: 100,
        price: "24500",
        src: "/img/cthulhu-shirt.webp",
        category: "vestimenta",
    },
    {
        name: "Demon - Fingerboard",
        description: [`Fingerboard "Demon" de Infant Annihilator.`,
        `- Mercancía oficial de Infant Annihilator.`,
        `- Finger skateboard profesional 32mm x 97mm (aprox. 1.26" x 3.82") con cubierta de madera contrachapada real de 5 capas.`,
        `- Ruedas de doble dureza con rodamientos, ejes de metal pulido y agarre con patrón de espuma.`,
        `- Incluye un llavero de herramienta de skate de metal y un estuche de almacenamiento de plástico (no incluye tarjeta de respaldo).`],
        stock: 100,
        price: "19600",
        src: "/img/demon-fingerboard.webp",
        category: "otros",
    },
    {
        name: "Demon v2 - Buzo",
        description: [`Buzo con cierre y capucha negra "Demon v2" de Infant Annihilator.`,
        `- Mercancía oficial de Infant Annihilator.`,
        `- Buzo impreso unisex.`],
        stock: 100,
        price: "49000",
        src: "/img/demon-hood.webp",
        category: "vestimenta",
    },
    {
        name: "Demon - Camiseta",
        description: [`Camiseta negra de una cara "Demon" de Infant Annihilator.`,
        `- Mercancía oficial de Infant Annihilator.`,
        `- Camiseta impresa unisex.`],
        stock: 100,
        price: "24500",
        src: "/img/demon-shirt.webp",
        category: "vestimenta",
    },
    {
        name: "Eat eggs - Pantalon",
        description: [`Pantalon impreso unisex.`],
        stock: 100,
        price: "39200",
        src: "/img/eateggs-pants.webp",
        category: "vestimenta",
    },
    {
        name: "The Elysian Grandeval Galeriarch - CD",
        description: [`Infant Annihilator "The Elysian Grandeval Galeriarch" CD Jewelcase.`],
        stock: 100,
        price: "12700",
        src: "/img/egg-cd.webp",
        category: "musica",
    },
    {
        name: "The Elysian Grandeval Galeriarch - Manga larga",
        description: [`Camiseta de manga larga negra de Infant Annihilator "The Elysian Grandeval Galeriarch".`,
        `- Mercancía oficial de Infant Annihilator.`,
        `- Camiseta impresa unisex.`],
        stock: 100,
        price: "34300",
        src: "/img/egg-longshirt.webp",
        category: "vestimenta",
    },
    {
        name: "The Elysian Grandeval Galeriarch - Camiseta",
        description: [`Camiseta de algodón teñida en púrpura de Infant Annihilator "The Elysian Grandeval Galeriarch".`,
        `- Mercancía oficial de Infant Annihilator.`,
        `- Camiseta impresa unisex.`],
        stock: 100,
        price: "24500",
        src: "/img/egg-shirt.webp",
        category: "vestimenta",
    },
    {
        name: "IAxMSF - Camiseta",
        description: [`Camiseta negra "IAxMSF" de Infant Annihilator.`,
        `- Mercancía oficial de Infant Annihilator.`,
        `- Camiseta impresa unisex.`],
        stock: 100,
        price: "24500",
        src: "/img/iaxmsf-shirt.webp",
        category: "vestimenta",
    },
    {
        name: "Jesus - Fingerboard",
        description: [`Fingerboard "Jesus" de Infant Annihilator.`,
        `- Mercancía oficial de Infant Annihilator.`,
        `- Finger skateboard profesional 32mm x 97mm (aprox. 1.26" x 3.82") con cubierta de madera contrachapada real de 5 capas.`,
        `- Ruedas de doble dureza con rodamientos, ejes de metal pulido y agarre con patrón de espuma.`,
        `- Incluye un llavero de herramienta de skate de metal y un estuche de almacenamiento de plástico (no incluye tarjeta de respaldo).`],
        stock: 100,
        price: "19600",
        src: "/img/jesus-fingerboard.webp",
        category: "otros",
    },
    {
        name: "Let it Slam - Manga larga",
        description: [`Camiseta de manga larga negra de Infant Annihilator "Let it Slam".`,
        `- Mercancía oficial de Infant Annihilator.`,
        `- Camiseta impresa unisex.`],
        stock: 100,
        price: "34300",
        src: "/img/letitslam-longshirt.webp",
        category: "vestimenta",
    },
    {
        name: "Let it slam - Camiseta",
        description: [`Camiseta negra de Infant Annihilator "Let it Slam".`,
        `- Mercancía oficial de Infant Annihilator.`,
        `- Camiseta impresa unisex.`],
        stock: 100,
        price: "24500",
        src: "/img/letitslam-shirt.webp",
        category: "vestimenta",
    },
    {
        name: "Logo - Gorro",
        description: [`Gorro "Logo Stripe" de Infant Annihilator.`,
        `- Mercancía oficial de Infant Annihilator.`,
        `- Negro con rayas grises / blancas / rojas.`,
        `- Logotipo bordado en blanco.`],
        stock: 100,
        price: "24500",
        src: "/img/logo-beanie.webp",
        category: "vestimenta",
    },
    {
        name: "Logo - Top corto",
        description: [`Top corto con mangas largas de color gris oscuro "Logo Womens Crop" de Infant Annihilator.`,
        `- Mercancía oficial de Infant Annihilator.`,
        `- Impreso en BELLA + CANVAS FWD Fashion Women's Crop Long Sleeve Tee 6501.`],
        stock: 100,
        price: "34300",
        src: "/img/logo-croptop.webp",
        category: "vestimenta",
    },
    {
        name: "Logo - Gorra",
        description: [`Gorra "Logo" de Infant Annihilator.`,
        `- Mercancía oficial de Infant Annihilator.`,
        `- Gorra negra ajustable con cierre de metal deslizante y logotipo bordado en gris.`],
        stock: 100,
        price: "24500",
        src: "/img/logo-hat.webp",
        category: "vestimenta",
    },
    {
        name: "Logo - Parche",
        description: [`Parche tejido con corte troquelado "Logo" de Infant Annihilator.`,
        `- Mercancía oficial de Infant Annihilator.`,
        `- 4"x2.6", con borde negro festoneado.`],
        stock: 100,
        price: "6800",
        src: "/img/logo-patch.webp",
        category: "otros",
    },
    {
        name: "Logo - Camiseta",
        description: [`Camiseta impresa unisex.`],
        stock: 100,
        price: "24500",
        src: "/img/logo-shirt.webp",
        category: "vestimenta",
    },
    {
        name: "Plaguebringer - Manga larga",
        description: [`Camiseta impresa unisex.`],
        stock: 100,
        price: "34300",
        src: "/img/plaguebringer-longshirt.webp",
        category: "vestimenta",
    },
    {
        name: "The Palpable Leprosy Of Pollution - CD",
        description: [`Digipak del álbum debut de Infant Annihilator de 2012, The Palpable Leprosy Of Pollution CD.`],
        stock: 100,
        price: "12700",
        src: "/img/plop-cd.webp",
        category: "musica",
    },
    {
        name: "The Palpable Leprosy Of Pollution - Camiseta",
        description: [`Camiseta negra de Infant Annihilator "The Palpable Leprosy Of Pollution".`,
        `- Mercancía oficial de Infant Annihilator.`,
        `- Camiseta impresa unisex.`],
        stock: 100,
        price: "24500",
        src: "/img/plop-shirt.webp",
        category: "vestimenta",
    },
    {
        name: "Reaper - Gorra",
        description: [`Gorra snapback ajustable "Reaper" de Infant Annihilator en morado y negro.`,
        `- Mercancía oficial de Infant Annihilator.`,
        `- Bordado en la parte delantera y trasera.`],
        stock: 100,
        price: "24500",
        src: "/img/reaper-hat.webp",
        category: "vestimenta",
    },
    {
        name: "Re-Conception - CD",
        description: [`Un EP de la banda en la que Aaron y Eddi estuvieron antes de IA - Mister Sister Fister. Lanzado originalmente en 2011, ahora regrabado con toda la instrumentación nueva y las voces de Dickie Allen y Alex Teyen.`,
        `Espera todas las emociones de Infant Annihilator con el sonido clásico del deathcore de principios de la década de 2010.`,
        `Escrito originalmente por Aaron Kitcher, Eddi Pickard, Sam Stansfield, Liam Kipling y Luke Starky.`],
        stock: 100,
        price: "12700",
        src: "/img/reconception-cd.webp",
        category: "musica",
    },
    {
        name: "Re-Conception - Gorra",
        description: [`Gorra snapback "Re-Conception" de Infant Annihilator.`,
        `- Mercancía oficial de Infant Annihilator.`,
        `- Snapback negro con bordado frontal + posterior, además de impresión debajo de la visera.`],
        stock: 100,
        price: "24500",
        src: "/img/reconception-hat.webp",
        category: "vestimenta",
    },
    {
        name: "Re-Conception - Camiseta",
        description: [`Camiseta negra de Infant Annihilator "Re-Conception".`,
        `- Mercancía oficial de Infant Annihilator.`,
        `- Camiseta impresa unisex.`],
        stock: 100,
        price: "24500",
        src: "/img/reconception-shirt.webp",
        category: "vestimenta",
    },
    {
        name: "The Battle of Yaldabaoth - CD",
        description: [`Infant Annihilator "The Battle of Yaldabaoth" CD jewelcase con folleto de 20 páginas.`],
        stock: 100,
        price: "12700",
        src: "/img/tboy-cd.webp",
        category: "musica",
    },
    {
        name: "Youngling Annihilator - Camiseta",
        description: [`Camiseta Infant Annihilator "Youngling Annihilator".`,
        `- Mercancía oficial de Infant Annihilator.`,
        `- Camiseta impresa unisex.`],
        stock: 100,
        price: "24500",
        src: "/img/younglingannihilator-shirt.webp",
        category: "vestimenta",
    },
]    

const seedProducts = () =>{
    const productsRef = collection(db, "products")
    products.map(({...dataProduct}) =>{
        addDoc(productsRef, dataProduct)
    })
    console.log("productos subidos")
    return
}

seedProducts()