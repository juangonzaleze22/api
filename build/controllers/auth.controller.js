import User from '../models/User';
import Roles from '../models/Roles';
import jwt from 'jsonwebtoken';
import config from '../config';
export const register = async (req, res) => {
  const {
    name,
    lastname,
    username,
    business_photo,
    business_name,
    description,
    address,
    email,
    password,
    roles,
    status
  } = req.body;
  console.log(req.body);
  const newUser = new User({
    name,
    lastname,
    username,
    email,
    business_photo,
    business_name,
    description,
    address,
    password: await User.encryptPassword(password),
    status
  });

  if (roles) {
    const foundRoles = await Roles.find({
      name: {
        $in: roles
      }
    });
    newUser.roles = foundRoles.map(role => role._id);
  } else {
    const role = await Roles.findOne({
      name: 'user'
    });
    newUser.roles = [role._id];
  }

  const usernameDB = await User.findOne({
    username: username
  });
  const emailDB = await User.findOne({
    email: email
  });

  if (usernameDB) {
    res.status(401).json({
      message: 'Ya existe este usuario'
    });
  } else if (emailDB) {
    res.status(401).json({
      message: 'Ya existe este email'
    });
  } else {
    const saveUser = await newUser.save();
    const token = jwt.sign({
      id: saveUser._id
    }, config.SECRECT, {
      expiresIn: 86400
    });
    res.json({
      token,
      message: 'Usuario creado exitosamente'
    });
  }
};
export const login = async (req, res) => {
  const userFound = await User.findOne({
    email: req.body.email
  });
  console.log(req.body.email, req.body.password);
  if (!userFound) res.status(401).json({
    message: "Este usuario no existe"
  });
  const matchPassword = await User.comparePassword(req.body.password, userFound.password);

  if (!matchPassword) {
    return res.status(401).json({
      token: null,
      message: "Contraseña incorrecta"
    });
  }

  const token = jwt.sign({
    id: userFound._id
  }, config.SECRECT, {
    expiresIn: 86400
  });
  console.log('===>', token);
  res.json({
    token,
    userFound
  });
};
export const users = async (req, res) => {
  const users = await User.findById();
  res.json(users);
};