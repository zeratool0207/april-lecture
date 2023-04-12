import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm.jsx';

import './App.css';


function App() {

  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <div className="App">
      <ChatEngine 
        height="100vh"
        projectID="7a0a9396-c253-41cb-8845-65d359bdfc4e"
        userName="john"
        userSecret="Qwerty"
        renderChatFeed = { (chatAppProps) => <ChatFeed {...chatAppProps}  />}
        onNewMessage = { () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;
