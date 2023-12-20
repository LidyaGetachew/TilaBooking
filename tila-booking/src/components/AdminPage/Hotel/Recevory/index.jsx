import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../state/actionCreators/HotelActions";
import { Grid } from "@mui/material";
import { CloseCircleOutlined } from "@ant-design/icons";
import Button from "@mui/material/Button";
import Notification from "../../../uicontrols/Notification";
import Controls from "../../../uicontrols/commonFormControls/Controls";
import { Card, Input, Space, Table } from "antd";

const Recevory = ({ ...props }) => {
  const [pageSize, setPageSize] = useState(5); // UseState React Hook PageSize for Data Grid or table to control pages by given intial value 5.
  const [pageNumber, setPageNumber] = useState(5); // UseState React Hook PageSize for Data Grid or table to control pages by given intial value 5.
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState("recover");

  const [request, setRequest] = useState<CollectionQuery>({
    pageNumber: 1,
    pageSize: 5,
    filters: [],
  });

  const onSearch = (query) => {
    setRequest((prev) => {
      return { ...prev, search: query };
    });
  };

  // *********** Code Started For:- Notification and Confirmation Dialog UseState is define here.***********
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

  const onRecoveryDeleteSuccess = () => {
    setSelectedRowKeys([]);
    setIsLoading(false);
    setNotify({
      isOpen: true,
      message: "Success Alert:- Hotel is Restored Successfully !",
      type: "success",
    });
  };
  const onRecoveryDeleteError = () => {
    setIsLoading(false);
    setNotify({
      isOpen: true,
      message:
        " Failure Alert:- Hotel not Restored Successfully ! ",
      type: "error",
    });
  };

  const DeleteSuccess = () => {
    setSelectedRowKeys([]);
    setIsLoading(false);
    setNotify({
      isOpen: true,
      message: "Success Alert:- Hotel is Deleted Successfully ! ",
      type: "success",
    });
  };
  const DeleteError = (action) => {
    setIsLoading(false);
    setNotify({
      isOpen: true,
      message:action,
      type: "error",
    });
  };
  const onFetchAllSuccess = () => {
    setIsLoading(false);
  };

  const onFetchAllError = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    props.fetchTrashHotels(onFetchAllSuccess, onFetchAllError, request);
  }, [request]);

  const dataSource= props.Hoteltrashstate;
  const columnsList = [
    {
      title: "Hotel",
      key: "hotelName",
      dataIndex: "hotelName",
      sortDirections: ["descend", "ascend"],
      sorter: (a, b) =>
        a.hotelName.localeCompare(b.hotelName),
    },

    {
      title: "Action",
      key: "action",
      render: (record) => {
        return (
          <Space size="large">
            <Button
              onClick={() => {
                onSingleRecoveryHotel(record.id);
              }}
              variant="outlined"
              color="error"
            >
              Recover
            </Button>
          </Space>
        );
      },
    },
  ];

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys, selectedRows) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const onBulkDelete = () => {
    setIsLoading(true);
    props.MultiHardDeleteHotel(
      selectedRowKeys,
      DeleteSuccess,
      DeleteError
    );
  };

  const onMultiRecoveryHotel = () => {
    setIsLoading(true);
    props.multiRecovoryHotel(
      selectedRowKeys,
      onRecoveryDeleteSuccess,
      onRecoveryDeleteError
    );
  };

  const onSingleRecoveryHotel = (Hotelid) => {
    setIsLoading(true);
    props.singleRecovoryHotel(
      Hotelid,
      onRecoveryDeleteSuccess,
      onRecoveryDeleteError
    );
  };

  const onClose = () => {
    props.fetchAllHotel(onFetchAllSuccess, onFetchAllError, request);
    props.closeedit();
  };

  return (
    <div className="appcontainer">
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12}>
          <Card
            title="Hotel Trash"
            className="w-full"
            extra={
              <a onClick={onClose}>
                <CloseCircleOutlined translate={undefined} />
              </a>
            }
          >
            {viewMode === "recover" && selectedRowKeys.length > 0 && (
              <div className="delete-container">
                <div>
                  <Button
                    onClick={onBulkDelete}
                    variant="contained"
                    color="error"
                  >
                    Hard Delete
                  </Button>
                </div>

                <div>
                  <Button
                    onClick={onMultiRecoveryHotel}
                    variant="contained"
                    color="error"
                  >
                    Multi-Recover
                  </Button>
                </div>
              </div>
            )}

            <div className="ag-theme-alpine flex">
              <div>
                <div className="flex">
                  <div className="pull-left actionbut"></div>
                  {/* search and filter  */}
                  <div className="pull-right search">
                    <div className="search-container">
                      <div className="search">
                        <Input
                          placeholder="input search text"
                          addonAfter="search"
                          onKeyUp={(event) => onSearch(event.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Table
                  rowKey={(obj) => obj.id}
                  size="small"
                  dataSource={dataSource}
                  columns={columnsList}
                  pagination={{
                    pageSize: pageSize,
                    total: props.total,
                    onChange: (pageNumber, pageSize) => {
                      setPageNumber(pageNumber);
                      setPageSize(pageSize);
                    },
                    defaultPageSize: 5,
                  }}
                  rowSelection={rowSelection}
                />
              </div>
            </div>
          </Card>
          <Notification notify={notify} setNotify={setNotify} />

          <Controls.ConfirmationDialog
            confirmDialog={confirmDialog}
            setConfirmDialog={setConfirmDialog}
          />
        </Grid>
        {/*********** Code Ended For:- View Permission Category component ***********/}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  Hoteltrashstate: state._REDUCER.Hoteltrashstate,
});

const mapActionsToProps = {
  fetchAllHotel: actionCreators.fetchAll,
  fetchTrashHotels: actionCreators.fetchTrashHotels,
  MultiHardDeleteHotel: actionCreators.multiHardDelete,
  multiRecovoryHotel: actionCreators.multiRecovory,
  singleRecovoryHotel: actionCreators.singleRecovory,
};
export default connect(mapStateToProps, mapActionsToProps)(Recevory);
