import axios from 'axios';
import { API_POINT } from '../../../lib/constants';

const newTask = (folderId, content, updateFunction) => {
  if (content.length === 0) console.log('Add something to the task.');
  else {
    var params = new URLSearchParams();
    params.append('folderId', folderId);
    params.append('content', content);

    axios
      .post(API_POINT + '/1/tasks', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((response) => {
        console.log('Response: ' + JSON.stringify(response));
        updateFunction(); //Re-Render the tasks component to update the list.
      })
      .catch((error) => {
        console.log('Error: ' + error);
      });
  }
};
export default newTask;
