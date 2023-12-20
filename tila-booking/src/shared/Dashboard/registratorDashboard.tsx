import { Button, Grid, Paper } from "@mui/material";
import React, {
  useState,
  useEffect,
  useCallback,
  FunctionComponent,
} from "react";
import Cards from "../../uicontrols/Card";
import { userService } from "../auth/user-services";
import { appUrl } from "../../AppURI";
import { Card, List, Table, Typography } from "antd";
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
import { userStorageService } from "../../shared/service/user-storage-services";
import BurstModeIcon from "@mui/icons-material/BurstMode";
import HailIcon from "@mui/icons-material/Hail";
import LayersClearIcon from "@mui/icons-material/LayersClear";
import CallSplitIcon from "@mui/icons-material/CallSplit";
import PersonRemoveRoundedIcon from "@mui/icons-material/PersonRemoveRounded";
import PersonOffRoundedIcon from "@mui/icons-material/PersonOffRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import CompareArrowsRoundedIcon from "@mui/icons-material/CompareArrowsRounded";
import DynamicFeedRoundedIcon from "@mui/icons-material/DynamicFeedRounded";
import ViewModuleRoundedIcon from "@mui/icons-material/ViewModuleRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import GroupRemoveRoundedIcon from "@mui/icons-material/GroupRemoveRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import SupervisedUserCircleRoundedIcon from "@mui/icons-material/SupervisedUserCircleRounded";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { PieChart, Pie, Sector } from "recharts";
import { Typographyh6 } from "../../uicontrols/Typography";
import Divider from "@mui/material/Divider";
import { Avatar } from "antd";
import { Progress } from "antd";
import BallotIcon from "@mui/icons-material/Ballot";
import FolderOffIcon from "@mui/icons-material/FolderOff";
import InfoIcon from "@mui/icons-material/Info";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import HotelIcon from "@mui/icons-material/Hotel";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3
    } 
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width
    }, ${y + height}
  Z`;
};

const TriangleBar: FunctionComponent<any> = (props: any) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

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
      >{`${value} Student`}</text>
    </g>
  );
};

const AllDashboard = ({ ...props }) => {
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
  const [datanoofcoursetakens, setDatanoofcoursetabkens] = useState<any>();
  const [datanoofprograms, setDatanoofprograms] = useState<any>();
  const [datanoofcoursesbydepart, setnoofcoursesbydepart] = useState<any>();
  const [datanoofinstructorindepartments, setnoofinstructorindepartments] =
    useState<any>();
  const [datanoofmoduleindepartments, setnoofmoduleindepartments] =
    useState<any>();
  const [
    datanoofclearnacerequestindepartments,
    setnoofclearnacerequestindepartments,
  ] = useState<any>();
  const [datanoofsectionindepartments, setnoofsectionindepartments] =
    useState<any>();
  const [
    datanoofacadamicdesmisalindepartments,
    setnoofacadamicdesmisalindepartments,
  ] = useState<any>();
  const [
    datanoofacadamicdesmisalreindepartments,
    setnoofacadamicdesmisalreindepartments,
  ] = useState<any>();
  const [
    datanooftransferedstudentindepartments,
    setnooftransferedstudentindepartments,
  ] = useState<any>();
  const [datatoptenstudentindepartments, settoptenstudentindepartments] =
    useState<any>([]);
  const [datanoofcourses, setnoofcourses] = useState<any>();
  const [datanoofinstructors, setnoofinstructors] = useState<any>();
  const [datanoofmodules, setnoofmodules] = useState<any>();
  const [datanoofclearnacerequests, setnoofclearnacerequests] = useState<any>();
  const [datanoofsections, setnoofsections] = useState<any>();
  const [datanoofacadamicdesmisals, setnoofacadamicdesmisals] = useState<any>();
  const [datanoofacadamicdesmisalres, setnoofacadamicdesmisalres] =
    useState<any>();
  const [datanoofstudentonwarnings, setnoofstudentonwarnings] = useState<any>();
  const [
    datanoofstudentonwarningIndepartments,
    setnoofstudentonwarningInDepartments,
  ] = useState<any>();
  const [datanooftransferedstudents, setnooftransferedstudents] =
    useState<any>();
  const [datanoofstudents, setnoofstudents] = useState<any>();
  const [datanoofwithdrawlstudents, setnoofwithdrawlstudents] = useState<any>();
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
  const [datanoofstudentPerAttendingYear, setdatanoofstudentPerAttendingYear] =
    useState<any>([]);
  const [
    datanoofgraduatestudentPerProgramType,
    setdatanoofgraduatestudentPerProgramType,
  ] = useState<any>([]);
  const [datanoofgraduatestudent, setdatanoofgraduatestudent] = useState<any>(
    []
  );
  const [datanoofregistrationrequest, setnoofregistrationrequest] =
    useState<any>();
  const [datanoofstudentwithdecpmeasures, setnoofstudentwithdecpmeasures] =
    useState<any>();
  const [datanoofAlmuniService, setdatanoofalmuniservice] = useState<any>();
  const [datastudentperprogram, setstudentperprogram] = useState<any>([]);
  const [datagraduatestudentperprogram, setGraduateStudentProgram] =
    useState<any>([]);
  const [datastudentperattendingYear, setstudentperatttendingYear] =
    useState<any>([]);
  const [datastudentperTotalprogram, setstudentpertotalProgram] =
    useState<any>();
  const [errorMessage, setErrorMessage] = useState<any>();
  const [dataTopStudent, setDataTopStudent] = useState<any>([]);
  const [dataTopStudentInEach, setDataTopStudentInEach] = useState<any>([]);
  const [dataStudentAnnouncement, setStudentAnnouncement] = useState<any>([]);
  const [datanoofbuilding, setDatanoofbuilding] = useState<any>();
  const [datanoofdormrooms, setDatanoofdormrooms] = useState<any>();
  const [datanoofclassrooms, setDatanoofclassrooms] = useState<any>();
  const [datanoofcurriculum, setDatanoofcurriculum] = useState<any>();
  const [dataCafeNonCafe, setdataCafeNonCafe] = useState<any>([]);
  const [dateCourseTaken, setCourseTaken] = useState<any>([]);
  const [datatoptenstudentinonecourse, setdatatoptenstudentinonecourse] =
    useState<any>([]);
  const [datanoofsectionindepartmentTaken, setnoofsectionindepartmentTaken] =
    useState<any>();
  const [
    datanoofInstructorInDepartment,
    setdatanoofInstructorInEachDepartment,
  ] = useState<any>([]);
  const [datanoofstudentactivityjoined, setnoofstudentactivityjoined] =
    useState<any>();
  const [dataClassSchedule, setClassSchedule] = useState<any[]>([]);
  const [dataExamSchedule, setExamSchedule] = useState<any>([]);
  const navigate = useNavigate();
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
    if (
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Institute Head") ||
      userStorageService.currentRole("School Head") ||
      userStorageService.currentRole("Department Coordinator") ||
      userStorageService.currentRole("Collage Coordinator") ||
      userStorageService.currentRole("Institute Coordinator") ||
      userStorageService.currentRole("School Coordinator") ||
      userStorageService.currentRole("Fresh Man Coordinator")
    ) {
      //  handleControlChange
      const getCourseTakens = (url: string = appUrl + "DashBoards") => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/count-no-of-course-instructor-not-assigned")
          .then((rowdata: any) => setDatanoofcoursetabkens(rowdata.data))
          .catch((err) => console.log(err));
        return;
      };
      getCourseTakens();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch  no of Programs  row data using direct api.***********

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
    if (userStorageService.currentRole("Instructor")) {
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
          .then((rowdata: any) =>
            setnoofsectionindepartmentTaken(rowdata.data)
          );
        return;
      };
      getNoOfSectionInDepartments();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch No of Sections  in departments row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no course by Departments data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar") ||
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Institute Head") ||
      userStorageService.currentRole("School Head") ||
      userStorageService.currentRole("Department Coordinator") ||
      userStorageService.currentRole("Collage Coordinator") ||
      userStorageService.currentRole("Institute Coordinator") ||
      userStorageService.currentRole("School Coordinator") ||
      userStorageService.currentRole("Fresh Man Coordinator") ||
      userStorageService.currentRole("Collage Head")
    ) {
      const getNoOfCourses = (url: string = appUrl + "DashBoards") => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/count-no-of-course-in-department")
          .then((rowdata: any) => setnoofcoursesbydepart(rowdata.data));
        return;
      };
      getNoOfCourses();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch  no course by Departments  data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch No of Instructor in departments  row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Instructor")
    ) {
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
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch No of Instructor in departments row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch No of Instructor in departments  row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Institute Head") ||
      userStorageService.currentRole("School Head") ||
      userStorageService.currentRole("Department Coordinator") ||
      userStorageService.currentRole("Collage Coordinator") ||
      userStorageService.currentRole("Institute Coordinator") ||
      userStorageService.currentRole("School Coordinator") ||
      userStorageService.currentRole("Fresh Man Coordinator") ||
      userStorageService.currentRole("Collage Head") ||
      userStorageService.currentRole("Registrar")
    ) {
      const getNoOfInstructorInDepartments = (
        url: string = appUrl + "DashBoards"
      ) => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/count-number-of-insructor-in-each-department")
          .then((rowdata: any) =>
            setdatanoofInstructorInEachDepartment(rowdata.data)
          );
        return;
      };
      getNoOfInstructorInDepartments();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch No of Instructor in departments row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch No of Modules in departments row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Institute Head") ||
      userStorageService.currentRole("School Head") ||
      userStorageService.currentRole("Department Coordinator") ||
      userStorageService.currentRole("Collage Coordinator") ||
      userStorageService.currentRole("Institute Coordinator") ||
      userStorageService.currentRole("School Coordinator") ||
      userStorageService.currentRole("Fresh Man Coordinator") ||
      userStorageService.currentRole("Collage Head") ||
      userStorageService.currentRole("Registrar")
    ) {
      const getNoOfModuleInDepartments = (
        url: string = appUrl + "DashBoards"
      ) => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/count-no-of-module-in-department")
          .then((rowdata: any) => setnoofmoduleindepartments(rowdata.data));
        return;
      };
      getNoOfModuleInDepartments();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch No of Modules in departments row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch No of Clearance Requests in departments row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar") ||
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Institute Head") ||
      userStorageService.currentRole("School Head") ||
      userStorageService.currentRole("Department Coordinator") ||
      userStorageService.currentRole("Collage Coordinator") ||
      userStorageService.currentRole("Institute Coordinator") ||
      userStorageService.currentRole("School Coordinator") ||
      userStorageService.currentRole("Fresh Man Coordinator") ||
      userStorageService.currentRole("Collage Head")
    ) {
      const getNoOfCleranceRequestInDepartments = (
        url: string = appUrl + "DashBoards"
      ) => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/count-no-of-clearance-request-in-department")
          .then((rowdata: any) =>
            setnoofclearnacerequestindepartments(rowdata.data)
          );
        return;
      };
      getNoOfCleranceRequestInDepartments();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch No of Clearance Requests in departments row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch No of Sections in departments row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar") ||
      userStorageService.currentRole("Collage Head") ||
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Institute Head") ||
      userStorageService.currentRole("School Head") ||
      userStorageService.currentRole("Department Coordinator") ||
      userStorageService.currentRole("Collage Coordinator") ||
      userStorageService.currentRole("Institute Coordinator") ||
      userStorageService.currentRole("School Coordinator") ||
      userStorageService.currentRole("Instructor") ||
      userStorageService.currentRole("Fresh Man Coordinator")
    ) {
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
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch No of Sections  in departments row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch No of Acadmic Dismisal  in departments row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar") ||
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Institute Head") ||
      userStorageService.currentRole("School Head") ||
      userStorageService.currentRole("Department Coordinator") ||
      userStorageService.currentRole("Collage Coordinator") ||
      userStorageService.currentRole("Institute Coordinator") ||
      userStorageService.currentRole("School Coordinator") ||
      userStorageService.currentRole("Fresh Man Coordinator") ||
      userStorageService.currentRole("Instructor") ||
      userStorageService.currentRole("Collage Head")
    ) {
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
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch No of  Acadmic Dismisal  in departments row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch No of Acadmic Dismisal  Re in departments row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar") ||
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Institute Head") ||
      userStorageService.currentRole("School Head") ||
      userStorageService.currentRole("Department Coordinator") ||
      userStorageService.currentRole("Collage Coordinator") ||
      userStorageService.currentRole("Institute Coordinator") ||
      userStorageService.currentRole("School Coordinator") ||
      userStorageService.currentRole("Fresh Man Coordinator") ||
      userStorageService.currentRole("Instructor") ||
      userStorageService.currentRole("Collage Head")
    ) {
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
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch No of  Acadmic Dismisal Re  in departments row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch No of Transfered Students in departments row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar") ||
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Institute Head") ||
      userStorageService.currentRole("School Head") ||
      userStorageService.currentRole("Department Coordinator") ||
      userStorageService.currentRole("Collage Coordinator") ||
      userStorageService.currentRole("Institute Coordinator") ||
      userStorageService.currentRole("School Coordinator") ||
      userStorageService.currentRole("Fresh Man Coordinator") ||
      userStorageService.currentRole("Instructor") ||
      userStorageService.currentRole("Collage Head")
    ) {
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
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch No of Transfered Students  in departments row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch Top Ten Students in departments row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Collage Head") ||
      userStorageService.currentRole("Institute Head") ||
      userStorageService.currentRole("School Head") ||
      userStorageService.currentRole("Department Coordinator") ||
      userStorageService.currentRole("Collage Coordinator") ||
      userStorageService.currentRole("Institute Coordinator") ||
      userStorageService.currentRole("School Coordinator") ||
      userStorageService.currentRole("Fresh Man Coordinator") ||
      userStorageService.currentRole("Instructor") ||
      userStorageService.currentRole("Registrar")
    ) {
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

  // *********** Code Started For:- useEffect Function to fetch Top Ten Students in departments row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Acadmic President")
    ) {
      const getTopTenStudent = (url: string = appUrl + "DashBoards") => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/get-top-ten-students")
          .then((rowdata: any) => setDataTopStudent(rowdata.data));
        return;
      };
      getTopTenStudent();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch Top Ten Students  in departments row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch Top Ten Students in departments row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Acadmic President")
    ) {
      const getTopTenStudentInEach = (url: string = appUrl + "DashBoards") => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/get-top-ten-students-in-each-department")
          .then((rowdata: any) => setDataTopStudentInEach(rowdata.data));
        return;
      };
      getTopTenStudentInEach();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch Top Ten Students  in departments row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Courses row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Acadmic President")
    ) {
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
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of Courses row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Instructor row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Acadmic President")
    ) {
      const getNoofInstructors = (url: string = appUrl + "DashBoards") => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/count-no-of-instructors")
          .then((rowdata: any) => setnoofinstructors(rowdata.data));
        return;
      };
      getNoofInstructors();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of Instructor row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Modules row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Acadmic President")
    ) {
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
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of Modules row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Cleance Requests row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Acadmic President")
    ) {
      const getNoofClearnceRequests = (url: string = appUrl + "DashBoards") => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/count-no-of-clearance-request")
          .then((rowdata: any) => setnoofclearnacerequests(rowdata.data));
        return;
      };
      getNoofClearnceRequests();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of  Cleance Requests row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Sections row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Acadmic President")
    ) {
      const getNoofSections = (url: string = appUrl + "DashBoards") => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/count-number-of-Sections")
          .then((rowdata: any) => setnoofsections(rowdata.data));
        return;
      };
      getNoofSections();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of  Sections row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Acadmic Dismisal Re row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Acadmic President")
    ) {
      const getNoofAcadmicDismisalRes = (
        url: string = appUrl + "DashBoards"
      ) => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/count-no-of-adr-students")
          .then((rowdata: any) => setnoofacadamicdesmisalres(rowdata.data));
        return;
      };
      getNoofAcadmicDismisalRes();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of  Acadmic Dismisal Re row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Acadmic Dismisal row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Acadmic President")
    ) {
      const getNoofAcadmicDismisals = (url: string = appUrl + "DashBoards") => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/count-no-of-ad-students")
          .then((rowdata: any) => setnoofacadamicdesmisals(rowdata.data));
        return;
      };
      getNoofAcadmicDismisals();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of  Acadmic Dismisal row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Students On Wanings  row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Acadmic President")
    ) {
      const getNoofStudentOnWarnings = (
        url: string = appUrl + "DashBoards"
      ) => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/count-no-of-warning-students")
          .then((rowdata: any) => setnoofstudentonwarnings(rowdata.data));
        return;
      };
      getNoofStudentOnWarnings();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of  Students On Wanings row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Students On Wanings  row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar") ||
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Institute Head") ||
      userStorageService.currentRole("School Head") ||
      userStorageService.currentRole("Department Coordinator") ||
      userStorageService.currentRole("Collage Coordinator") ||
      userStorageService.currentRole("Institute Coordinator") ||
      userStorageService.currentRole("School Coordinator") ||
      userStorageService.currentRole("Fresh Man Coordinator") ||
      userStorageService.currentRole("Instructor") ||
      userStorageService.currentRole("Collage Head")
    ) {
      const getNoofStudentOnWarnings = (
        url: string = appUrl + "DashBoards"
      ) => {
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
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of  Students On Wanings row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Students On Wanings  row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Acadmic President")
    ) {
      const getNoofStudentOnWarnings = (
        url: string = appUrl + "DashBoards"
      ) => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/count-no-of-warning-students")
          .then((rowdata: any) => setnoofstudentonwarnings(rowdata.data));
        return;
      };
      getNoofStudentOnWarnings();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of  Students On Wanings row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Transfered Students   row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Acadmic President")
    ) {
      const getNoofTransferedStudentss = (
        url: string = appUrl + "DashBoards"
      ) => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/count-no-of-transfered-students")
          .then((rowdata: any) => setnooftransferedstudents(rowdata.data));
        return;
      };
      getNoofTransferedStudentss();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of Transfered Students row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of  Students   row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Acadmic President")
    ) {
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
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of  Students row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Withdrawl Students   row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Acadmic President")
    ) {
      const getNoofWithdrwalStudents = (
        url: string = appUrl + "DashBoards"
      ) => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/count-no-of-withdrawal-students")
          .then((rowdata: any) => setnoofwithdrawlstudents(rowdata.data));
        return;
      };
      getNoofWithdrwalStudents();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of  Withdrawl Students row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Graduate Students   row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Acadmic President")
    ) {
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
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of  Graduate Students row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of  Students   Per Enorllment row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar") ||
      userStorageService.currentRole("Collage Head") ||
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Institute Head") ||
      userStorageService.currentRole("School Head") ||
      userStorageService.currentRole("Department Coordinator") ||
      userStorageService.currentRole("Collage Coordinator") ||
      userStorageService.currentRole("Institute Coordinator") ||
      userStorageService.currentRole("School Coordinator") ||
      userStorageService.currentRole("Instructor") ||
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

  // *********** Code Started For:- useEffect Function to fetch no of  Students   Per Enorllment row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar") ||
      userStorageService.currentRole("Collage Head") ||
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Institute Head") ||
      userStorageService.currentRole("School Head") ||
      userStorageService.currentRole("Department Coordinator") ||
      userStorageService.currentRole("Collage Coordinator") ||
      userStorageService.currentRole("Institute Coordinator") ||
      userStorageService.currentRole("School Coordinator") ||
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Fresh Man Coordinator") ||
      userStorageService.currentRole("Instructor") ||
      userStorageService.currentRole("Acadmic President")
    ) {
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
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of   Per Enorllment  row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Registration Request row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar") ||
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Institute Head") ||
      userStorageService.currentRole("School Head") ||
      userStorageService.currentRole("Department Coordinator") ||
      userStorageService.currentRole("Collage Coordinator") ||
      userStorageService.currentRole("Institute Coordinator") ||
      userStorageService.currentRole("School Coordinator") ||
      userStorageService.currentRole("Fresh Man Coordinator") ||
      userStorageService.currentRole("Collage Head")
    ) {
      const getnoofregistrationrequest = (
        url: string = appUrl + "DashBoards"
      ) => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/count-no-of-registration-requets")
          .then((rowdata: any) => setnoofregistrationrequest(rowdata.data));
        return;
      };
      getnoofregistrationrequest();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of Registration Request  data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Student with Decpline Measure  row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar") ||
      userStorageService.currentRole("Collage Head") ||
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Institute Head") ||
      userStorageService.currentRole("School Head") ||
      userStorageService.currentRole("Department Coordinator") ||
      userStorageService.currentRole("Collage Coordinator") ||
      userStorageService.currentRole("Institute Coordinator") ||
      userStorageService.currentRole("School Coordinator") ||
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Fresh Man Coordinator") ||
      userStorageService.currentRole("Instructor") ||
      userStorageService.currentRole("Acadmic President")
    ) {
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
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch  no of  Student with Decpline Measure   data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Student with Decpline Measure  row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar") ||
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
          .get(url + "/count-number-of-almuniService")
          .then((rowdata: any) => setdatanoofalmuniservice(rowdata.data));
        return;
      };
      getnoofalmunirequest();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch  no of  Student with Decpline Measure   data using direct api.***********

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

  // *********** Code Started For:- useEffect Function to fetch no of Student with Decpline Measure  row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Institute Head") ||
      userStorageService.currentRole("School Head") ||
      userStorageService.currentRole("Department Coordinator") ||
      userStorageService.currentRole("Collage Coordinator") ||
      userStorageService.currentRole("Institute Coordinator") ||
      userStorageService.currentRole("School Coordinator") ||
      userStorageService.currentRole("Fresh Man Coordinator") ||
      userStorageService.currentRole("Collage Head") ||
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Registrar") ||
      userStorageService.currentRole("Instructor") ||
      userStorageService.currentRole("Acadmic President")
    ) {
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
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch  no of  Student with Decpline Measure   data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Student with Decpline Measure  row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Acadmic President") ||
      userStorageService.currentRole("Registrar Head")
    ) {
      const getnoofalmunirequest = (url: string = appUrl + "DashBoards") => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/get-students-per-atending-year")
          .then((rowdata: any) => setstudentperatttendingYear(rowdata.data));
        return;
      };
      getnoofalmunirequest();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch  no of  Student with Decpline Measure   data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of Student with Decpline Measure  row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar") ||
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Institute Head") ||
      userStorageService.currentRole("School Head") ||
      userStorageService.currentRole("Department Coordinator") ||
      userStorageService.currentRole("Collage Coordinator") ||
      userStorageService.currentRole("Institute Coordinator") ||
      userStorageService.currentRole("School Coordinator") ||
      userStorageService.currentRole("Collage Head") ||
      userStorageService.currentRole("Instructor") ||
      userStorageService.currentRole("Fresh Man Coordinator")
    ) {
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
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch  no of  Student with Decpline Measure   data using direct api.***********

  useEffect(() => {
    if (
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Institute Head") ||
      userStorageService.currentRole("School Head") ||
      userStorageService.currentRole("Department Coordinator") ||
      userStorageService.currentRole("Collage Coordinator") ||
      userStorageService.currentRole("Institute Coordinator") ||
      userStorageService.currentRole("School Coordinator") ||
      userStorageService.currentRole("Fresh Man Coordinator") ||
      userStorageService.currentRole("Collage Head") ||
      userStorageService.currentRole("Instructor")
    ) {
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
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch  no of student activity joined   row data using direct api.***********

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

  // // *********** Code Started For:- useEffect Function to fetch Class Rooms row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Collage Head") ||
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Institute Head") ||
      userStorageService.currentRole("School Head") ||
      userStorageService.currentRole("Department Coordinator") ||
      userStorageService.currentRole("Collage Coordinator") ||
      userStorageService.currentRole("Institute Coordinator") ||
      userStorageService.currentRole("School Coordinator") ||
      userStorageService.currentRole("Fresh Man Coordinator") ||
      userStorageService.currentRole("Registrar") ||
      userStorageService.currentRole("Instructor") ||
      userStorageService.currentRole("Acadmic President")
    ) {
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
    }
  }, []);
  // // *********** Code Ended For:- useEffect Function to fetch Class Rooms row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch Class Rooms row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Acadmic President")
    ) {
      const getcafeandnoncafe = (url: string = appUrl + "DashBoards") => {
        axios
          .create({
            headers: {
              Authorization: `Bearer ${userService.token}`,
            },
          })
          .get(url + "/number-ofcafe-and-non-cafe")
          .then((rowdata: any) => setdataCafeNonCafe(rowdata.data));
        return;
      };
      getcafeandnoncafe();
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch Class Rooms row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of  Students   Per Enorllment row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar") ||
      userStorageService.currentRole("Collage Head") ||
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Institute Head") ||
      userStorageService.currentRole("School Head") ||
      userStorageService.currentRole("Department Coordinator") ||
      userStorageService.currentRole("Collage Coordinator") ||
      userStorageService.currentRole("Institute Coordinator") ||
      userStorageService.currentRole("School Coordinator") ||
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Fresh Man Coordinator") ||
      userStorageService.currentRole("Instructor") ||
      userStorageService.currentRole("Acadmic President")
    ) {
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
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of   Per Enorllment  row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of  Students   Per Enorllment row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar") ||
      userStorageService.currentRole("Collage Head") ||
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Institute Head") ||
      userStorageService.currentRole("School Head") ||
      userStorageService.currentRole("Department Coordinator") ||
      userStorageService.currentRole("Collage Coordinator") ||
      userStorageService.currentRole("Institute Coordinator") ||
      userStorageService.currentRole("School Coordinator") ||
      userStorageService.currentRole("Instructor") ||
      userStorageService.currentRole("Fresh Man Coordinator")
    ) {
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
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of   Per Enorllment  row data using direct api.***********

  // *********** Code Started For:- useEffect Function to fetch no of  Students   Per Enorllment row data using direct api.***********
  useEffect(() => {
    if (
      userStorageService.currentRole("Registrar") ||
      userStorageService.currentRole("Collage Head") ||
      userStorageService.currentRole("Department Head") ||
      userStorageService.currentRole("Institute Head") ||
      userStorageService.currentRole("School Head") ||
      userStorageService.currentRole("Department Coordinator") ||
      userStorageService.currentRole("Collage Coordinator") ||
      userStorageService.currentRole("Institute Coordinator") ||
      userStorageService.currentRole("School Coordinator") ||
      userStorageService.currentRole("Registrar Head") ||
      userStorageService.currentRole("Super Admin") ||
      userStorageService.currentRole("Fresh Man Coordinator") ||
      userStorageService.currentRole("Instructor") ||
      userStorageService.currentRole("Acadmic President")
    ) {
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
    }
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch no of   Per Enorllment  row data using direct api.***********

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
          .then((rowdata: any) => setClassSchedule([rowdata.data]));
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

  // *********** Code Started For:- useEffect Function to fetch no of  Students   Per Enorllment row data using direct api.***********
  useEffect(() => {
    if (userStorageService.currentRole("Instructor")) {
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
            setErrorMessage(err.response.data);
          });
        return;
      };
      gettoptenstudentinonecourse();
    }
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
                    path="/userComponent/viewProgram"
                    icon={<BallotIcon />}
                  />
                </Paper>
              </Grid>
              {userStorageService.currentRole("Registrar Head") && (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Paper className="paper" elevation={8}>
                    <Cards
                      amount={datanoofbuilding || 0}
                      info="Building"
                      desc="No Of Building"
                      infolink="List of Buildings"
                      path="/userComponent/viewBuilding"
                      icon={<ApartmentIcon />}
                    />
                  </Paper>
                </Grid>
              )}
              {userStorageService.currentRole("Registrar Head") && (
                <Grid item xs={12} sm={6} md={4} lg={3}>
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
              )}
              {userStorageService.currentRole("Registrar Head") && (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Paper className="paper" elevation={8}>
                    <Cards
                      amount={datanoofclassrooms || 0}
                      info="Class Rooms"
                      desc="No Of Class Rooms"
                      infolink="List Of Class Rooms"
                      path="/userComponent/viewBuilding"
                      icon={<CastForEducationIcon />}
                    />
                  </Paper>
                </Grid>
              )}
              {(userStorageService.currentRole("Department Head") ||
                userStorageService.currentRole("Institute Head") ||
                userStorageService.currentRole("School Head") ||
                userStorageService.currentRole("Department Coordinator") ||
                userStorageService.currentRole("Collage Coordinator") ||
                userStorageService.currentRole("Institute Coordinator") ||
                userStorageService.currentRole("School Coordinator") ||
                userStorageService.currentRole("Fresh Man Coordinator")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofcoursetakens || 0}
                        info="Courses"
                        desc="No Of Courses Taken"
                        infolink="List Of Courses"
                        path="/userComponent/viewInstructorCourseOffer"
                        icon={<BurstModeIcon />}
                      />
                    </Paper>
                  </Grid>
                )}
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Paper className="paper" elevation={8}>
                  <Cards
                    amount={datanoofstudentactivityjoined || 0}
                    info="Student Activitys"
                    desc="Activly Partcipating"
                    infolink="List of Student Activity"
                    path="/userComponent/viewStudentActivity"
                    icon={<SettingsAccessibilityIcon />}
                  />
                </Paper>
              </Grid>
              {(userStorageService.currentRole("Department Head") ||
                userStorageService.currentRole("Institute Head") ||
                userStorageService.currentRole("School Head") ||
                userStorageService.currentRole("Department Coordinator") ||
                userStorageService.currentRole("Collage Coordinator") ||
                userStorageService.currentRole("Institute Coordinator") ||
                userStorageService.currentRole("School Coordinator") ||
                userStorageService.currentRole("Fresh Man Coordinator") ||
                userStorageService.currentRole("Collage Head") ||
                userStorageService.currentRole("Registrar")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofmoduleindepartments || 0}
                        info="Modules"
                        desc="No of Module "
                        infolink="List of in your department"
                        path="/userComponent/viewModule"
                        icon={<HailIcon />}
                      />
                    </Paper>
                  </Grid>
                )}
              {(userStorageService.currentRole("Registrar") ||
                userStorageService.currentRole("Department Head") ||
                userStorageService.currentRole("Institute Head") ||
                userStorageService.currentRole("School Head") ||
                userStorageService.currentRole("Department Coordinator") ||
                userStorageService.currentRole("Collage Coordinator") ||
                userStorageService.currentRole("Institute Coordinator") ||
                userStorageService.currentRole("School Coordinator") ||
                userStorageService.currentRole("Fresh Man Coordinator") ||
                userStorageService.currentRole("Collage Head")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofcoursesbydepart || 0}
                        info="Courses"
                        desc="Course"
                        infolink="List of in your department"
                        path="/userComponent/viewCourse"
                        icon={<BurstModeIcon />}
                      />
                    </Paper>
                  </Grid>
                )}

              {(userStorageService.currentRole("Registrar") ||
                userStorageService.currentRole("Collage Head") ||
                userStorageService.currentRole("Fresh Man Coordinator") ||
                userStorageService.currentRole("Institute Head") ||
                userStorageService.currentRole("School Head") ||
                userStorageService.currentRole("Department Coordinator") ||
                userStorageService.currentRole("Collage Coordinator") ||
                userStorageService.currentRole("Institute Coordinator") ||
                userStorageService.currentRole("School Coordinator") ||
                userStorageService.currentRole("Instructor") ||
                userStorageService.currentRole("Department Head")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofsectionindepartments || 0}
                        info="Section"
                        desc="No of Section"
                        infolink="In your department"
                        path="#"
                        icon={<CallSplitIcon />}
                      />
                    </Paper>
                  </Grid>
                )}
              {(userStorageService.currentRole("Registrar") ||
                userStorageService.currentRole("Department Head") ||
                userStorageService.currentRole("Institute Head") ||
                userStorageService.currentRole("School Head") ||
                userStorageService.currentRole("Department Coordinator") ||
                userStorageService.currentRole("Collage Coordinator") ||
                userStorageService.currentRole("Institute Coordinator") ||
                userStorageService.currentRole("School Coordinator") ||
                userStorageService.currentRole("Fresh Man Coordinator") ||
                userStorageService.currentRole("Instructor") ||
                userStorageService.currentRole("Collage Head")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofacadamicdesmisalindepartments || 0}
                        info="Acadmic Dismisal"
                        desc="No of Students"
                        infolink="In your Department"
                        path="#"
                        icon={<PersonRemoveRoundedIcon />}
                      />
                    </Paper>
                  </Grid>
                )}
              {(userStorageService.currentRole("Registrar") ||
                userStorageService.currentRole("Department Head") ||
                userStorageService.currentRole("Institute Head") ||
                userStorageService.currentRole("School Head") ||
                userStorageService.currentRole("Department Coordinator") ||
                userStorageService.currentRole("Collage Coordinator") ||
                userStorageService.currentRole("Institute Coordinator") ||
                userStorageService.currentRole("School Coordinator") ||
                userStorageService.currentRole("Fresh Man Coordinator") ||
                userStorageService.currentRole("Instructor") ||
                userStorageService.currentRole("Collage Head")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofacadamicdesmisalreindepartments || 0}
                        info="Acadmic Dismisale Re"
                        desc="No of Students "
                        infolink="In your Department"
                        path="#"
                        icon={<PersonOffRoundedIcon />}
                      />
                    </Paper>
                  </Grid>
                )}

              {(userStorageService.currentRole("Registrar") ||
                userStorageService.currentRole("Department Head") ||
                userStorageService.currentRole("Institute Head") ||
                userStorageService.currentRole("School Head") ||
                userStorageService.currentRole("Department Coordinator") ||
                userStorageService.currentRole("Collage Coordinator") ||
                userStorageService.currentRole("Institute Coordinator") ||
                userStorageService.currentRole("School Coordinator") ||
                userStorageService.currentRole("Fresh Man Coordinator") ||
                userStorageService.currentRole("Instructor") ||
                userStorageService.currentRole("Collage Head")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofstudentonwarningIndepartments || 0}
                        info="Warning"
                        desc="No of Students"
                        infolink="In your department"
                        path="#"
                        icon={<WarningAmberRoundedIcon />}
                      />
                    </Paper>
                  </Grid>
                )}
              {(userStorageService.currentRole("Registrar") ||
                userStorageService.currentRole("Department Head") ||
                userStorageService.currentRole("Institute Head") ||
                userStorageService.currentRole("School Head") ||
                userStorageService.currentRole("Department Coordinator") ||
                userStorageService.currentRole("Collage Coordinator") ||
                userStorageService.currentRole("Institute Coordinator") ||
                userStorageService.currentRole("School Coordinator") ||
                userStorageService.currentRole("Fresh Man Coordinator") ||
                userStorageService.currentRole("Instructor") ||
                userStorageService.currentRole("Collage Head")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanooftransferedstudentindepartments || 0}
                        info="Transfered"
                        desc="No of Students"
                        infolink="From other University"
                        path="#"
                        icon={<CompareArrowsRoundedIcon />}
                      />
                    </Paper>
                  </Grid>
                )}
              {(userStorageService.currentRole("Registrar Head") ||
                userStorageService.currentRole("Super Admin") ||
                userStorageService.currentRole("Acadmic President")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofcourses || 0}
                        info="Courses"
                        desc="No of Courses"
                        infolink="List of All Departments"
                        path="/userComponent/viewCourse"
                        icon={<DynamicFeedRoundedIcon />}
                      />
                    </Paper>
                  </Grid>
                )}
              {(userStorageService.currentRole("Registrar Head") ||
                userStorageService.currentRole("Super Admin") ||
                userStorageService.currentRole("Acadmic President")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofinstructors || 0}
                        info="Instructors"
                        desc="No of Instructors"
                        infolink="List of in all Departments"
                        path="/userComponent/viewEmployee"
                        icon={<DynamicFeedRoundedIcon />}
                      />
                    </Paper>
                  </Grid>
                )}
              {(userStorageService.currentRole("Registrar Head") ||
                userStorageService.currentRole("Super Admin") ||
                userStorageService.currentRole("Acadmic President")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofmodules || 0}
                        info="Modules"
                        desc="No of Modules"
                        infolink="List of in all Departments"
                        path="/userComponent/viewModule"
                        icon={<ViewModuleRoundedIcon />}
                      />
                    </Paper>
                  </Grid>
                )}
              {(userStorageService.currentRole("Registrar Head") ||
                userStorageService.currentRole("Super Admin") ||
                userStorageService.currentRole("Acadmic President")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofsections || 0}
                        info="Section"
                        desc="No of Section"
                        infolink="In the University"
                        path="#"
                        icon={<CallSplitIcon />}
                      />
                    </Paper>
                  </Grid>
                )}
              {(userStorageService.currentRole("Registrar Head") ||
                userStorageService.currentRole("Super Admin") ||
                userStorageService.currentRole("Acadmic President")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofacadamicdesmisals || 0}
                        info="Acadmic Dismisal"
                        desc="No of Students"
                        infolink="In the University"
                        path="#"
                        icon={<PersonOffRoundedIcon />}
                      />
                    </Paper>
                  </Grid>
                )}
              {(userStorageService.currentRole("Registrar Head") ||
                userStorageService.currentRole("Super Admin") ||
                userStorageService.currentRole("Acadmic President")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofacadamicdesmisalres || 0}
                        info="Acadmic Dismisal Re"
                        desc="No of Students "
                        infolink="In the University"
                        path="#"
                        icon={<PersonOffRoundedIcon />}
                      />
                    </Paper>
                  </Grid>
                )}
              {(userStorageService.currentRole("Registrar Head") ||
                userStorageService.currentRole("Super Admin") ||
                userStorageService.currentRole("Acadmic President")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofstudentonwarnings || 0}
                        info="Warning"
                        desc="No of Students"
                        infolink="In the University"
                        path="#"
                        icon={<WarningAmberRoundedIcon />}
                      />
                    </Paper>
                  </Grid>
                )}
              {(userStorageService.currentRole("Registrar Head") ||
                userStorageService.currentRole("Super Admin") ||
                userStorageService.currentRole("Acadmic President")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanooftransferedstudents || 0}
                        info="Transfered"
                        desc="No of Students"
                        infolink="From the University"
                        path="#"
                        icon={<CompareArrowsRoundedIcon />}
                      />
                    </Paper>
                  </Grid>
                )}
              {(userStorageService.currentRole("Registrar Head") ||
                userStorageService.currentRole("Acadmic President")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofstudents || 0}
                        info="Students"
                        desc="No of Students"
                        infolink="List of in the University"
                        path="/userComponent/viewStudent"
                        icon={<SupervisorAccountRoundedIcon />}
                      />
                    </Paper>
                  </Grid>
                )}
              {userStorageService.currentRole("Super Admin") && (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Paper className="paper" elevation={8}>
                    <Cards
                      amount={datanoofstudents || 0}
                      info="Students"
                      desc="No of Students"
                      infolink="List of in the University"
                      path="#"
                      icon={<SupervisorAccountRoundedIcon />}
                    />
                  </Paper>
                </Grid>
              )}
              {(userStorageService.currentRole("Registrar Head") ||
                userStorageService.currentRole("Super Admin") ||
                userStorageService.currentRole("Acadmic President")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofclearnacerequests || 0}
                        info="Clearnace Request"
                        desc="No of Requests "
                        infolink="List of in All department"
                        path="/userComponent/viewClearanceRequest"
                        icon={<LayersClearIcon />}
                      />
                    </Paper>
                  </Grid>
                )}

              {(userStorageService.currentRole("Department Head") ||
                userStorageService.currentRole("Instructor")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofinstructorindepartments || 0}
                        info="Instructors"
                        desc="No of Instructor in your Department"
                        infolink="In your Department"
                        path="#"
                        icon={<HailIcon />}
                      />
                    </Paper>
                  </Grid>
                )}
              {(userStorageService.currentRole("Department Head") ||
                userStorageService.currentRole("Institute Head") ||
                userStorageService.currentRole("School Head") ||
                userStorageService.currentRole("Department Coordinator") ||
                userStorageService.currentRole("Collage Coordinator") ||
                userStorageService.currentRole("Institute Coordinator") ||
                userStorageService.currentRole("School Coordinator") ||
                userStorageService.currentRole("Fresh Man Coordinator") ||
                userStorageService.currentRole("Registrar") ||
                userStorageService.currentRole("Collage Head")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofclearnacerequestindepartments || 0}
                        info="Clearnace Request"
                        desc="No of Requests"
                        infolink="List of in your department"
                        path="/userComponent/viewClearanceRequest"
                        icon={<LayersClearIcon />}
                      />
                    </Paper>
                  </Grid>
                )}
              {(userStorageService.currentRole("Registrar Head") ||
                userStorageService.currentRole("Super Admin") ||
                userStorageService.currentRole("Acadmic President")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofwithdrawlstudents || 0}
                        info="Withdrwal"
                        desc="No of Students"
                        infolink="In the University"
                        path="#"
                        icon={<GroupRemoveRoundedIcon />}
                      />
                    </Paper>
                  </Grid>
                )}
              {(userStorageService.currentRole("Registrar") ||
                userStorageService.currentRole("Collage Head") ||
                userStorageService.currentRole("Department Head") ||
                userStorageService.currentRole("Institute Head") ||
                userStorageService.currentRole("School Head") ||
                userStorageService.currentRole("Department Coordinator") ||
                userStorageService.currentRole("Collage Coordinator") ||
                userStorageService.currentRole("Institute Coordinator") ||
                userStorageService.currentRole("School Coordinator") ||
                userStorageService.currentRole("Registrar Head") ||
                userStorageService.currentRole("Super Admin") ||
                userStorageService.currentRole("Fresh Man Coordinator") ||
                userStorageService.currentRole("Instructor") ||
                userStorageService.currentRole("Acadmic President")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofgraduatestudents || 0}
                        info="Graduate"
                        desc="No of Students"
                        infolink="In the University"
                        path="#"
                        icon={<SchoolRoundedIcon />}
                      />
                    </Paper>
                  </Grid>
                )}
              {(userStorageService.currentRole("Registrar") ||
                userStorageService.currentRole("Department Head") ||
                userStorageService.currentRole("Institute Head") ||
                userStorageService.currentRole("School Head") ||
                userStorageService.currentRole("Department Coordinator") ||
                userStorageService.currentRole("Collage Coordinator") ||
                userStorageService.currentRole("Institute Coordinator") ||
                userStorageService.currentRole("School Coordinator") ||
                userStorageService.currentRole("Fresh Man Coordinator") ||
                userStorageService.currentRole("Collage Head")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofregistrationrequest || 0}
                        info="Registration Request"
                        desc="No of Students"
                        infolink="To Register"
                        path="#"
                        icon={<HowToRegRoundedIcon />}
                      />
                    </Paper>
                  </Grid>
                )}
              {(userStorageService.currentRole("Registrar") ||
                userStorageService.currentRole("Registrar Head") ||
                userStorageService.currentRole("Super Admin") ||
                userStorageService.currentRole("Acadmic President")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofAlmuniService || 0}
                        info="Almuni Service"
                        desc="No of Almuni Service Request"
                        infolink="List of Almuni Service"
                        path="/userComponent/viewAlumniService"
                        icon={<HowToRegRoundedIcon />}
                      />
                    </Paper>
                  </Grid>
                )}
              {(userStorageService.currentRole("Registrar") ||
                userStorageService.currentRole("Collage Head") ||
                userStorageService.currentRole("Department Head") ||
                userStorageService.currentRole("Institute Head") ||
                userStorageService.currentRole("School Head") ||
                userStorageService.currentRole("Department Coordinator") ||
                userStorageService.currentRole("Collage Coordinator") ||
                userStorageService.currentRole("Institute Coordinator") ||
                userStorageService.currentRole("School Coordinator") ||
                userStorageService.currentRole("Registrar Head") ||
                userStorageService.currentRole("Super Admin") ||
                userStorageService.currentRole("Fresh Man Coordinator") ||
                userStorageService.currentRole("Instructor") ||
                userStorageService.currentRole("Acadmic President")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofstudentwithdecpmeasures || 0}
                        info="On Discipline Measure"
                        desc="Students On Discipline Measure"
                        infolink="List of in the University"
                        path="/userComponent/viewStudentDiscipline"
                        icon={<SupervisedUserCircleRoundedIcon />}
                      />
                    </Paper>
                  </Grid>
                )}

              {(userStorageService.currentRole("Registrar Head") ||
                userStorageService.currentRole("Super Admin") ||
                userStorageService.currentRole("Collage Head") ||
                userStorageService.currentRole("Department Head") ||
                userStorageService.currentRole("Institute Head") ||
                userStorageService.currentRole("School Head") ||
                userStorageService.currentRole("Department Coordinator") ||
                userStorageService.currentRole("Collage Coordinator") ||
                userStorageService.currentRole("Institute Coordinator") ||
                userStorageService.currentRole("School Coordinator") ||
                userStorageService.currentRole("Fresh Man Coordinator") ||
                userStorageService.currentRole("Registrar") ||
                userStorageService.currentRole("Instructor") ||
                userStorageService.currentRole("Acadmic President")) && (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Paper className="paper" elevation={8}>
                      <Cards
                        amount={datanoofcurriculum || 0}
                        info="Curriculum"
                        desc="No of Curriculum "
                        infolink="List of in University"
                        path="/userComponent/viewCurriculum"
                        icon={<BeenhereIcon />}
                      />
                    </Paper>
                  </Grid>
                )}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={4}>
              {(userStorageService.currentRole("Acadmic President") ||
                userStorageService.currentRole("Super Admin") ||
                userStorageService.currentRole("Registrar Head")) && (
                  <Grid item xs={6} className="chartholder">
                    <Paper elevation={8}>
                      <Card>
                        <Typographyh6 data={"Student Per Attending year"} />
                        <Divider />
                        <PieChart width={400} height={400}>
                          <Pie
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            data={datastudentperattendingYear}
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
                )}

              {(userStorageService.currentRole("Registrar Head") ||
                userStorageService.currentRole("Super Admin") ||
                userStorageService.currentRole("Acadmic President")) && (
                  <Grid item xs={6} className="chartholder">
                    <Paper elevation={8}>
                      <Card>
                        <Typographyh6
                          data={"Number of Cafe and Non Cafe Student"}
                        />
                        <Divider />
                        <PieChart width={400} height={400}>
                          <Pie
                            activeIndex={activeIndex1}
                            activeShape={renderActiveShape}
                            data={dataCafeNonCafe}
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
                )}

              {userStorageService.currentRole("Instructor") && (
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
              )}
              {(userStorageService.currentRole("Registrar Head") ||
                userStorageService.currentRole("Super Admin") ||
                userStorageService.currentRole("Acadmic President")) && (
                  <Grid item xs={6} className="chartholder">
                    <Paper elevation={8}>
                      <Card
                        title={<Typographyh6 data="Top Ten Students" />}
                        style={{
                          width: "700",
                          height: "400",
                        }}
                      >
                        {dataTopStudent.length != 0 && (
                          <List
                            style={{ maxHeight: 400, overflow: "auto" }}
                            itemLayout="horizontal"
                            dataSource={dataTopStudent}
                            renderItem={(item: any) => (
                              <List.Item>
                                <List.Item.Meta
                                  avatar={
                                    <>
                                      {item.image.filePath != undefined && (
                                        <Avatar
                                          src={
                                            appUrl +
                                            `DashBoards/download-file?filePath=${item.image.filePath}`
                                          }
                                        />
                                      )}
                                      {item.image.filePath == undefined && (
                                        <Avatar />
                                      )}
                                    </>
                                  }
                                  title={item.name}
                                  description={
                                    <Grid container spacing={0}>
                                      <Grid item xs={12}>
                                        <p>Program: {item.program}</p>
                                        <p> Stream: {item.stream}</p>
                                        <p> CGPA: {item.cgpa}</p>
                                      </Grid>
                                    </Grid>
                                  }
                                />
                              </List.Item>
                            )}
                          />
                        )}
                        {dataTopStudent.length == 0 && (
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
                                  No Department
                                </h6>
                              </Grid>
                            </Grid>
                          </div>
                        )}
                      </Card>
                    </Paper>
                  </Grid>
                )}

              {(userStorageService.currentRole("Registrar") ||
                userStorageService.currentRole("Department Head") ||
                userStorageService.currentRole("Institute Head") ||
                userStorageService.currentRole("School Head") ||
                userStorageService.currentRole("Department Coordinator") ||
                userStorageService.currentRole("Collage Coordinator") ||
                userStorageService.currentRole("Institute Coordinator") ||
                userStorageService.currentRole("School Coordinator") ||
                userStorageService.currentRole("Fresh Man Coordinator") ||
                userStorageService.currentRole("Instructor") ||
                userStorageService.currentRole("Collage Head")) && (
                  <Grid item xs={6} className="chartholder">
                    {datastudentperTotalprogram != undefined && (
                      <Paper elevation={8}>
                        <Card>
                          <Typographyh6 data="Department Student Per Total No of Student in Your Department" />
                          <Divider />
                          <PieChart width={400} height={400}>
                            <Pie
                              activeIndex={activeIndex1}
                              activeShape={renderActiveShapStudent}
                              data={datastudentperTotalprogram}
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
                    )}
                  </Grid>
                )}

              {(userStorageService.currentRole("Department Head") ||
                userStorageService.currentRole("Institute Head") ||
                userStorageService.currentRole("School Head") ||
                userStorageService.currentRole("Department Coordinator") ||
                userStorageService.currentRole("Collage Coordinator") ||
                userStorageService.currentRole("Institute Coordinator") ||
                userStorageService.currentRole("School Coordinator") ||
                userStorageService.currentRole("Fresh Man Coordinator") ||
                userStorageService.currentRole("Collage Head") ||
                userStorageService.currentRole("Registrar")) && (
                  <Grid item xs={6} className="chartholder">
                    <Paper elevation={8}>
                      <Card
                        title={
                          <Typographyh6 data="Number of Instructor in Each Department" />
                        }
                      >
                        {datanoofInstructorInDepartment.length != 0 && (
                          <BarChart
                            width={700}
                            height={370}
                            data={datanoofInstructorInDepartment}
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
                        {datanoofInstructorInDepartment.length == 0 && (
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
                                  No Department
                                </h6>
                              </Grid>
                            </Grid>
                          </div>
                        )}
                      </Card>
                    </Paper>
                  </Grid>
                )}
              {(userStorageService.currentRole("Department Head") ||
                userStorageService.currentRole("Institute Head") ||
                userStorageService.currentRole("School Head") ||
                userStorageService.currentRole("Department Coordinator") ||
                userStorageService.currentRole("Collage Coordinator") ||
                userStorageService.currentRole("Institute Coordinator") ||
                userStorageService.currentRole("School Coordinator") ||
                userStorageService.currentRole("Collage Head") ||
                userStorageService.currentRole("Fresh Man Coordinator") ||
                userStorageService.currentRole("Instructor") ||
                userStorageService.currentRole("Registrar")) && (
                  <Grid item xs={6} className="chartholder">
                    <Paper elevation={8}>
                      <Card
                        title={
                          <Typographyh6 data="Top Ten Students in your Department" />
                        }
                        style={{
                          width: "800",
                          height: "400",
                        }}
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
                                    <>
                                      {item.image.filePath != undefined && (
                                        <Avatar
                                          src={
                                            appUrl +
                                            `DashBoards/download-file?filePath=${item.image.filePath}`
                                          }
                                        />
                                      )}
                                      {item.image.filePath == undefined && (
                                        <Avatar />
                                      )}
                                    </>
                                  }
                                  title={item.name}
                                  description={
                                    <Grid container spacing={0}>
                                      <Grid item xs={12}>
                                        <p>Program: {item.program}</p>
                                        <p> Stream: {item.stream}</p>
                                        <p> CGPA: {item.cgpa}</p>
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
                )}

              {(userStorageService.currentRole("Registrar") ||
                userStorageService.currentRole("Collage Head") ||
                userStorageService.currentRole("Department Head") ||
                userStorageService.currentRole("Institute Head") ||
                userStorageService.currentRole("School Head") ||
                userStorageService.currentRole("Department Coordinator") ||
                userStorageService.currentRole("Collage Coordinator") ||
                userStorageService.currentRole("Institute Coordinator") ||
                userStorageService.currentRole("School Coordinator") ||
                userStorageService.currentRole("Instructor") ||
                userStorageService.currentRole("Fresh Man Coordinator")) && (
                  <Grid item xs={6} className="chartholder">
                    <Paper elevation={8}>
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
                                  No Department
                                </h6>
                              </Grid>
                            </Grid>
                          </div>
                        )}
                      </Card>
                    </Paper>
                  </Grid>
                )}

              {(userStorageService.currentRole("Registrar Head") ||
                userStorageService.currentRole("Super Admin") ||
                userStorageService.currentRole("Acadmic President")) && (
                  <Grid item xs={6} className="chartholder">
                    <Paper elevation={8}>
                      <Card
                        title={
                          <Typographyh6 data="Top Ten Students In Each Department" />
                        }
                        style={{
                          width: "700",
                          height: "400",
                        }}
                      >
                        {dataTopStudentInEach.length != 0 && (
                          <List
                            style={{ maxHeight: 400, overflow: "auto" }}
                            itemLayout="horizontal"
                            dataSource={dataTopStudentInEach}
                            renderItem={(item: any) => (
                              <List.Item>
                                <List.Item.Meta
                                  avatar={
                                    <>
                                      {item.image.filePath == undefined && (
                                        <Avatar />
                                      )}
                                      {item.image.filePath != undefined && (
                                        <Avatar
                                          src={
                                            appUrl +
                                            `DashBoards/download-file?filePath=${item.image.filePath}`
                                          }
                                        />
                                      )}
                                    </>
                                  }
                                  title={item.name}
                                  description={
                                    <Grid container spacing={0}>
                                      <Grid item xs={12}>
                                        <p> Program: {item.program}</p>
                                        <p> Stream: {item.stream}</p>
                                        <p> CGPA: {item.cgpa}</p>
                                      </Grid>
                                    </Grid>
                                  }
                                />
                              </List.Item>
                            )}
                          />
                        )}
                        {dataTopStudentInEach.length == 0 && (
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
                                  No Department
                                </h6>
                              </Grid>
                            </Grid>
                          </div>
                        )}
                      </Card>
                    </Paper>
                  </Grid>
                )}

              {(userStorageService.currentRole("Registrar Head") ||
                userStorageService.currentRole("Super Admin") ||
                userStorageService.currentRole("Acadmic President")) && (
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
                              background={{ fill: "#1111" }}
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
                )}

              {(userStorageService.currentRole("Registrar") ||
                userStorageService.currentRole("Collage Head") ||
                userStorageService.currentRole("Department Head") ||
                userStorageService.currentRole("Institute Head") ||
                userStorageService.currentRole("School Head") ||
                userStorageService.currentRole("Department Coordinator") ||
                userStorageService.currentRole("Collage Coordinator") ||
                userStorageService.currentRole("Institute Coordinator") ||
                userStorageService.currentRole("School Coordinator") ||
                userStorageService.currentRole("Instructor") ||
                userStorageService.currentRole("Fresh Man Coordinator")) && (
                  <Grid item xs={6} className="chartholder">
                    <Paper elevation={8}>
                      <Card
                        title={
                          <Typographyh6 data="Number of Graduate Student Per In Enrollement Type" />
                        }
                      >
                        {datanoofgraduatestudentPerEnrollementType.length !=
                          0 && (
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
                        {datanoofgraduatestudentPerEnrollementType.length ==
                          0 && (
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
                )}

              {(userStorageService.currentRole("Registrar") ||
                userStorageService.currentRole("Collage Head") ||
                userStorageService.currentRole("Department Head") ||
                userStorageService.currentRole("Institute Head") ||
                userStorageService.currentRole("School Head") ||
                userStorageService.currentRole("Department Coordinator") ||
                userStorageService.currentRole("Collage Coordinator") ||
                userStorageService.currentRole("Institute Coordinator") ||
                userStorageService.currentRole("School Coordinator") ||
                userStorageService.currentRole("Instructor") ||
                userStorageService.currentRole("Fresh Man Coordinator")) && (
                  <Grid item xs={6} className="chartholder">
                    <Paper elevation={8}>
                      <Card
                        title={
                          <Typographyh6 data="Number of Graduate Student Per In Program Type" />
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
                )}

              {(userStorageService.currentRole("Registrar") ||
                userStorageService.currentRole("Collage Head") ||
                userStorageService.currentRole("Department Head") ||
                userStorageService.currentRole("Institute Head") ||
                userStorageService.currentRole("School Head") ||
                userStorageService.currentRole("Department Coordinator") ||
                userStorageService.currentRole("Collage Coordinator") ||
                userStorageService.currentRole("Institute Coordinator") ||
                userStorageService.currentRole("School Coordinator") ||
                userStorageService.currentRole("Instructor") ||
                userStorageService.currentRole("Fresh Man Coordinator")) && (
                  <Grid item xs={6} className="chartholder">
                    <Paper elevation={8}>
                      <Card
                        title={
                          <Typographyh6 data="Number of Student Per Attending Year" />
                        }
                      >
                        <PieChart width={400} height={400}>
                          <Pie
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
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
                )}

              {(userStorageService.currentRole("Registrar") ||
                userStorageService.currentRole("Collage Head") ||
                userStorageService.currentRole("Department Head") ||
                userStorageService.currentRole("Institute Head") ||
                userStorageService.currentRole("School Head") ||
                userStorageService.currentRole("Department Coordinator") ||
                userStorageService.currentRole("Collage Coordinator") ||
                userStorageService.currentRole("Institute Coordinator") ||
                userStorageService.currentRole("School Coordinator") ||
                userStorageService.currentRole("Registrar Head") ||
                userStorageService.currentRole("Super Admin") ||
                userStorageService.currentRole("Fresh Man Coordinator") ||
                userStorageService.currentRole("Instructor") ||
                userStorageService.currentRole("Acadmic President")) && (
                  <Grid item xs={6} className="chartholder">
                    <Paper elevation={8}>
                      <Card
                        title={
                          <Typographyh6 data="Number of Graduate Student Per Academic Year" />
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
                                  No Department
                                </h6>
                              </Grid>
                            </Grid>
                          </div>
                        )}
                      </Card>
                    </Paper>
                  </Grid>
                )}

              {(userStorageService.currentRole("Registrar Head") ||
                userStorageService.currentRole("Super Admin") ||
                userStorageService.currentRole("Acadmic President")) && (
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
                                  <p>
                                    <Typography className="dashbaordlistfont">
                                      {item.program}
                                    </Typography>
                                  </p>
                                  <p>
                                    {" "}
                                    <Progress percent={item.numberOfStudnet} />
                                  </p>
                                </Grid>
                              </Grid>
                            </List.Item>
                          )}
                        />
                      </Card>
                    </Paper>
                  </Grid>
                )}

              {userStorageService.currentRole("Instructor") && (
                <Grid item xs={6} className="listitem">
                  <Paper elevation={8}>
                    <Card
                      title={
                        <Typographyh6 data="Top Ten Students In One Course" />
                      }
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
                                  <Grid container spacing={0}>
                                    <Grid item xs={12}>
                                      <p>Program: {item.program}</p>
                                      <p> Stream: {item.stream}</p>
                                      <p> CGPA: {item.cgpa}</p>
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
              )}

              {(userStorageService.currentRole("Department Head") ||
                userStorageService.currentRole("Institute Head") ||
                userStorageService.currentRole("School Head") ||
                userStorageService.currentRole("Department Coordinator") ||
                userStorageService.currentRole("Collage Coordinator") ||
                userStorageService.currentRole("Institute Coordinator") ||
                userStorageService.currentRole("School Coordinator") ||
                userStorageService.currentRole("Fresh Man Coordinator") ||
                userStorageService.currentRole("Collage Head") ||
                userStorageService.currentRole("Registrar Head") ||
                userStorageService.currentRole("Registrar") ||
                userStorageService.currentRole("Super Admin") ||
                userStorageService.currentRole("Instructor") ||
                userStorageService.currentRole("Acadmic President")) && (
                  <Grid item xs={6} className="chartholder">
                    <Paper elevation={8}>
                      <Card
                        title={
                          <Typographyh6 data="Number of Graduate Student in Per Programs" />
                        }
                      >
                        <List
                          style={{ maxHeight: 400, overflow: "auto" }}
                          dataSource={datagraduatestudentperprogram}
                          renderItem={(item: any) => (
                            <List.Item>
                              <Grid container spacing={1}>
                                <Grid item xs={12}>
                                  <p>
                                    {" "}
                                    <Typography className="dashbaordlistfont">
                                      {item.programName}
                                    </Typography>
                                  </p>
                                  <p>
                                    <Progress
                                      percent={item.numberOfGraduateStudnets}
                                    />
                                  </p>
                                </Grid>
                              </Grid>
                            </List.Item>
                          )}
                        />
                      </Card>
                    </Paper>
                  </Grid>
                )}

              {(userStorageService.currentRole("Department Head") ||
                userStorageService.currentRole("Institute Head") ||
                userStorageService.currentRole("School Head") ||
                userStorageService.currentRole("Department Coordinator") ||
                userStorageService.currentRole("Collage Coordinator") ||
                userStorageService.currentRole("Institute Coordinator") ||
                userStorageService.currentRole("School Coordinator") ||
                userStorageService.currentRole("Fresh Man Coordinator") ||
                userStorageService.currentRole("Instructor") ||
                userStorageService.currentRole("Collage Head")) && (
                  <Grid item xs={6} className="chartholder">
                    <Paper elevation={8}>
                      {dataStudentAnnouncement.length == 0 && (
                        <Card title={<Typographyh6 data="Announcement" />}>
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
                                          <InfoIcon
                                            color="info"
                                            fontSize="large"
                                          />{" "}
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
                )}

              {userStorageService.currentRole("Instructor") && dataClassSchedule.length != 0 && (
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

              {userStorageService.currentRole("Instructor") && dataExamSchedule.length != 0 && (
                <Grid item xs={12}>
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
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default AllDashboard as any;
