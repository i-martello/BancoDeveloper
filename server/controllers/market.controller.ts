import { Request, Response } from "express";
import cuentaSchema from "../models/buy.model";
import { validarToken } from "../jwt/jwt";

interface marketType {
  buyCtrl: (req: Request, res: Response) => void;
  getCryptosCtrl: (req: Request, res: Response) => void;
  sellCtrl: (req: Request, res: Response) => void;
}

export const marketCtrl: marketType = {
  buyCtrl: async (req, res) => {
    const { user, cryptos } = req.body;
    console.log(req.body);
    
    const comprador = await cuentaSchema.findOne({ user });
    console.log(comprador);
    

    if (comprador) {
      const copiaCryptos = {...comprador};
      copiaCryptos.cryptos.push(cryptos[0]);
      await cuentaSchema.findOneAndUpdate(
        { user },
        copiaCryptos
      );
    } else {
      await new cuentaSchema(req.body).save();
    }

    // if (comprador) {
    //   await cuentaSchema.findOneAndUpdate(
    //     { user },
    //     { $push: { cryptos: cryptos[0] } }
    //   );
    // } else {
    //   await new cuentaSchema(req.body).save();
    // }
    res.sendStatus(200);
  },
  getCryptosCtrl: async (req, res) => {
    const token = req.cookies.token;

    validarToken(token, async (data) => {
      if (data) {
        const usuario = data.user;
        const cuenta = await cuentaSchema.findOne({ user: usuario });
        console.log(cuenta);

        if (cuenta) {
          return res.json(cuenta);
        }
        res.json({ msg: "error" });
      }
    });
  },
  sellCtrl: async (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
  },
};
