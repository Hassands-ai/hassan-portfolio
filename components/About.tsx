import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4 text-justify">
          <p>
            I&rsquo;m Hassan Iqbal, a passionate Data Science student at the University of Lahore with a strong foundation in statistics, machine learning, and data analysis.
          </p>
          <p>
            I have hands-on experience working with Python, Pandas, NumPy, Scikit-learn, Keras, and SQL. My projects include Exoplanet Classification, Solar Flare Detection, Voice Biometrics, and Spam Email Detection, where I applied techniques in NLP, anomaly detection, and supervised learning.
          </p>
          <p>
            I&rsquo;m keen on solving real-world problems using AI, especially in domains like astronomy, cybersecurity, and intelligent automation. I continuously contribute to open-source work and model development on platforms like GitHub and Hugging Face.
          </p>
        </div>

        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/5 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
