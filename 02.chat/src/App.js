import { ChatEngine } from 'react-chat-engine';
import './App.css';

function App() {
  return (
    <div className="App">
      <ChatEngine 
        height="100vh"
        projectID="7a0a9396-c253-41cb-8845-65d359bdfc4e"
        userName="john"
        userSecret="Qwerty"
      />
    </div>
  );
}

export default App;
