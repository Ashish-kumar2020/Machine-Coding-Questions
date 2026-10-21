import { createContext } from "react";

type LoginContextType = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => boolean;
  onNextClick: () => void;
  isLoading: boolean;
  isVerified: boolean;
  onPrevClick: () => void;
  previous: boolean;
};

export const LoginContext = createContext<LoginContextType | undefined>(
  undefined
);