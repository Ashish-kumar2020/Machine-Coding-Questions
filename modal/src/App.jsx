import { useState } from "react";
// import Modal from "./Modal";
import PortalModal from "./components/PortalModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React App Content</h1>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      <PortalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Modal Header</h2>
        <p>This entire component is successfully breaking out of the root layout!</p>
      </PortalModal>
    </div>
  );
}

export default App;
