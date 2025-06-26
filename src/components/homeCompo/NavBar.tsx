import { useState, useEffect, useRef } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import {
  FaAngleDown,
  FaBars,
  FaChevronCircleDown,
  FaChevronCircleUp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [activeImage, setActiveImage] = useState<string>(
    "https://wp-assets.infinum.com/uploads/2022/03/img-drawer.webp"
  );
  const [showExpertiseList, setShowExpertiseList] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const linkStyle = (path: string) =>
    `text-black hover:text-bgRed font-NeueBold text-5xl md:text-6xl ${
      location.pathname === path ? "border-b-4 border-red-500 pt-1" : ""
    } hover:scale-105 transition-transform duration-200`;

  const imageMap: { [key: string]: string } = {
    "/": "https://wp-assets.infinum.com/uploads/2022/03/img-drawer.webp",
    "/Expertise":
      "https://wp-assets.infinum.com/uploads/2022/03/img-drawer.webp",
    "/about":
      "https://media.istockphoto.com/id/1440777561/photo/above-view-of-young-coworkers-using-mobile-gadgets-during-individual-work.jpg?s=1024x1024&w=is&k=20&c=vt8QhRNeVq0uaJBvh6UESDGTsVNzkZ2tLcOPspjbJQU=",
    "/work":
      "https://media.istockphoto.com/id/1365105724/photo/multicultural-businesspeople-working-in-an-office-lobby.jpg?s=1024x1024&w=is&k=20&c=r4uMoMk1ZwF9o5fspBXs6BxnCEg4hxaXLcSpV_0JcEk=",
    "/contact-us":
      "https://wp-assets.infinum.com/uploads/2022/03/img-drawer.webp",
    default: "https://wp-assets.infinum.com/uploads/2022/03/img-drawer.webp",
  };

  const expertiseList = [
    {
      label: "Travel Solution Development",
      path: "/travel-solution-development",
    },
    {
      label: "Product and User Interface Design",
      path: "/expertise/product-and-user-interface-design",
    },
    {
      label: "Mobile and Web App Development",
      path: "/mobile-web-apps",
    },
    {
      label: "Custom Website Design",
      path: "/expertise/custom-website-design",
    },
    {
      label: "Enterprise Platforms",
      path: "/enterprise-platform",
    },
    {
      label: "E-Commerce",
      path: "/ecommerce",
    },
  ];

  const handleExpertiseClick = () => {
    if (isMobile) {
      setShowExpertiseList(!showExpertiseList);
      setActiveImage(imageMap["/Expertise"]);
    }
  };

  const handleHomeClick = ()=>{
    navigate("/");
    onClose();
  }

  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } w-full h-screen fixed top-0 left-0 bg-white z-50 grid grid-cols-3 space-y-8 transition-all duration-500 ease-in-out shadow-md`}
    >
      <button
        onClick={onClose}
        className="absolute top-11 right-9 md:right-16 p-3 bg-[#e6e8ec] rounded-full hover:bg-bgRed hover:text-white transition-colors duration-300 z-50"
        style={{ pointerEvents: "auto" }}
      >
        <MdClose className="text-black hover:text-white size-4 md:size-6" />
      </button>
      <div className="w-full flex flex-col col-span-3 md:col-span-2 items-start space-y-3 px-5 md:px-16 relative">
        <img src="/logo.svg" alt="Logo" onClick={handleHomeClick} className="mb-10 size-14 md:size-16 cursor-pointer" />

        {/* Expertise with sublinks */}
        <div
          className="relative flex flex-col items-start "
          onMouseEnter={() => {
            if (!isMobile) {
              setShowExpertiseList(true);
              setActiveImage(imageMap["/Expertise"]);
            }
          }}
          onMouseLeave={() => {
            if (!isMobile) {
              setShowExpertiseList(false);
              setActiveImage(imageMap["default"]);
            }
          }}
        >
          <div
            onClick={handleExpertiseClick}
            className={`${linkStyle(
              "/Expertise"
            )} pr-4 flex flex-row space-x-4 items-center`}
          >
            <p>Expertise</p>
            {showExpertiseList ? (
              <FaChevronCircleUp className=" block md:hidden size-7" />
            ) : (
              <FaChevronCircleDown className=" block md:hidden size-7" />
            )}
          </div>
          {showExpertiseList && (
            <div
              className={`${
                isMobile
                  ? "w-full mt-2 flex flex-col space-y-2"
                  : "absolute left-full top-0 ml-0 bg-white p-4 pl-20  min-w-[450px]"
              } bg-white p-4 rounded-lg space-y-2 z-20`}
            >
              {expertiseList.map(({ label, path }, idx) => (
                <Link
                  key={idx}
                  to={path}
                  onClick={onClose}
                  className="block text-xl text-gray-800 font-medium hover:text-bgRed transition-colors duration-200 whitespace-nowrap"
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Other nav links */}
        <Link
          to="/"
          onClick={onClose}
          onMouseEnter={() => {
            setShowExpertiseList(false);
            setActiveImage(imageMap["/"]);
          }}
          onMouseLeave={() => setActiveImage(imageMap["default"])}
          className={linkStyle("/")}
        >
          Home
        </Link>

        <Link
          to="/about"
          onClick={onClose}
          onMouseEnter={() => {
            setShowExpertiseList(false);
            setActiveImage(imageMap["/about"]);
          }}
          onMouseLeave={() => setActiveImage(imageMap["default"])}
          className={linkStyle("/about")}
        >
          About
        </Link>
        <Link
          to="/work"
          onClick={onClose}
          onMouseEnter={() => {
            setShowExpertiseList(false);
            setActiveImage(imageMap["/work"]);
          }}
          onMouseLeave={() => setActiveImage(imageMap["default"])}
          className={linkStyle("/work")}
        >
          Work
        </Link>
        <Link
          to="/contact-us"
          onClick={onClose}
          onMouseEnter={() => {
            setShowExpertiseList(false);
            setActiveImage(imageMap["/contact-us"]);
          }}
          onMouseLeave={() => setActiveImage(imageMap["default"])}
          className={linkStyle("/contact-us")}
        >
          Contact
        </Link>
        <div className={`flex flex-col space-y-7 w-full  md:pt-10 ${showExpertiseList ? "pt-10" : "pt-72"}`}>
          <div className="flex space-x-5 justify-center md:justify-start">
            <FaInstagram className="text-2xl hover:text-red-600" />
            <FaFacebook className="text-2xl hover:text-red-600" />
            <FaLinkedin className="text-2xl hover:text-red-600" />
            <FaSquareXTwitter className="text-2xl hover:text-red-600" />
          </div>
          <button className="block md:hidden bg-bgRed text-white py-2 font-NeueBold rounded-2xl">
            <Link onClick={onClose} to={"/contact-us"}>
              Contact
            </Link>
          </button>
        </div>
      </div>
      <div className="hidden lg:block w-full h-full m-0 p-0">
        <img
          src={activeImage}
          alt="Menu Image"
          className="w-full h-screen object-cover m-0 p-0"
        />
      </div>
    </div>
  );
};

interface EnterpriseDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveDropdown: (value: "enterprise" | "work" | null) => void;
  isFullScreen?: boolean;
}

const EnterpriseDropdown: React.FC<EnterpriseDropdownProps> = ({
  isOpen,
  onClose,
  setActiveDropdown,
  isFullScreen = false,
}) => {
  const dropdownBaseClasses = `
    fixed top-[80px] left-0 right-0 h-[70vh] bg-white z-50
    grid grid-cols-1 md:grid-cols-3 gap-10 px-5 md:px-20 pt-14 shadow-lg
    animate-dropdown
  `;

  return (
    <div
      className="relative"
      onMouseEnter={() => setActiveDropdown("enterprise")}
    >
      <button
        className={`text-black hover:text-bgRed flex items-center font-NeueBold  justify-center hover:scale-105 transition-transform duration-200 ${
          isFullScreen ? "text-7xl" : "text-xl"
        }`}
      >
        Enterprise
        <FaAngleDown className={`ml-2 ${isOpen ? "rotate-180" : "rotate-0"}`} />
      </button>
      {isOpen && (
        <div
          className={
            isFullScreen
              ? "w-full bg-white flex flex-col items-center space-y-4 pt-4"
              : dropdownBaseClasses
          }
        >
          <div></div>
          <div
            className={`${
              isFullScreen ? "text-2xl" : "text-lg md:text-4xl"
            } flex flex-col space-y-3 col-span-2`}
          >
            <Link
              to="/travel-solution-development"
              onClick={onClose}
              className="block text-black hover:text-bgRed font-NeueBold hover:scale-105 transition-transform duration-200 text-start"
            >
              Travel Solution Development
            </Link>
            <Link
              to="/product-design"
              onClick={onClose}
              className="block text-black hover:text-bgRed font-NeueBold hover:scale-105 transition-transform duration-200 text-start"
            >
              Product and User Interface Design
            </Link>
            <Link
              to="/mobile-web-apps"
              onClick={onClose}
              className="block text-black hover:text-bgRed font-NeueBold hover:scale-105 transition-transform duration-200 text-start"
            >
              Mobile and Web App Development
            </Link>
            <Link
              to="/enterprise-platforms"
              onClick={onClose}
              className="block text-black hover:text-bgRed font-NeueBold hover:scale-105 transition-transform duration-200 text-start"
            >
              Custom Website Design
            </Link>
            <Link
              to="/enterprise-platform"
              onClick={onClose}
              className="block text-black hover:text-bgRed font-NeueBold hover:scale-105 transition-transform duration-200 text-start"
            >
              Enterprise Platforms
            </Link>
            <Link
              to="/ecommerce"
              onClick={onClose}
              className="block text-black hover:text-bgRed font-NeueBold hover:scale-105 transition-transform duration-200 text-start"
            >
              E-Commerce
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const navbarRef = useRef<HTMLDivElement>(null);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<
    "enterprise" | "work" | null
  >(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const handleMouseLeaveNavbar = (event: React.MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.relatedTarget as Node)
    ) {
      setActiveDropdown(null);
    }
  };

  const handleHomeClick = () => {
    navigate("/");
    closeMenus();
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenus = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleNavbar = () => {
    setShowNavbar(true);
    setIsMenuOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navBgColorByPath = [
    "/about",
    "/work",
    "/ecommerce",
    "/product-design",
    "/mobile-web-apps",
    "/strategy-design",
    "/contact-us",
    "/mobile-app",
    "/web-app",
    "/intraverse-africa",
    "/enterprise-platform",
    "/work/intraverse-africa",
    "/work/icarryGo",
    "/work/saroafrica",
    "/work/intraverse-africa2",
    "/travel-solution-development",
    "/work/odioPay",
    "/work/odioPay",
    "/work/ijeTravels",
    "/work/saroAfrica"
  ].includes(location.pathname);

  const navBgColor =
    navBgColorByPath || activeDropdown ? "bg-white" : "bg-bgPrimary";

  const linkStyle = (path: string) =>
    `text-black hover:text-bgRed font-NeueMedium text-xl ${
      location.pathname === path ? "border-t-4 border-red-500 pt-1" : ""
    } hover:scale-105 transition-transform duration-200`;

  return (
    <>
      <div
        ref={navbarRef}
        onMouseLeave={handleMouseLeaveNavbar}
        className={`${navBgColor} sticky z-50 transition-transform duration-300 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } grid grid-cols-3 items-center py-3 px-5 md:px-20`}
      >
        <img
          onClick={handleHomeClick}
          src="/logo.svg"
          alt="logo"
          className={`${
            !showNavbar && !isMenuOpen ? "hidden" : "flex"
          } size-16 cursor-pointer`}
        />
        <div className="md:hidden flex justify-end col-span-2">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className="hidden md:flex md:flex-row col-span-2 md:items-center md:static md:w-auto md:bg-transparent md:p-0 md:space-x-10">
          <Link
            to="/"
            onMouseEnter={() => setActiveDropdown(null)}
            onClick={closeMenus}
            className={linkStyle("/")}
          >
            Home
          </Link>
          <Link
            to="/about"
            onMouseEnter={() => setActiveDropdown(null)}
            onClick={closeMenus}
            className={linkStyle("/about")}
          >
            About
          </Link>
          <EnterpriseDropdown
            isOpen={activeDropdown === "enterprise"}
            onClose={closeMenus}
            setActiveDropdown={setActiveDropdown}
          />
          <Link
            to="/work"
            onMouseEnter={() => setActiveDropdown(null)}
            onClick={closeMenus}
            className={linkStyle("/work")}
          >
            Work
          </Link>
          <div className="pl-60">
            <Link
              to="/contact-us"
              onClick={closeMenus}
              className="relative  bg-bgRed px-6 py-3 text-white font-NeueMedium rounded-full overflow-hidden group hover:scale-105 transition-transform duration-200 "
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-black transition-all duration-300 ease-out origin-bottom"></div>
            </Link>
          </div>
        </div>
      </div>

      <FullScreenMenu isOpen={isMenuOpen} onClose={closeMenus} />

      {!showNavbar && (
        <button
          onClick={toggleNavbar}
          className="fixed top-11 md:top-4 right-10 md:right-20 z-50 p-3 bg-[#F5F9FF] text-white rounded-full shadow-md hover:bg-[rgb(220,222,224)] transition-colors duration-300"
          aria-label="Toggle navigation"
        >
          <FaBars size={24} className="text-black" />
        </button>
      )}
    </>
  );
}
