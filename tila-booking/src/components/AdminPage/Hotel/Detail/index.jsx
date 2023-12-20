import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Form } from "../../../uicontrols/commonFormControls/Form";
import { connect } from "react-redux";
import Controls from "../../../uicontrols/commonFormControls/Controls";
import { Card } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

const DetailHotel = ({ ...props }) => {
  const [selectedHotel, setselectedHotel] =
    useState<any>(props.selectedHotel);

  return (
    <div className="insidefrontcontainer">
      <Card
        title="Detail for Hotel"
        extra={
          <a onClick={props.closeedit}>
            <CloseCircleOutlined translate={undefined} />
          </a>
        }
      >
        <Grid alignItems="left">
          <Form autoComplete="off" noValidate>
            <Grid container>
              <Grid item xs={12}>
                <Controls.Input
                  disabled
                  variant="outlined"
                  label="Hotel"
                  value={selectedHotel.hotelName}
                ></Controls.Input>
            
                <Controls.Input
                  disabled
                  variant="outlined"
                  label="Description"
                  multiline
                  value={selectedHotel.hotelDescription}
                ></Controls.Input>
                
              </Grid>
            </Grid>
          </Form>
        </Grid>
      </Card>
    </div>
  );
};

export default connect()(DetailHotel);
