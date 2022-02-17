import React from 'react';
import {auth} from './firebase.js'

function SignOut() {
    const { photoURL } = auth.currentUser;
    return auth.currentUser && (
        <div className='login'>
        <img alt='user' src={photoURL} />
        <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default SignOut;