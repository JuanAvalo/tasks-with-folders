import React from 'react';
import { Message } from 'semantic-ui-react';

const ErrorMessage = () => {
    return (
        <Message>
            <Message.Header>
                Error!
            </Message.Header>
            <p>
                An error has ocurred, please try to reload the page.
            </p>
        </Message>
    )
}

export default ErrorMessage;