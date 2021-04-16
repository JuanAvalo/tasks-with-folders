import React from "react";
import { Modal, Form, Header, Button } from "semantic-ui-react";
import editFolder from '../lib/editFolder';

import "semantic-ui-css/semantic.min.css";

function EditFolder({showModal, hideModal, folder, updateFolders}) {

    const handleSubmit= (e) => {
        e.preventDefault();
        editFolder(folder.idFolder, updateFolders, document.getElementById("modalinput").value)
        hideModal()
    }

    const handleCancel = () => {
        hideModal();
    }


  return (
      
    <Modal as={Form} onSubmit={e => handleSubmit(e)} open={showModal} size="tiny">
      <Header icon="pencil" content="Edit Folder" as="h3" />
      <Modal.Content>
        <Form>
          <Form.Input id="modalinput" label="Folder" type="text" placeholder={folder.name}/>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button type="button" color="red" icon="times" content="Close" onClick={()=>handleCancel()}/>
        <Button type="submit" color="green" icon="save" content="Save" />
      </Modal.Actions>
    </Modal>
    

  );
}


export default EditFolder;