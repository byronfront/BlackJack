/**
 * Esta función recibe una carta y devuelve su valor.
 * @param {String} carta recibe la carta que se desea evaluar
 * @returns {Number} retorna el valor de la carta
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}