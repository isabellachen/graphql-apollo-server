const { gql } = require('apollo-server');

const LengthUnit = gql`
  enum LengthUnit {
    METER
    FOOT
  }
`;

const Episode = gql`
  enum Episode {
    NEW_HOPE
    EMPIRE
    JEDI
  }
`;

const Starship = gql`
  type Starship {
    name: String
    model: String
    manufacturer: String
    cost_in_credits: Int
    length(unit: LengthUnit = Meter): Float
  }
`;
const Character = gql`
  type Character {
    name: String
    height: Int
    mass: Int
    appearsIn: [Episode]
    friends: [Character]
  }
`;

const Query = gql`
  type Query {
    starship(name: String): Starship
    hero(episode: Episode): Character
    characters: [Character]
  }
`;

module.exports = [Query, LengthUnit, Episode, Starship, Character];
