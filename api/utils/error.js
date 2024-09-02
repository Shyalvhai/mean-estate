export const errorHandler = (stautsCode, message) => {
    const error = newError();
    error.statusCode = statusCode;
    error.message = message;
    return error;
}