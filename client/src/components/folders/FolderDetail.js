import React, {useState} from 'react';
import { Accordion, Button } from "semantic-ui-react";

import './folders.css'
import DeleteFolder from './actions/DeleteFolder';
import EditFolder from './actions/EditFolder';
import Task from '../tasks/Task';


const FolderDetail = ({folder, updateFolders, selectAccordion, activeAccordion}) => {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const hideModal = () => {
        setModalIsVisible(false);
    }

    return (
        <div>
            <Accordion.Title
                active={ activeAccordion === folder.idFolder }
                index={folder.idFolder}
                onClick={() => selectAccordion(folder.idFolder)}
            >
                {folder.name}

                <DeleteFolder 
                            folderId={folder.idFolder}
                            updateFolders={updateFolders}  
                />
                <Button 
                    onClick={() => setModalIsVisible(true)}
                    size="tiny"
                    icon="pencil"
                    color="teal"
                    className="folder_menu_button"
                >
                                    
                </Button>
                
            </Accordion.Title>
            
            <EditFolder 
                        folder={folder}
                        showModal = {modalIsVisible}
                        hideModal = {hideModal}
                        updateFolders = {updateFolders}            
            />
            
            <Accordion.Content
                active={ activeAccordion === folder.idFolder }
            >
                <Task folderId={folder.idFolder}/>
            </Accordion.Content>
            
        </div>
    )
}

export default FolderDetail;