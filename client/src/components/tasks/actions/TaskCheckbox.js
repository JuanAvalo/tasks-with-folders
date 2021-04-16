import React from 'react';
import {Checkbox} from "semantic-ui-react";

import updateTaskState from '../lib/updateTaskState';

const TaskCheckbox = ({task, updateTasks}) => {

    const handleCheck = () => {
        updateTaskState( task.idTask, updateTasks, +!task.state )
        console.log(task)
    }

    return <Checkbox 
                    checked={task.state}
                    onClick={()=> handleCheck()}
            />
}

export default TaskCheckbox;