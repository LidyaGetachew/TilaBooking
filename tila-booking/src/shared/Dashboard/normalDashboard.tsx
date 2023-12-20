import { Button, Grid, Paper } from "@mui/material";
import React, { useState, useEffect, useCallback } from "react";
import Cards from "../../uicontrols/Card";
import { userService } from "../auth/user-services";
import { appUrl } from "../../AppURI";
import { Card, List, Typography } from "antd";
import axios from "axios";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
import { userStorageService } from "../../shared/service/user-storage-services";
import DynamicFeedRoundedIcon from "@mui/icons-material/DynamicFeedRounded";
import ViewModuleRoundedIcon from "@mui/icons-material/ViewModuleRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { PieChart, Pie, Sector } from "recharts";
import { Typographyh6 } from "../../uicontrols/Typography";
import { Progress } from "antd";
import BallotIcon from "@mui/icons-material/Ballot";
import FolderOffIcon from "@mui/icons-material/FolderOff";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import HotelIcon from "@mui/icons-material/Hotel";
import Loading from "../Loading";

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${value} Student`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const NormaleDashboard = ({ ...props }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const [datanoofprograms, setDatanoofprograms] = useState<any>();
  const [datanoofcourses, setnoofcourses] = useState<any>();
  const [datanoofmodules, setnoofmodules] = useState<any>();
  const [datanoofstudents, setnoofstudents] = useState<any>();
  const [datanoofgraduatestudents, setnoofgraduatedstudents] = useState<any>();
  const [datanoofstudentperenrol, setnoofstudentperenrol] = useState<any>([]);
  const [
    datanoofgraduatestudentPerEnrollementType,
    setdatanoofgraduatestudentPerEnrollementType,
  ] = useState<any>([]);
  const [
    dataallstudentperenrollementType,
    setdataallstudentperenrollementType,
  ] = useState<any>([]);
  const [
    datanoofgraduatestudentPerProgramType,
    setdatanoofgraduatestudentPerProgramType,
  ] = useState<any>([]);
  const [datastudentperprogram, setstudentperprogram] = useState<any>([]);
  const [datanoofbuilding, setDatanoofbuilding] = useState<any>();
  const [datanoofdormrooms, setDatanoofdormrooms] = useState<any>();
  const [datanoofclassrooms, setDatanoofclassrooms] = useState<any>();
  const [datanoofstudentactivityjoined, setnoofstudentactivityjoined] =
    useState<any>();
  const user = userService.currentUser;
  let passedUser = undefined;
  if (user)
    passedUser =
      user.userPermissions[0].userPermissionCategoryLists[0].permission;
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

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

  // *********** Code Started For:- useEffect Function to fetch no of Courses row data using direct api.***********
  useEffect(() => {
    const getNoofCourses = (url: string = appUrl + "DashBoards") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/count-no-of-courses")
        .then((rowdata: any) => setnoofcourses(rowdata.data));
      return;
    };
    getNoofCourses();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of Courses row data using direct api.***********
  // *********** Code Started For:- useEffect Function to fetch no of Modules row data using direct api.***********
  useEffect(() => {
    const getNoofModules = (url: string = appUrl + "DashBoards") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/count-no-of-modules")
        .then((rowdata: any) => setnoofmodules(rowdata.data));
      return;
    };
    getNoofModules();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of Modules row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of  Students   row data using direct api.***********
  useEffect(() => {
    const getNoofStudents = (url: string = appUrl + "DashBoards") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/count-no-of-students")
        .then((rowdata: any) => setnoofstudents(rowdata.data));
      return;
    };
    getNoofStudents();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of  Students row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Graduate Students   row data using direct api.***********
  useEffect(() => {
    const getNoofGraduateStudents = (url: string = appUrl + "DashBoards") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/count-no-of-graduate-students")
        .then((rowdata: any) => setnoofgraduatedstudents(rowdata.data));
      return;
    };
    getNoofGraduateStudents();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of  Graduate Students row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of  Students   Per Enorllment row data using direct api.***********
  useEffect(() => {
    const getNoofStudentPerEnorllment = (
      url: string = appUrl + "DashBoards"
    ) => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/get-number-of-students-per-enrollment-type")
        .then((rowdata: any) => setnoofstudentperenrol(rowdata.data));
      return;
    };
    getNoofStudentPerEnorllment();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of   Per Enorllment  row data using direct api.***********
  // *********** Code Started For:- useEffect Function to fetch no of  Students   Per Enorllment row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Acadmic President")
    ) {
      const getallofStudentPerEnorllmentType = (
        url: string = appUrl + "DashBoards"
      ) => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/get-all-number-of-students-per-enrollment-type")
          .then((rowdata: any) =>
            setdataallstudentperenrollementType(rowdata.data)
          );
        return;
      };
      getallofStudentPerEnorllmentType();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of   Per Enorllment  row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Student with Decpline Measure  row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Acadmic President")
    ) {
      const getnoofalmunirequest = (url: string = appUrl + "DashBoards") => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/get-number-of-students-per-program")
          .then((rowdata: any) => setstudentperprogram(rowdata.data));
        return;
      };
      getnoofalmunirequest();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch  no of  Student with Decpline Measure   data using direct api.***********

  useEffect(() => {
    if (userStorageService.currentRole("Registrar Head")) {
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
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of buildings row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch Dormitories row data using direct api.***********
  useEffect(() => {
    if (userStorageService.currentRole("Registrar Head")) {
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
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch Dormitories row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch Class Rooms row data using direct api.***********
  useEffect(() => {
    if (userStorageService.currentRole("Registrar Head")) {
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
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch Class Rooms row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of student activity joined  row data using direct api.***********
  useEffect(() => {
    //  handleControlChange
    const getNoOfStudentActivityJoined = (
      url: string = appUrl + "Dashboards"
    ) => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/count-no-of-studnet-activities")
        .then((rowdata: any) => setnoofstudentactivityjoined(rowdata.data))
        .catch((err) => console.log(err));
      return;
    };
    getNoOfStudentActivityJoined();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch  no of number of f joined   row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of  Students   Per Enorllment row data using direct api.***********
  useEffect(() => {
    const getGraduateStudentPerEnrollementType = (
      url: string = appUrl + "DashBoards"
    ) => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/get-no-of-graduate-students-per-enrollemnt-type")
        .then((rowdata: any) =>
          setdatanoofgraduatestudentPerEnrollementType(rowdata.data)
        );
      return;
    };
    getGraduateStudentPerEnrollementType();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of   Per Enorllment  row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of  Students   Per Enorllment row data using direct api.***********
  useEffect(() => {
    const getGraduateStudentPerProgramType = (
      url: string = appUrl + "DashBoards"
    ) => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/get-no-of-graduate-students-per-program-type")
        .then((rowdata: any) =>
          setdatanoofgraduatestudentPerProgramType(rowdata.data)
        );
      return;
    };
    getGraduateStudentPerProgramType();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of   Per Enorllment  row data using direct api.***********

  return (
    <>
      <Loading />
      <div className="appcontainer">
        <Grid container className="dashbaordholder" >
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} md={6} lg={3}>
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
              <Grid item xs={12} md={6} lg={3}>
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
              <Grid item xs={12} md={6} lg={3}>
                <Paper className="paper" elevation={8}>
                  <Cards
                    amount={datanoofdormrooms || 0}
                    info="Dormitory Rooms"
                    desc="No Of Dormitory Rooms"
                    infolink="List Of Rooms"
                    path="/userComponent/viewDormitoryPlacement"
                    icon={<HotelIcon />}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Paper className="paper" elevation={8}>
                  <Cards
                    amount={datanoofclassrooms || 0}
                    info="Classrooms"
                    desc="No Of Classrooms"
                    infolink="List Of Classrooms"
                    path="/userComponent/viewDormitoryPlacement"
                    icon={<CastForEducationIcon />}
                  />
                </Paper>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Paper className="paper" elevation={8}>
                  <Cards
                    amount={datanoofcourses || 0}
                    info="Courses"
                    desc="No of Courses"
                    infolink="From All Departments"
                    path="/userComponent/viewCourse"
                    icon={<DynamicFeedRoundedIcon />}
                  />
                </Paper>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Paper className="paper" elevation={8}>
                  <Cards
                    amount={datanoofmodules || 0}
                    info="Modules"
                    desc="No of Modules"
                    infolink="In all Departments"
                    path="/userComponent/viewModule"
                    icon={<ViewModuleRoundedIcon />}
                  />
                </Paper>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Paper className="paper" elevation={8}>
                  <Cards
                    amount={datanoofstudents || 0}
                    info="Students"
                    desc="No of Students"
                    infolink="In the University"
                    path="/userComponent/viewStudent"
                    icon={<SupervisorAccountRoundedIcon />}
                  />
                </Paper>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Paper className="paper" elevation={8}>
                  <Cards
                    amount={datanoofgraduatestudents || 0}
                    info="Graduated"
                    desc="No of Students"
                    infolink="In the University"
                    path="#"
                    icon={<SchoolRoundedIcon />}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={4}>
              <Grid item xs={6} className="chartholder">
                <Paper elevation={8}>
                  <Card
                    title={
                      <Typographyh6 data="All Student Per In Enrollement Type" />
                    }
                  >
                    {dataallstudentperenrollementType.length != 0 && (
                      <BarChart
                        width={700}
                        height={370}
                        data={dataallstudentperenrollementType}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                        barSize={20}
                      >
                        <XAxis
                          dataKey="enrollemntType"
                          scale="point"
                          padding={{ left: 10, right: 10 }}
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar
                          dataKey="numberOfStudnet"
                          fill="#8884d8"
                          background={{ fill: "#84d8" }}
                        />
                      </BarChart>
                    )}
                    {dataallstudentperenrollementType.length == 0 && (
                      <div>
                        <Grid
                          container
                          justifyContent="center"
                          spacing={3}
                          style={{ color: "#d2b48c", textAlign: "center" }}
                        >
                          <Grid item xs={12}>
                            <FolderOffIcon />
                          </Grid>
                          <Grid item xs={12}>
                            <h6
                              style={{
                                color: "#d2b48c",
                                textAlign: "center",
                              }}
                            >
                              {" "}
                              No Graduate Student
                            </h6>
                          </Grid>
                        </Grid>
                      </div>
                    )}
                  </Card>
                </Paper>
              </Grid>

              <Grid item xs={6} className="chartholder">
                <Paper elevation={8}>
                  <Card
                    title={
                      <Typographyh6 data="Number of Graduated Students Per In Enrollement Type" />
                    }
                  >
                    {datanoofgraduatestudentPerEnrollementType.length != 0 && (
                      <BarChart
                        width={700}
                        height={370}
                        data={datanoofgraduatestudentPerEnrollementType}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                        barSize={20}
                      >
                        <XAxis
                          dataKey="enrollmentType"
                          scale="point"
                          padding={{ left: 10, right: 10 }}
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar
                          dataKey="numberOfGraduateStudnets"
                          fill="#8884d8"
                          background={{ fill: "#8884" }}
                        />
                      </BarChart>
                    )}
                    {datanoofgraduatestudentPerEnrollementType.length == 0 && (
                      <div>
                        <Grid
                          container
                          justifyContent="center"
                          spacing={3}
                          style={{ color: "#d2b48c", textAlign: "center" }}
                        >
                          <Grid item xs={12}>
                            <FolderOffIcon />
                          </Grid>
                          <Grid item xs={12}>
                            <h6
                              style={{
                                color: "#d2b48c",
                                textAlign: "center",
                              }}
                            >
                              {" "}
                              No Graduate Student
                            </h6>
                          </Grid>
                        </Grid>
                      </div>
                    )}
                  </Card>
                </Paper>
              </Grid>

              <Grid item xs={6} className="chartholder">
                <Paper elevation={8}>
                  <Card
                    title={
                      <Typographyh6 data="Number of Graduated Students Per In Program Type" />
                    }
                  >
                    <PieChart width={400} height={400}>
                      <Pie
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        data={datanoofgraduatestudentPerProgramType}
                        cx={200}
                        cy={200}
                        innerRadius={60}
                        outerRadius={80}
                        dataKey="value"
                        onMouseEnter={onPieEnter}
                      />
                    </PieChart>
                  </Card>
                </Paper>
              </Grid>

              <Grid item xs={6} className="chartholder">
                <Paper elevation={8}>
                  <Card
                    title={
                      <Typographyh6 data="Number of Student in All Programs of Bonga University (in %)" />
                    }
                  >
                    <List
                      style={{ maxHeight: 400, overflow: "auto" }}
                      dataSource={datastudentperprogram}
                      renderItem={(item: any) => (
                        <List.Item>
                          <Grid container spacing={1}>
                            <Grid item xs={12}>
                              <Typography>{item.program}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Progress percent={item.numberOfStudnet} />
                            </Grid>
                          </Grid>
                        </List.Item>
                      )}
                    />
                  </Card>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default NormaleDashboard as any;
