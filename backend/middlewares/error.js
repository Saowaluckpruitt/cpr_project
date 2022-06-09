module.exports = (err, req, res, next) => {
  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConsta"
  ) {
    err.statusCode = 400;
    err.msg = err.errors[0].msg;
  }

  if (err.name === "TokenExpiredError") {
    err.statusCode = 401;
  }
  if (err.name === "JsonWebTokenError") {
    err.statusCode;
  }
  res.status(res.statusCode || 500).json({ msg: err.msg });
};
