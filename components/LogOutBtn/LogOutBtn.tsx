"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Modal from "@/components/Modal/Modal";
import ModalApproveAction from "@/components/ModalApproveAction/ModalApproveAction";
import { logoutUser } from "@/services/auth-api";
import { showError } from "@/utils/notifications";

export default function LogOutBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error: unknown) {
      if (error instanceof Error) {
        showError(error.message);
      } else {
        showError("Logout failed. Please try again.");
      }
    } finally {
      
      localStorage.clear();
      sessionStorage.clear();

      setIsOpen(false);
      router.replace("/");
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Log out
      </button>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <ModalApproveAction
            onConfirm={handleLogout}
            onClose={() => setIsOpen(false)}
          />
        </Modal>
      )}
    </>
  );
}