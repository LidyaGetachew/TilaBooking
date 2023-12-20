import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
} from "@mui/material";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { connect } from "react-redux";
import Cards from "../../uicontrols/Card";
import { userService } from "../auth/user-services";
import { appUrl } from "../../AppURI";
import {
  Card,
  Checkbox,
  Divider,
  Dropdown,
  List,
  Menu,
  Table,
  Tooltip,
} from "antd";
import axios from "axios";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import * as actionCreators from "../../state/actionCreators/studentRegistrationRequestActions";
import * as actionPlacementAdmissionRegistration from "../../state/actionCreators/programAdmissionRegistrationActions";
import * as actionStudent from "../../state/actionCreators/studentActions";
import Notification from "../../uicontrols/Notification";
import InfoIcon from "@mui/icons-material/Info";
import BallotIcon from "@mui/icons-material/Ballot";
import { useNavigate } from "react-router-dom";
import { Typographyh6 } from "../../uicontrols/Typography/Typography";
import FolderOffIcon from "@mui/icons-material/FolderOff";
import NoOfCourseList from "./studentCourseLIst";
import MenuIcon from "@mui/icons-material/Menu";
import Loading from "../Loading";
import Controls from "../../uicontrols/commonFormControls/Controls";
import { useFormik } from "formik";
import * as Yup from "yup";

interface CONTROL_STATE {
  studentCafeStatus: string;
}

const initialFieldValues: CONTROL_STATE = {
  studentCafeStatus: "",
};

