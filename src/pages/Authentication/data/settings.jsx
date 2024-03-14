import React from "react";
import { Input } from "@nextui-org/react";

const Settings = ({ token }) => {
  // Check if token exists before accessing its properties
  const username =
    token && token.user && token.user.user_metadata
      ? token.user.user_metadata.Username
      : '';
  const email =
    token && token.user && token.user.user_metadata
      ? token.user.user_metadata.email
      : '';

  return (
    <>
      <section className="container px-2 ml-0 lg:pl-60 text-slate-200 h-[599px] justify-center">
        <div className="items-start justify-start p-8">
          <h1 className="text-white justify-start text-4xl leading-tighter font-bold">Settings</h1>
          <p className="text-gray-400 text-sm">Manage your account settings and preferences.</p>
        </div>
        <section className="h-[500px] w-6/12 bg-slate-10m0 pl-8">
          <section className="bg-[#47474733] border-[#353535b1] border p-2 rounded-lg">
          <h1 className="text-white justify-start text-xl leading-tighter font-bold pb-1">User Details</h1>
          <p className="font-semibold text-sm">Username:<span className="font-semibold text-gray-500"> {username}</span></p>
          <p className="font-semibold text-sm">Email:<span className="font-semibold text-gray-500"> {email}</span></p>
          {/* <Input type="text" variant="underlined" placeholder="type here" /> */}
          </section>
        </section>
      </section>
    </>
  );
};

export default Settings;
