import { useState } from "react";

type LIST_COUNT = {
  totalSteps: number;
};

const MultiComponent = ({ totalSteps }: LIST_COUNT) => {
  const [currentStep, setCurrentStep] = useState(0);


  const handleNextStep = () =>{
    if(currentStep < totalSteps -1){
        setCurrentStep((prev) => prev + 1);
    }
    console.log(currentStep)
  }

  const handlePrevStep = () => {
    if(currentStep > 0){
        setCurrentStep((prev) => prev - 1);
    }
      console.log(currentStep)
  }

  return (
    <div className="main-container">
      <div className="display-conatiner">
        <h3 className="step-heading">Current Step - {currentStep}</h3>
      </div>

      {/* Step Meter */}
      <button onClick={handlePrevStep}>Prev Step</button>
      <div className="step-wrapper">
        {Array.from({ length: totalSteps }).map((_, i) => {
          const stepNumber = i;
          return (
            <div className="step-dispaly-contaner" key={i}>
              <div
                className={`first-step ${currentStep === stepNumber ? "active" : "not-active"}`}
              >
                <span className="step-text">{stepNumber + 1}</span>
              </div>
              {stepNumber < totalSteps && <div className={`line ${currentStep >= stepNumber ? "active" : ""} `}></div>}
            </div>
          );
        })}
      </div>
      <button onClick={handleNextStep}>Next Step</button>
    </div>
  );
};

export default MultiComponent;
