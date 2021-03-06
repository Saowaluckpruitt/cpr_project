const createError = require("../utils/createError");
const { User } = require("../models");

exports.createMe = async (req, res, next) => {
  try {
    const user = JSON.parse(JSON.stringify(req.user));
    res.json({ user });
  } catch (err) {
    next(err);
  }
};
