import React from 'react';
import { Input, Button } from "semantic-ui-react";

import newTask from '../lib/newTask';

const AddTask = ({updateTasks, folderId}) => {

    const handleAddTask = (taskContent) => {
        newTask(folderId, taskContent, updateTasks)
    }

    return (
        <div>
            <Input 
                type="text"
                placeholder="Add a new task..."
                id={"newtask"+folderId}
                name="newtask"
                size="mini"
            />            
            <Button 
                onClick={() => handleAddTask(document.getElementById("newtask"+folderId).value)}
                icon="plus"
                size="mini"   
                color="olive" 
            />
        </div>

    )
}

export default AddTask;