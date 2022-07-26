import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ChatScreen from "./pages/ChatScreen";

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomeScreen} exact />
      <Route path="/chats" component={ChatScreen} />
    </div>
  );
}

export default App;
