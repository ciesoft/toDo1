import { appInstance } from "../httpService";

export const GET_TASKS_LIST = "GET_TASKS_LIST";
export const GET_TASKS_LIST_SUCCESS = "GET_TASKS_LIST_SUCCESS";
export const GET_TASKS_LIST_FAILURE = "GET_TASKS_LIST_FAILURE";

export const EDIT_TASK = "EDIT_TASK";
export const EDIT_TASK_SUCCESS = "EDIT_TASK_SUCCESS";
export const EDIT_TASK_FAILURE = "EDIT_TASK_FAILURE";

export const getTasks = () => ({
  type: GET_TASKS_LIST,
});

export const getTasksSuccess = (tasks) => ({
  type: GET_TASKS_LIST_SUCCESS,
  payload: tasks,
});

export const getTasksFailure = () => ({
  type: GET_TASKS_LIST_FAILURE,
});

export const editTaskStart = () => ({
  type: EDIT_TASK,
});

export const editTaskSuccess = () => ({
  type: EDIT_TASK_SUCCESS,
});

export const editTaskFailure = () => ({
  type: EDIT_TASK_FAILURE,
});

export function fetchTasks() {
  return async (dispatch) => {
    dispatch(getTasks());

    try {
      await appInstance.get("").then((response) => {
        dispatch(getTasksSuccess(response.data.data));
      });
    } catch (error) {
      dispatch(getTasksFailure());
    }
  };
}

export function editTaskAction({ id, taskStatus, task }) {
  const formData = new FormData();
  formData.append("task", task);
  formData.append("is_completed", taskStatus);

  return async (dispatch) => {
    dispatch(editTaskStart());
    try {
      await appInstance.post(`/${id}`, formData).then((response) => {
        dispatch(editTaskSuccess(response.data.data));
      });
    } catch (error) {
      dispatch(editTaskFailure());
    }
  };
}
