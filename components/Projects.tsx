import {
  astronomicalImg,
  trueAIImg,
  callAgentImg,
  intelCamImg,
  cityRoadImg,
  restaurantImg,
  portfolioImg,
  paw
} from "@/public/assets";

import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";
const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="My Projects" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">

        {/* 1. Astronomical Exoplanet Classification */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a href="#" target="_blank" className="w-full xl:w-1/2 h-auto relative group">
            <Image
              src={astronomicalImg}
              alt="Astronomical Project"
              className="w-full h-full object-contain"
            />
            <div className="absolute w-full h-full rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
            <h3 className="text-2xl font-bold">Astronomical Exoplanet Classification</h3>
            <p className="text-sm md:text-base bg-bodyColor p-6 rounded-md xl:-mr-16">
              Conducted exoplanet classification and habitability assessment using CNNs, autoencoders, and ensemble methods on NASA Kepler, PHL HWC, data.gov, and ESA datasets, achieving 95% detection accuracy. Co-authored a peer-reviewed paper on AI-driven exoplanet habitability.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-5 justify-end">
              <li>Python</li>
              <li>TensorFlow</li>
              <li>PyTorch</li>
              <li>Autoencoders</li>
              <li>Ensemble Methods</li>
            </ul>
          </div>
        </div>



        {/* 4. Intelligent Anomaly Detection Camera */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            href="https://huggingface.co/"
            target="_blank"
            className="w-full xl:w-1/2 h-auto relative group"
          >
            <Image
              src={intelCamImg}
              alt="Intelligent Camera"
              className="w-full h-full object-contain"
            />
            <div className="absolute w-full h-full rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-start text-left xl:ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
            <h3 className="text-2xl font-bold">Intelligent Anomaly Detection Camera</h3>
            <p className="text-sm md:text-base bg-bodyColor p-6 rounded-md">
              Trained YOLOv5 on DCSASS dataset to detect anomalies like robbery, accidents, and fires. Integrated Twilio for automated calls to police, rescue, or fire brigade and Freshdesk for ticket creation, mirroring AI-powered customer support agent workflows.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-5">
              <li>OpenCV</li>
              <li>YOLOv5</li>
              <li>Twilio</li>
              <li>Freshdesk API</li>
              <li>Python</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                href="https://github.com/"
                className="hover:text-textGreen duration-300"
              >
                {TbBrandGithub({})}
              </a>
              <a
                href="https://huggingface.co/"
                className="hover:text-textGreen duration-300"
              >
                {RxOpenInNewWindow({})}
              </a>
            </div>
          </div>
        </div>

        {/* 5. City Road Network Optimization */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            href="https://github.com/YourUsername/city-road-optimization"
            target="_blank"
            className="w-full xl:w-1/2 h-auto relative group"
          >
            <Image
              src={cityRoadImg}
              alt="City Road Optimization"
              className="w-full h-full object-contain"
            />
            <div className="absolute w-full h-full rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
            <h3 className="text-2xl font-bold">City Road Network Optimization</h3>
            <p className="text-sm md:text-base bg-bodyColor p-6 rounded-md xl:-mr-16">
              Implemented a shortest-path routing system using Uniform Cost Search, Dijkstra&apos;s algorithm, and Knowledge Representation and Reasoning (KRR) techniques, reducing average travel time by 20% in simulated city traffic scenarios.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-5 justify-end">
              <li>Python</li>
              <li>Neo4j</li>
              <li>Dijkstra&apos;s Algorithm</li>
              <li>Uniform Cost Search</li>
              <li>KRR</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                href="https://github.com/YourUsername/city-road-optimization"
                className="hover:text-textGreen duration-300"
              >
                {TbBrandGithub({})}
              </a>
              <a
                href="https://github.com/YourUsername/city-road-optimization"
                className="hover:text-textGreen duration-300"
              >
                {RxOpenInNewWindow({})}
              </a>
            </div>
          </div>
        </div>

        {/* 6. Restaurant Management System */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            className="w-full xl:w-1/2 h-auto relative group"
          >
            <Image
              src={restaurantImg}
              alt="Restaurant Management System"
              className="w-full h-full object-contain"
            />
            <div className="absolute w-full h-full rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-start text-left xl:ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
            <h3 className="text-2xl font-bold">Restaurant Management System</h3>
            <p className="text-sm md:text-base bg-bodyColor p-6 rounded-md">
              Developed an AI-driven system for menu creation and dish recommendations using predicate logic, production rules, frames, Neo4j, and RAG. Improved user engagement by 25% with personalized suggestions based on seasonality, trends, and promotions.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-5">
              <li>Neo4j</li>
              <li>MongoDB</li>
              <li>Python</li>
              <li>RAG</li>
              <li>Predicate Logic</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                href="https://github.com/"
                className="hover:text-textGreen duration-300"
              >
                {TbBrandGithub({})}
              </a>
              <a
                href="https://github.com/"
                className="hover:text-textGreen duration-300"
              >
                {RxOpenInNewWindow({})}
              </a>
            </div>
          </div>
        </div>

        {/* 8. Mouse Paw Detection System */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            href="https://huggingface.co/"
            target="_blank"
            className="w-full xl:w-1/2 h-auto relative group"
          >
            <Image
              src={paw}
              alt="Mouse Paw Detection System"
              className="w-full h-full object-contain"
            />
            <div className="absolute w-full h-full rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-start text-left xl:ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Project</p>
            <h3 className="text-2xl font-bold">Mouse Paw Detection System</h3>
            <p className="text-sm md:text-base bg-bodyColor p-6 rounded-md">
              Fine-tuned YOLOv11n for mouse paw detection, achieving 92% mAP after custom annotation of 1,000+ images for behavioral analysis. Enhanced precision in tracking paw movements for neuroscience research applications.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-5">
              <li>YOLOv11n</li>
              <li>Python</li>
              <li>OpenCV</li>
              <li>PyTorch</li>
              <li>Behavioral Analysis</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                href="https://huggingface.co/spaces/"
                className="hover:text-textGreen duration-300"
              >
                {TbBrandGithub({})}
              </a>
              <a
                href="https://huggingface.co/spaces/"
                className="hover:text-textGreen duration-300"
              >
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;


