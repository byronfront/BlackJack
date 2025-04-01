import { pedirCarta, valorCarta, crearCarta } from "./index";

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos puntos mínimos que la computadora necesita para ganar 
 * @param {HTMLElement} puntosHTML elmento HTML donde se muestran los puntos 
 * @param {HTMLElement} divCartasComputadora elemento HTML donde se muestran las cartas de la computadora
 * @param {Array<String>} deck  
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, puntosComputadora, deck = [] ) => {

    if ( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios');
    if ( !puntosHTML ) throw new Error('Argumento puntosHTML es necesario');
    
    do {
        const carta = pedirCarta(deck);
        
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;

        crearCarta(divCartasComputadora, carta);

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
