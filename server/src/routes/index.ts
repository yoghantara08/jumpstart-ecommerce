import express, { type Router } from "express";

const router = express.Router();

interface IRoute {
  path: string;
  route: Router;
}

const routes: IRoute[] = [];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
