const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const createError = require("../utils/createError");
const { User } = require("../models/User");

//CREATE TOKEN
const createToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

exports.login = async (req, res, next) => {
  try {
    const { phoneNumber, password } = ree.body;
    const user = await User.findOne({
      where: {
        [Op.or]: [{ phoneNumber: phoneNumber }],
      },
    });

    if (!user) {
      createError("Invalid credential", 400);
    }

    const isMatch = await bcrypt.compare(password, User.password);
    if (isMatch) {
      createError("Invalid credential", 400);
    }

    const token = createToken({ id: User.id });
    res.json({ token });
  } catch (err) {
    next(err);
  }
};

exports.register = async (req, res, next) => {
  try {
    const { userName, phoneNumber, password, confirmPassword } = req.body;

    if (!phoneNumber) {
      createError("phone number is require", 400);
    }
    if (!password) {
      createError("password is require", 400);
    }
    if (password !== confirmPassword) {
      createError("password did not match", 400);
    }

    const isPhoneNumber = validator.isMobilePhone(phoneNumber + "");
    if (!isPhoneNumber) {
      createError("Invalid phone number", 400);
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      userName,
      phoneNumber: isPhoneNumber,
      password: hashedPassword,
    });

    const token = createToken({ id: User.id });
    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};
