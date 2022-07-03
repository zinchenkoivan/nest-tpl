import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor() {
    super(UserNotFoundException.name, HttpStatus.NOT_FOUND);
  }
}

export class UserAlreadyExistsException extends HttpException {
  constructor() {
    super(UserNotFoundException.name, HttpStatus.BAD_REQUEST);
  }
}
