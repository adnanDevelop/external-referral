import { useRoutes } from "react-router-dom";

import ExternalReferral from "../modules/externalReferral/page/page";

export const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <ExternalReferral />,
    },
  ]);
};
