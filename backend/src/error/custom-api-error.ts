class CustomAPIError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;

    // Set the prototype explicitly for extending Error
    Object.setPrototypeOf(this, CustomAPIError.prototype);
  }
}

export default CustomAPIError;
