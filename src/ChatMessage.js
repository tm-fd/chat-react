import React from 'react';
import {auth} from './firebase.js'

function ChatMessage(props) {
    const {text, uid, photoURL} = props.message;
    const messageType = uid === auth.currentUser.uid ? 'sent' : 'received';
    return (
        <div className={`message ${messageType}`}>
            <img alt='user' src={photoURL} />
            <p>{text}</p>
        </div>
        
    );
}

export default ChatMessage;