import axios from 'axios';
import { API_POINT } from '../../../lib/constants';

const updateFolder = (folderId, updateFunction, newContent) => {
  if (newContent.length === 0) console.log('Add something to the folder name.');
  else {
    const params = new URLSearchParams();
    params.append('folderId', folderId);
    params.append('name', newContent);

    axios
      .put(API_POINT + '/1/folders', params, {
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

export default updateFolder;
