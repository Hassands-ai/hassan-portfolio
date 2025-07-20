import { useState } from "react";
import SectionTitle from "./SectionTitle";
import LincolnCorner from "./works/lincoln";
import UOL from "./works/uol"; // Replace with your actual file
import UniversityEducation from "./works/UniversityEducation"; // Rename file to bsMath if needed

const Experience = () => {
  const [activeTab, setActiveTab] = useState("UOL");

  const tabs = [
    { id: "UOL", label: "UOL (MS Data Science)", component: <UOL /> },
    { id: "LincolnCorner", label: "Lincoln Corner", component: <LincolnCorner /> },
    { id: "UniversityEdu", label: "University of Education", component: <UniversityEducation /> },
  ];

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Experience & Education" titleNo="03" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-48 flex flex-col">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
        <div className="w-full">
          {tabs.find((tab) => tab.id === activeTab)?.component}
        </div>
      </div>
    </section>
  );
};

export default Experience;
