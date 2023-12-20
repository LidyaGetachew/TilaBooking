import React from "react";

export enum AuthRoutes {
  dashboard = "/dashboard",
  account = "/account",
  profile = "/profile",
  admin = "/admin",
  viewDepartment = "/viewDepartment",
  viewCampus="/viewCampus"
}

export enum NonAuthRoutes {
  login = "/",
  support = "/support",
  unauthorized = "/unauthorized",
}
