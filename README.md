# GraphQL Apollo Server with the StarWars API

<hr>

### An example server showing how to write query resolvers with Scalar, Enum and List types.

Example show how to process arguments passed to fields on GraphQL Object types, e.g.:

```
type Starship {
  id: ID!
  name: String!
  length(unit: LengthUnit = METER): Float
}
```
