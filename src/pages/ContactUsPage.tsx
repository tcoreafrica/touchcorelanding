import { useEffect, useState } from "react"; // Import useState
import { LuImport } from "react-icons/lu";
import AnimatedButton from "../components/common/AnimatedButton";
import Footer from "../components/common/Footer";
import Preloader from "../components/common/PreLoader";

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    phoneNumber: "",
    comment: "",
    goal: "",
    budget: "",
    projectDesc: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  // Handle input changes for text fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle budget button selection
  const handleBudgetSelect = (budget: string) => {
    setFormData((prev) => ({
      ...prev,
      budget,
    }));
  };

  // Handle form submission (example)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add logic to submit form data (e.g., API call)
  };

  return (
    <div className="px-5 md:px-20 pt-12 md:pt-24 pb-5 flex flex-col space-y-16 bg-white">
      {/* Heading */}
      <div className="flex flex-col space-y-1 items-start mb-9 w-full">
        <p className="font-NeueBold text-5xl sm:text-5xl md:text-8xl">
          Let’s get <br />
          to work
        </p>
      </div>

      {/* About You Section */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <p className="font-NeueBold text-3xl sm:text-5xl col-span-1">
          About you
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 col-span-3 gap-12">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="border-b text-lg font-NeueRoman text-[#95A7BE] bg-white outline-none border-[#95A7BE]"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="border-b text-lg font-NeueRoman text-[#95A7BE] bg-white outline-none border-[#95A7BE]"
          />
          <input
            type="text"
            name="businessEmail"
            placeholder="Business email"
            value={formData.businessEmail}
            onChange={handleInputChange}
            className="border-b text-lg font-NeueRoman text-[#95A7BE] bg-white outline-none border-[#95A7BE]"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="border-b text-lg font-NeueRoman text-[#95A7BE] bg-white outline-none border-[#95A7BE]"
          />
          <input
            type="text"
            name="comment"
            placeholder="How did you hear about us?"
            value={formData.comment}
            onChange={handleInputChange}
            className="col-span-1 sm:col-span-2 border-b text-lg font-NeueRoman text-[#95A7BE] bg-white outline-none border-[#95A7BE]"
          />
        </div>
      </div>

      {/* About Project Section */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <p className="font-NeueBold text-3xl sm:text-5xl col-span-1">
          About your <br /> project
        </p>
        <div className="flex flex-col col-span-3 space-y-8">
          <input
            type="text"
            name="goal"
            placeholder="What do you want to achieve?"
            value={formData.goal}
            onChange={handleInputChange}
            className="border-b text-lg font-NeueRoman text-[#95A7BE] bg-white outline-none border-[#95A7BE]"
          />

          {/* Budget */}
          {/* <div className="flex flex-col space-y-2">
            <p className="text-lg font-NeueRoman text-[#95A7BE]">
              What is your budget?
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Up to $50,000",
                "$50,000 to $100,000",
                "$100,000 to $250,000",
                "Over $250,000",
                "Can’t disclose",
              ].map((budget, idx) => (
                <button
                  key={idx}
                  onClick={() => handleBudgetSelect(budget)}
                  className={`rounded-full text-sm font-NeueMedium py-2 sm:py-3 px-5 border ${
                    formData.budget === budget
                      ? "bg-bgRed text-white border-bgRed"
                      : "bg-white border-black"
                  }`}
                >
                  {budget}
                </button>
              ))}
            </div>
          </div> */}

          <input
            type="text"
            name="projectDesc"
            placeholder="Tell us about your project"
            value={formData.projectDesc}
            onChange={handleInputChange}
            className="border-b text-lg font-NeueRoman text-[#95A7BE] bg-white outline-none border-[#95A7BE]"
          />

          {/* File Upload */}
          <div className="flex cursor-pointer bg-[#F7FBFF] justify-center items-center border border-dashed border-[#95A7BE] rounded-md py-3 sm:py-6 w-full">
            <LuImport className="text-[#95A7BE] size-6" />
            <p className="text-[#95A7BE] text-sm sm:text-lg pl-3 text-center sm:text-left">
              Attach any file you think would be useful.
            </p>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <AnimatedButton
              text="Submit"
              onClick={() =>
                handleSubmit(new Event("submit") as unknown as React.FormEvent)
              }
            />
          </div>

          {/* Privacy Note */}
          <p className="text-lg font-NeueRoman w-full mt-10">
            The information above will be stored only for business purposes.
            Check our{" "}
            <span className="cursor-pointer text-bgRed underline">
              Privacy Policy
            </span>{" "}
            for more info.
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row justify-between gap-10 pt-12">
        <div className="flex flex-col space-y-3">
          <p className="font-NeueBold text-3xl sm:text-5xl">Say hello</p>
          <p className="text-bgRed text-lg font-NeueRoman">
            info@touchcore.com.ng
          </p>
        </div>
        <div className="flex flex-col space-y-3">
          <p className="font-NeueBold text-3xl sm:text-5xl">Call us</p>
          <p className="text-bgRed text-lg font-NeueRoman">08170000560</p>
        </div>
        <div className="flex flex-col space-y-3">
          <p className="font-NeueBold text-3xl sm:text-5xl">Our office</p>
          <p className="text-bgRed text-lg font-NeueRoman">
            14b Wole Ariyo, Lekki Phase One. Lagos, Nigeria.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
