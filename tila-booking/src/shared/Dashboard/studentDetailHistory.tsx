import React, { useEffect, useRef, useState } from "react";
import { Grid, Button, InputLabel, Paper } from "@mui/material";
import Notification from "../../uicontrols/Notification";
import Controls from "../../uicontrols/commonFormControls/Controls";
import { Card } from "antd";
import { CollectionQuery } from "../../shared/collection-query/collection.model";
import { useNavigate } from "react-router-dom";
import FolderOffIcon from "@mui/icons-material/FolderOff";
import axios from "axios";
import { appUrl } from "../../AppURI";
import { userService } from "../auth/user-services";

const StudentDetailHistory = ({ ...props }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedStudent, setselectedStudent] = useState(props.selectedStudent);
  const [studentDetail, setStudentDetail] = useState<any>([]);
  const navigate = useNavigate();
  const [request, setRequest] = useState<CollectionQuery>({
    pageNumber: 1,
    pageSize: 10,
    filters: [],
  });

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const onFetchAllSuccess = () => {
    setIsLoading(false);
  };

  const onFetchAllError = () => {
    setIsLoading(false);
  };

  const onClose = () => {
    navigate("/userComponent/home");
  };

  useEffect(() => {
    const getnoofstudentwithdecp = (url: string = appUrl + "DashBoards") => {
      axios
        .create({
          headers: {
            Authorization: `Bearer ${userService.token}`,
          },
        })
        .get(url + "/get-student-course-history")
        .then((rowdata: any) => setStudentDetail(rowdata.data));
      return;
    };
    getnoofstudentwithdecp();
  }, []);
  // *********** Code Ended For:- useEffect Function to fetch  no of  Student with Detail Measure data using direct api.***********

  return (
    <div className="appcontainer">
      <Paper elevation={8}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12}>
            <Card
              extra={
                <>
                  <Button
                    size="small"
                    variant="contained"
                    color="error"
                    onClick={onClose}
                  >
                    Close
                  </Button>
                </>
              }
              className="viewholder"
            >
              <Card className="w-full">
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <div style={{ marginTop: "10px" }}>
                      <h1
                        style={{
                          textAlign: "center",
                          fontSize: "20px",
                          fontFamily: "Serif",
                        }}
                      >
                        {" "}
                        <b>ACADEMIC INFORMATION OF STUDENT</b>
                      </h1>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Card title="Current Student Status">
                      <Grid
                        container
                        spacing={{ xs: 12, md: 6 }}
                        columns={{ xs: 12, sm: 12, md: 12 }}
                      >
                        <Grid item xs={2} sm={4} md={4}>
                          <div>
                            <b>Id Number: </b>
                            {studentDetail.studentIdNumber}
                          </div>

                          <div>
                            <b>Student English Name: </b>{" "}
                            {studentDetail.studentEnglishName}
                          </div>

                          <div>
                            <b>Student Amharic Name: </b>{" "}
                            {studentDetail.studentAmharicName}
                          </div>

                          <div>
                            <b>Gender: </b> {studentDetail.gender}
                          </div>

                          <div>
                            {" "}
                            <b>Section: </b>
                            {studentDetail.section}
                          </div>
                        </Grid>

                        <Grid item xs={2} sm={4} md={4}>
                          <div>
                            <b>Program: </b>
                            {studentDetail.programName}
                          </div>

                          <div>
                            <b>Stream: </b> {studentDetail.stream}
                          </div>

                          <div>
                            <b>Enrollment Type: </b>
                            {studentDetail.enrollmentType}
                          </div>

                          <div>
                            <b>Academic Year: </b>
                            {studentDetail.acadamicYear}
                          </div>
                        </Grid>

                        <Grid item xs={2} sm={4} md={4}>
                          <div>
                            {" "}
                            <b>Attending Year: </b>{" "}
                            {studentDetail.attendingYear}
                          </div>

                          <div>
                            <b>Semester/Term...: </b>{" "}
                            {studentDetail.yearClassfication}
                          </div>

                          <div>
                            {" "}
                            <b>Building: </b>
                            {studentDetail.buildingName}
                          </div>

                          <div>
                            <b>Dorm: </b> {studentDetail.roomName}
                          </div>
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                  <Grid item xs={12}>
                    <Card title="Student Course Status History">
                      {studentDetail.studentCourseList != undefined &&
                        studentDetail.studentCourseList.map(
                          (courseItem: any) => {
                            return (
                              <>
                                {courseItem.id != undefined && (
                                  <Card style={{ marginTop: "20px" }}>
                                    <Grid container spacing={3}>
                                      <Grid item xs={6}>
                                        <div>
                                          <b>Section: </b>
                                          {studentDetail.section}
                                        </div>

                                        <div>
                                          <b>Academic Year: </b>
                                          {courseItem.acadamicYear}
                                        </div>

                                        <div>
                                          <b>Attending Year: </b>
                                          {courseItem.attendingYear}
                                        </div>
                                      </Grid>

                                      <Grid item xs={6}>
                                        <div>
                                          <b>Semester/Term: </b>
                                          {courseItem.yearClassfication}
                                        </div>

                                        <div>
                                          <b>Building: </b>
                                          {courseItem.dormBuildingName}
                                        </div>

                                        <div>
                                          <b>Dorm: </b>
                                          {courseItem.dormNumber}
                                        </div>
                                      </Grid>
                                    </Grid>

                                    <Grid item xs={12}>
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
                                            }}
                                          >
                                            No
                                          </th>
                                          <th
                                            style={{
                                              border: "1px solid black",
                                            }}
                                          >
                                            Course
                                          </th>
                                          <th
                                            style={{
                                              border: "1px solid black",
                                            }}
                                          >
                                            Credit Hour
                                          </th>
                                          <th
                                            style={{
                                              border: "1px solid black",
                                            }}
                                          >
                                            ECTS
                                          </th>
                                          <th
                                            style={{
                                              border: "1px solid black",
                                            }}
                                          >
                                            Total Grade
                                          </th>
                                          <th
                                            style={{
                                              border: "1px solid black",
                                            }}
                                          >
                                            Grade
                                          </th>
                                          <th
                                            style={{
                                              border: "1px solid black",
                                            }}
                                          >
                                            Course Status
                                          </th>
                                        </tr>

                                        {courseItem.courseList.map(
                                          (itemList: any, index: 0) => {
                                            return (
                                              <tr>
                                                <th
                                                  style={{
                                                    border: "1px solid black",
                                                  }}
                                                >
                                                  {index + 1}
                                                </th>
                                                <td
                                                  style={{
                                                    border: "1px solid black",
                                                  }}
                                                >
                                                  {itemList.courseName}
                                                </td>
                                                <td
                                                  style={{
                                                    border: "1px solid black",
                                                  }}
                                                >
                                                  {itemList.creditHour}
                                                </td>
                                                <td
                                                  style={{
                                                    border: "1px solid black",
                                                  }}
                                                >
                                                  {itemList.ects}
                                                </td>
                                                <td
                                                  style={{
                                                    border: "1px solid black",
                                                  }}
                                                >
                                                  {itemList.totalGradeResult}
                                                </td>
                                                <td
                                                  style={{
                                                    border: "1px solid black",
                                                  }}
                                                >
                                                  {itemList.grade}
                                                </td>
                                                <td
                                                  style={{
                                                    border: "1px solid black",
                                                  }}
                                                >
                                                  {itemList.courseStatus}
                                                </td>
                                              </tr>
                                            );
                                          }
                                        )}
                                      </table>
                                    </Grid>

                                    <Grid
                                      item
                                      xs={6}
                                      className="buttonholderform"
                                    >
                                      <div>
                                        <b>SGPA:</b> {courseItem.sgpa}
                                      </div>
                                      <div>
                                        <b>CGPA:</b> {courseItem.cgpa}
                                      </div>
                                      <div>
                                        {" "}
                                        <b>Result: </b>
                                        {courseItem.result}
                                      </div>
                                    </Grid>
                                  </Card>
                                )}

                                {courseItem.id == undefined && (
                                  <Grid
                                    container
                                    justifyContent="center"
                                    spacing={3}
                                    style={{
                                      color: "#d2b48c",
                                      textAlign: "center",
                                    }}
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
                                        No Prepare Course Here.{" "}
                                      </h6>
                                    </Grid>
                                  </Grid>
                                )}
                              </>
                            );
                          }
                        )}
                      {studentDetail.studentCourseList == undefined && (
                        <div>
                          <Grid
                            container
                            justifyContent="center"
                            spacing={3}
                            style={{
                              color: "#d2b48c",
                              textAlign: "center",
                            }}
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
                                No Data.{" "}
                              </h6>
                            </Grid>
                          </Grid>
                        </div>
                      )}
                    </Card>
                  </Grid>
                </Grid>
              </Card>
            </Card>

            <Notification notify={notify} setNotify={setNotify} />

            <Controls.ConfirmationDialog
              confirmDialog={confirmDialog}
              setConfirmDialog={setConfirmDialog}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default StudentDetailHistory as any;
