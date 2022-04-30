import { memo, FC } from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { NotFound } from "../components/pages/NotFound";
import { HomeRoutes } from './HomeRoutes';
import { HeaderLayout } from '../components/templates/HeaderLayout';

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route index element={<Login />} />
      {HomeRoutes.map((route) => (
        <Route
          key={route.path}
          path={"home" + route.path}
          element={<HeaderLayout>{route.element}</HeaderLayout>}
        />
      ))}
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
})