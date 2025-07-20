import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Amazon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont text-justify">
        Machine Learning Engineer
        <span className="text-textGreen tracking-wide">@7 Kings Code</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        July 2024 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            {(TiArrowForward as any)()} {/* Type assertion */}
          </span>
          Developed scalable AI-driven applications and backend systems using Python, FastAPI, and Django REST Framework, integrating machine learning models into production-ready APIs.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            {(TiArrowForward as any)()}
          </span>
          Built secure RESTful APIs in Python (FastAPI/Django REST) to serve machine learning models and automate AI-driven workflows for production applications.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            {(TiArrowForward as any)()}
          </span>
          Optimized data pipelines, model inference APIs, and asynchronous processing to ensure high performance and low-latency responses for AI-driven systems.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            {(TiArrowForward as any)()}
          </span>
          Implemented secure authentication and role-based access control in ML-powered APIs, ensuring data privacy and secure model access for users.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            {(TiArrowForward as any)()}
          </span>
          Collaborated within Agile teams to develop, review, and deploy production-grade ML solutions, ensuring robust model integration, API scalability, and reliable cloud deployment.
        </li>
      </ul>
    </motion.div>
  );
};

export default Amazon;