import React, { useState, useEffect, useCallback } from "react";
import Cards from "../../uicontrols/Card";
import { Grid, Paper } from "@mui/material";
import { userService } from "../auth/user-services";
import { appUrl } from "../../AppURI";
import { Avatar, Button, Card, Divider, List, Table } from "antd";
import axios from "axios";
import CallSplitIcon from "@mui/icons-material/CallSplit";
import InfoIcon from "@mui/icons-material/Info";
import BallotIcon from "@mui/icons-material/Ballot";
import { Typographyh6 } from "../../uicontrols/Typography";
import { userStorageService } from "../service/user-storage-services";
import FolderOffIcon from "@mui/icons-material/FolderOff";
import { useNavigate } from "react-router-dom";
import HailIcon from "@mui/icons-material/Hail";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import PersonRemoveRoundedIcon from "@mui/icons-material/PersonRemoveRounded";
import PersonOffRoundedIcon from "@mui/icons-material/PersonOffRounded";
import SupervisedUserCircleRoundedIcon from "@mui/icons-material/SupervisedUserCircleRounded";
import BeenhereIcon from "@mui/icons-material/Beenhere";

import { Progress } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  Pie,
  PieChart,
  Sector,
} from "recharts";
import Typography from "@material-ui/core/Typography/Typography";

const renderActiveShapePerAttendingYear = (props: any) => {
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

const renderActiveShapePerGraduateStudent = (props: any) => {
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
      >{`${value} Graduate Student`}</text>
    </g>
  );
};

const renderActiveShapStudent = (props: any) => {
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
      >{`${value} ${name}`}</text>
    </g>
  );
};

