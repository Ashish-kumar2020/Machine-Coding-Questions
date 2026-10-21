import { useContext } from "react";
import "./App.css";
import { EmailComponent } from "./component/EmailComponent";
import { PasswordComponent } from "./component/PasswordComponent";
import { LoginContext } from "./context/LoginContext";

function App() {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error("App must be used within LoginProvider");
  }

  const { step,isVerified } = context;

  return (
    <>
      <h3>Two Step Login Form</h3>
      {step === 1 ? <EmailComponent /> : <PasswordComponent />}
      {isVerified ? "User is Verified Successfully": ""}
    </>
  );
}

export default App;