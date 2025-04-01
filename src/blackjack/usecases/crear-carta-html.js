/**
 * Crea una carta HTML
 * @param {HTMLElement} divCarta elemento HTML donde se va a mostrar la carta 
 * @param {String} carta carta a mostrar
 */
export const crearCarta = (divCarta, carta) => {

    if (!carta) throw new Error('La carta es un argumento obligatorio');
    if (!divCarta) throw new Error('DivCarta es un argumento obligatorio');
    
    const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCarta.append( imgCarta );
}
