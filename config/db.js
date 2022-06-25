const DB = {
  uri: process.env['MONGODB_URI'] ?
    process.env['MONGODB_URI'] : 'mongodb://localhost:27017/projeto3'
};

export default DB;
