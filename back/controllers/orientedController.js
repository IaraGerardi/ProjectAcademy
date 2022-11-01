const bcryptjs = require("bcryptjs");
const {
  orienteds: ModelOriented,
  counselors: ModelCounselor,
} = require("../database/models");

// URL: orientados
const getAllOriented = async (req, res) => {
  try {
    const oriented = await ModelOriented.findAll({
      attributes: ["id", "name", "lastname", "photoProfile", "counselorId"],
    });
    res.json({ message: 'Successful', info: oriented });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Something went wrong' });
  }
};

const getAllOrientedPaginated = async (req, res) => {
  try {
    /* En la query pasamos parametros de pagina, tamaño de cuantos 
        datos se mostraran y el orden (Por defecto será la  pagina 0,
        orden ascendente y 5 orientados que se muestren).
        limit: Cantidad de datos limite que trae,
        offset: se establece desde que dato arranca la query 
        order: orden que se muestran(Ascendente o Descendente by ID)
        Ejemplo: 1(page) * 5(size/limit) = 5(Offset) 
        Arranca desde el quinto dato y muestra un maximo de 5 posteriores. */
    const { page = 0, size = 5, order = "ASC" } = req.query;
    const options = {
      limit: +size,
      offset: +page * +size,
      order: [["id", order]],
      attributes: { exclude: ["password"] },
    };
    const { count, rows } = await ModelOriented.findAndCountAll(options);

    !count || !rows ?
      res.status(400).json({ message: 'Oriented not found' })
      :
      res.json({
        message: 'Successful',
        info: {
          total: count,
          categories: rows,
        }
      });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Something went wrong' });
  }
};

const createOriented = async (req, res) => {
  const { name, lastname, email, phone, program } = req.body;
  const { dni, age, school, address, why } = req.body;
  try {
    const user = await ModelOriented.create({
      name,
      lastname,
      email,
      program,
      photoProfile: req.file ? req.file.filename : null,
      phone,
      age,
      school,
      address,
      why,
      dni,
      password: await bcryptjs.hash(req.body.password, 10),
    });

    !user ?
      res.status(204).json({
        message: "Something went wrong",
        info: user.id,
      })
      :
      res.status(200).json({
        message: "Successfully created new Oriented",
        info: user.id,
      });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Something went wrong' });
  }
};

const orientedById = async (req, res) => {
  try {
    const oriented = await ModelOriented.findOne({
      where: {
        id: req.params.id,
      },
    });
    !oriented ?
      res.status(204).json({ message: 'Oriented not found', info: oriented })
      :
      res.status(200).json({ message: 'Successful', info: oriented });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Something went wrong' });
  }
};

const orientedAndCounselor = async (req, res) => {
  try {
    const oriented = await ModelOriented.findOne({
      where: {
        id: req.params.id,
      },
      include: { model: ModelCounselor },
    });
    !oriented ?
      res.status(204).json({ message: 'Oriented not found', info: oriented })
      :
      res.status(200).json({ message: 'Successful', info: oriented });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Something went wrong' });
  }
};

const counselorToOriented = async (req, res) => {
  const { counselor } = req.body;
  try {
    await ModelOriented.update(
      {
        counselorId: counselor,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ message: "Succesfully assigned" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Something went wrong' });
  }
};

const orientedPasswordUpdate = async (req, res) => {
  try {
    const { newPassword, newPasswordRepeat, actualPassword } = req.body;
    if (!actualPassword) {
      res.status(403).json({
        message: "Ingrese la contraseña actual",
        params: "actualPassword",
      });
    } else if (!newPassword) {
      res.status(403).json({
        message: "Ingrese la nueva contraseña",
        params: "newPassword",
      });
    } else if (!newPasswordRepeat) {
      res.status(403).json({
        message: "Ingrese la nueva contraseña repetida",
        params: "newPasswordRepeat",
      });
    } else {
      const oriented = await ModelOriented.scope("withPassword").findOne({
        where: { id: req.params.id },
      });
      if (!await bcryptjs.compare(actualPassword, oriented.password)) {
        res.status(403).json({
          message: "Contraseña actual incorrecta",
          params: "actualPassword",
        });
      } else if (newPassword !== newPasswordRepeat) {
        res.status(403).json({
          message: "La contraseña repetida es diferentes",
          params: "newPasswordRepeat",
        });
      } else if (newPassword === actualPassword) {
        res.status(403).json({
          message: "Las contraseña actual y la nueva deben ser diferentes",
          params: "newPassword",
        });
      } else {
        await ModelOriented.update(
          {
            password: await bcryptjs.hash(newPassword, 10),
          },
          {
            where: {
              id: req.params.id,
            }
          }
        );
        res
          .status(200)
          .json({ message: "Succesfully updated password" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  };
}

module.exports = {
  createOriented,
  getAllOriented,
  getAllOrientedPaginated,
  counselorToOriented,
  orientedById,
  orientedAndCounselor,
  orientedPasswordUpdate
};
