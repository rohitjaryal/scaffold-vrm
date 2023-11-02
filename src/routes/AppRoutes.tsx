import { Route, Routes } from "react-router-dom";
import React from "react";

const Landing = React.lazy(() => import("@/views/Landing"));
const OtherPage = React.lazy(() => import("@/views/OtherPage"));
const NotFound = React.lazy(() => import("@/views/NotFound"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/other-page" element={<OtherPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
