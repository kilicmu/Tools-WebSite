import { loadableComponentFactory } from "../common/utils/loadableComponentFactory";

export const router = [
  {
    path: "/all",
    component: loadableComponentFactory(() => import("../views/AllImages")),
  },
  {
    path: "/",
    component: loadableComponentFactory(() => import("../views/Home")),
  },
];
