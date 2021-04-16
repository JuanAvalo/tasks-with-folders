import React, {useState} from 'react';
import { Accordion } from "semantic-ui-react";

import FolderDetail from './FolderDetail';


const FolderList = ({folders, updateFolders}) => {

    //Declarations used for Accordion
    const [activeAccordion, setActiveAccordion] = useState(-1);

    const selectAccordion = (selectedId) => {
        setActiveAccordion(selectedId);
    }

    const renderFolders = folders.map(folder => {
        return (
            <FolderDetail 
                folder={folder} 
                updateFolders={updateFolders}
                activeAccordion={activeAccordion}
                selectAccordion={selectAccordion}

            />
        )
    })

    return (
        <Accordion styled>
            {renderFolders}
        </Accordion>
    )
}

export default FolderList;