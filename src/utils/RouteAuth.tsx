import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/store";
import { logout } from "../redux/features/authSlice";

export const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const isTokenExpired = (token: string) => {
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
  };

  if (isAuthenticated && token && isTokenExpired(token)) {
    dispatch(logout());
    return <Navigate to="/add-referral" state={{ from: location }} replace />;
  }

  if (!isAuthenticated)
    return <Navigate to="/add-referral" state={{ from: location }} replace />;

  return <>{children}</>;
};

export const PublicRoute = ({ children }: React.PropsWithChildren) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) return <Navigate to="/" replace />;

  return <>{children}</>;
};
