/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck Es un arreglo de cartas
 * @returns {String} retorna la carta que se ha sacado
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}