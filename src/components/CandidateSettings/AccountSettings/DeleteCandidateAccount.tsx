"use client";
import DeleteAccountModal from "@/components/modal/account/DeleteAccountModal";

const DeleteCandidateAccount = () => {
  return (
    <>
      <div className="mt-12 border bg-white border-gray-200 rounded-md p-4">
        <h3 className="text-lg font-medium mb-2">Delete Your Account</h3>
        <p className="text-sm text-gray-600 mb-4">
          If you delete your account, all your personal information, including
          your email, password, profile details, and any saved preferences, will
          be permanently removed from our system. This action cannot be undone.
        </p>
        <DeleteAccountModal />
      </div>
    </>
  );
};

export default DeleteCandidateAccount;
