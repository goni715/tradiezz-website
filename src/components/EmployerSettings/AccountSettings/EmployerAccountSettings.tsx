"use client";

import ChangePasswordForm from "./ChangePasswordForm";
import DeleteAccount from "./DeleteAccount";

const EmployerAccountSettings = () => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-md">
      <ChangePasswordForm />
      <DeleteAccount />
    </div>
  );
};

export default EmployerAccountSettings;
