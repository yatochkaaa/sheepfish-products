import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "../routes";
import { ROUTE } from "../utils/consts";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}

      <Route path="*" element={<Navigate to={ROUTE.SHOP} />} />
    </Routes>
  );
};

export default AppRouter
