import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';

import FolderList from './FolderList';
import AddFolder from './actions/AddFolder';
import Loading from '../handlers/loading';
import ErrorMessage from '../handlers/error';

import { API_POINT } from '../../lib/constants';

const Folders = () => {
  const [folders, setFolders] = useState([]);
  const [folderWasAdded, setFolderWasAdded] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //GET folders from DB.
  useEffect(() => {
    const getFolders = async () => {
      try {
        setError(false);
        setLoading(true);
        const result = await axios(API_POINT + '/1/folders');
        setFolders(result.data);
      } catch (error) {
        setError(true);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    getFolders();
  }, [folderWasAdded]);

  //UPDATE folders WHEN A CHANGE OCCURS
  const updateFolders = () => {
    setFolderWasAdded(!folderWasAdded);
  };

  if (error) return <ErrorMessage />;
  if (loading) return <Loading />;

  return (
    <div>
      <Header as='h3'>My folders</Header>
      <FolderList folders={folders} updateFolders={updateFolders} />
      <AddFolder updateFolders={updateFolders} />
    </div>
  );
};

export default Folders;
