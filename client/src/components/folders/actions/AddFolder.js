import React from 'react';
import { Input, Button } from "semantic-ui-react";

import newFolder from '../lib/newFolder';


const AddFolder = ({updateFolders}) => {

    const handleAddFolder = (folderName) => {
        newFolder(1, folderName, updateFolders)
    }

    return (
        <div>
            <br></br>
            <Input 
                type="text"
                placeholder="Add a new folder..."
                id="newfolder"
                name="newfolder"
            />            
            <Button 
                onClick={() => handleAddFolder(document.getElementById("newfolder").value)}
                icon="plus"
                color="green"
            />
        </div>

    )
}

export default AddFolder;