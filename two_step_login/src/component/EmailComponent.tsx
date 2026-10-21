import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"




export const EmailComponent = () => {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error("App must be used within LoginProvider");
  }

  const { email,onNextClick,setEmail,isLoading } = context;
  return (
    <div>
      <label htmlFor="Email"> Email : </label>
      <input type="email" name="email" id="Email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/> 
      <button type="button" onClick={onNextClick}>{isLoading ? "Verifying Email..." : "Next"}</button>
    </div>
  )
}
