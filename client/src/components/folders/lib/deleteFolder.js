import axios from 'axios';
import { API_POINT } from '../../../lib/constants';

const deleteFolder = (folderId, updateFunction) => {
  axios
    .delete(API_POINT + '/1/folders', { params: { folderId: folderId } })
    .then((response) => {
      console.log('Response: ' + JSON.stringify(response));
      updateFunction();
    })
    .catch((error) => {
      console.log('Error: ' + error);
    });
};

export default deleteFolder;
