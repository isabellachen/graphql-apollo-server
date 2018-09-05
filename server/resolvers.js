const data = require('../data');

module.exports = {
  Episode: {
    // Internal values gQL uses to convert roman numerals to enum strings.
    NEW_HOPE: 'IV',
    EMPIRE: 'V',
    JEDI: 'VI'
  },

  Query: {
    starship: (_, { name }) =>
      data.starships.find(starship => starship.name === name),
    hero: (_, { episode }) =>
      episode === 'V'
        ? data.characters['luke_skywalker']
        : data.characters['r2_d2'],
    characters: () => Object.values(data.characters).map(character => character)
  },

  Starship: {
    length: (starship, { unit }) =>
      unit === 'FOOT' ? Number(starship.length) * 3.28 : starship.length
  },

  Character: {
    friends: character =>
      data.characters[character.name].friends.map(
        friend => data.characters[friend]
      )
  }
};
