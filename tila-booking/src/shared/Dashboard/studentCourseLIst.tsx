import React, { useEffect, useState } from "react";
import { Grid, InputLabel, Paper } from "@mui/material";
import { Card, Checkbox, Dropdown, Menu, Table } from "antd";
import { CollectionQuery } from "../../shared/collection-query/collection.model";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { appUrl } from "../../AppURI";
import { userService } from "../auth/user-services";
import MenuIcon from "@mui/icons-material/Menu";

const NoOfCourseList = ({ ...props }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [dataCourseListOfF, setCourseListOfF] = useState<any>();
  const [sectionState, setSectionState] = useState(true);
  const [creditHourState, setCreditHourState] = useState(true);
  const [ectsState, setECTSState] = useState(true);
  const [yearClassificationState, setYearClassificate] = useState(true);
  const [attendingYearState, setAttendingYear] = useState(true);
  const [acadamicYearState, setAcadamicYearState] = useState(true);
  const [totalResultState, setTotalResultState] = useState(true);
  const [gradeState, setGradeState] = useState(true);

  // *********** Code Started For:- useEffect Function to fetch no of Programs     row data using direct api.***********
  useEffect(() => {
    //  handleControlChange
    const getCourseList = (url: string = appUrl + "DashBoards") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/get-grade-f-courses")
        .then((rowdata: any) => setCourseListOfF(rowdata.data))
        .catch((err) => console.log(err));
      return;
    };
    getCourseList();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch  no of Programs  row data using direct api.***********

  const columnsList: any = [
    {
      title: "Course",
      key: "courseName",
      dataIndex: "courseName",
      sortDirections: ["descend", "ascend"],
      sorter: (a: any, b: any) => a.courseName.localeCompare(b.courseName),
    },
    {
      title: "Course Number",
      dataIndex: "courseNumber",
      key: "courseNumber",
      sortDirections: ["descend", "ascend"],
      sorter: (a: any, b: any) => a.courseNumber.localeCompare(b.courseNumber),
    },
    {
      title: "Program",
      key: "programName",
      dataIndex: "programName",
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
      dataIndex: "section",
      key: "section",
      hidden: sectionState,
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
      title: "Semester/Term...",
      dataIndex: "yearClassfication",
      key: "yearClassfication",
      hidden: yearClassificationState,
    },
    {
      title: "Attending Year",
      dataIndex: "attendingYear",
      key: "attendingYear",
      hidden: attendingYearState,
    },
    {
      title: "Academic Year",
      dataIndex: "acadamicYear",
      key: "acadamicYear",
      hidden: acadamicYearState,
    },
    {
      title: "Total Result",
      dataIndex: "totalResult",
      key: "totalResult",
      hidden: totalResultState,
    },
    {
      title: "Grade",
      dataIndex: "grade",
      key: "grade",
      hidden: gradeState,
    },
  ].filter((item) => !item.hidden);

  const addColums = (
    <Menu
      style={{
        height: "200px",
        overflow: "auto",
      }}
    >
      <Menu.ItemGroup title="Columns of No of Course F">
        <Menu.Item key="1">
          <Checkbox
            id="courseCode"
            onChange={() =>
              sectionState == true
                ? setSectionState(false)
                : setSectionState(true)
            }
          >
            Section
          </Checkbox>
        </Menu.Item>
        <Menu.Item key="2">
          <Checkbox
            id="creditHour"
            onChange={() =>
              creditHourState == true
                ? setCreditHourState(false)
                : setCreditHourState(true)
            }
          >
            Credit Hour
          </Checkbox>
        </Menu.Item>

        <Menu.Item key="2">
          <Checkbox
            id="ects"
            onChange={() =>
              ectsState == true ? setECTSState(false) : setECTSState(true)
            }
          >
            ECTS
          </Checkbox>
        </Menu.Item>

        <Menu.Item key="3">
          <Checkbox
            id="yearClassfication"
            onChange={() =>
              yearClassificationState == true
                ? setYearClassificate(false)
                : setYearClassificate(true)
            }
          >
            Semester/Term...
          </Checkbox>
        </Menu.Item>

        <Menu.Item key="4">
          <Checkbox
            id="attendingYear"
            onChange={() =>
              attendingYearState == true
                ? setAttendingYear(false)
                : setAttendingYear(true)
            }
          >
            Attending Year
          </Checkbox>
        </Menu.Item>

        <Menu.Item key="5">
          <Checkbox
            id="acadamicYear"
            onChange={() =>
              acadamicYearState == true
                ? setAcadamicYearState(false)
                : setAcadamicYearState(true)
            }
          >
            Academic Year
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
            Total Result
          </Checkbox>
        </Menu.Item>

        <Menu.Item key="5">
          <Checkbox
            id="grade"
            onChange={() =>
              gradeState == true ? setGradeState(false) : setGradeState(true)
            }
          >
            Grade
          </Checkbox>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <div>
      <Paper elevation={8}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12}>
            <Card
              title="Number of F Course List"
              extra={
                <Dropdown overlay={addColums}>
                  <MenuIcon fontSize="large" color="primary" />
                </Dropdown>
              }
              className="viewholder"
            >
              <Grid item xs={12}>
                <InputLabel>
                  All the Course you have get F Grade Mark
                </InputLabel>
              </Grid>
              <Grid item xs={12}>
                <Table
                  rowKey={(obj) => obj.id}
                  size="small"
                  dataSource={dataCourseListOfF}
                  columns={columnsList}
                  pagination={false}
                />
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default NoOfCourseList as any;
