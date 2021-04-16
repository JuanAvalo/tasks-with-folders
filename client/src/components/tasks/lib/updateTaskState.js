import axios from 'axios';
import { API_POINT } from '../../../lib/constants';

const updateTaskState = (taskId, updateFunction, newState) => {
  const params = new URLSearchParams();
  params.append('taskId', taskId);
  params.append('state', newState);

  axios
    .put(API_POINT + '/1/tasks', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then((response) => {
      console.log('Response: ' + JSON.stringify(response));
      updateFunction();
    })
    .catch((error) => {
      console.log('Error: ' + error);
    });
};

export default updateTaskState;
