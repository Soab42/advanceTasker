import { useState } from "react";

import Tick from "../assets/tick.gif";
export default function ConfirmModal({ message, onConfirm, onCancel }) {
  const [confirm, setConfirm] = useState(false);
  const handleConfirm = () => {
    setConfirm(true);
    setTimeout(() => {
      onConfirm();
    }, 2000);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        {confirm ? (
          <div className="flex text-center py-20 justify-center items-center text-[5rem] rounded-md h-96 relative overflow-hidden w-full bg-white">
            <img src={Tick} alt="deleted" width={"90rem"} />

            <div className="font-thin text-rose-400">Deleted</div>
          </div>
        ) : (
          <div className="modalAnimation glass flex flex-col text-center py-20 justify-between gap-10 rounded-md">
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
