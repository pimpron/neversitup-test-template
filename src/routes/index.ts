import express from "express";

import * as shufflings from "../controller/permutations";
import * as findodds from "../controller/findTheOdd";
import * as countSmileys from "../controller/countTheSmileyFaces";

const router = express.Router();
router.post("/shuff", shufflings.getPermutations);
router.post("/findodd", findodds.findOdd);
router.post("/countSmileys", countSmileys.countSmileys);
export default router;
