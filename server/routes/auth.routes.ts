import { Router } from "express";
const router = Router();

router.post("/login", (req, res) => {
  console.log(req.body);
  res.end();
});

export default router;
