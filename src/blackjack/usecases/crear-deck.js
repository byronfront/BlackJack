import _ from 'underscore';

// Esta función crea un nuevo deck
/**
 * Crea un nuevo deck de cartas
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

  if (!tiposDeCarta || tiposDeCarta.length === 0) {
    throw new Error('Tipos de carta son obligatorios');
  }
  if (!tiposEspeciales || tiposEspeciales.length === 0) {
    throw new Error('Tipos especiales son obligatorios');
  }
  // Si no se envian los tipos de carta, por defecto se usan los estandar

  let deck = [];
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }
  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }

  deck = _.shuffle(deck);
  
  return deck;
};