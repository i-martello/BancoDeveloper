import { verify } from "jsonwebtoken";

export const validarToken = (token: string, callback: (data: any) => void) => {
  verify(token, process.env.JWT_KEY!, (err, decoded) => {
    if (!err) {
      callback(decoded);
    }
  });
};
