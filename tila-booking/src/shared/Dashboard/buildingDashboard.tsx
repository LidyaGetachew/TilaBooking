import { Grid, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import Cards from "../../uicontrols/Card";
import { userService } from "../auth/user-services";
import { appUrl } from "../../AppURI";
import axios from "axios";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HotelIcon from "@mui/icons-material/Hotel";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import BallotIcon from "@mui/icons-material/Ballot";
import Loading from "../Loading";

const BuildingDashboard = ({ ...props }) => {
  const [datanoofbuilding, setDatanoofbuilding] = useState<any>();
  const [datanoofprograms, setDatanoofprograms] = useState<any>();
  const [datanoofdormrooms, setDatanoofdormrooms] = useState<any>();
  const [datanoofclassrooms, setDatanoofclassrooms] = useState<any>();
  const user = userService.currentUser;
  let passedUser = undefined;
  if (user)
    passedUser =
      user.userPermissions[0].userPermissionCategoryLists[0].permission;
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  // *********** Code Started For:- useEffect Function to fetch no of buildings row data using direct api.***********
  useEffect(() => {
    //  handleControlChange
    const getNoofBuilding = (url: string = appUrl + "DashBoards") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/count-no-of-building")
        .then((rowdata: any) => setDatanoofbuilding(rowdata.data))
        .catch((err) => console.log(err));
      return;
    };
    getNoofBuilding();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of buildings row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Programs     row data using direct api.***********
  useEffect(() => {
    //  handleControlChange
    const getPrograms = (url: string = appUrl + "DashBoards") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/count-no-of-programs")
        .then((rowdata: any) => setDatanoofprograms(rowdata.data))
        .catch((err) => console.log(err));
      return;
    };
    getPrograms();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch  no of Programs  row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch Dormitories row data using direct api.***********
  useEffect(() => {
    const getNoOfDormRooms = (url: string = appUrl + "DashBoards") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/count-no-of-dorm-rooms")
        .then((rowdata: any) => setDatanoofdormrooms(rowdata.data));
      return;
    };
    getNoOfDormRooms();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch Dormitories row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch Class Rooms row data using direct api.***********
  useEffect(() => {
    const getNoOfClassRooms = (url: string = appUrl + "DashBoards") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/count-no-of-class-rooms")
        .then((rowdata: any) => setDatanoofclassrooms(rowdata.data));
      return;
    };
    getNoOfClassRooms();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch Class Rooms row data using direct api.***********

  return (
    <>
      <Loading />
      <div className="appcontainer">
        <Grid container className="dashbaordholder" >
          <Grid item xs={12}>
            <Grid container >
              <Grid item xs={12} md={6} lg={3} style={{ paddingLeft: "12px" }}>
                <Paper className="paper" elevation={8}>
                  <Cards
                    amount={datanoofprograms || 0}
                    info="Programs"
                    desc="No Of Programs Available"
                    infolink="List Of Programs"
                    path="/userComponent/viewProgram"
                    icon={<BallotIcon />}
                  />
                </Paper>
              </Grid>

              <Grid item xs={12} md={6} lg={3} style={{ paddingLeft: "12px" }}>
                <Paper className="paper" elevation={8}>
                  <Cards
                    amount={datanoofbuilding || 0}
                    info="Buildings"
                    desc="No Of Buildings"
                    infolink="List of Buildings"
                    path="/userComponent/viewBuilding"
                    icon={<ApartmentIcon />}
                  />
                </Paper>
              </Grid>

              <Grid item xs={12} md={6} lg={3} style={{ paddingLeft: "12px" }}>
                <Paper className="paper" elevation={8}>
                  <Cards
                    amount={datanoofprograms || 0}
                    info="Programs"
                    desc="No Of Programs Available"
                    infolink="List Of Programs"
                    path="/userComponent/viewProgram"
                    icon={<BallotIcon />}
                  />
                </Paper>
              </Grid>

              <Grid item xs={12} md={6} lg={3} style={{ paddingLeft: "12px" }}>
                <Paper className="paper" elevation={8}>
                  <Cards
                    amount={datanoofdormrooms || 0}
                    info="Dormitory Rooms"
                    desc="No Of Dormitory Rooms"
                    infolink="List Of Rooms"
                    path="/userComponent/viewBuilding"
                    icon={<HotelIcon />}
                  />
                </Paper>
              </Grid>

              <Grid item xs={12} md={6} lg={3} style={{ paddingLeft: "12px" }}>
                <Paper className="paper" elevation={8}>
                  <Cards
                    amount={datanoofclassrooms || 0}
                    info="Classrooms"
                    desc="No Of Classrooms"
                    infolink="List Of Classrooms"
                    path="/userComponent/viewBuilding"
                    icon={<CastForEducationIcon />}
                  />
                </Paper>
              </Grid>

              <Grid item xs={12} md={6} lg={3} style={{ paddingLeft: "12px" }}>
                <Paper className="paper" elevation={8}>
                  <Cards
                    amount={datanoofclassrooms || 0}
                    info="Meeting Rooms"
                    desc="No Of Classrooms"
                    infolink="List Of Classrooms"
                    path="/userComponent/viewBuilding"
                    icon={<MeetingRoomIcon />}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={4}></Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default BuildingDashboard as any;
