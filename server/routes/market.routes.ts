import { Router } from "express";
import { marketCtrl } from "../controllers/market.controller";

const router = Router();

router.post('/buy', marketCtrl.buyCtrl);

export default router;