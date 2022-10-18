import { Router } from "express";
import { appointmentRouter } from "./appointment.routes";
import { authenticateRouter } from "./authenticate.routes";
import { commentRouter } from "./comment.routes";
import { rateRouter } from "./rate.routes";
import { userRouter } from "./user.routes";

const router = Router();

router.get('/', (request, response) => {response.send('Hello World!')});
router.use('/user', userRouter);
router.use('/authenticate', authenticateRouter);
router.use('/appointment', appointmentRouter);
router.use('/comment', commentRouter);
router.use('/rate', rateRouter);

export { router };