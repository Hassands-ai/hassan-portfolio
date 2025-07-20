import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
import { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>> & {
  (props: SVGProps<SVGSVGElement>): JSX.Element | null;
};

const ArrowForward = TiArrowForward as IconComponent;

const UniversityEducation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        BS Mathematics
        <span className="text-textGreen tracking-wide">@ University of Education, Lahore</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Nov 2019 – May 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3 text-justify">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <ArrowForward />
          </span>
          Completed a 4-year degree in Mathematics with a strong focus on statistics, algebra, calculus, and numerical analysis — laying the foundation for advanced machine learning and data science.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <ArrowForward />
          </span>
          Built foundational programming skills using Python and MATLAB for solving mathematical and data-driven problems.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <ArrowForward />
          </span>
          Developed strong analytical thinking, problem-solving, and data interpretation skills applicable in AI and data science fields.
        </li>
      </ul>
    </motion.div>
  );
};

export default UniversityEducation;
