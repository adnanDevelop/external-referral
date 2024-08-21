import { useRoutes, Outlet } from "react-router-dom";
import { ProtectedRoute, PublicRoute } from "../utils/RouteAuth";

import ExternalReferral from "../modules/externalReferral/page/page";

export const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          {/* <DashboardLayout /> */}
          <div>Protected route</div>
        </ProtectedRoute>
      ),
      children: [],
    },
    {
      element: (
        <PublicRoute>
          <Outlet />
        </PublicRoute>
      ),
      children: [
        {
          path: "/add-referral",
          element: <ExternalReferral />,
        },
      ],
    },
  ]);
};
