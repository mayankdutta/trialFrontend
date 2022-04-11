import logo from "./logo.svg";
import "./App.css";
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import { StreamChat } from "Stream-chat";
import Cookies from "universal-cookie";

function App() {
  const api_key = "2tm3t5saw5uh";
  const cookies = new Cookies();
  const token = cookies.get("token");
  const client = StreamChat.getInstance();

  if (token) {
    client.connectUser()
  }

  return (
    <div className="App">
      <SignUp />
      <Login />
    </div>
  );
}

export default App;
