import React, { useState, useEffect } from "react";
import { Grid, Button } from "@mui/material";
import { Form } from "../../../uicontrols/commonFormControls/Form";
import { makeStyles } from "tss-react/mui";
import { connect } from "react-redux";
import Controls from "../../../uicontrols/commonFormControls/Controls";
import { Card } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import Notification from "../../../uicontrols/Notification";
import * as actionCreators from "../../../state/actionCreators/roomActions";


const initialFieldValues = {
  courseTypeName: "",
  courseTypeDescription: "",
};

// *********** Code For:- The CSS code using useStyle***********
const useStyles = makeStyles<any>((theme) => ({
  root: {
    "& .MuiTextField-root ": {
      margin: theme.spacing(1),
      Width: "40%",
    },
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  divcontiner: {},
}));

const CreateCourseType = ({ ...props }) => {
  const [viewMode, setViewMode] = useState("new");
  const [selectedCourseType, setselectedCourseType] = useState<any>(
    props.selectedCourseType
  );
  const { classes, cx } = useStyles({});
  const { className } = props;

  useEffect(() => {
    setViewMode(props.viewMode);
    setselectedCourseType(props.selectedCourseType);
    if (props.viewMode === "new") {
      formik.resetForm({
        values: initialFieldValues,
      });
    }
  }, [props.viewMode, props.selectedCourseType]);

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const onCreateSuccess = () => {
    setNotify({
      isOpen: true,
      message: "Success Alert:- Course Type  is Created Successfully !",
      type: "success",
    });
    setTimeout(() => {
      props.closeedit();
    }, 2000);
  };
  const onCreateError = () => {
    setNotify({
      isOpen: true,
      message: action,
      type: "error",
    });
  };
  const onUpdateSuccess = () => {
    setNotify({
      isOpen: true,
      message: "Success Alert:- Course Type is Updated Successfully !",
      type: "success",
    });
    setTimeout(() => {
      props.closeedit();
    }, 2000);
  };
  const onUpdateError = () => {
    setNotify({
      isOpen: true,
      message: action,
      type: "error",
    });
  };

  const stringRegExp = /^[a-zA-Z_-_, ]*$/;
  const validationSchema = Yup.object().shape({
    courseTypeName: Yup.string()
      .required("Course Type is required")
      .matches(stringRegExp, "Please use alphabets only !"),
  });

  const formik = useFormik({
    initialValues: selectedCourseType,
    onSubmit: (values) => {
      if (props.viewMode === "new") {
        props.createCourseType(values, onCreateSuccess, onCreateError);
      } else {
        props.updateCourseType(
          selectedCourseType.id,
          values,
          onUpdateSuccess,
          onUpdateError
        );
      }
    },
    validationSchema: validationSchema,
  });

  return (
    <div className="insidefrontcontainer">
      <Card
        title={viewMode === "new" ? "Create Course Type" : "Update Course Type"}
        extra={
          <a onClick={props.closeedit}>
            <CloseCircleOutlined translate={undefined} />
          </a>
        }
      >
        <Grid alignItems="left">
          <Form
            autoComplete="off"
            noValidate
            className={cx(classes.root, className)}
            onSubmit={formik.handleSubmit}
          >
            <Grid container>
              <Grid item xs={12}>
                <Controls.Input
                  variant="outlined"
                  label="Course Type"
                  required
                  {...formik.getFieldProps("courseTypeName")}
                  error={
                    formik.touched.courseTypeName &&
                    formik.errors.courseTypeName
                      ? formik.errors.courseTypeName
                      : ""
                  }
                ></Controls.Input>

                <Controls.Input
                  variant="outlined"
                  label="Description"
                  multiline
                  {...formik.getFieldProps("courseTypeDescription")}
                  error={
                    formik.touched.courseTypeDescription &&
                    formik.errors.courseTypeDescription
                      ? formik.errors.courseTypeDescription
                      : ""
                  }
                ></Controls.Input>
              </Grid>
            </Grid>

            <Grid item xs={6} className="buttonholderform">
              {viewMode === "new" && (
                <>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={classes.smMargin}
                  >
                    Submit
                  </Button>

                  <Button
                    variant="contained"
                    color="error"
                    className={classes.smMargin}
                    onClick={() => {
                      formik.resetForm({
                        values: initialFieldValues,
                      });
                    }}
                  >
                    Reset
                  </Button>
                </>
              )}

              {viewMode === "edit" && (
                <>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={classes.smMargin}
                  >
                    Update
                  </Button>

                  <Button
                    variant="contained"
                    color="error"
                    className={classes.smMargin}
                    onClick={() => {
                      formik.resetForm({
                        values: initialFieldValues,
                      });
                    }}
                  >
                    Reset
                  </Button>
                </>
              )}
            </Grid>
          </Form>
        </Grid>
      </Card>
      <Notification notify={notify} setNotify={setNotify} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  coursetypestate: state.COURSETYPE_REDUCER.coursetypestate,
});

const mapActionsToProps = {
  createCourseType: actionCreators.create,
  updateCourseType: actionCreators.update,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CreateCourseType);
