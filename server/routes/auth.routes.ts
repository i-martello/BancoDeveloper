import { Router } from "express";
import {ctrlAuth }from '../controllers/auth.controller'
const router = Router();

router.post("/register", ctrlAuth.Register);
router.post("/login", ctrlAuth.Login);


export default router;
