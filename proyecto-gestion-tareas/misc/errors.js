class UnauthorizedError extends Error {
  constructor(message = 'Unauthorized') {
    super(message);
    this.statusCode = 401;
  }
}

class WrongDataError extends Error {
  constructor(message = 'Username or password incorrect') {
    super(message);
    this.statusCode = 400;
  }
}

class BadRequestError extends Error {
  constructor(message = 'All fields are mandatory') {
    super(message);
    this.statusCode = 400;
  }
}

class NotFoundError extends Error {
  constructor(message = 'Path not found') {
    super(message);
    this.statusCode = 404;
  }
}

class InternalServerError extends Error {
  constructor(message = 'Something went wrong') {
    super(message);
    this.statusCode = 500;
  }
}

module.exports = {
  UnauthorizedError,
  WrongDataError,
  BadRequestError,
  NotFoundError,
  InternalServerError
};

  