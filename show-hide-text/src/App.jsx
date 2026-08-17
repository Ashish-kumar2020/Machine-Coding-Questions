import { useState } from "react";
import "./App.css";

function App() {
  const [isTextHidden, setIsTextHidden] = useState(true);

  let fullText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum illo non soluta? Tempora doloremque ipsam consectetur ut eius mollitia deserunt debitis, laboriosam ratione dolorum aut esse. Veniam, consectetur ducimus, amet cum corporis, officiis voluptatibus dignissimos sapiente facilis odio laborum. Veniam beatae tempore delectus quas odio amet iusto distinctio fugiat vel!";

  const handleHideText = () => {
    setIsTextHidden((prev) => !prev);
  };
  const visibleText = isTextHidden ? `${fullText.substring(0, 30)}...` : fullText;

  return (
    <>
      <h1>Show / hide text</h1>
      <section>
        <div>
          <p>{visibleText}</p>
          <button
            aria-pressed={isTextHidden}
            type="button"
            onClick={handleHideText}
          >
            {isTextHidden ? "Read More" : "Hide Text"}
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
