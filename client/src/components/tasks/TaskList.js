import React from 'react';
import { List } from "semantic-ui-react";

import TaskDetail from './TaskDetail';

const TaskList = ({tasks, folderId, updateTasks}) => {

    const renderTaskList = tasks.map(task => {
        if(task.idFolder == folderId) {
            return (
                <List.Item>
                    <TaskDetail 
                                task={task}
                                updateTasks={updateTasks}

                    />
                </List.Item>
            )
        }
        
    })

    return(
       
        <List className="tasks_list">
            {renderTaskList}
        </List>
    )
}
export default TaskList;