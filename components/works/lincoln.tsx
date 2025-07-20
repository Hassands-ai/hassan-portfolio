import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
import { ComponentType, SVGProps } from "react";

// Define a custom type for the icon to ensure JSX compatibility
type IconComponent = ComponentType<SVGProps<SVGSVGElement>> & {
  (props: SVGProps<SVGSVGElement>): JSX.Element | null;
};

// Use type assertion to align TiArrowForward with IconComponent
const ArrowForward = TiArrowForward as IconComponent;

const LincolnCorner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        ML Research Intern
        <span className="text-textGreen tracking-wide">@Lincoln Corner Lahore</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Oct 2023 - May 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3 text-justify">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <ArrowForward />
          </span>
          Conducted research on astronomy-based datasets like NASA Kepler, PHL HWC, and ESA for exoplanet detection and habitability classification using machine learning techniques.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <ArrowForward />
          </span>
          Engineered end-to-end data pipelines including data cleaning, feature extraction, model training, and evaluation using CNNs, Random Forest, MLP, and ensemble methods.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <ArrowForward />
          </span>
          Co-authored a research paper titled “Harnessing Modern AI in Exoplanet Habitability Assessment,” published in a peer-reviewed journal.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <ArrowForward />
          </span>
          Developed anomaly detection pipelines and created custom data visualizations for time-series data to identify hidden patterns in astronomical datasets.
        </li>
      </ul>
    </motion.div>
  );
};

export default LincolnCorner;