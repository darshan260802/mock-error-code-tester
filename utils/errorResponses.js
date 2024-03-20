const faker = require('faker');

const errorResponses = [
  {
    statusCode: 400,
    body: { error: 'Bad Request' },
  },
  {
    statusCode: 401,
    body: { error: 'Unauthorized' },
  },
  {
    statusCode: 403,
    body: { error: 'Forbidden' },
  },
  {
    statusCode: 404,
    body: { error: 'Not Found' },
  },
  {
    statusCode: 500,
    body: { error: 'Internal Server Error' },
  },
];

const getRandomErrorResponse = () => {
  const randomIndex = Math.floor(Math.random() * errorResponses.length);
  return errorResponses[randomIndex];
};

const getErrorResponse = (err) => {
  switch (err.message) {
    case 'Unauthorized':
      return errorResponses.find((response) => response.statusCode === 401);
    case 'Forbidden':
      return errorResponses.find((response) => response.statusCode === 403);
    case 'Not Found':
      return errorResponses.find((response) => response.statusCode === 404);
    default:
      return errorResponses.find((response) => response.statusCode === 500);
  }
};

module.exports = {
  getRandomErrorResponse,
  getErrorResponse,
};