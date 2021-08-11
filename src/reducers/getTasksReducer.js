import * as actions from "../actions/getTaskListActions";

export const initialGetState = {
  tasks: [],
  loading: false,
  hasErrors: false,
};

export const initialStateEdit = {
  data: [],
  loading: false,
  success: false,
  hasErrors: false,
};

export function getTasksReducer(state = initialGetState, action) {
  switch (action.type) {
    case actions.GET_TASKS_LIST:
      return { ...initialGetState, loading: true };
    case actions.GET_TASKS_LIST_SUCCESS:
      return { tasks: action.payload, loading: false, hasErrors: false };
    case actions.GET_TASKS_LIST_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}

export function editTasksReducer(state = initialStateEdit, action) {
  switch (action.type) {
    case actions.EDIT_TASK:
      return { ...state, loading: true, success: false };
    case actions.EDIT_TASK_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        hasErrors: false,
        success: true,
      };
    case actions.EDIT_TASK_FAILURE:
      return { ...state, loading: false, hasErrors: true, success: false };
    default:
      return state;
  }
}
