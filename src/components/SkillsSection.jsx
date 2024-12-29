import React from "react";
import { skills } from "./data/skills";

export const SkillsSection = () => (
  <div className="py-16 bg-black border-y border-[#00A7E1]/30">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center text-[#00A7E1]">
        Skills & Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="bg-black rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 border border-[#00A7E1]/30"
            >
              <div className="text-[#00A7E1] mb-4">
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {skill.title}
              </h3>
              <p className="text-white/70">{skill.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);
