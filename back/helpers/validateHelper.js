const { validationResult } = require("express-validator");
const path = require("path");
const fs = require("fs");

// eslint-disable-next-line consistent-return
const validateResult = (req, res, next) => {
  try {
    if (validationResult(req).isEmpty()) {
      return next();
    }
    if (req.file) {
      fs.unlinkSync(
        path.join(
          __dirname,
          '..','..','front','src','img-back','orientados',req.file.filename
        )
      );
    }
    throw validationResult(req);
  } catch (error) {
    res.status(403);
    res.json(error);
  }
};

module.exports = { validateResult };
