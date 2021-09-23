import { useReducer } from "react";

const ACTIONS = {
  CHANGE_KEYWORD: "change_keyword",
};

const ACTIONS_REDUCERS = {
  [ACTIONS.CHANGE_KEYWORD]: (state, action) => ({
    ...state,
    times: state.times + 1,
    keyword: action.payload,
  })
};

const reducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type];
  return actionReducer ? actionReducer(state, action) : state;
};

export default function useForm({
  initialKeyword = "",
} = {}) {
  const [{ keyword }, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
  });

  return {
    changeKeyword: ({ keyword }) =>
      dispatch({ type: ACTIONS.CHANGE_KEYWORD, payload: keyword }),
    keyword
  };
}