import { Router } from "express";
import { authenticateRouter } from "./authenticate.routes";
import { userRouter } from "./user.routes";

const router = Router();

router.get('/', (request, response) => {response.send('Hello World!')});
router.use('/user', userRouter);
router.use('/authenticate', authenticateRouter);

export { router };