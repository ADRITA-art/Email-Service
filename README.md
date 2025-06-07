# Email Service

A robust and scalable email service built with Node.js, Express, and TypeScript. This service provides a RESTful API for sending emails and checking their delivery status.

## Features

- Send emails through a RESTful API
- Check email delivery status
- TypeScript support for better type safety
- Jest testing framework integration
- Express.js for handling HTTP requests
- Modular architecture with separate routes, controllers, and services

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd email-service
```

2. Install dependencies:
```bash
npm install
```

## Configuration

The service requires the following environment variables to be set:
- `PORT`: The port number on which the server will run (default: 3000)
- Email service credentials (to be configured based on your email provider)

## Running the Application

### Development Mode
```bash
npm run dev
```
This will start the server with nodemon, which automatically restarts when changes are detected.

### Production Mode
```bash
npm start
```

### Running Tests
```bash
npm test
```

## API Endpoints

### Send Email
```
POST /email/send
```
Request body:
```json
{
  "id": "email-12345",
  "to": "user@example.com",
  "subject": "Testing Retry and Fallback",
  "body": "This email demonstrates the service features."
}
```
Response:
```json
{
    "status": "Sent by Provider A"
}
```

### Check Email Status
```
GET /email/status/:id
```
Returns the delivery status of an email by its ID.

## Project Structure

```
email-service/
├── controllers/     # Request handlers
├── models/         # Data models
├── routes/         # API routes
├── services/       # Business logic
├── utils/          # Utility functions
├── tests/          # Test files
├── app.ts          # Express app configuration
└── server.ts       # Server entry point
```

## Development

The project uses TypeScript for type safety and better development experience. Key development tools include:

- TypeScript for static typing
- Jest for testing
- Nodemon for development
- Express.js for the web framework

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
