import React from 'react';
import { Header } from "semantic-ui-react";

import Folders from '../components/folders/Folders';
import './app.css'



class App extends React.Component {
    

    render () {
        return <div className="app">
                    <Header as="h1">Task Manager</Header>
                    <Folders />
                </div>
    }
}

export default App;