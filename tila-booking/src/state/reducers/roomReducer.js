import { ROOM_ACTION_TYPES, } from "../actiontypes";

const initialState = {
  roomstate: [],
  roomtrashstate: [],
  roomnamestate:[],
  loading: false,
  total: 0,
};

export const ROOM_REDUCER = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ROOM_ACTION_TYPES.CREATE_ROOM:
      return {
        ...state,
        roomstate: [
          ...state.roomstate,
          action.payload,
        ],
      };

    case ROOM_ACTION_TYPES.UPDATE_ROOM:
      return {
        ...state,
        roomstate: state.roomstate.map(
          (room) =>
            {
            //@ts-expect-error
              return room.id == action.payload[1].id
                ? action.payload[1]
                : room;
            }
        ),
      };
    case ROOM_ACTION_TYPES.DELETE_ROOM:
      return {
        ...state,
        roomstate: state.roomstate.filter(
          (
            room //@ts-ignore
          ) => room.id != action.payload
        ),
      };
    case ROOM_ACTION_TYPES.FETCH_ALL_ROOM:
      return {
        ...state,
        roomstate: action.payload[0],
        total: action.payload[1],
      };
    case ROOM_ACTION_TYPES.FETCH_TRASH_ROOMS:
      return {
        ...state,
        roomtrashstate: action.payload[0],
        total: action.payload[1],
      };
    case ROOM_ACTION_TYPES.FETCH_ROOM:
      return {
        ...state,
        roomnamestate: action.payload,
      };
    case ROOM_ACTION_TYPES.FETCH_BY_ID_ROOM:
      return {
        ...state,
        roomstate: action.payload,
      };
      case ROOM_ACTION_TYPES.MULTIHARD_DELETE_ROOM:
        return {
          ...state,
          roomtrashstate: state.roomtrashstate.filter(
            (
              room //@ts-ignore
            ) => action.payload[0].every(function (e) {
              return room.id != e;
            })
          ),
        };
    case ROOM_ACTION_TYPES.MULTISOFT_DELETE_ROOM:
        return {
          ...state,
          roomstate: state.roomstate.filter(
            (
              room //@ts-ignore
            ) => action.payload[0].every(function (e) {
              return room.id != e;
            })
          ),
        };
    case ROOM_ACTION_TYPES.MULTI_RECOVER_ROOM:
        return {
          ...state,
          roomtrashstate: state.roomtrashstate.filter(
            (
              room //@ts-ignore
            ) => action.payload[0].every(function (e) {
              return room.id != e;
            })
          ),
        };
    case ROOM_ACTION_TYPES.SINGLE_RECOVER_ROOM:
      return {
        ...state,
        roomtrashstate: state.roomtrashstate.filter(
          (
            room //@ts-ignore
          ) => room.id != action.payload
        ),
      };

    default:
      return state;
  }
};
