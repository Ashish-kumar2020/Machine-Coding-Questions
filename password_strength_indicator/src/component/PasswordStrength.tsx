import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type PasswordStrengthLevel =
  | "Empty"
  | "Weak"
  | "Medium"
  | "Strong"
  | "Very Strong";
type PasswordStrengthColorLevel = "red" | "orange" | "green" | "" | "cyan";

const PasswordStrength = () => {
  const [userPassword, setUserPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const passwordStrength = (userPassword: string): PasswordStrengthLevel => {
    if (userPassword.length === 0) {
      return "Empty";
    }
    let score = 0;
    if (userPassword.length >= 8) score++;
    if (/[A-Z]/.test(userPassword)) score++;
    if (/\d/.test(userPassword)) score++;
    if (/[!@#$%^&*(),.?":{}|<>"]/.test(userPassword)) score++;

    if (score === 1) {
      return "Weak";
    } else if (score === 2) {
      return "Medium";
    } else if (score === 3) {
      return "Strong";
    }
    return "Very Strong";
  };

  const getPasswordMeterColor = (
    strength: PasswordStrengthLevel,
  ): PasswordStrengthColorLevel => {
    switch (strength) {
      case "Empty":
        return "";
      case "Weak":
        return "red";
      case "Medium":
        return "orange";
      case "Strong":
        return "green";
      case "Very Strong":
        return "cyan";
    }
  };

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
        <div
          className="strength-meter"
          style={{ backgroundColor: strengthColor }}
        ></div>
      </div>
      <div className="strength-text">
        <span>Strength : {strength}</span>
      </div>
    </div>
  );
};

export default PasswordStrength;
