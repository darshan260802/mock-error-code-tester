

# Error Testing API

This is a fake API designed for testing error responses and handling different HTTP status codes. It provides various endpoints to simulate various error scenarios, including random errors, custom errors, delayed responses, and authentication/authorization testing.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/error-testing-api.git
```

2. Navigate to the project directory:

```bash
cd error-testing-api
```

3. Install the dependencies:

```bash
npm install
```

## Usage

1. Start the server:

```bash
npm start
```

The server will start running on `http://localhost:7000` (or the port specified in the environment variable `PORT`).

2. Use the following endpoints to test different error scenarios:

### Random Error Response

```
GET /error/random
```

This endpoint returns a random error response from a predefined list of error responses.

### Custom Error Response

```
GET /error/custom?statusCode=404&body={"error":"Resource not found"}
```

This endpoint allows you to specify a custom status code and response body as query parameters. Replace `404` with the desired status code and the JSON object with the desired response body.

### Delayed Response

```
GET /error/delay?delay=3000
```

This endpoint introduces a delay before sending the response. The delay duration (in milliseconds) can be specified as a query parameter (`delay`). This can be useful for testing scenarios like timeouts or slow responses.

### Authentication and Authorization Testing

```
POST /auth/login
{
  "username": "user1",
  "password": "password1"
}
```

This endpoint simulates a login process. If the provided credentials are valid, it generates and returns a JSON Web Token (JWT).

```
GET /auth/protected
Authorization: Bearer <JWT_TOKEN>
```

This is a protected route that requires authentication. You need to include the JWT token obtained from the `/auth/login` endpoint in the `Authorization` header to access this route.

## Error Responses

The API returns error responses in the following format:

```json
{
  "error": "error message"
}
```

The `error` property contains the error message corresponding to the specific error scenario.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).