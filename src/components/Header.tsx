import React from "react";

function Header() {
  return (
    <div className="top-0 w-full sticky flex items-center justify-center py-2 text-white">
      <div className="w-full max-w-7xl px-2 flex items-center justify-between">
        <img src="/logo.svg" alt="" className="w-14 lg:w-20 object-contain" />
        <div className="flex items-center gap-4">
          <a
            className="flex items-center gap-1"
            href="mailto:info@touchcore.com.ng"
          >
            <img src="/IconEmail.svg" alt="" className="w-6 object-contain" />
            <span className="text-sm hidden lg:flex">
              info@touchcore.com.ng
            </span>
          </a>
          <a className="flex items-center gap-1" href="tel:08170000560">
            <img src="/IconPhone.svg" alt="" className="w-6 object-contain" />
            <span className="text-sm hidden lg:flex">08170000560</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
