import { HOTEL_ACTION_TYPES, } from "../actiontypes";

const initialState = {
  hotelstate: [],
  hoteltrashstate: [],
  hotelnamestate:[],
  loading: false,
  total: 0,
};

export const HOTEL_REDUCER = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case HOTEL_ACTION_TYPES.CREATE_HOTEL:
      return {
        ...state,
        hotelstate: [
          ...state.hotelstate,
          action.payload,
        ],
      };

    case HOTEL_ACTION_TYPES.UPDATE_HOTEL:
      return {
        ...state,
        hotelstate: state.hotelstate.map(
          (hotel) =>
            {
            //@ts-expect-error
              return hotel.id == action.payload[1].id
                ? action.payload[1]
                : hotel;
            }
        ),
      };
    case HOTEL_ACTION_TYPES.DELETE_HOTEL:
      return {
        ...state,
        hotelstate: state.hotelstate.filter(
          (
            hotel //@ts-ignore
          ) => hotel.id != action.payload
        ),
      };
    case HOTEL_ACTION_TYPES.FETCH_ALL_HOTEL:
      return {
        ...state,
        hotelstate: action.payload[0],
        total: action.payload[1],
      };
    case HOTEL_ACTION_TYPES.FETCH_TRASH_HOTELS:
      return {
        ...state,
        hoteltrashstate: action.payload[0],
        total: action.payload[1],
      };
    case HOTEL_ACTION_TYPES.FETCH_HOTEL:
      return {
        ...state,
        hotelnamestate: action.payload,
      };
    case HOTEL_ACTION_TYPES.FETCH_BY_ID_HOTEL:
      return {
        ...state,
        hotelstate: action.payload,
      };
      case HOTEL_ACTION_TYPES.MULTIHARD_DELETE_HOTEL:
        return {
          ...state,
          hoteltrashstate: state.hoteltrashstate.filter(
            (
              hotel //@ts-ignore
            ) => action.payload[0].every(function (e) {
              return hotel.id != e;
            })
          ),
        };
    case HOTEL_ACTION_TYPES.MULTISOFT_DELETE_HOTEL:
        return {
          ...state,
          hotelstate: state.hotelstate.filter(
            (
              hotel //@ts-ignore
            ) => action.payload[0].every(function (e) {
              return hotel.id != e;
            })
          ),
        };
    case HOTEL_ACTION_TYPES.MULTI_RECOVER_HOTEL:
        return {
          ...state,
          hoteltrashstate: state.hoteltrashstate.filter(
            (
              hotel //@ts-ignore
            ) => action.payload[0].every(function (e) {
              return hotel.id != e;
            })
          ),
        };
    case HOTEL_ACTION_TYPES.SINGLE_RECOVER_HOTEL:
      return {
        ...state,
        hoteltrashstate: state.hoteltrashstate.filter(
          (
            hotel //@ts-ignore
          ) => hotel.id != action.payload
        ),
      };

    default:
      return state;
  }
};
