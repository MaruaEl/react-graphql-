const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
} = graphql;

// Dummy data
var books = [
{ name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
{ name: 'Two States', genre: 'Drama', id: '2' },
{ name: 'The Long Earth', genre: 'Sci-Fi', id: '3' },
];

var authors = [
  { name: 'Patrick Rothfuss', age: 44, id: '1' },
  { name: 'Chetan Bhagat', age: 45, id: '2' },
  { name: 'Terry Pratchett', age: 66, id: '3' },
];

const BookType = new GraphQLObjectType({
	name: 'Book',
	fields: () => ({
		id: { type: GraphQLString },
		name: { type: GraphQLSchema },
		genre: { type: GraphQLString },
	})
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // code from Database - right now dummy data
        return books.find(item => item.id === args.id);
      },
    },
  },
});





module.exports = new GraphQLSchema({
	query: RootQuery
});

