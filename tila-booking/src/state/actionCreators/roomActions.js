import { roomApi } from "./Api";
import { Dispatch } from "redux";
import { ROOM_ACTION_TYPESACTION_TYPES } from "../actiontypes";

export const fetchAll =
  (onSuccess, onFetchAllError, request) =>
  (useAuthDispatch) => {
    roomApi()
      .fetchAll(request)
      .then((response) => {
        const data = response.data;
        useAuthDispatch({
          type: ROOM_ACTION_TYPESACTION_TYPES.FETCH_ALL_ROOM,
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
    roomApi()
      .fetchTrashCourseTypes(request)
      .then((response) => {
        const data = response.data;
        useAuthDispatch({
          type: ROOM_ACTION_TYPESACTION_TYPES.FETCH_TRASH_ROOMS,
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
    roomApi()
      .fetchCourseType()
      .then((response) => {
        useAuthDispatch({
          type: ROOM_ACTION_TYPESACTION_TYPES.FETCH_ROOM,
          payload: response.data,
        });
      });
  };

export const create =
  (data, onSuccess, onCreateError) =>
  (useAuthDispatch) => {
    roomApi()
      .create(data)
      .then((response) => {
        useAuthDispatch({
          type: ROOM_ACTION_TYPESACTION_TYPES.CREATE_ROOM,
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
    roomApi()
      .update(id, data)
      .then((response) => {
        useAuthDispatch({
          type: ROOM_ACTION_TYPESACTION_TYPES.UPDATE_ROOM,
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
    roomApi()
      .delete(id)
      .then((response) => {
        useAuthDispatch({
          type: ROOM_ACTION_TYPESACTION_TYPES.DELETE_ROOM,
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
    roomApi()
      .fetchById(id)
      .then((response) => {
        useAuthDispatch({
          type: ROOM_ACTION_TYPESACTION_TYPES.FETCH_BY_ID_ROOM,
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
    roomApi()
      .multiSoftDelete(id)
      .then((response) => {
        useAuthDispatch({
          type: ROOM_ACTION_TYPESACTION_TYPES.MULTISOFT_DELETE_ROOM,
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
    roomApi()
      .multiHardDelete(id)
      .then((response) => {
        useAuthDispatch({
          type: ROOM_ACTION_TYPESACTION_TYPES.MULTIHARD_DELETE_ROOM,
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
    roomApi()
      .multiRecovery(id)
      .then((response) => {
        useAuthDispatch({
          type: ROOM_ACTION_TYPESACTION_TYPES.MULTI_RECOVER_ROOM,
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
    roomApi()
      .singleRecovery(id)
      .then((response) => {
        useAuthDispatch({
          type: ROOM_ACTION_TYPESACTION_TYPES.SINGLE_RECOVER_ROOM,
          payload: [id],
        });
        onDeleteSuccess();
      })
      .catch((err) => {
        return onRecoverError(err.response);
      });
  };
