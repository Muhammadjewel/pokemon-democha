var elPokemons = $_('.pokemons');

var createPokemonElement = function (pokemon) {
  var elNewPokemon = createElement('li', 'pokemon col-md-3 mb-4');

  var elNewPokemonCard = createElement('div', 'pokemon__card card border-0 text-center shadow-sm');

  var elNewPokemonImg = createElement('img', 'pokemon__img card-img-top');
  elNewPokemonImg.src = pokemon.img;
  elNewPokemonImg.alt = pokemon.name;
  elNewPokemonImg.width = 300;
  elNewPokemonImg.height = 150;

  var elNewPokemonCardBody = createElement('div', 'pokemon__card-body card-body');

  var elNewPokemonName = createElement('h2', 'pokemon__name h4 card-title', pokemon.name);

  var elNewPokemonType = createElement('div', 'pokemon__type card-text', pokemon.type.join(', '));

  elNewPokemonCardBody.appendChild(elNewPokemonName);
  elNewPokemonCardBody.appendChild(elNewPokemonType);

  elNewPokemonCard.appendChild(elNewPokemonImg);
  elNewPokemonCard.appendChild(elNewPokemonCardBody);

  elNewPokemon.appendChild(elNewPokemonCard);

  return elNewPokemon;
};

// for (var i = 0; i < pokemons.length; i++) {
//   elPokemons.appendChild(createPokemonElement(pokemons[i]));
// }

pokemons.forEach(function (pokemon) {
  elPokemons.appendChild(createPokemonElement(pokemon));
});
