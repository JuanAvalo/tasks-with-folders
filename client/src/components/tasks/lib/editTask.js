import axios from 'axios';
import { API_POINT } from '../../../lib/constants';

const updateTask = (taskId, updateFunction, newContent) => {
  if (newContent.length === 0) console.log('Add something to the task.');
  else {
    const params = new URLSearchParams();
    params.append('taskId', taskId);
    params.append('content', newContent);

    axios
      .put(API_POINT + '/1/tasks/edit', params, {
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
  }
};

export default updateTask;
