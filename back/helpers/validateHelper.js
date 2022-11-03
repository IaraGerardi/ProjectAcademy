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
          '..','public','img','oriented',req.file.filename

        )
      );
    }
    res.status(400).json({message: 'Form errors', info: validationResult(req)})
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: 'Something went wrong' });
  }
};

module.exports = { validateResult };