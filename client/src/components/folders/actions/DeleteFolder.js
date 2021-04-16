import React from 'react';
import { Button } from "semantic-ui-react";
import '../folders.css'

import deleteFolder from '../lib/deleteFolder';

const DeleteFolder = ({folderId, updateFolders}) => {
    const handleDelete = () => {
        deleteFolder(folderId, updateFolders);
    }

    return (
        <Button 
            onClick={() => {handleDelete()}}
            icon="trash"
            color="red"
            size="tiny"
            className="folder_menu_button"
        />
    )
}

export default DeleteFolder;