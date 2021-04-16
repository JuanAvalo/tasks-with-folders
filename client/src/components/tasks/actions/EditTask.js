import React from "react";
import { Modal, Form, Header, Button } from "semantic-ui-react";
import editTask from '../lib/editTask';

import "semantic-ui-css/semantic.min.css";

function EditTask({showModal, hideModal, task, updateTasks}) {

    const handleSubmit= (e) => {
        e.preventDefault();
        editTask(task.idTask, updateTasks, document.getElementById("modalinput").value)
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
          <Form.Input id="modalinput" label="Folder" type="text" placeholder={task.content}/>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button type="button" color="red" icon="times" content="Close" onClick={()=>handleCancel()}/>
        <Button type="submit" color="green" icon="save" content="Save" />
      </Modal.Actions>
    </Modal>
    

  );
}


export default EditTask;