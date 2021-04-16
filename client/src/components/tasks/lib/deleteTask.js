import axios from 'axios';
import { API_POINT } from '../../../lib/constants';

const deleteTask = (taskId, updateFunction) => {
  axios
    .delete(API_POINT + '/1/tasks', { params: { taskId: taskId } })
    .then((response) => {
      console.log('Response: ' + JSON.stringify(response));
      updateFunction();
    })
    .catch((error) => {
      console.log('Error: ' + error);
    });
};

export default deleteTask;
