import Link from "next/link";
import React from "react";

const socials = [
  {
    icon: "/IconLinkedin.svg",
    link: "",
  },
  {
    icon: "/IconInstagram.svg",
    link: "",
  },
  {
    icon: "/IconFacebook.svg",
    link: "",
  },
  {
    icon: "/IconX.svg",
    link: "",
  },
];

function Footer({ handleUp }: { handleUp: () => void }) {
  return (
    <div className="w-full flex items-center justify-center px-4 lg:px-2 pt-32 pb-20">
      <div className="w-full max-w-7xl flex flex-col items-center">
        <div className="w-full justify-between flex items-start lg:items-center gap-8 flex-col lg:flex-row">
          <div className="flex items-start lg:items-center flex-col lg:flex-row gap-2 lg:gap-4">
            <a
              className="flex items-center gap-1"
              href="mailto:info@touchcore.com.ng"
            >
              <img
                src="/IconEmailWhite.svg"
                alt=""
                className="w-6 object-contain"
              />
              <span className="text-sm flex">info@touchcore.com.ng</span>
            </a>
            <a className="flex items-center gap-1" href="tel:08170000560">
              <img
                src="/IconPhoneWhite.svg"
                alt=""
                className="w-6 object-contain"
              />
              <span className="text-sm flex">08170000560</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            {socials.map((social, index) => (
              <Link key={index} href={social.link} target="_blank">
                <img
                  src={social.icon}
                  alt=""
                  className="w-10 lg:w-6 object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full justify-between flex items-start lg:items-center gap-6 flex-col lg:flex-row mt-20">
          <div className="flex items-start flex-col flex-1 gap-2">
            <span className="text-xs">
              © 2025 Touchcore Technology Limited. All Rights Reserved.
            </span>
            <span className="text-xs">
              <Link href={""} className="underline mr-1">
                Privacy policy
              </Link>
              &
              <Link href={""} className="underline ml-1">
                Terms of Service
              </Link>
            </span>
          </div>
          <div className="flex items-center gap-4 justify-end flex-1 w-full lg:w-fit">
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center bg-primary"
              onClick={handleUp}
            >
              <img
                src="/IconArrowUp.svg"
                alt=""
                className="h-4 object-contain"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
