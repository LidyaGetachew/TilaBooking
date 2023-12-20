import { Grid, Paper } from "@mui/material";
import React, { useState, useEffect, useCallback } from "react";
import Cards from "../../uicontrols/Card";
import { userService } from "../auth/user-services";
import { appUrl } from "../../AppURI";
import { Card, List, Typography } from "antd";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
import DynamicFeedRoundedIcon from "@mui/icons-material/DynamicFeedRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import { PieChart, Pie, Sector } from "recharts";
import { Typographyh6 } from "../../uicontrols/Typography";
import { Progress } from "antd";
import BallotIcon from "@mui/icons-material/Ballot";
import FolderOffIcon from "@mui/icons-material/FolderOff";
import Loading from "../Loading";
import Divider from "@mui/material/Divider";

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
    </g>
  );
};

const renderActiveShapePaidAndUnpaid = (props: any) => {
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
    </g>
  );
};

const FinanceDashboard = ({ ...props }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex1, setActiveIndex1] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  const onPieEnter1 = useCallback(
    (_, index) => {
      setActiveIndex1(index);
    },
    [setActiveIndex1]
  );
  const [datanoofprograms, setDatanoofprograms] = useState<any>();
  const [datanoofcourses, setnoofcourses] = useState<any>();
  const [datanoofstudents, setnoofstudents] = useState<any>();
  const [datanoofgraduatestudents, setnoofgraduatedstudents] = useState<any>();
  const [
    dataallstudentperenrollementType,
    setdataallstudentperenrollementType,
  ] = useState<any>([]);
  const [datastudentperprogram, setstudentperprogram] = useState<any>([]);
  const [dataPaidAndUnPaid, setdataPaidAndUnPaid] = useState<any>([]);
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
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of   Per Enorllment  row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Student with Decpline Measure  row data using direct api.***********
  useEffect(() => {
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
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch  no of  Student with Decpline Measure   data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch Class Rooms row data using direct api.***********
  useEffect(() => {
    const getcafeandnoncafe = (url: string = appUrl + "DashBoards") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/get-no-of-paid-and-unPaid-students-per-acadamic-year")
        .then((rowdata: any) => setdataPaidAndUnPaid(rowdata.data));
      return;
    };
    getcafeandnoncafe();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch Class Rooms row data using direct api.***********

  return (
    <>
      <Loading />
      <div className="appcontainer">
        <Grid container className="dashbaordholder">
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={8} md={2} lg={3} style={{ paddingLeft: "12px" }}>
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
              <Grid item xs={8} md={2} lg={3} style={{ paddingLeft: "12px" }}>
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

              <Grid item xs={8} md={2} lg={3} style={{ paddingLeft: "12px" }}>
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

              <Grid item xs={8} md={2} lg={3} style={{ paddingLeft: "12px" }}>
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
            <Grid container spacing={2}>
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
                  <Card>
                    <Typographyh6 data={"Number of Paid and Unpaid Student"} />
                    <Divider />
                    <PieChart width={400} height={400}>
                      <Pie
                        activeIndex={activeIndex1}
                        activeShape={renderActiveShapePaidAndUnpaid}
                        data={dataPaidAndUnPaid}
                        cx={200}
                        cy={200}
                        innerRadius={60}
                        outerRadius={80}
                        dataKey="value"
                        onMouseEnter={onPieEnter1}
                      />
                    </PieChart>
                  </Card>
                </Paper>
              </Grid>

              <Grid item xs={12} className="chartholder">
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
export default FinanceDashboard as any;
