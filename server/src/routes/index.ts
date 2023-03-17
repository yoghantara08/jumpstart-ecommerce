import { Router } from "express";
import adminRoute from "./admin.route";
import authRoute from "./auth.route";
import userRoute from "./user.route";

const router = Router();

interface IRoute {
  path: string;
  route: Router;
}

const routes: IRoute[] = [
  { path: "/auth", route: authRoute },
  { path: "/user", route: userRoute },
  { path: "/admin", route: adminRoute },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
