import React from "react";
import { timeline } from "./data/timeline";

export const TimelineSection = () => (
  <div className="bg-black border-y border-[#00A7E1]/30 py-16">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center text-[#00A7E1]">
        Professional Journey
      </h2>
      <div className="space-y-12">
        {timeline.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8 bg-black border border-[#00A7E1]/30 p-6 rounded-lg"
          >
            <div className="md:w-1/4">
              <div className="text-xl font-bold text-[#00A7E1]">
                {item.year}
              </div>
              <div className="text-white/60">{item.location}</div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold mb-2 text-[#00A7E1]">
                {item.title}
              </h3>
              <p className="text-white mb-4">{item.description}</p>
              <ul className="list-disc list-inside space-y-2 text-white">
                {item.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
