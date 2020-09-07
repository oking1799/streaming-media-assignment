const fs = require('fs'); // pull in the file systme module
// const setIndex = (fileName) =>{
// index = fs.readFileSync(`${__dirname}/../client/${fileName}`);
// };

const getIndex = (request, response, fileName) => {
  const index = fs.readFileSync(`${__dirname}/../client/${fileName}`);
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

module.exports.getIndex = getIndex;
