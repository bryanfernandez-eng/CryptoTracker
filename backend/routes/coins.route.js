import { Router } from "express";
import {
  getCoins,
  getCoinDetail,
  getCoinHistory,
} from "../controllers/coins.controller.js";

const router = Router();

router.get("/", getCoins);
router.get("/:coinId", getCoinDetail);
router.get("/:coinId/history", getCoinHistory);

export default router;
