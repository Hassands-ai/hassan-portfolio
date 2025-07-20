import { IoMdMail } from "react-icons/io";
import { SiHuggingface } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";
import Image from "next/image";
import React from "react";

// Type assertion to ensure icons are treated as valid React components
const IoMdMailIcon = IoMdMail as unknown as React.FC;
const SiHuggingfaceIcon = SiHuggingface as unknown as React.FC;
const SlSocialLinkedinIcon = SlSocialLinkedin as unknown as React.FC;

const Footer: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:mrhassaniqbal67@gmail.com";
  };

  const handleExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      {/* Email */}
      <button
        onClick={handleEmailClick}
        className="w-10 h-10 text-xl bg-bodyColor border border-zinc-700 
        hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center 
        justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 
        transition-all duration-300"
      >
        <IoMdMailIcon />
      </button>

      {/* LinkedIn */}
      <button
        onClick={() => handleExternalLink("https://www.linkedin.com/in/hassan-iqbal-31b469328/")}
        className="w-10 h-10 text-xl bg-bodyColor border border-zinc-700 
        hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center 
        justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 
        transition-all duration-300"
      >
        <SlSocialLinkedinIcon />
      </button>

      {/* Hugging Face */}
      <button
        onClick={() => handleExternalLink("https://huggingface.co/hassaniqbalhassan")}
        className="w-10 h-10 text-xl bg-bodyColor border border-zinc-700 
        hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center 
        justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 
        transition-all duration-300"
      >
        <SiHuggingfaceIcon />
      </button>

      {/* Kaggle */}
      <button
        onClick={() => handleExternalLink("https://www.kaggle.com/fatimiya")}
        className="w-10 h-10 bg-bodyColor border border-zinc-700 
        hover:border-textGreen rounded-full inline-flex items-center 
        justify-center hover:-translate-y-2 transition-all duration-300"
      >
        <Image
          src="/assets/images/kaggle.png" // ✅ Ensure this image is present in the public path
          alt="Kaggle"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default Footer;
