import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type PasswordStrengthLevel = "Empty" | "Weak" | "Medium" | "Strong"
type PasswordStrengthColorLevel = "red" | "orange" | "green" | "";

const PasswordStrength = () => {
  const [userPassword, setUserPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
 

  const handlePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const passwordStrength = (userPassword: string) : PasswordStrengthLevel => {
    if (userPassword.length === 0) {
     return "Empty";
    }
    else if (userPassword.length <= 3) {
      return "Weak";
    }
    else if ( userPassword.length <= 6) {
      return "Medium";
    }
    else {
    return "Strong"
    }
  };

  const getPasswordMeterColor = (strength: PasswordStrengthLevel):PasswordStrengthColorLevel  => {
    switch(strength){
        case "Empty":
            return "";
        case "Weak":
            return "red";
        case "Medium":
            return "orange";
        case "Strong":
            return "green";
    }
  }

  const strength = passwordStrength(userPassword);
  const strengthColor = getPasswordMeterColor(strength);

  return (
    <div>
      <div className="password-container">
        <label htmlFor="userpassword">Enter Password : </label>
        <input
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Enter your password"
          id="userpassword"
          value={userPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            setUserPassword(e.target.value)
          }
        />
        <button
          type="button"
          className="password-icon"
          onClick={handlePasswordVisibility}
        >
          {isPasswordVisible ? (
            <Eye />
          ) : (
            <EyeOff size={20} className="password-off" />
          )}
        </button>
      </div>
      <div className="strength-container">
        <div className="strength-meter" style={{backgroundColor: strengthColor}}>
         
        </div>
      </div>
      <div className="strength-text">
        <span>Strength : {strength}</span>
      </div>
    </div>
  );
};

export default PasswordStrength;
