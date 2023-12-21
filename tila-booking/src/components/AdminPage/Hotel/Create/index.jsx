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
  hotelName: "",
  hotelDescription: "",
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

const CreateHotel = ({ ...props }) => {
  const [viewMode, setViewMode] = useState("new");
  const [selectedHotel, setselectedHotel] = useState<any>(
    props.selectedHotel
  );
  const { classes, cx } = useStyles({});
  const { className } = props;

  useEffect(() => {
    setViewMode(props.viewMode);
    setselectedHotel(props.selectedHotel);
    if (props.viewMode === "new") {
      formik.resetForm({
        values: initialFieldValues,
      });
    }
  }, [props.viewMode, props.selectedHotel]);

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const onCreateSuccess = () => {
    setNotify({
      isOpen: true,
      message: "Success Alert:- Hotel  is Created Successfully !",
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
      message: "Success Alert:- Hotel is Updated Successfully !",
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
    hotelName: Yup.string()
      .required("Hotel is required")
      .matches(stringRegExp, "Please use alphabets only !"),
  });

  const formik = useFormik({
    initialValues: selectedHotel,
    onSubmit: (values) => {
      if (props.viewMode === "new") {
        props.createHotel(values, onCreateSuccess, onCreateError);
      } else {
        props.updateHotel(
          selectedHotel.id,
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
        title={viewMode === "new" ? "Create Hotel" : "Update Hotel"}
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
                  label="Hotel"
                  required
                  {...formik.getFieldProps("hotelName")}
                  error={
                    formik.touched.hotelName &&
                    formik.errors.hotelName
                      ? formik.errors.hotelName
                      : ""
                  }
                ></Controls.Input>

                <Controls.Input
                  variant="outlined"
                  label="Description"
                  multiline
                  {...formik.getFieldProps("hotelDescription")}
                  error={
                    formik.touched.hotelDescription &&
                    formik.errors.hotelDescription
                      ? formik.errors.hotelDescription
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
  hotelstate: state.HOTEL_REDUCER.hotelstate,
});

const mapActionsToProps = {
  createHotel: actionCreators.create,
  updateHotel: actionCreators.update,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CreateHotel);
