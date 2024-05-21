import { useState, Suspense } from "react";
import RoleMap from "./role-access/index";
import { ROLE } from "./utils/const";

function App() {
  const [role, _] = useState(ROLE.GUEST);
  const Current = RoleMap[role];
  return (
    <Suspense fallback="loading...">
      <Current />
    </Suspense>
  );
}

export default App;
