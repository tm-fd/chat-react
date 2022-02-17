import './App.css';
import 'firebase/compat/auth';
import SignIn from './SignIn';
import SignOut from './SignOut';
import ChatRoom from './ChatRoom';
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from './firebase.js'



function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">
      <h3>React Chat</h3>
      {user ? <SignOut /> : ''} 
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
