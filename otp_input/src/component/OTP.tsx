import { useRef, useState } from "react";

type OTPProps = {
  otpSize: number;
};

const OTP = ({ otpSize }: OTPProps) => {
  const [inputLength, setInputLength] = useState(new Array(otpSize).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleOtpInput = (input: string, index: number) => {
    if (input !== "" && Number.isNaN(Number(input))) return;
    console.log("dsjdj");
    const newArr = [...inputLength];
    newArr[index] = input.slice(-1);
    setInputLength(newArr);

    if (newArr[index] && index < otpSize - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown =  (e:React.KeyboardEvent<HTMLInputElement> ,index:number) => {
    if(e.key === "Backspace" && !e.currentTarget.value && index > 0){
      inputRefs.current[index-1]?.focus();
    }
  } 
  return (
    <>
      <div>
        <h3>OTP Verification</h3>
        <h5>Enter verification code</h5>
      </div>
      <div className="otp-input-container">
        {inputLength.map((val, index) => {
          return (
            <input
              className="otp-input"
              type="text"
              id={`otpinput-${index}`}
              key={index}
              maxLength={1}
              value={val}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              onKeyDown={(e) => handleKeyDown(e,index)}
              onChange={(e) => handleOtpInput(e.target.value, index)}
            />
          );
        })}
      </div>
      <div className="guess-container">
        <span>
          Try:{" "}
          {inputLength.map((_, index) => (
            <span key={index}>{index + 1}</span>
          ))}
        </span>
      </div>
    </>
  );
};

export default OTP;
