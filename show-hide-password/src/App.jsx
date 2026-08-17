import { useState } from "react";
import "./App.css";
import { Eye, EyeOff } from "lucide-react";
function App() {
  const [isPasVisible, setIsPassVisible] = useState(true);

  const handlePassIcon = () => {
    setIsPassVisible((prev) => !prev);
  };
  return (
    <>
      <section>
        <div className="mt-4 p-4">
          <label htmlFor="username" className="mr-4">
            UserName:
          </label>
          <input
            id="username"
            type="text"
            className="border border-2 border-black rounded-lg p-1"
            placeholder="UserName"
          />
        </div>
        <div className="mt-4 p-4 relative">
          <label htmlFor="userpassword" className="mr-4">
            Password:
          </label>
          <input
            type={isPasVisible ? "password" : "text"}
            id="userpassword"
            className="border border-2 border-black rounded-lg p-1 relative"
            placeholder="Password"
          />

          <button
            type="button"
            aria-pressed={!isPasVisible}
           aria-label={isPasVisible ? "Show password" : "Hide password"}
            className="absolute left-[262px] top-[24px]"
            onClick={handlePassIcon}
          >
            {isPasVisible ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
