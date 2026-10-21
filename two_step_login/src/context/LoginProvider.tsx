import { useState, type ReactNode } from "react";
import { LoginContext } from "./LoginContext";

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [previous, setIsPrevious] = useState(false);


  const onSubmit = () => {
    if (password.length < 6) {
      return false;
    }

    setIsLoading(true);

    setTimeout(() => {
      localStorage.setItem("email", email);
      setIsVerified(true);
      setIsLoading(false);
    }, 1500);

    return true;
  };


  const onNextClick = () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) {
      return false;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 1500);

    return true;
  };

  const onPrevClick = () => {
    setIsPrevious(true)
    setStep((prev) => prev - 1)
  }

  return (
    <LoginContext.Provider
      value={{
        step,
        setStep,
        email,
        setEmail,
        password,
        setPassword,
        onSubmit,
        onNextClick,
        isLoading,
        isVerified,
        onPrevClick,
        previous
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
