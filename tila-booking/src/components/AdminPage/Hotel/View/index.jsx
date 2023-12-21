import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../state/actionCreators/hotelActions";
import Createhotel from "../Create";
import Recevory from "../Recevory";
import Detailhotel from "../Detail";
import { Grid, IconButton, Paper, Tooltip } from "@mui/material";
import IconDashboard from "@mui/icons-material/Dashboard";
import { BreadCrumb } from "../../../uicontrols/BreadCrumb";
import { Typographyh6 } from "../../../uicontrols/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/AddTask";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faArchive } from "@fortawesome/free-solid-svg-icons";
import Notification from "../../../uicontrols/Notification";
import Controls from "../../../uicontrols/commonFormControls/Controls";
import { Card, Dropdown, Input, Menu, Space, Table } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { CollectionQuery } from "../../../shared/collection-query/collection.model";
import { userStorageService } from "../../../shared/service/user-storage-services";
import { CSVLink } from "react-csv";
import exportPDF from "../../../shared/service/importPdf";
import { PDF } from "../../../shared/service/model/pdf";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TopicIcon from "@mui/icons-material/Topic";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import BurstModeIcon from '@mui/icons-material/BurstMode';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  right: "25%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid gray",
  boxShadow: 10,
  borderRadius: 2,
  p: 4,
  overflow: "scroll",
  height: "95%",
  display: "block",
};


const initialFieldValues = {
  hotelName: "",
  hotelDescription: "",
};

const breadcrumpdata = [
  {
    urllink: "/userComponent/home",
    icon: <IconDashboard />,
    label: "Home",
  },
  {
    icon: <BurstModeIcon />,
    label: "Course and Module",
  },
  {
    icon: "",
    label: "Hotel",
  },
];

