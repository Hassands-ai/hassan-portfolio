import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
import { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>> & {
  (props: SVGProps<SVGSVGElement>): JSX.Element | null;
};

const ArrowForward = TiArrowForward as IconComponent;

const UOL = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        MS Data Science
        <span className="text-textGreen tracking-wide">@ University of Lahore</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Feb 2025 – Present
      </p>
      <ul className="mt-6 flex flex-col gap-3 text-justify">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <ArrowForward />
          </span>
          Enrolled in an advanced data science program covering Machine Learning, Deep Learning, Data Mining, NLP, and Big Data Analytics.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <ArrowForward />
          </span>
          Building predictive models using Python, Scikit-learn, Keras, TensorFlow, and integrating them into real-world solutions via APIs and dashboards.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <ArrowForward />
          </span>
          Working with real datasets for academic projects involving anomaly detection, classification, and automated decision-making.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <ArrowForward />
          </span>
          Gaining proficiency in tools like Power BI, Hadoop, Neo4j, KNIME, and Excel for data processing, visualization, and business intelligence.
        </li>
      </ul>
    </motion.div>
  );
};

export default UOL;
