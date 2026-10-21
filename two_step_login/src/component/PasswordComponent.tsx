import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

export const PasswordComponent = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("App must be used within LoginProvider");
  }
  const { password, setPassword, onSubmit, isLoading, onPrevClick } = context;
  return (
    <div>
        <button type="button" onClick={onPrevClick}>Prev</button>
      <label htmlFor="Password"> Password : </label>
      <input
        type="password"
        name="password"
        id="Password"
        placeholder="Enter your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={onSubmit}>
        {isLoading ? "Verifying Details..." : "Submit"}
      </button>
    </div>
  );
};
