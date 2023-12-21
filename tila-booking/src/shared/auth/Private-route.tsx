import React from "react";
import Unauthorized from "../../components/UserManagment/_accounts/account/UnauthorizedPage/UnauthorizedPage";
import { userService } from "./user-services";
import NoPermission from "../../components/UserManagment/_accounts/account/NoPermission/noPermission";

interface Props {
  component: React.ComponentType;
  path?: string;
  roles?: Array<any>;
}

export const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
  roles,
}) => {
  const user = userService.currentRole;
  let passedUser = undefined;
  if (user != null) {
    if (user.userPermissions[0].roles.length > 0) {
      if (user) passedUser = user.userPermissions[0].roles[0].name;
      const userHasRequiredRole =
        passedUser && roles && roles.includes(passedUser) ? true : false;

      if (passedUser && userHasRequiredRole) {
        return <RouteComponent />;
      }

      if (passedUser && !userHasRequiredRole) {
        return <RouteComponent />;
      } else {
        return <Unauthorized />;
      }
    } else {
      return <NoPermission />;
    }
  } else {
    return <NoPermission />;
  }
};
