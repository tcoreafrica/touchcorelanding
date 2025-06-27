import { useEffect, useState } from "react";
import { LuImport } from "react-icons/lu";
import AnimatedButton from "../components/common/AnimatedButton";
import Footer from "../components/common/Footer";
import Preloader from "../components/common/PreLoader";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define Zod schema for form validation
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  businessEmail: z.string().email("Invalid email address"),
  phoneNumber: z.string().regex(/^\+?[\d\s-]{10,}$/, "Invalid phone number"),
  comment: z.string().optional(),
  goal: z.string().min(10, "Goal must be at least 10 characters"),
  projectDesc: z
    .string()
    .min(20, "Project description must be at least 20 characters"),
});

export default function ContactUs() {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    phoneNumber: "",
    comment: "",
    goal: "",
    projectDesc: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof formData | "file", string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
  }, []);

  // Handle input changes for text fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Validate file size (e.g., max 5MB) and type
      if (selectedFile.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          file: "File size must be less than 5MB",
        }));
        toast.error("File size must be less than 5MB");
        setFile(null);
        return;
      }
      if (
        !["image/jpeg", "image/png", "application/pdf"].includes(
          selectedFile.type
        )
      ) {
        setErrors((prev) => ({
          ...prev,
          file: "Only JPEG, PNG, or PDF files are allowed",
        }));
        toast.error("Only JPEG, PNG, or PDF files are allowed");
        setFile(null);
        return;
      }
      setFile(selectedFile);
      setErrors((prev) => ({ ...prev, file: undefined }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form data with Zod
    const validation = formSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;
      // Convert string[] to string for each field
      const formattedErrors: Partial<
        Record<keyof typeof formData | "file", string>
      > = {};
      (Object.keys(fieldErrors) as (keyof typeof formData)[]).forEach((key) => {
        if (fieldErrors[key] && fieldErrors[key]!.length > 0) {
          formattedErrors[key] = fieldErrors[key]![0];
        }
      });
      setErrors(formattedErrors);
      setIsSubmitting(false);
      return;
    }

    // Prepare form data for EmailJS
    const emailData = {
      ...formData,
      file_attachment: file ? await toBase64(file) : null,
      file_name: file?.name || null,
    };

    try {
      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("Form submitted successfully!");
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        businessEmail: "",
        phoneNumber: "",
        comment: "",
        goal: "",
        projectDesc: "",
      });
      setFile(null);
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Utility to convert file to base64
  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="px-5 md:px-20 pt-12 md:pt-24 pb-5 flex flex-col space-y-16 bg-white">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

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
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`border-b text-lg font-NeueRoman text-[#95A7BE] bg-white outline-none border-[#95A7BE] w-full ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`border-b text-lg font-NeueRoman text-[#95A7BE] bg-white outline-none border-[#95A7BE] w-full ${
                errors.lastName ? "border-red-500" : ""
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="businessEmail"
              placeholder="Business email"
              value={formData.businessEmail}
              onChange={handleInputChange}
              className={`border-b text-lg font-NeueRoman text-[#95A7BE] bg-white outline-none border-[#95A7BE] w-full ${
                errors.businessEmail ? "border-red-500" : ""
              }`}
            />
            {errors.businessEmail && (
              <p className="text-red-500 text-sm mt-1">
                {errors.businessEmail}
              </p>
            )}
          </div>
          <div>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className={`border-b text-lg font-NeueRoman text-[#95A7BE] bg-white outline-none border-[#95A7BE] w-full ${
                errors.phoneNumber ? "border-red-500" : ""
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="col-span-1 sm:col-span-2">
            <input
              type="text"
              name="comment"
              placeholder="How did you hear about us?"
              value={formData.comment}
              onChange={handleInputChange}
              className="border-b text-lg font-NeueRoman text-[#95A7BE] bg-white outline-none border-[#95A7BE] w-full"
            />
          </div>
        </div>
      </div>

      {/* About Project Section */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <p className="font-NeueBold text-3xl sm:text-5xl col-span-1">
          About your <br /> project
        </p>
        <div className="flex flex-col col-span-3 space-y-8">
          <div>
            <input
              type="text"
              name="goal"
              placeholder="What do you want to achieve?"
              value={formData.goal}
              onChange={handleInputChange}
              className={`border-b text-lg font-NeueRoman text-[#95A7BE] bg-white outline-none border-[#95A7BE] w-full ${
                errors.goal ? "border-red-500" : ""
              }`}
            />
            {errors.goal && (
              <p className="text-red-500 text-sm mt-1">{errors.goal}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="projectDesc"
              placeholder="Tell us about your project"
              value={formData.projectDesc}
              onChange={handleInputChange}
              className={`border-b text-lg font-NeueRoman text-[#95A7BE] bg-white outline-none border-[#95A7BE] w-full ${
                errors.projectDesc ? "border-red-500" : ""
              }`}
            />
            {errors.projectDesc && (
              <p className="text-red-500 text-sm mt-1">{errors.projectDesc}</p>
            )}
          </div>

          {/* File Upload */}
          <div className="relative">
            <input
              type="file"
              accept="image/jpeg,image/png,application/pdf"
              onChange={handleFileChange}
              className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
            />
            <div className="flex cursor-pointer bg-[#F7FBFF] justify-center items-center border border-dashed border-[#95A7BE] rounded-md py-3 sm:py-6 w-full">
              <LuImport className="text-[#95A7BE] size-6" />
              <p className="text-[#95A7BE] text-sm sm:text-lg pl-3 text-center sm:text-left">
                {file
                  ? file.name
                  : "Attach any file you think would be useful."}
              </p>
            </div>
            {errors.file && (
              <p className="text-red-500 text-sm mt-1">{errors.file}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <AnimatedButton
              text={isSubmitting ? "Submitting..." : "Submit"}
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
            hello@touchcore.com.ng
          </p>
        </div>
        <div className="flex flex-col space-y-3">
          <p className="font-NeueBold text-3xl sm:text-5xl">Call us</p>
          <p className="text-bgRed text-lg font-NeueRoman">+2348170000560</p>
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
