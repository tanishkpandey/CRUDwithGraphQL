import Book from './models/book.js'

const resolvers = {

  Query: {
    getBooks: async () => {
      try {
        return await Book.find();
      } catch (error) {
        throw new Error('Error fetching books');
      }
    },
    getBookbyId: async (_, { id }) => {
      try {
        return await Book.findById(id);
      } catch (error) {
        throw new Error('Error fetching book');
      }
    }
  },

  Mutation: {
    createBook: async (_, { title, author, publicationYear }) => {
      try {
        const book = new Book({ title, author, publicationYear });
        await book.save();
        return book;
      } catch (error) {
        throw new Error('Error creating book');
      }
    },
    updateBook: async (_, { id, title, author, publicationYear }) => {
      try {
        const book = await Book.findByIdAndUpdate(id, { title, author, publicationYear }, { new: true });
        return book;
      } catch (error) {
        throw new Error('Error updating book');
      }
    },
    deleteBook: async (_, { id }) => {
      try {
        const book = await Book.findByIdAndDelete(id);
        return book;
      } catch (error) {
        throw new Error('Error deleting book');
      }
    }
  }
};

export default resolvers;
