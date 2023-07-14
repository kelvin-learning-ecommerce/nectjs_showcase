const initialState = {
  data: [],
  loading: true,
};

const gameListReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case "getUsers":
      return {
        ...state,
        gameListData: action.payload,
        loading: false,
      };

    case "createPlayer":
      return {
        ...state,
        createFootballerData: action.payload,
        loading: false,
      };

    case "updatePlayer":
      return {
        ...state,
        updatedData: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default gameListReducers;
