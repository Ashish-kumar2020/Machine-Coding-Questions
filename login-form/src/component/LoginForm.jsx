import { useState } from "react";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    userEmail: "",
    userPassword: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const handleLoginData = (e) => {
    e.preventDefault();
    if (loginData.userEmail === "") {
      setError("UserEmail can not be empty");
      setMessage("");
      return;
    }

    if (loginData.userPassword === "") {
      setError("UserPassword can not be empty");
      setMessage("");
      return;
    }

    // Password Validation
    if (loginData.userPassword.length < 6) {
      setError("Password must be at least 6 characters");
      setMessage("");
      return;
    }

    // Email validation
    if(!loginData.userEmail.includes("@")){
        setError('Please enter a valid email');
        setMessage("")
        return;
    }

    setError("");
    setMessage("Login Successful");
    console.log(loginData);
    setLoginData({
      userEmail: "",
      userPassword: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleLoginData}>
        <div>
          <label htmlFor="userEmail">User Email : </label>
          <input
            type="email"
            id="userEmail"
            placeholder="john@email.com"
            value={loginData.userEmail}
            onChange={(e) =>
              setLoginData({ ...loginData, userEmail: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="userPassword">User password : </label>
          <input
            type="password"
            id="userPassword"
            placeholder="***********"
            value={loginData.userPassword}
            onChange={(e) =>
              setLoginData({ ...loginData, userPassword: e.target.value })
            }
          />
        </div>
        <p>{error}</p>
        <p>{message}</p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
