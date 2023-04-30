import { Request, Response } from 'express';
import buySchema from '../models/buy.model';

interface marketType {
  buyCtrl: (req: Request, res: Response) => void;
}

export const marketCtrl: marketType = {
  buyCtrl: async (req, res) => {
    // await new buySchema(req.body).save();
    console.log(req.body);
    
    res.sendStatus(200);    
  }
}


