import React, { useRef } from "react";
import { userService } from "./auth/user-services";
import { userStorageService } from "../shared/service/user-storage-services";
import StudentDashboard from "../shared/Dashboard/studentDashboard";
import AllDashboard from "../shared/Dashboard/registratorDashboard";
import BuildingDashboard from "../shared/Dashboard/buildingDashboard";
import NormaleDashboard from "../shared/Dashboard/normalDashboard";
import FinanceDashboard from "../shared/Dashboard/financeDashboard";
import Loading from "./Loading";

const Dashboard = ({ ...props }) => {
  const user = userService.currentUser;
  let passedUser = undefined;
  if (user)
    passedUser =
      user.userPermissions[0].userPermissionCategoryLists[0].permission;
  const [open, setOpen] = React.useState(true);

  return (
    <div className="appcontainer">
      <Loading />
      {userStorageService.currentRole("Student") && (
        //@ts-ignore
        <StudentDashboard />
      )}

      {(userStorageService.currentRole("Registrar") ||
        userStorageService.currentRole("Fresh Man Coordinator") ||
        userStorageService.currentRole("Institute Head") ||
        userStorageService.currentRole("School Head") ||
        userStorageService.currentRole("Department Coordinator") ||
        userStorageService.currentRole("Collage Coordinator") ||
        userStorageService.currentRole("Institute Coordinator") ||
        userStorageService.currentRole("School Coordinator") ||
        userStorageService.currentRole("Department Head") ||
        userStorageService.currentRole("Collage Head") ||
        userStorageService.currentRole("Registrar Head") ||
        userStorageService.currentRole("Super Admin") ||
        userStorageService.currentRole("Instructor") ||
        userStorageService.currentRole("Academic President")) && (
        //@ts-ignore
        <AllDashboard />
      )}
      {userStorageService.currentRole("Building Supervisor") && (
        //@ts-ignore
        <BuildingDashboard />
      )}

      {userStorageService.currentRole("Finance") && (
        //@ts-ignore
        <FinanceDashboard />
      )}

      {userStorageService.currentRole("Registrar") === false &&
        userStorageService.currentRole("Super Admin") === false &&
        userStorageService.currentRole("Fresh Man Coordinator") === false &&
        userStorageService.currentRole("Institute Head") === false &&
        userStorageService.currentRole("School Head") === false &&
        userStorageService.currentRole("Department Coordinator") === false &&
        userStorageService.currentRole("Collage Coordinator") === false &&
        userStorageService.currentRole("Institute Coordinator") === false &&
        userStorageService.currentRole("School Coordinator") === false &&
        userStorageService.currentRole("Department Head") === false &&
        userStorageService.currentRole("Collage Head") === false &&
        userStorageService.currentRole("Academic President") == false &&
        userStorageService.currentRole("Student") == false &&
        userStorageService.currentRole("Instructor") == false &&
        userStorageService.currentRole("Building Supervisor") == false &&
        userStorageService.currentRole("Registrar Head") == false && (
          //@ts-ignore
          <NormaleDashboard />
        )}
    </div>
  );
};
export default Dashboard as any;
