import { useEffect } from "react";
import { createPortal } from "react-dom";

const PortalModal = ({ isOpen, onClose, children }) => {
  // Close the modal when pressing the Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // If the modal state is closed, do not render anything
  if (!isOpen) return null;

  return createPortal(
    <div style={styles.overlay} onClick={onClose}>
      {/* stopPropagation prevents closing the modal when clicking inside the content box */}
      <div style={styles.content} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeButton} onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

// Basic inline styling for presentation
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  content: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    position: "relative",
    minWidth: "300px",
    maxWidth: "500px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
  },
};

export default PortalModal;
