import React, { useState } from "react";
import {
  MapPin,
  Globe2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { TimelineSection } from "./TimelineSection";
import { SkillsSection } from "./SkillsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { faqs } from "./data/faqs";
import { blogs } from "./data/blogs";
import { achievements } from "./data/achievements";

const AboutPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="bg-[#00A7E1] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-black">
            <h1 className="text-5xl relative font-bold mb-6">
              Shakhzod Tursunov <span className="text-white text-[20px] absolute top-[-5px]">Bart</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              A visionary leader in AI solutions and cross-cultural business
              management, bridging technological innovation with global
              expertise.
            </p>
          </div>
        </div>
      </div>

      {/* Personal Introduction */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-[#00A7E1]">
              Personal Journey
            </h2>
            <div className="space-y-4 text-white">
              <p>
                Born and raised in Tashkent, Uzbekistan, I developed an early
                passion for connecting people across cultural boundaries. My
                journey began with learning multiple languages and understanding
                diverse perspectives.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-black border border-[#00A7E1] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-[#00A7E1]" />
                Current Location
              </h3>
              <p className="text-white">Phnom Penh, Cambodia</p>
            </div>
            <div className="bg-black border border-[#00A7E1] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Globe2 className="w-5 h-5 mr-2 text-[#00A7E1]" />
                Global Impact
              </h3>
              <p className="text-white">Serving clients in 20+ countries</p>
            </div>
          </div>
        </div>
      </div>

      <TimelineSection />
      <SkillsSection />
      <TestimonialsSection />

      {/* Achievements */}
      <div className="py-16 bg-black border-y border-[#00A7E1]/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#00A7E1]">
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-black border border-[#00A7E1]/30 rounded-xl p-6"
              >
                <div className="text-[#00A7E1] font-semibold mb-2">
                  {achievement.year}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {achievement.title}
                </h3>
                <p className="text-white/70">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blogs */}
      <div className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#00A7E1]">
            Latest Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-black border border-[#00A7E1]/30 rounded-xl overflow-hidden"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {blog.title}
                  </h3>
                  <p className="text-white/70 mb-4">{blog.preview}</p>
                  <button className="text-[#00A7E1] hover:text-[#00A7E1]/80">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="py-16 bg-black border-t border-[#00A7E1]/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#00A7E1]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#00A7E1]/30 rounded-xl"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center text-white"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#00A7E1]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#00A7E1]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-white/70">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-[#00A7E1]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">
            Let's Work Together
          </h2>
          <p className="text-xl mb-8 text-black/80">
            Let's discuss how we can work together to create impactful solutions
            tailored to your needs.
          </p>
          <button className="bg-black text-white hover:bg-black/90 px-8 py-3 rounded-lg font-semibold transition-colors">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
