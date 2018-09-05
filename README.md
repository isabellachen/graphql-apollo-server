# GraphQL Apollo Server with the StarWars API

- An example server showing how to write query resolvers with Scalar, Enum and List types.
- Example shows how to process arguments passed to fields on GraphQL Object types, e.g.:

```
type Starship {
  id: ID!
  name: String!
  length(unit: LengthUnit = METER): Float
}
```

- To run the server

```
> npm i
> nodemon server
```
