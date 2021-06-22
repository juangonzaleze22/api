import config from '../config';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import Role from '../models/Roles';
export const verifyToken = async (req, res, next) => {
  try {
    console.log(req.body);
    const token = req.body.token;
    if (!token) return res.status(404).json({
      message: "no tokens providers"
    });
    const decode = jwt.verify(token, config.SECRECT);
    req.userId = decode.id;
    const userToken = await User.findById(req.userId);
    if (!userToken) return res.status(403).json({
      message: "No user found"
    });
    next();
  } catch (error) {
    res.status(401).json({
      message: "Unauthorized"
    });
  }
};
export const isModerator = async (req, res, next) => {
  const user = await User.findById(req.userId);
  const roles = await Role.find({
    _id: {
      $in: user.roles
    }
  });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === 'moderator') {
      next();
      return;
    }
  }

  return res.status(401).json({
    message: "requiere ser moderador"
  });
};
export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId);

  if (user.status == 'admin') {
    next();
    return;
  }

  return res.status(401).json({
    message: "requiere ser admin"
  });
};