const typographydata = {
  data: "Hotel",
};
const hotel = ({ ...props }) => {
  const [pageSize, setPageSize] = useState(10); // UseState React Hook PageSize for Data Grid or table to control pages by given intial value 5.
  const [pageNumber, setPageNumber] = useState(5); // UseState React Hook PageSize for Data Grid or table to control pages by given intial value 5.
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState("list");
  const [selectedhotel, setselectedhotel] = useState();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
  // *********** Code Started For:- Notification and Confirmation Dialog UseState is define here.***********
  const DeleteSuccess = () => {
    setSelectedRowKeys([]);
    setIsLoading(false);
  };
  const DeleteError = (action) => {
    setIsLoading(false);
    setNotify({
      isOpen: true,
      message:
        " Failure Alert:- Hotel not Deleted Successfully ! " + `${action}`,
      type: "error",
    });
  };

  // ***********Code Started For:- Delete Pupup called by edit icon button clicked***********
  //@ts-ignore
  const onDelete = (hotelid) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    props.deletehotel(hotelid, DeleteSuccess, DeleteError);
  };
  // ***********Code Started For:- Delete Pupup called by edit icon button clicked***********

  const onFetchAllSuccess = () => {
    setIsLoading(false);
  };

  const onFetchAllError = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    setIsLoading(true);
    props.fetchAllhotels(onFetchAllSuccess, onFetchAllError, request);
  }, [request]);

  const hotelPrintAction = () => {
    hotelPrint();
  };

  const componentRef = useRef<HTMLTableElement>(null);
  const hotelPrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Hotel List",
  });

  const dataSource= props.hotelstate;
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
      title: "Description",
      dataIndex: "hotelDescription",
      key: "hotelDescription",
      sortDirections: ["descend", "ascend"],
      sorter: (a, b) =>
        a.hotelDescription.localeCompare(b.hotelDescription),
    },
    {
      title: "Action",
      key: "action",
      render: (record) => {
        return (
          <Space size="large">
            {userStorageService.currentUserPermission("Update Hotel") && (
              <Tooltip title="Edit">
                <IconButton
                  onClick={() => {
                    setselectedhotel(record);
                    setViewMode("edit");
                  }}
                  aria-label="edit"
                  color="primary"
                >
                  <FontAwesomeIcon icon={faEdit} fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
            {userStorageService.currentUserPermission("View Hotel") && (
              <Tooltip title="Detail">
                <IconButton
                  onClick={() => {
                    setselectedhotel(record);
                    setViewMode("detail");
                  }}
                  aria-label="detail"
                  color="secondary"
                >
                  <FontAwesomeIcon icon={faInfo} fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
            {userStorageService.currentUserPermission("Delete Hotel") && (
              <Tooltip title="Delete">
                <IconButton
                  onClick={() => {
                    setConfirmDialog({
                      isOpen: true,
                      title: "Are you sure to delete",

                      //@ts-expect-error
                      onConfirm: () => {
                        onDelete(record.id);
                      },
                    });
                  }}
                  aria-label="delete"
                  color="error"
                >
                  <FontAwesomeIcon icon={faArchive} fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
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

  const onTrashDelete = () => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    props.MultiSoftDeletehotel(
      selectedRowKeys,
      DeleteSuccess,
      DeleteError
    );
  };

  return (
    <div className="appcontainer">
      {userStorageService.currentUserPermission("View Hotel") ===
        true && (
          <Grid container spacing={0}>
            <div className="row">
              <div className="pull-right">
                <Paper elevation={8} className="breadcrump">
                  <BreadCrumb data={breadcrumpdata} />
                </Paper>
              </div>
            </div>

            <Grid item xs={12} sm={12}>
              <Paper elevation={8} className="viewholder">
                <div className="row">
                  <div className="pull-left viewdesc">
                    {viewMode === "list" ? (
                      <Typographyh6 data={typographydata.data} />
                    ) : (
                      ""
                    )}
                  </div>

                  {viewMode == "list" && (
                    <>
                      <div className="pull-right viewbut">
                        {userStorageService.currentUserPermission(
                          "Create Hotel"
                        ) && (
                            <Button
                              variant="contained"
                              startIcon={<AddIcon />}
                              onClick={() => {
                                setViewMode("new");
                              }}
                            >
                              Create
                            </Button>
                          )}
                        {userStorageService.currentUserPermission(
                          "Delete Hotel"
                        ) && (
                            <Button
                              variant="outlined"
                              onClick={() => {
                                setViewMode("recover");
                              }}
                            >
                              Recover
                            </Button>
                          )}
                      </div>
                    </>
                  )}
                </div>

                {viewMode === "list" && selectedRowKeys.length > 0 && (
                  <div className="delete-container">
                    <div>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                          setConfirmDialog({
                            isOpen: true,
                            title: "Are you sure to delete",

                            //@ts-expect-error
                            onConfirm: () => {
                              onTrashDelete();
                            },
                          });
                        }}
                      >
                        Trash
                      </Button>
                    </div>
                  </div>
                )}
                <div className="ag-theme-alpine flex">
                  {viewMode === "list" && (
                    <Card className="w-full">
                      <div>
                        <div className="flex">
                          {/* export  */}
                          <div className="pull-left actionbut">
                            <Dropdown
                              overlay={menu}
                              placement="bottom"
                              arrow={{ pointAtCenter: true }}
                            >
                              <Button size="small" variant="contained">
                                <div className="font-medium">
                                  Export DASHBOARD
                                </div>
                                <DownOutlined
                                  translate={undefined}
                                  style={{ marginLeft: "2px" }}
                                />
                              </Button>
                            </Dropdown>

                            <Modal
                              aria-labelledby="transition-modal-title"
                              aria-describedby="transition-modal-hotelDescription"
                              open={open}
                              onClose={handleClose}
                              closeAfterTransition
                              BackdropComponent={Backdrop}
                              BackdropProps={{
                                timeout: 500,
                              }}
                            >
                              <Fade in={open}>
                                <Box sx={style}>
                                  <Typography
                                    id="transition-modal-title"
                                    variant="h6"
                                    component="h2"
                                  >
                                    <Button
                                      size="small"
                                      variant="contained"
                                      onClick={hotelPrintAction}
                                    >
                                      Print
                                    </Button>
                                    <Button
                                      size="small"
                                      className="ml-4"
                                      variant="contained"
                                      color="error"
                                      onClick={handleClose}
                                    >
                                      Cancel
                                    </Button>
                                  </Typography>
                                  <Typography
                                    id="transition-modal-hotelDescription"
                                    sx={{ mt: 2 }}
                                  >
                                    <Grid item xs={12}>
                                      <div style={{ margin: "5%" }}>
                                        <Grid container spacing={1}>
                                          <Grid item xs={12} ref={componentRef}>
                                            <div className="unverheaderholder">
                                              <div
                                                className="rowb"
                                                style={{
                                                  margin: "0px !important",
                                                  display: "flex",
                                                  flexWrap: "wrap",
                                                }}
                                              >
                                                <Grid
                                                  item
                                                  xs={6}
                                                  style={{
                                                    textAlign: "center",
                                                    marginBottom: "50px",
                                                  }}
                                                >
                                                  <h1>
                                                    <b>BONGA UNIVERSITY</b>
                                                  </h1>
                                                  <MailOutlineIcon /> 334 &nbsp;{" "}
                                                  <PhoneInTalkIcon />
                                                  251-47 83-19800
                                                </Grid>
                                                <Grid
                                                  item
                                                  xs={6}
                                                  style={{
                                                    textAlign: "center",
                                                    marginBottom: "50px",
                                                  }}
                                                >
                                                  <h1>
                                                    <b> OFFICE OF REGISTRAR </b>
                                                  </h1>{" "}
                                                  <OpenInBrowserIcon />{" "}
                                                  www.bongau.edu.et
                                                </Grid>
                                              </div>
                                            </div>
                                            <Table
                                              ref={componentRef}
                                              rowKey={(obj) => obj.id}
                                              size="small"
                                              dataSource={dataSource}
                                              columns={columnsListForPrint}
                                              pagination={false}
                                            />
                                          </Grid>
                                        </Grid>
                                      </div>
                                    </Grid>
                                  </Typography>
                                </Box>
                              </Fade>
                            </Modal>
                          </div>

                          <div className="pull-right search">
                            <div className="search-container">
                              <div className="search">
                                <Input
                                  placeholder="input search text"
                                  addonAfter="search"
                                  onKeyUp={(event) =>
                                    onSearch(event.target.value)
                                  }
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
                    </Card>
                  )}
                  {viewMode === "new" && (
                    <div style={{ width: "100%" }}>
                      <Createhotel
                        //@ts-ignore
                        closeedit={() => setViewMode("list")}
                        viewMode={viewMode}
                        selectedhotel={initialFieldValues}
                      />
                    </div>
                  )}

                  {viewMode === "edit" && (
                    <div style={{ width: "100%" }}>
                      <Createhotel
                        //@ts-ignore
                        closeedit={() => setViewMode("list")}
                        viewMode={viewMode}
                        selectedhotel={selectedhotel}
                      />
                    </div>
                  )}
                  {viewMode === "detail" && (
                    <div style={{ width: "100%" }}>
                      <Detailhotel
                        //@ts-ignore
                        closeedit={() => setViewMode("list")}
                        viewMode={viewMode}
                        selectedhotel={selectedhotel}
                      />
                    </div>
                  )}
                </div>
                {viewMode === "recover" && (
                  <div style={{ width: "100%" }}>
                    <Recevory
                      //@ts-ignore
                      closeedit={() => setViewMode("list")}
                      viewMode="recover"
                    />
                  </div>
                )}
              </Paper>

              <Notification notify={notify} setNotify={setNotify} />

              <Controls.ConfirmationDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
              />
            </Grid>
            {/*********** Code Ended For:- View Field of study component ***********/}
          </Grid>
        )}

      {userStorageService.currentUserPermission("View Hotel") === false &&
        navigate("/unauthorizedPrivilege")}
    </div>
  );
};

const mapStateToProps = (state) => ({
  hotelstate: state.hotel_REDUCER.hotelstate,
  loading: state.hotel_REDUCER.loading,
  total: state.hotel_REDUCER.total,
});

const mapActionsToProps = {
  deletehotel: actionCreators.Delete,
  fetchAllhotels: actionCreators.fetchAll,
  MultiSoftDeletehotel: actionCreators.multiSoftDelete,
};
export default connect(mapStateToProps, mapActionsToProps)(hotel );
