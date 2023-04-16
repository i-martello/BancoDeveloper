import { Request, Response } from "express";
import userModel from "../models/user.model";
import bcrypt from "bcrypt";
import jwt, { sign } from 'jsonwebtoken'
import { serialize } from 'cookie'

interface objectType {
  Register: (req: Request, res: Response) => void;
  Login: (req: Request, res: Response) => void;
}

export const ctrlAuth: objectType = {
  Register: async (req, res) => {
    const { user, password } = req.body;
    const userExist = await userModel.findOne({ user });
    if (!userExist) {
      const hash = await bcrypt.hash(password, 10);
      await new userModel({ user, password: hash }).save();
      return res.end();
    }
    res.json({ msg: "El usuario ya existe" });
  },
  Login: async (req, res) => {
    const { user, password } = req.body;
    const userExist = await userModel.findOne({ user });
    if (userExist) {
      const isValid = await bcrypt.compare(password, userExist.password);
      if(isValid){
        const token = sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
            user: user
        }, process.env.JWT_KEY!)
        const serialized = serialize('token', token, {
          httpOnly: true,
          sameSite: 'strict',
          secure: process.env.NODE_ENV === 'production',
          maxAge: 1000 * 60 * 60 * 24 * 7,
          path: '/'
        });
        try {
          res.setHeader('Set-Cookie', serialized);
          return res.status(200).json({ success: token})
        } catch (error) {
          return res.status(401).json({ msg: "Error del servidor"})
        }
      };
      return res.json({msg: "Contraseña incorrecta"});
    }
    res.json({msg: "EL usuario ingresado no existe"});
  },
};