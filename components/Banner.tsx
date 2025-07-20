import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide pl-2 text-textGreen"
      >
        Hi, my name is
      </motion.h3>

      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl pl-6 lgl:text-4xl font-titleFont font-semibold flex flex-col"
      >
        Hassan Iqbal
        <span className="text-textDark mt-2 lgl:mt-4">
          Exploring data, solving problems, and powering decisions with AI.
        </span>
      </motion.h1>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] pl-6 text-textDark font-medium text-justify"
      >
        I’m a Data Science student at the University of Lahore with a passion for building data-driven solutions using Python, Pandas, Scikit-learn, Keras, and SQL. My work spans from classifying exoplanets and solar flares to developing voice biometrics and spam detection systems.
        <br />
        <Link href="https://www.linkedin.com/in/hassan-iqbal-31b469328/" target="_blank">
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn more
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </Link>
      </motion.p>

      <a href="https://huggingface.co/hassaniqbalhassan" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border ml-6 border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my models!
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