const InstructorDashboard = ({ ...props }) => {
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
  const [datanoofsectionindepartmentTaken, setnoofsectionindepartmentTaken] =
    useState<any>();
  const [datanoofsectionindepartments, setnoofsectionindepartments] =
    useState<any>();
  const [dataStudentAnnouncement, setStudentAnnouncement] = useState<any>([]);
  const [dataClassSchedule, setClassSchedule] = useState<any>([]);
  const [dataExamSchedule, setExamSchedule] = useState<any>([]);
  const [datatoptenstudentindepartments, settoptenstudentindepartments] =
    useState<any>([]);
  const [datanoofinstructorindepartments, setnoofinstructorindepartments] =
    useState<any>();
  const [
    datanoofacadamicdesmisalindepartments,
    setnoofacadamicdesmisalindepartments,
  ] = useState<any>();
  const [
    datanoofacadamicdesmisalreindepartments,
    setnoofacadamicdesmisalreindepartments,
  ] = useState<any>();
  const navigate = useNavigate();
  const [dateCourseTaken, setCourseTaken] = useState<any>([]);
  const [datanoofmoduleindepartments, setnoofmoduleindepartments] =
    useState<any>();
  const [
    datanooftransferedstudentindepartments,
    setnooftransferedstudentindepartments,
  ] = useState<any>();
  const [
    datanoofstudentonwarningIndepartments,
    setnoofstudentonwarningInDepartments,
  ] = useState<any>();
  const [datanoofcurriculum, setDatanoofcurriculum] = useState<any>();
  const [datanoofstudentperenrol, setnoofstudentperenrol] = useState<any>([]);
  const [datastudentperTotalprogram, setstudentpertotalProgram] = useState<any>(
    []
  );
  const [datanoofgraduatestudent, setdatanoofgraduatestudent] = useState<any>(
    []
  );
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
  const [datanoofstudentPerAttendingYear, setdatanoofstudentPerAttendingYear] =
    useState<any>([]);
  const [datagraduatestudentperprogram, setGraduateStudentProgram] =
    useState<any>([]);
  const [datanoofstudentwithdecpmeasures, setnoofstudentwithdecpmeasures] =
    useState<any>();
  const [datatoptenstudentinonecourse, setdatatoptenstudentinonecourse] =
    useState<any>([]);
  const [errorMessage, setErrorMessage] = useState<any>();
  const user = userService.currentUser;
  let passedUser = undefined;
  if (user)
    passedUser =
      user.userPermissions[0].userPermissionCategoryLists[0].permission;

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

  // *********** Code Started For:- useEffect Function to fetch No of Sections in departments row data using direct api.***********
  useEffect(() => {
    const getNoOfSectionInDepartments = (
      url: string = appUrl + "DashBoards"
    ) => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/count-no-of-section-for-instructor")
        .then((rowdata: any) => setnoofsectionindepartmentTaken(rowdata.data));
      return;
    };
    getNoOfSectionInDepartments();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch No of Sections  in departments row data using direct api.***********

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

  // *********** Code Started For:- useEffect Function to fetch Top Ten Students in departments row data using direct api.***********
  useEffect(() => {
    if (userStorageService.currentRole("Instructor")) {
      const getTopTenStudentInDepartments = (
        url: string = appUrl + "DashBoards"
      ) => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/get-top-ten-students-in-department")
          .then((rowdata: any) => settoptenstudentindepartments(rowdata.data));
        return;
      };
      getTopTenStudentInDepartments();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch Top Ten Students  in departments row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Courses row data using direct api.***********
  useEffect(() => {
    if (userStorageService.currentRole("Instructor")) {
      const getNoofCourses = (url: string = appUrl + "DashBoards") => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/get-my-program-schedule")
          .then((rowdata: any) => setClassSchedule(rowdata.data));
        return;
      };
      getNoofCourses();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of Courses row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Courses row data using direct api.***********
  useEffect(() => {
    if (userStorageService.currentRole("Instructor")) {
      const getNoofCourses = (url: string = appUrl + "DashBoards") => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/get-my-exam-schedule")
          .then((rowdata: any) => setExamSchedule(rowdata.data));
        return;
      };
      getNoofCourses();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of Courses row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Courses row data using direct api.***********
  useEffect(() => {
    if (userStorageService.currentRole("Instructor")) {
      const getCourseTakens = (url: string = appUrl + "DashBoards") => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/get-current-course-list-for-instructor")
          .then((rowdata: any) => setCourseTaken(rowdata.data));
        return;
      };
      getCourseTakens();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of Courses row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch No of Instructor in departments  row data using direct api.***********
  useEffect(() => {
    const getNoOfInstructorInDepartments = (
      url: string = appUrl + "DashBoards"
    ) => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/count-no-of-instructors-in-department")
        .then((rowdata: any) => setnoofinstructorindepartments(rowdata.data));
      return;
    };
    getNoOfInstructorInDepartments();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch No of Instructor in departments row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch No of Transfered Students in departments row data using direct api.***********
  useEffect(() => {
    const getNoOfTransferedStudentInDepartments = (
      url: string = appUrl + "DashBoards"
    ) => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/count-no-of-transfered-students-in-department")
        .then((rowdata: any) =>
          setnooftransferedstudentindepartments(rowdata.data)
        );
      return;
    };
    getNoOfTransferedStudentInDepartments();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch No of Transfered Students  in departments row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Students On Wanings  row data using direct api.***********
  useEffect(() => {
    const getNoofStudentOnWarnings = (url: string = appUrl + "DashBoards") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/count-no-of-warning-students-in-department")
        .then((rowdata: any) =>
          setnoofstudentonwarningInDepartments(rowdata.data)
        );
      return;
    };
    getNoofStudentOnWarnings();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of  Students On Wanings row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch No of Acadmic Dismisal  in departments row data using direct api.***********
  useEffect(() => {
    const getNoOfAcadamicDismisalInDepartments = (
      url: string = appUrl + "DashBoards"
    ) => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/count-no-of-ad-students-in-department")
        .then((rowdata: any) =>
          setnoofacadamicdesmisalindepartments(rowdata.data)
        );
      return;
    };
    getNoOfAcadamicDismisalInDepartments();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch No of  Acadmic Dismisal  in departments row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch No of Acadmic Dismisal  Re in departments row data using direct api.***********
  useEffect(() => {
    const getNoOfAcadamicDismisalReInDepartments = (
      url: string = appUrl + "DashBoards"
    ) => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/count-no-of-adr-students-in-department")
        .then((rowdata: any) =>
          setnoofacadamicdesmisalreindepartments(rowdata.data)
        );
      return;
    };
    getNoOfAcadamicDismisalReInDepartments();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch No of  Acadmic Dismisal Re  in departments row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch No of Sections in departments row data using direct api.***********
  useEffect(() => {
    const getNoOfSectionInDepartments = (
      url: string = appUrl + "DashBoards"
    ) => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/count-number-of-Sections-in-department")
        .then((rowdata: any) => setnoofsectionindepartments(rowdata.data));
      return;
    };
    getNoOfSectionInDepartments();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch No of Sections  in departments row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of  Students   Per Enorllment row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar") ||
      userStorageService.currentRole("Collage Head") ||
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Fresh Man Coordinator")
    ) {
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
    }
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
        .get(url + "/get-students-over-total-in-department")
        .then((rowdata: any) => setstudentpertotalProgram(rowdata.data));
      return;
    };
    getnoofalmunirequest();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch  no of  Student with Decpline Measure   data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch Class Rooms row data using direct api.***********
  useEffect(() => {
    const getNoOfCurriculum = (url: string = appUrl + "DashBoards") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/count-no-of-Curiculum")
        .then((rowdata: any) => setDatanoofcurriculum(rowdata.data));
      return;
    };
    getNoOfCurriculum();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch Class Rooms row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Student with Decpline Measure  row data using direct api.***********
  useEffect(() => {
    const getnoofstudentwithdecp = (url: string = appUrl + "DashBoards") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/count-no-of-studnet-with-descipiline-measure")
        .then((rowdata: any) => setnoofstudentwithdecpmeasures(rowdata.data));
      return;
    };
    getnoofstudentwithdecp();
  }, []);
  // *****

  // *********** Code Started For:- useEffect Function to fetch no of Student with Decpline Measure  row data using direct api.***********
  useEffect(() => {
    const getnoofalmunirequest = (url: string = appUrl + "DashBoards") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/get-no-of-graduate-students-per-program")
        .then((rowdata: any) => setGraduateStudentProgram(rowdata.data));
      return;
    };
    getnoofalmunirequest();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch  no of  Student with Decpline Measure   data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of  Students   Per Enorllment row data using direct api.***********
  useEffect(() => {
    const getGraduateStudent = (url: string = appUrl + "DashBoards") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/get-no-of-graduate-students-per-acadamic-year")
        .then((rowdata: any) => setdatanoofgraduatestudent(rowdata.data));
      return;
    };
    getGraduateStudent();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of   Per Enorllment  row data using direct api.***********

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

  // *********** Code Started For:- useEffect Function to fetch no of  Students   Per Enorllment row data using direct api.***********
  useEffect(() => {
    const getstudentPerAttendingYearInDepartment = (
      url: string = appUrl + "DashBoards"
    ) => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/get-students-per-atending-year-in-department")
        .then((rowdata: any) =>
          setdatanoofstudentPerAttendingYear(rowdata.data)
        );
      return;
    };
    getstudentPerAttendingYearInDepartment();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of   Per Enorllment  row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of  Students   Per Enorllment row data using direct api.***********
  useEffect(() => {
    const gettoptenstudentinonecourse = (
      url: string = appUrl + "DashBoards"
    ) => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/get-top-ten-students-in-one-course")
        .then((rowdata: any) => setdatatoptenstudentinonecourse(rowdata.data))
        .catch((err) => {
          setErrorMessage(err.response.data)
        });
      return;
    };
    gettoptenstudentinonecourse();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of   Per Enorllment  row data using direct api.***********

  const columnsList: any = [
    {
      title: "Section",
      key: "section",
      dataIndex: "section",
      sortDirections: ["descend", "ascend"],
      sorter: (a: any, b: any) => a.section.localeCompare(b.section),
    },
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
      title: "ECTS",
      dataIndex: "ects",
      key: "ects",
    },
    {
      title: "Course Type",
      dataIndex: "courseType",
      key: "courseType",
      sortDirections: ["descend", "ascend"],
      sorter: (a: any, b: any) => a.courseType.localeCompare(b.courseType),
    },
  ];
  return (
    <div className="appcontainer">
      <Grid container className="dashbaordholder" >
        <Grid item xs={12}>
          <Grid container >
            <Grid item xs={12} md={6} lg={3}>
              <Paper className="paper" elevation={8}>
                <Cards
                  amount={datanoofprograms || 0}
                  info="Programs"
                  desc="No Of Programs"
                  infolink="List Of Programs"
                  path="#"
                  icon={<BallotIcon />}
                />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Paper className="paper" elevation={8}>
                <Cards
                  amount={datanoofsectionindepartmentTaken || 0}
                  info="Section"
                  desc="No of Sections"
                  infolink="Your Section Taken"
                  path="#"
                  icon={<CallSplitIcon />}
                />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Paper className="paper" elevation={8}>
                <Cards
                  amount={datanoofsectionindepartments || 0}
                  info="Section"
                  desc="No of Sections"
                  infolink="In your Department"
                  path="#"
                  icon={<CallSplitIcon />}
                />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Paper className="paper" elevation={8}>
                <Cards
                  amount={datanoofinstructorindepartments || 0}
                  info="Instructors"
                  desc="No of Instructors in your Department"
                  infolink="In your Department"
                  path="#"
                  icon={<HailIcon />}
                />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Paper className="paper" elevation={8}>
                <Cards
                  amount={datanooftransferedstudentindepartments || 0}
                  info="Transferred"
                  desc="No of Students"
                  infolink="From other to your department"
                  path="#"
                  icon={<CompareArrowsRoundedIcon />}
                />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Paper className="paper" elevation={8}>
                <Cards
                  amount={datanoofstudentonwarningIndepartments || 0}
                  info="Warnings"
                  desc="No of Students"
                  infolink="In your department"
                  path="#"
                  icon={<WarningAmberRoundedIcon />}
                />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Paper className="paper" elevation={8}>
                <Cards
                  amount={datanoofacadamicdesmisalindepartments || 0}
                  info="Academic Dismissal"
                  desc="No of Students"
                  infolink="In your Department"
                  path="#"
                  icon={<PersonRemoveRoundedIcon />}
                />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Paper className="paper" elevation={8}>
                <Cards
                  amount={datanoofacadamicdesmisalreindepartments || 0}
                  info="Academic Dismissal Re"
                  desc="No of Students "
                  infolink="In your Department"
                  path="#"
                  icon={<PersonOffRoundedIcon />}
                />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Paper className="paper" elevation={8}>
                <Cards
                  amount={datanoofstudentwithdecpmeasures || 0}
                  info="On Discipline Measure"
                  desc="Students On Discipline Measure"
                  infolink="In the University"
                  path="#"
                  icon={<SupervisedUserCircleRoundedIcon />}
                />
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Paper className="paper" elevation={8}>
                <Cards
                  amount={datanoofcurriculum || 0}
                  info="Curriculum"
                  desc="No of Curriculum "
                  infolink="In University"
                  path="/userComponent/viewCurriculum"
                  icon={<BeenhereIcon />}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Paper elevation={3}>
                <Card
                  title="List of Course Given"
                  extra={
                    <Button
                      color="inherit"
                      onClick={() =>
                        navigate("/userComponent/viewInstructorStudent")
                      }
                    >
                      See More
                    </Button>
                  }
                >
                  <Table
                    rowKey={(obj) => obj.id}
                    size="small"
                    dataSource={dateCourseTaken}
                    columns={columnsList}
                    pagination={false}
                  />
                </Card>
              </Paper>
            </Grid>

            <Grid item xs={6} className="listitem">
              <Paper elevation={3}>
                <Card
                  title={
                    <Typographyh6 data="Top Ten Students in your Department" />
                  }
                >
                  {datatoptenstudentindepartments.length != 0 && (
                    <List
                      style={{ maxHeight: 400, overflow: "auto" }}
                      itemLayout="horizontal"
                      dataSource={datatoptenstudentindepartments}
                      renderItem={(item: any) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                src={
                                  appUrl +
                                  `DashBoards/download-file?filePath=${item.image.filePath}`
                                }
                              />
                            }
                            title={item.name}
                            description={
                              <Grid container spacing={2}>
                                <Grid item xs={12}>
                                  <p> Program: {item.program}</p>
                                  <p>CGPA: {item.cgpa}</p>
                                </Grid>
                              </Grid>
                            }
                          />
                        </List.Item>
                      )}
                    />
                  )}
                  {datatoptenstudentindepartments.length == 0 && (
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
                            No Student
                          </h6>
                        </Grid>
                      </Grid>
                    </div>
                  )}
                </Card>
              </Paper>
            </Grid>

            <Grid item xs={6} className="listitem">
              <Paper elevation={3}>
                <Card
                  title={
                    <Typographyh6 data="Number of Student In Every Enrollement Type" />
                  }
                >
                  {datanoofstudentperenrol.length != 0 && (
                    <BarChart
                      width={700}
                      height={370}
                      data={datanoofstudentperenrol}
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
                        background={{ fill: "#eee" }}
                      />
                    </BarChart>
                  )}
                  {datanoofstudentperenrol.length == 0 && (
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
                            No Student
                          </h6>
                        </Grid>
                      </Grid>
                    </div>
                  )}
                </Card>
              </Paper>
            </Grid>

            <Grid item xs={6} className="listitem">
              <Paper elevation={8}>
                <Card
                  title={
                    <Typographyh6 data="Number of Graduated Students Per Academic Calendar" />
                  }
                >
                  {datanoofgraduatestudent.length != 0 && (
                    <BarChart
                      width={700}
                      height={370}
                      data={datanoofgraduatestudent}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                      barSize={20}
                    >
                      <XAxis
                        dataKey="academicYear"
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
                  {datanoofgraduatestudent.length == 0 && (
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

            <Grid item xs={6} className="listitem">
              <Paper elevation={8}>
                <Card
                  title={
                    <Typographyh6 data="Number of Graduated Students Per Enrollement Type" />
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

            <Grid item xs={6} className="listitem">
              <Paper elevation={8}>
                <Card
                  title={
                    <Typographyh6 data="Number of Graduated Students Per In Program Type" />
                  }
                >
                  <PieChart width={400} height={400}>
                    <Pie
                      activeIndex={activeIndex}
                      activeShape={renderActiveShapePerGraduateStudent}
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

            <Grid item xs={6} className="listitem">
              <Paper elevation={8}>
                <Card
                  title={
                    <Typographyh6 data="Number of Student Per Attending Year" />
                  }
                >
                  <PieChart width={400} height={400}>
                    <Pie
                      activeIndex={activeIndex}
                      activeShape={renderActiveShapePerAttendingYear}
                      data={datanoofstudentPerAttendingYear}
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

            <Grid item xs={6} className="listitem">
              <Paper elevation={8}>
                <Card
                  title={
                    <Typographyh6 data="Number of Graduated Students in Per Programs of Bonga University (in %)" />
                  }
                >
                  <List
                    style={{ maxHeight: 400, overflow: "auto" }}
                    dataSource={datagraduatestudentperprogram}
                    renderItem={(item: any) => (
                      <List.Item>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Typography>{item.programName}</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Progress percent={item.numberOfGraduateStudnets} />
                          </Grid>
                        </Grid>
                      </List.Item>
                    )}
                  />
                </Card>
              </Paper>
            </Grid>

            <Grid item xs={6} className="listitem">
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

            <Grid item xs={6} className="listitem">
              <Paper elevation={8}>
                <Card>
                  <Typographyh6 data="Department Student Per Total No of Student in Your Department" />
                  <Divider />
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <PieChart width={400} height={400}>
                        <Pie
                          activeIndex={activeIndex1}
                          activeShape={renderActiveShapStudent}
                          data={
                            datastudentperTotalprogram.studentTotalNumberInOneDepartment
                          }
                          cx={200}
                          cy={200}
                          innerRadius={60}
                          outerRadius={80}
                          dataKey="value"
                          onMouseEnter={onPieEnter1}
                        />
                      </PieChart>
                    </Grid>
                    <Grid item xs={6}>
                      <PieChart width={400} height={400}>
                        <Pie
                          activeIndex={activeIndex1}
                          activeShape={renderActiveShapStudent}
                          data={
                            datastudentperTotalprogram.studentTotalNumberOverAll
                          }
                          cx={200}
                          cy={200}
                          innerRadius={60}
                          outerRadius={80}
                          dataKey="value"
                          onMouseEnter={onPieEnter1}
                        />
                      </PieChart>
                    </Grid>
                  </Grid>
                </Card>
              </Paper>
            </Grid>

            <Grid item xs={6} className="listitem">
              <Paper elevation={8}>
                <Card
                  title={<Typographyh6 data="Top Ten Students In One Course" />}
                  style={{
                    width: "700",
                    height: "400",
                  }}
                >
                  {datatoptenstudentinonecourse.length != 0 && (
                    <List
                      style={{ maxHeight: 410, overflow: "auto" }}
                      itemLayout="horizontal"
                      dataSource={datatoptenstudentinonecourse}
                      renderItem={(item: any) => (
                        <List.Item>
                          <List.Item.Meta
                            title={item.name}
                            description={
                              <Grid container spacing={1}>
                                <Grid item xs={12}>
                                  Program: {item.program}
                                </Grid>
                                <Grid item xs={12}>
                                  Stream: {item.stream}
                                </Grid>
                                <Grid item xs={12}>
                                  CGPA: {item.cgpa}
                                </Grid>
                              </Grid>
                            }
                          />
                        </List.Item>
                      )}
                    />
                  )}
                  {datatoptenstudentinonecourse.length == 0 && (
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
                            {errorMessage}
                          </h6>
                        </Grid>
                      </Grid>
                    </div>
                  )}
                </Card>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              {dataClassSchedule.length != 0 && (
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
                            Course
                          </th>
                          <th
                            style={{
                              border: "1px solid black",
                              textAlign: "center",
                            }}
                          >
                            Monday
                          </th>
                          <th
                            style={{
                              border: "1px solid black",
                              textAlign: "center",
                            }}
                          >
                            Tusday
                          </th>
                          <th
                            style={{
                              border: "1px solid black",
                              textAlign: "center",
                            }}
                          >
                            Wednsday
                          </th>
                          <th
                            style={{
                              border: "1px solid black",
                              textAlign: "center",
                            }}
                          >
                            Thursday
                          </th>
                          <th
                            style={{
                              border: "1px solid black",
                              textAlign: "center",
                            }}
                          >
                            Friday
                          </th>
                          <th
                            style={{
                              border: "1px solid black",
                              textAlign: "center",
                            }}
                          >
                            Saturday
                          </th>
                          <th
                            style={{
                              border: "1px solid black",
                              textAlign: "center",
                            }}
                          >
                            Sunday
                          </th>
                        </tr>

                        {dataClassSchedule.map((item: any, index = 0) => {
                          return (
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
                                  width: "3%",
                                  marginLeft: "3%",
                                  textAlign: "center",
                                }}
                              >
                                {item.courseName}
                              </th>

                              {item.scheduleList.map((listItem: any) => {
                                return (
                                  <th
                                    style={{
                                      border: "1px solid black",
                                      width: "3%",
                                      marginLeft: "3%",
                                      textAlign: "center",
                                    }}
                                  >
                                    <>
                                      {listItem.startTime != "-" && (
                                        <Grid container spacing={1}>
                                          <Grid item xs={12}>
                                            {listItem.startTime +
                                              " - " +
                                              listItem.endTime}
                                          </Grid>
                                          <Grid item xs={12}>
                                            {listItem.instructorName}
                                          </Grid>
                                          <Grid item xs={12}>
                                            {listItem.building}
                                          </Grid>
                                          <Grid item xs={12}>
                                            {listItem.roomName}
                                          </Grid>
                                        </Grid>
                                      )}
                                    </>
                                  </th>
                                );
                              })}
                            </tr>
                          );
                        })}
                      </table>
                    </Card>
                  </Card>
                </Paper>
              )}
            </Grid>

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
                          Examainor
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
                                {item.instructorName}
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
    </div>
  );
};
export default InstructorDashboard as any;
