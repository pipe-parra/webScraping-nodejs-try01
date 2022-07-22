const request = require('request');
const requestPromise = require('request-promise');
const cheerio = require('cheerio');

let pokemonArray = [];


(async()=>{   //funcioon autoejecutable
    console.log('Hola Funcion')
// paso 1 peticion a la pagina
    const response = await requestPromise('https://scrapeme.live/shop/'); //puedo
   // console.log(response); //para probar si funciona 

// paso 2 parsear con cheerio
    const $ = cheerio.load(response);
//    console.log($);   //cheerio parsea la data   **AVERIGUA SIGNIFICADO PARSEAR
    
// paso 3 seleccionar los elementos
    $('h2[class="woocommerce-loop-product__title"]').each(function(){
        // paso 4 ingresarlos al array y mostrar por consola  **hay que declarar el array
        pokemonArray.push($(this).text())
    })
console.log(pokemonArray);

})();