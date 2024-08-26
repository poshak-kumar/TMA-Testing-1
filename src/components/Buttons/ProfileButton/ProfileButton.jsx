import React from "react";
import styles from "./ProfileButton.module.css";

const ProfileButton = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.modalClose} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default ProfileButton;
