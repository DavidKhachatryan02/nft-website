import "./App.css";
import { NavBar } from "./modules/NavBar";
import { Login } from "./modules/Login";
import { UserAccount } from "./modules/UserAccount";

function App() {
  const state = true;

  return (
    <>
      <NavBar props={state}/>
      {state ? <Login /> : <UserAccount/>}
    </>
  );
}

export default App;
