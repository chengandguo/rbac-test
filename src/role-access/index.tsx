import { lazy } from "react";
import { ROLE } from "../utils/const";

const RoleMap = {
  [ROLE.ADMIN]: lazy(() => import("./admin")),
  [ROLE.DEVELOPER]: lazy(() => import("./developer")),
  [ROLE.GUEST]: lazy(() => import("./guest")),
};

export default RoleMap;
