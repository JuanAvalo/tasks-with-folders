import axios from 'axios';
import { API_POINT } from '../../../lib/constants';

const newFolder = (userId, name, updateFunction) => {
  if (name.length === 0) console.log('Add something to the task.');
  else {
    var params = new URLSearchParams();
    params.append('idUser', userId);
    params.append('name', name);

    axios
      .post(API_POINT + '/1/folders', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((response) => {
        console.log('Response: ' + JSON.stringify(response));
        updateFunction(); //Re-Render the folders component to update the list.
      })
      .catch((error) => {
        console.log('Error: ' + error);
      });
  }
};
export default newFolder;
