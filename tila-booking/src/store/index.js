import * as ROOM_REDUCER from "../state/reducers/roomReducer";
import * as HOTEL_REDUCER from "../state/reducers/hotelReducer";



export const reducers = {
  ROOM_REDUCER: ROOM_REDUCER.ROOM_REDUCER,
  HOTEL_REDUCER: HOTEL_REDUCER.HOTEL_REDUCER,

};

// export interface AppThunkAction<TAction> {
//   (dispatch: (action: TAction) => void): void;
// }
