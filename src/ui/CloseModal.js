import { useEffect } from "react";

const ModalOverlay = ({ setShowModal }) => {
  const closeModal = (e) => {
    if (e.target.className === "overlay") setShowModal(false);
    if (e.key === "Escape") setShowModal(false);
  };

  useEffect(() => {
    // 'Escape' tugmasini tinglash uchun hodisa qo'shish
    window.addEventListener("keydown", closeModal);
    return () => {
      // Komponent unmounted bo'lganda hodisani o'chirish
      window.removeEventListener("keydown", closeModal);
    };
  }, []);

  return (
    <div className="overlay" onClick={closeModal}>
      {/* Modal content */}
    </div>
  );
};

export default ModalOverlay;
