"use client";

import Image from "next/image";
import css from "./ModalApproveAction.module.css";

interface Props {
  onConfirm: () => void;
  onClose: () => void;
}

export default function ModalApproveAction({ onConfirm, onClose }: Props) {
  return (
    <div className={css.wrapper}>
    <button className={css.closeBtn} onClick={onClose}>
      <svg width="24" height="24">
        <use href="/sprite.svg#icon-cross" />
      </svg>
    </button>

    <div className={css.imageWrapper}>
      <Image
        src="/images/logout-cat.png"
        alt="Are you sure you want to logout?"
        width={80}
        height={80}
        
      />
    </div>

      <h2 className={css.title}>Already leaving?</h2>

      <div className={css.actions}>
        <button className={css.yesBtn} onClick={onConfirm}>
          Yes
        </button>

        <button className={css.cancelBtn} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}