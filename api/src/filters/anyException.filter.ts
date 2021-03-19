import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class AnyExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = HttpStatus.INTERNAL_SERVER_ERROR;

    const isExceptionEmpty = Object.keys(exception).length > 0;
    const error = isExceptionEmpty ? exception : 'Internal server error';

    response.status(status).json({
      path: request.url,
      statusCode: status,
      timestamp: new Date().toISOString(),
      error,
    });
  }
}
