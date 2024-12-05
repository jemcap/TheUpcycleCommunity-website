const errorHandler = (error, req, res, next) => {
  if (error.name === "CastError") {
    return res.status(400).send({ error: "Invalid format" });
  } else if (error.name === "ValidationError") {
    return res.status(400).send({ error: "Validation error" });
  }
  next(error);
};

export default errorHandler;
