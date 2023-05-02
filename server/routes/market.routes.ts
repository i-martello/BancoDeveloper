import { Router } from "express";
import { marketCtrl } from "../controllers/market.controller";

const router = Router();

router.post('/buy', marketCtrl.buyCtrl);
router.get('/cuentacryptos', marketCtrl.getCryptosCtrl);
router.post('/sell', marketCtrl.sellCtrl);

export default router;