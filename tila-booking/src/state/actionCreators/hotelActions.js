import { hotelApi } from "./Api";
import { Dispatch } from "redux";
import { HOTEL_ACTION_TYPESACTION_TYPES } from "../actiontypes";

export const fetchAll =
  (onSuccess, onFetchAllError, request) =>
  (useAuthDispatch) => {
    roomApi()
      .fetchAll(request)
      .then((response) => {
        const data = response.data;
        useAuthDispatch({
          type: HOTEL_ACTION_TYPESACTION_TYPES.FETCH_ALL_HOTEL,
          payload: [data],
        });
        onSuccess();
      })
      .catch((err) => {
        return onFetchAllError(err.response);
      });
  };
export const fetchTrashCourseTypes =
  (onSuccess, onFetchTrashError, request) =>
  (useAuthDispatch) => {
    hotelApi()
      .fetchTrashCourseTypes(request)
      .then((response) => {
        const data = response.data;
        useAuthDispatch({
          type: HOTEL_ACTION_TYPESACTION_TYPES.FETCH_TRASH_HOTELS,
          payload: [data],
        });
        onSuccess();
      })
      .catch((err) => {
        return onFetchTrashError(err.response);
      });
  };

export const fetchCourseType =
  () => (useAuthDispatch) => {
    hotelApi()
      .fetchCourseType()
      .then((response) => {
        useAuthDispatch({
          type: HOTEL_ACTION_TYPESACTION_TYPES.FETCH_HOTEL,
          payload: response.data,
        });
      });
  };

export const create =
  (data, onSuccess, onCreateError) =>
  (useAuthDispatch) => {
    hotelApi()
      .create(data)
      .then((response) => {
        useAuthDispatch({
          type: HOTEL_ACTION_TYPESACTION_TYPES.CREATE_HOTEL,
          payload: response.data,
        });
        onSuccess();
      })
      .catch((err) => {
        if (err.response.data.message != undefined || null) {
          return onCreateError(err.response.data.message);
        } else if (err.response.data != null) {
          return onCreateError(err.response.data);
        } else {
          return onCreateError(err.message);
        }
      });
  };

export const update =
  (id, data, onSuccess, onUpdateError) =>
  (useAuthDispatch) => {
    hotelApi()
      .update(id, data)
      .then((response) => {
        useAuthDispatch({
          type: HOTEL_ACTION_TYPESACTION_TYPES.UPDATE_HOTEL,
          payload: [id, response.data],
        });
        onSuccess();
      })
      .catch((err) => {
        if (err.response.data.message != undefined || null) {
          return onUpdateError(err.response.data.message);
        } else if (err.response.data != null) {
          return onUpdateError(err.response.data);
        } else {
          return onUpdateError(err.message);
        }
      });
  };

export const Delete =
  (id, onSuccess, onDeleteerror) =>
  (useAuthDispatch) => {
    hotelApi()
      .delete(id)
      .then((response) => {
        useAuthDispatch({
          type: HOTEL_ACTION_TYPESACTION_TYPES.DELETE_HOTEL,
          payload: [id],
        });
        onSuccess();
      })
      .catch((err) => {
        if (err.response.data.message != undefined || null) {
          return onDeleteerror(err.response.data.message);
        } else if (err.response.data != null) {
          return onDeleteerror(err.response.data);
        } else {
          return onDeleteerror(err.message);
        }
      });
  };

export const fetchById =
  (id, onSuccess, onFetchByIderror) =>
  (useAuthDispatch) => {
    hotelApi()
      .fetchById(id)
      .then((response) => {
        useAuthDispatch({
          type: HOTEL_ACTION_TYPESACTION_TYPES.FETCH_BY_ID_HOTEL,
          payload: [id],
        });
        onSuccess();
      })
      .catch((err) => {
        return onFetchByIderror(err.response);
      });
  };

export const multiSoftDelete =
  (id, onDeleteSuccess, onDeleteError) =>
  (useAuthDispatch) => {
    hotelApi()
      .multiSoftDelete(id)
      .then((response) => {
        useAuthDispatch({
          type: HOTEL_ACTION_TYPESACTION_TYPES.MULTISOFT_DELETE_HOTEL,
          payload: [id],
        });
        onDeleteSuccess();
      })
      .catch((err) => {
        if (err.response.data.message != undefined || null) {
          return onDeleteError(err.response.data.message);
        } else if (err.response.data != null) {
          return onDeleteError(err.response.data);
        } else {
          return onDeleteError(err.message);
        }
      });
  };

export const multiHardDelete =
  (id, onDeleteSuccess, onDeleteError) =>
  (useAuthDispatch) => {
    hotelApi()
      .multiHardDelete(id)
      .then((response) => {
        useAuthDispatch({
          type: HOTEL_ACTION_TYPESACTION_TYPES.MULTIHARD_DELETE_HOTEL,
          payload: [id],
        });
        onDeleteSuccess();
      })
      .catch((err) => {
        if (err.response.data.message != undefined || null) {
          return onDeleteError(err.response.data.message);
        } else if (err.response.data != null) {
          return onDeleteError(err.response.data);
        } else {
          return onDeleteError(err.message);
        }
      });
  };

export const multiRecovory =
  (id, onDeleteSuccess, onRecoverError) =>
  (useAuthDispatch) => {
    hotelApi()
      .multiRecovery(id)
      .then((response) => {
        useAuthDispatch({
          type: HOTEL_ACTION_TYPESACTION_TYPES.MULTI_RECOVER_HOTEL,
          payload: [id],
        });
        onDeleteSuccess();
      })
      .catch((err) => {
        return onRecoverError(err.response);
      });
  };
export const singleRecovory =
  (id, onDeleteSuccess, onRecoverError) =>
  (useAuthDispatch) => {
    hotelApi()
      .singleRecovery(id)
      .then((response) => {
        useAuthDispatch({
          type: HOTEL_ACTION_TYPESACTION_TYPES.SINGLE_RECOVER_HOTEL,
          payload: [id],
        });
        onDeleteSuccess();
      })
      .catch((err) => {
        return onRecoverError(err.response);
      });
  };
