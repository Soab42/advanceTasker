import { useState } from "react";

export default function ConfirmModal({ message, onConfirm, onCancel }) {
  const [confirm, setConfirm] = useState(false);
  const handleConfirm = () => {
    setConfirm(true);
    setTimeout(() => {
      onConfirm();
    }, 3000);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        {confirm ? (
          <div className="modalAnimation  flex flex-col text-center py-20 justify-center text-[5rem] rounded-md h-96 relative">
            <img
              src="https://i.pinimg.com/originals/cf/ce/2f/cfce2fa4cc0ccdc49cf1482c355a50b8.gif"
              alt="deleted"
            />
            <div className="absolute animate-swipe">Deleted</div>
          </div>
        ) : (
          <div className="modalAnimation bg-emerald-700/70 flex flex-col text-center h-96 py-20 justify-between rounded-md">
            <p className="text-[3rem] text-white">{message}</p>
            <div className="flex justify-center items-center gap-[2rem] text-2xl">
              <button className="btn primary" onClick={handleConfirm}>
                Confirm
              </button>
              <button className="btn warning" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