const StudentDashboard = ({ ...props }) => {
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
  const [datanoofcoursetaken, setDatanoofcoursetaken] = useState<any>([]);
  const [datanoofstudentactivityjoined, setnoofstudentactivityjoined] =
    useState<any>();
  const [datanoofprograms, setDatanoofprograms] = useState<any>();
  const [datanooffs, setDatanooffs] = useState<any>();
  const navigate = useNavigate();
  const [dataStudentEnrollementRequest, setStudentEnrollementRequest] =
    useState<any>();
  const [
    dataStudentEnrollementCheckRequest,
    setStudentEnrollementCheckRequest,
  ] = useState<any>();
  const [checkCafeteriaStatus, setCheckCafeteriaStatus] = useState<any>();
  const [dataStudentAnnouncement, setStudentAnnouncement] = useState<any>([]);
  const [dataClassSchedule, setClassSchedule] = useState<any[]>([]);
  const [dataExamSchedule, setExamSchedule] = useState<any>([]);
  const [courseCodeState, setCourseCodeState] = useState(true);
  const [creditHourState, setCreditHourState] = useState(true);
  const [ectsState, setECTSState] = useState(true);
  const [courseTypeState, setCourseTypeState] = useState(true);
  const [totalResultState, setTotalResultState] = useState(true);
  const [gradeStates, setGradeState] = useState(true);
  const componentRef = useRef<HTMLTableElement>(null);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const onAdmissionSuccess = () => {
    setNotify({
      isOpen: true,
      message:
        "Success Alert:- Program Admission Registration is Applied Successfully !",
      type: "success",
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  const onAdmissionError = (action: any) => {
    setNotify({
      isOpen: true,
      message: action,
      type: "error",
    });
  };

  const onCreateSuccess = () => {
    setNotify({
      isOpen: true,
      message:
        "Success Alert:- Student Registration Request is Apply Successfully !",
      type: "success",
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const onCreateError = (action: any) => {
    setNotify({
      isOpen: true,
      message: action,
      type: "error",
    });
  };

  const onUpdateSuccess = () => {
    setNotify({
      isOpen: true,
      message: "Success Alert:- Cafeteria Status is Updated Successfully !",
      type: "success",
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const onUpdateError = (action: any) => {
    setNotify({
      isOpen: true,
      message: action,
      type: "error",
    });
  };

  const user = userService.currentUser;
  let passedUser = undefined;
  if (user)
    passedUser =
      user.userPermissions[0].userPermissionCategoryLists[0].permission;
  const [open, setOpen] = React.useState(true);

  // *********** Code Started For:- useEffect Function to fetch no of course taken  row data using direct api.***********
  useEffect(() => {
    const getNoOfCourseTaken = (url: string = appUrl + "DashBoards") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/count-no-course-taken-for-student")
        .then((rowdata: any) => setDatanoofcoursetaken(rowdata.data))
        .catch((err) => console.log(err));
      return;
    };
    getNoOfCourseTaken();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch  no of course taken row data using direct api.***********

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

  // *********** Code Started For:- useEffect Function to fetch no of number of f joined  row data using direct api.***********
  useEffect(() => {
    //  handleControlChange
    const getNoOfF = (url: string = appUrl + "Dashboards") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/count-no-of--grade-f")
        .then((rowdata: any) => setDatanooffs(rowdata.data))
        .catch((err) => console.log(err));
      return;
    };
    getNoOfF();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch  no of check student registration  row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of check student registration row data using direct api.***********
  useEffect(() => {
    //  handleControlChange
    const getStudentEnrollementRequestCheckTime = (
      url: string = appUrl + "Dashboards"
    ) => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/check-student-registration-time")
        .then((rowdata: any) => setStudentEnrollementRequest(rowdata.data))
        .catch((err) => console.log(err));
      return;
    };
    getStudentEnrollementRequestCheckTime();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch  currenet announcement  row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of check student registration row data using direct api.***********
  useEffect(() => {
    //  handleControlChange
    const getStudentEnrollementRequestCheck = (
      url: string = appUrl + "StudentRegistrationRequests"
    ) => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/check-student-apply-registration-request")
        .then((rowdata: any) => setStudentEnrollementCheckRequest(rowdata.data))
        .catch((err) => console.log(err));
      return;
    };
    getStudentEnrollementRequestCheck();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch  currenet announcement  row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of check student registration row data using direct api.***********
  useEffect(() => {
    //  handleControlChange
    const getCheckCafeteriaStatus = (url: string = appUrl + "Students") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/check-student-have-caffe-and-non-caffe-status")
        .then((rowdata: any) => setCheckCafeteriaStatus(rowdata.data))
        .catch((err) => console.log(err));
      return;
    };
    getCheckCafeteriaStatus();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch  currenet announcement  row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch currenet announcement row data using direct api.***********
  useEffect(() => {
    //  handleControlChange
    const getStudentAnnouncement = (url: string = appUrl + "Dashboards") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/get-current-announcement")
        .then((rowdata: any) => setStudentAnnouncement(rowdata.data))
        .catch((err) => console.log(err));
      return;
    };
    getStudentAnnouncement();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch  no of student activity joined   row data using direct api.***********

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

  // *********** Code Started For:- useEffect Function to fetch no of Programs     row data using direct api.***********
  useEffect(() => {
    //  handleControlChange
    const getClassScheudle = (url: string = appUrl + "DashBoards") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/get-my-program-schedule")
        .then((rowdata: any) => setClassSchedule([rowdata.data]))
        .catch((err) => console.log(err));
      return;
    };
    getClassScheudle();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch  no of Programs  row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Programs     row data using direct api.***********
  useEffect(() => {
    //  handleControlChange
    const getExamSchedule = (url: string = appUrl + "DashBoards") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/get-my-exam-schedule")
        .then((rowdata: any) => setExamSchedule(rowdata.data))
        .catch((err) => console.log(err));
      return;
    };
    getExamSchedule();
  }, []);

  // *********** Code Ended For:- useEffect Function to fetch  no of Programs  row data using direct api.***********

  const [studentCourseStatusOptions, setStudentCourseStatusOptions] =
    useState<any>([]);
  useEffect(() => {
    const getCourseHistory = (url: string = appUrl + "DashBoards") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/get-my-current-result")
        .then((rowdata: any) => setStudentCourseStatusOptions(rowdata.data))
        .catch((err) => console.log(err));
      return;
    };
    getCourseHistory();
  }, []);

  const [underPassMarkOptions, setUnderPassMarkOptions] = useState<any>([]);
  useEffect(() => {
    const getCourseHistory = (url: string = appUrl + "DashBoards") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/get-under-pass-mark-courses")
        .then((rowdata: any) => setUnderPassMarkOptions(rowdata.data))
        .catch((err) => console.log(err));
      return;
    };
    getCourseHistory();
  }, []);

  const [programOptions, setProgramOptions] = useState([]);
  useEffect(() => {
    const getProgram = (
      url: string = appUrl + "PlacementAdmissionAnnouncements"
    ) => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/get-announce-for-student")
        .then((rowdata) => setProgramOptions(rowdata.data))
        .catch((err) => console.log(err));
      return;
    };
    getProgram();
  }, []);

  const columnsList: any = [
    {
      title: "Course",
      key: "courseName",
      dataIndex: "courseName",
      sortDirections: ["descend", "ascend"],
      sorter: (a: any, b: any) => a.courseName.localeCompare(b.courseName),
    },
    {
      title: "Course Code",
      dataIndex: "courseCode",
      key: "courseCode",
      sortDirections: ["descend", "ascend"],
      sorter: (a: any, b: any) => a.courseCode.localeCompare(b.courseCode),
    },
    {
      title: "Credit Hour",
      dataIndex: "creditHour",
      key: "creditHour",
      sortDirections: ["descend", "ascend"],
      sorter: (a: any, b: any) => a.creditHour.localeCompare(b.creditHour),
    },
    {
      title: "Course Type",
      dataIndex: "courseType",
      key: "courseType",
      sortDirections: ["descend", "ascend"],
      sorter: (a: any, b: any) => a.courseType.localeCompare(b.courseType),
    },
    {
      title: "ECTS",
      dataIndex: "ects",
      key: "ects",
    },
    {
      title: "Grade",
      dataIndex: "grade",
      key: "grade",
    },
    {
      title: "Course Status",
      dataIndex: "courseStatus",
      key: "courseStatus",
    },
  ];

  const columnsListUnderMark: any = [
    {
      title: "Program",
      dataIndex: "programName",
      key: "programName",
      sortDirections: ["descend", "ascend"],
      sorter: (a: any, b: any) => a.programName.localeCompare(b.programName),
    },
    {
      title: "Stream",
      key: "streamName",
      dataIndex: "streamName",
      sortDirections: ["descend", "ascend"],
      sorter: (a: any, b: any) => a.streamName.localeCompare(b.streamName),
    },
    {
      title: "Section",
      key: "section",
      dataIndex: "section",
      sortDirections: ["descend", "ascend"],
      sorter: (a: any, b: any) => a.section.localeCompare(b.section),
    },
    {
      title: "Semester/Term...",
      key: "yearClassfication",
      dataIndex: "yearClassfication",
      sortDirections: ["descend", "ascend"],
      sorter: (a: any, b: any) =>
        a.yearClassfication.localeCompare(b.yearClassfication),
    },
    {
      title: "Academic Year",
      key: "acadamicYear",
      dataIndex: "acadamicYear",
      sortDirections: ["descend", "ascend"],
      sorter: (a: any, b: any) => a.acadamicYear.localeCompare(b.acadamicYear),
    },
    {
      title: "Course",
      dataIndex: "courseName",
      key: "courseName",
      sortDirections: ["descend", "ascend"],
      sorter: (a: any, b: any) => a.courseName.localeCompare(b.courseName),
    },
    {
      title: "Course Code",
      dataIndex: "courseNumber",
      key: "courseNumber",
      sortDirections: ["descend", "ascend"],
      sorter: (a: any, b: any) => a.courseNumber.localeCompare(b.courseNumber),
      hidden: courseCodeState,
    },
    {
      title: "Credit Hour",
      dataIndex: "creditHour",
      key: "creditHour",
      sortDirections: ["descend", "ascend"],
      sorter: (a: any, b: any) => a.creditHour.localeCompare(b.creditHour),
      hidden: creditHourState,
    },
    {
      title: "ECTS",
      dataIndex: "ects",
      key: "ects",
      hidden: ectsState,
    },
    {
      title: "Course Type",
      dataIndex: "courseType",
      key: "courseType",
      sortDirections: ["descend", "ascend"],
      sorter: (a: any, b: any) => a.courseType.localeCompare(b.courseType),
      hidden: courseTypeState,
    },
    {
      title: "Total",
      dataIndex: "totalResult",
      key: "totalResult",
      hidden: totalResultState,
    },
    {
      title: "Grade",
      dataIndex: "grade",
      key: "grade",
      hidden: gradeStates,
    },
  ].filter((item) => !item.hidden);

  const addColums = (
    <Menu
      style={{
        height: "200px",
        overflow: "auto",
      }}
    >
      <Menu.ItemGroup title="Columns of Under Pass Mark Course">
        <Menu.Item key="1">
          <Checkbox
            id="courseCode"
            onChange={() =>
              courseCodeState == true
                ? setCourseCodeState(false)
                : setCourseCodeState(true)
            }
          >
            Course Code
          </Checkbox>
        </Menu.Item>

        <Menu.Item key="2">
          <Checkbox
            id="cereditHour"
            onChange={() =>
              creditHourState == true
                ? setCreditHourState(false)
                : setCreditHourState(true)
            }
          >
            Credit Hour
          </Checkbox>
        </Menu.Item>

        <Menu.Item key="3">
          <Checkbox
            id="ects"
            onChange={() =>
              ectsState == true ? setECTSState(false) : setECTSState(true)
            }
          >
            ECTS
          </Checkbox>
        </Menu.Item>

        <Menu.Item key="4">
          <Checkbox
            id="courseType"
            onChange={() =>
              courseTypeState == true
                ? setCourseTypeState(false)
                : setCourseTypeState(true)
            }
          >
            Course Type
          </Checkbox>
        </Menu.Item>

        <Menu.Item key="5">
          <Checkbox
            id="totalResult"
            onChange={() =>
              totalResultState == true
                ? setTotalResultState(false)
                : setTotalResultState(true)
            }
          >
            Total
          </Checkbox>
        </Menu.Item>

        <Menu.Item key="6">
          <Checkbox
            id="section"
            onChange={() =>
              gradeStates == true ? setGradeState(false) : setGradeState(true)
            }
          >
            Grade
          </Checkbox>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  const admissionAnnoucement = (id: any) => {
    const placementAdmissionAnnouncementRegistration = {
      placementAdmissionAnnouncementId: id,
    };
    props.createProgramAdmissionRegistration(
      placementAdmissionAnnouncementRegistration,
      onAdmissionSuccess,
      onAdmissionError
    );
  };

  const validationSchema = Yup.object().shape({
    studentCafeStatus: Yup.string().required("Cafeteria Status is required"),
  });

  const formik = useFormik({
    initialValues: initialFieldValues,
    onSubmit: (values) => {
      props.updateStudentStatus(values, onUpdateSuccess, onUpdateError);
    },
    validationSchema: validationSchema,
  });
  return (
    <>
      <Loading />
      <div className="appcontainer">
        <Grid container className="dashbaordholder">
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper className="paper" elevation={8}>
                  <Cards
                    amount={datanoofprograms || 0}
                    info="Programs"
                    desc="No Of Programs Available"
                    infolink="List Of Programs"
                    path="#"
                    icon={<BallotIcon />}
                  />
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper className="paper" elevation={8}>
                  <Cards
                    amount={datanoofcoursetaken || 0}
                    info="Courses"
                    desc="No Of Courses Taken"
                    infolink="Contact Registrar for More.."
                    path="#"
                    icon={<LibraryAddCheckIcon />}
                  />
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper className="paper" elevation={8}>
                  <Cards
                    amount={datanoofstudentactivityjoined || 0}
                    info="Student Activity"
                    desc="Activity Participating"
                    infolink="Student Activity in University"
                    path="#"
                    icon={<SettingsAccessibilityIcon />}
                  />
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper className="paper" elevation={8}>
                  <Cards
                    amount={datanooffs || 0}
                    info="Course"
                    desc="Course List"
                    infolink="No of F Course"
                    path="#"
                    icon={<LibraryAddCheckIcon />}
                  />
                </Paper>
              </Grid>

              <Grid
                item
                xs={12}
                className="chartholder"
                style={{ margin: "0px auto" }}
              >
                <Paper elevation={8}>
                  {(dataStudentAnnouncement == undefined ||
                    dataStudentAnnouncement.length == 0) && (
                    <Card title={<Typographyh6 data="Announcement" />}>
                      <div style={{ maxHeight: 400, overflow: "auto" }}>
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
                              No Announcement
                            </h6>
                          </Grid>
                        </Grid>
                      </div>
                    </Card>
                  )}
                  {dataStudentAnnouncement.length != 0 && (
                    <>
                      <Card title={<Typographyh6 data="Announcement" />}>
                        <List
                          style={{ maxHeight: 400, overflow: "auto" }}
                          itemLayout="horizontal"
                          dataSource={dataStudentAnnouncement}
                          renderItem={(item: any) => (
                            <List.Item>
                              <List.Item.Meta
                                description={
                                  <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                      <InfoIcon color="info" fontSize="large" />{" "}
                                      {item.title}
                                    </Grid>
                                    <Grid item xs={12}>
                                      {item.description}
                                    </Grid>
                                  </Grid>
                                }
                              />
                            </List.Item>
                          )}
                        />
                      </Card>
                    </>
                  )}
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={4}>
              {dataStudentEnrollementRequest == true &&
                dataStudentEnrollementCheckRequest == true && (
                  <Grid
                    item
                    xs={12}
                    className="chartholder"
                    style={{ margin: "0px auto" }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Paper elevation={3}>
                          <Card title="Student Enrollment Request">
                            <Grid container spacing={1}>
                              <Grid item xs={12}>
                                <h3>
                                  To Register for Semester/Term..., you have to
                                  click the Apply button !
                                </h3>
                              </Grid>
                              <Grid item xs={12} className="buttonholderform">
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={() => {
                                    props.createRequest(
                                      onCreateSuccess,
                                      onCreateError
                                    );
                                  }}
                                >
                                  Apply
                                </Button>
                              </Grid>
                            </Grid>
                          </Card>
                        </Paper>
                      </Grid>

                      {checkCafeteriaStatus == false && (
                        <Grid item xs={12}>
                          <Paper elevation={3}>
                            <Card title="Cafe or Non Cafe">
                              <Grid container spacing={1}>
                                <Grid item xs={12}>
                                  <h3>
                                    You need to select the option of Cafe or
                                    Non-Cafe for this Semester/Term... !
                                  </h3>
                                </Grid>

                                <Grid item xs={12}>
                                  <FormControl
                                    variant="outlined"
                                    className="selectbox"
                                  >
                                    <Controls.Input
                                      select
                                      id="studentCafeStatus"
                                      label="Select Cafeteria Status"
                                      required
                                      {...formik.getFieldProps(
                                        "studentCafeStatus"
                                      )}
                                      error={
                                        formik.touched.studentCafeStatus &&
                                        formik.errors.studentCafeStatus
                                          ? formik.errors.studentCafeStatus
                                          : ""
                                      }
                                    >
                                      <MenuItem value="Cafe">Cafe</MenuItem>
                                      <MenuItem value="NonCafe">
                                        Non-Cafe
                                      </MenuItem>
                                    </Controls.Input>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12} className="buttonholderform">
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => formik.handleSubmit()}
                                  >
                                    Submit
                                  </Button>
                                </Grid>
                              </Grid>
                            </Card>
                          </Paper>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                )}

              {programOptions.length != 0 && (
                <>
                  <Grid item xs={12}>
                    <Paper elevation={3}>
                      <Card title="Program Placement Admission Announcement">
                        <List
                          style={{ maxHeight: 400, overflow: "auto" }}
                          itemLayout="horizontal"
                          dataSource={programOptions}
                          renderItem={(item: any) => (
                            <List.Item>
                              <List.Item.Meta
                                title={item.title}
                                description={
                                  <Grid container spacing={2}>
                                    {item.programName != null && (
                                      <Grid item xs={12}>
                                        Program: {item.programName}
                                      </Grid>
                                    )}
                                    {item.collageName != null && (
                                      <Grid item xs={12}>
                                        Collage: {item.collageName}
                                      </Grid>
                                    )}
                                    <Grid item xs={12}>
                                      Deadline: {item.registrationStartDate} -{" "}
                                      {item.registrationEndDate}
                                    </Grid>
                                    {item.description != null && (
                                      <>
                                        <Grid item xs={12}>
                                          {item.description}
                                        </Grid>
                                      </>
                                    )}

                                    <Grid
                                      item
                                      xs={12}
                                      className="buttonholderform"
                                    >
                                      {item.apply == false &&
                                        item.haveCGPA == true && (
                                          <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() =>
                                              admissionAnnoucement(item.id)
                                            }
                                          >
                                            Apply
                                          </Button>
                                        )}
                                    </Grid>
                                  </Grid>
                                }
                              />
                            </List.Item>
                          )}
                        />
                      </Card>
                    </Paper>
                  </Grid>
                </>
              )}

              <Grid item xs={12}>
                <NoOfCourseList />
              </Grid>

              <Grid item xs={12}>
                <Paper elevation={8}>
                  <Card
                    title="No of Under Pass Mark Courses"
                    extra={
                      <Dropdown overlay={addColums}>
                        <MenuIcon fontSize="large" color="primary" />
                      </Dropdown>
                    }
                  >
                    <Table
                      rowKey={(obj) => obj.id}
                      size="small"
                      dataSource={underPassMarkOptions}
                      columns={columnsListUnderMark}
                      pagination={false}
                    />
                  </Card>
                </Paper>
              </Grid>

              <Grid
                item
                xs={12}
                className="chartholder"
                style={{ margin: "0px auto" }}
              >
                <Paper elevation={3}>
                  <Card
                    extra={
                      <Tooltip title="To Student Course History">
                        <Button
                          color="inherit"
                          onClick={() =>
                            navigate("/userComponent/viewStudentHistory")
                          }
                        >
                          See More
                        </Button>
                      </Tooltip>
                    }
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Card title="Current Status">
                          <Grid
                            container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                          >
                            <Grid item xs={2} sm={4} md={4}>
                              <div>
                                {" "}
                                <b>Program:</b>{" "}
                                {studentCourseStatusOptions.programName}
                              </div>
                              <div>
                                {" "}
                                <b>Section:</b>{" "}
                                {studentCourseStatusOptions.section}
                              </div>
                              <div>
                                <b>Semester/Term:</b>{" "}
                                {studentCourseStatusOptions.yearClassification}
                              </div>
                            </Grid>
                            <Grid item xs={2} sm={4} md={4}>
                              <div>
                                <b>Stream:</b>{" "}
                                {studentCourseStatusOptions.streamName}
                              </div>
                              <div>
                                <b>Attending Year:</b>{" "}
                                {studentCourseStatusOptions.attendingYear}
                              </div>
                              <div>
                                {" "}
                                <b>Academic Year:</b>{" "}
                                {studentCourseStatusOptions.acadamicYear}
                              </div>
                            </Grid>
                            <Grid item xs={2} sm={4} md={4}>
                              <div>
                                <b>Building:</b>
                                {studentCourseStatusOptions.buildingName}
                              </div>
                              <div>
                                {" "}
                                <b>Dorm:</b>
                                {studentCourseStatusOptions.roomName}
                              </div>
                            </Grid>
                          </Grid>
                        </Card>
                      </Grid>

                      <Grid item xs={12}>
                        <Card title="Current Course Status">
                          <Table
                            rowKey={(obj) => obj.id}
                            size="small"
                            dataSource={studentCourseStatusOptions.courseLists}
                            columns={columnsList}
                            pagination={false}
                          />
                        </Card>
                      </Grid>
                      <Grid item xs={12} className="buttonholderform">
                        <div>
                          <b> Total ECTS:</b>
                          {studentCourseStatusOptions.totalECTS}
                        </div>

                        <div>
                          <b>SGPA:</b>
                          {studentCourseStatusOptions.sgpa}
                        </div>

                        <div>
                          <b>CGPA:</b>
                          {studentCourseStatusOptions.cgpa}
                        </div>
                        <div>
                          <b>Result:</b>
                          {studentCourseStatusOptions.result}
                        </div>
                      </Grid>
                    </Grid>
                  </Card>
                </Paper>
              </Grid>

              {dataClassSchedule.length != 0 && (
                <Grid item xs={12}>
                  <Paper elevation={3}>
                    <Card title="Class Schedule">
                      <Card style={{ margin: "5%" }}>
                        <table
                          style={{
                            border: "1px solid black",
                            width: "100%",
                            marginTop: "1%",
                            marginBottom: "2%",
                            height: "80%",
                          }}
                        >
                          <tr>
                            <th
                              style={{
                                border: "1px solid black",
                                width: "3%",
                                marginLeft: "3%",
                                textAlign: "center",
                              }}
                            >
                              Period
                            </th>

                            <th
                              style={{
                                border: "1px solid black",
                                width: "3%",
                                marginLeft: "3%",
                                textAlign: "center",
                              }}
                            >
                              Time
                            </th>

                            {dataClassSchedule.length != 0 && (
                              <>
                                {dataClassSchedule.map((item: any) => {
                                  return (
                                    <>
                                      {" "}
                                      {item.scheduleDtos.map((weeks: any) => {
                                        return (
                                          <th
                                            style={{
                                              border: "1px solid black",
                                              textAlign: "center",
                                            }}
                                          >
                                            {weeks.weekDays}
                                          </th>
                                        );
                                      })}
                                    </>
                                  );
                                })}
                              </>
                            )}
                          </tr>

                          {dataClassSchedule.length != 0 && (
                            <>
                              {dataClassSchedule.map((item: any) => {
                                return (
                                  <>
                                    {item.courseListNew.length != 0 && (
                                      <>
                                        {item.courseListNew.map(
                                          (courseList: any, index = 0) => {
                                            return (
                                              <>
                                                <tr>
                                                  {courseList.scheduleListNews
                                                    .length != 0 && (
                                                    <>
                                                      <th
                                                        style={{
                                                          border:
                                                            "1px solid black",
                                                          width: "3%",
                                                          marginLeft: "3%",
                                                          textAlign: "center",
                                                        }}
                                                      >
                                                        {index + 1}
                                                      </th>
                                                      <th
                                                        style={{
                                                          border:
                                                            "1px solid black",
                                                          width: "3%",
                                                          marginLeft: "3%",
                                                          textAlign: "center",
                                                        }}
                                                      >
                                                        {courseList.startTime} -{" "}
                                                        {courseList.endTime}
                                                      </th>

                                                      {courseList.scheduleListNews.map(
                                                        (list: any) => {
                                                          return (
                                                            <>
                                                              <th
                                                                style={{
                                                                  border:
                                                                    "1px solid black",
                                                                  width: "3%",
                                                                  marginLeft:
                                                                    "3%",
                                                                  textAlign:
                                                                    "center",
                                                                }}
                                                              >
                                                                <div>
                                                                  {
                                                                    list.courseCode
                                                                  }
                                                                </div>
                                                                <div>
                                                                  {
                                                                    list.buildingName
                                                                  }
                                                                </div>
                                                                <div>
                                                                  {
                                                                    list.roomName
                                                                  }
                                                                </div>
                                                              </th>
                                                            </>
                                                          );
                                                        }
                                                      )}
                                                    </>
                                                  )}
                                                  {courseList.scheduleListNews
                                                    .length == 0 && (
                                                    <div
                                                      style={{
                                                        textAlign: "center",
                                                        marginLeft: "500%",
                                                      }}
                                                    >
                                                      <h1>
                                                        <b>Lunch Break</b>
                                                      </h1>
                                                    </div>
                                                  )}
                                                </tr>
                                              </>
                                            );
                                          }
                                        )}
                                      </>
                                    )}
                                  </>
                                );
                              })}
                            </>
                          )}
                        </table>
                      </Card>
                    </Card>
                  </Paper>
                </Grid>
              )}

              <Grid item xs={12}>
                {dataExamSchedule.length != 0 && (
                  <Paper elevation={3}>
                    <Card title="Exam Schedule">
                      <table
                        style={{
                          border: "1px solid black",
                          width: "100%",
                          marginTop: "1%",
                          marginBottom: "2%",
                          height: "80%",
                        }}
                      >
                        <tr
                          style={{
                            border: "1px solid black",
                            width: "10%",
                            textAlign: "center",
                          }}
                        >
                          <th
                            style={{
                              border: "1px solid black",
                              textAlign: "center",
                            }}
                          >
                            No
                          </th>
                          <th
                            style={{
                              border: "1px solid black",
                              textAlign: "center",
                            }}
                          >
                            Days
                          </th>

                          <th
                            style={{
                              border: "1px solid black",
                              textAlign: "center",
                            }}
                          >
                            Course
                          </th>
                          <th
                            style={{
                              border: "1px solid black",
                              textAlign: "center",
                            }}
                          >
                            Exam Time
                          </th>

                          <th
                            style={{
                              border: "1px solid black",
                              textAlign: "center",
                            }}
                          >
                            Exam Group List
                          </th>
                        </tr>

                        {dataExamSchedule.map((item: any, index = 0) => {
                          return (
                            <>
                              <tr>
                                <th
                                  style={{
                                    border: "1px solid black",
                                    width: "3%",
                                    marginLeft: "3%",
                                    textAlign: "center",
                                  }}
                                >
                                  {index + 1}
                                </th>
                                <th
                                  style={{
                                    border: "1px solid black",
                                    textAlign: "center",
                                  }}
                                >
                                  {item.weekDays}
                                </th>

                                <th
                                  style={{
                                    border: "1px solid black",
                                    textAlign: "center",
                                  }}
                                >
                                  {item.courseName}
                                </th>

                                <th
                                  style={{
                                    border: "1px solid black",
                                    textAlign: "center",
                                  }}
                                >
                                  {item.startTime + " - " + item.endTime}
                                </th>

                                <th
                                  style={{
                                    border: "1px solid black",
                                    textAlign: "center",
                                  }}
                                >
                                  {item.groupingList.map((listItem: any) => {
                                    return (
                                      <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                          {listItem.groupName}
                                        </Grid>
                                        <Grid item xs={12}>
                                          {listItem.building}
                                        </Grid>
                                        <Grid item xs={12}>
                                          {listItem.classRoom}
                                        </Grid>
                                        <Divider></Divider>
                                      </Grid>
                                    );
                                  })}
                                </th>
                              </tr>
                            </>
                          );
                        })}
                      </table>
                    </Card>
                  </Paper>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Notification notify={notify} setNotify={setNotify} />
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  studentregistrationrequeststate:
    state.STUDENTREGISTRATIONREQUEST_REDUCER.studentregistrationrequeststate,
  programadmissionregistrationstate:
    state.PROGRAMADMISSIONREGISTRATION_REDUCER
      .programadmissionregistrationstate,
  studentstate: state.STUDENT_REDUCER.studentstate,
});

const mapActionsToProps = {
  createRequest: actionCreators.createRequest,
  createProgramAdmissionRegistration:
    actionPlacementAdmissionRegistration.create,
  updateStudentStatus: actionStudent.updateStudentStatusForStudentSide,
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(StudentDashboard as any);
