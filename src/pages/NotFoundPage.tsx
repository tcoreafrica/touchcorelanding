import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Preloader from "../components/common/PreLoader";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl md:text-8xl font-bold text-black mb-4 animate-bounce">
        404
      </h1>
      <h2 className="text-2xl md:text-4xl font-semibold text-black mb-6">
        Oops! Page Not Found
      </h2>
      <p className="text-lg md:text-xl text-black mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved. Let's get
        you back on track!
      </p>
      <button
        onClick={() => navigate(-1)}
        className="bg-bgRed text-white font-medium py-3 px-6 rounded-full hover:bg-bgRed/60 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Go Back
      </button>
      <div className="mt-12">
        <a
          href="/"
          className="text-black hover:text-black/40 transition duration-300"
        >
          Return to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
