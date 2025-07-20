import Image from "next/image";
import { motion } from "framer-motion";
import { SKILLS } from "@/config/constants";
import SectionTitle from "./SectionTitle";

type SkillProps = {
  name: string;
  x: number;
  y: number;
};

export const Skill = ({ name, x, y }: SkillProps) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
                py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
                lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
                xs:text-dark xs:dark:text-light xs:font-bold
                "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
    },
  }),
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="Technologies and Frameworks" titleNo="02" />
      <div>
        <div className="max-w-containerSmall mx-auto grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 grid-cols-9 gap-8 mt-4">
          {SKILLS.map(({ img, title }, i) => (
            <motion.div
              key={i}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={i}
              className="flex flex-col gap-y-2 justify-center items-center"
            >
              <div
                className="justify-center items-center p-6 rounded-full hover:scale-105 ease-in duration-300 w-28 h-28
                     shadow-[0px_8px_12px_4px_rgba(0,0,0,0.35)] border-3 border-solid border-gray-900"
              >
                <Image
                  src={img}
                  width={1000}
                  height={1000}
                  className="w-16 h-16"
                  alt={title}
                />
              </div>
              <div className="flex items-center justify-center text-center">
                <h3>{title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};