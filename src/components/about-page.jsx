import React, { useState } from 'react';
import { Bot, Workflow, Users, Globe2, PenTool, ChevronDown, ChevronUp, ExternalLink, Star } from 'lucide-react';

const AboutPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const skills = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Chatbot Development",
      description: "Leveraging cutting-edge AI technologies to create sophisticated chatbots with natural conversation abilities. Specializing in custom solutions for customer service, lead generation, and internal processes."
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Process Automation",
      description: "Expert implementation of automation workflows using Make.com, Zapier, and custom solutions. Streamlining operations and reducing manual tasks by up to 70%."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Project Management",
      description: "Leading complex projects from inception to delivery, ensuring optimal resource allocation, timeline adherence, and stakeholder satisfaction."
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Global Team Leadership",
      description: "Successfully managing distributed teams across multiple time zones, fostering collaboration and maintaining high productivity through effective communication strategies."
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Content Creation",
      description: "Creating compelling content that drives engagement and conversions, from AI-powered copywriting to multimedia content strategies."
    }
  ];

  const projects = [
    {
      title: "ApexBart Solutions",
      brief: "An innovative agency specializing in AI tools, automation, and connecting global talent with opportunities.",
      link: "www.apexbart.xyz",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Best Future Vacancies Project",
      brief: "A recruitment project connecting Uzbek professionals with job opportunities in Europe.",
      link: "#",
      image: "/api/placeholder/400/300"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "AI Project Manager at TechCorp",
      text: "Bart's expertise in AI chatbot development transformed our customer service operations. His ability to understand complex requirements and deliver innovative solutions is exceptional.",
      rating: 5
    },
    {
      name: "Michael Petrov",
      role: "CEO of GlobalHire",
      text: "Working with Bart on the Best Future Vacancies project was a game-changer. His understanding of both technical and cultural aspects made the project a huge success.",
      rating: 5
    },
    {
      name: "Lisa Wong",
      role: "Head of Operations, AutomateNow",
      text: "The automation workflows Bart implemented saved us countless hours and significantly reduced errors. His attention to detail and problem-solving skills are outstanding.",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      role: "Director of Global Talent",
      text: "Bart's leadership of our distributed team was exemplary. He bridged cultural gaps effortlessly and kept everyone aligned with our goals.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      role: "Content Strategy Director",
      text: "The content strategies Bart developed for us were innovative and highly effective. His multilingual expertise added tremendous value to our global campaigns.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What industries do you primarily work with?",
      answer: "I work across various industries including technology, recruitment, education, and e-commerce. My expertise in AI and automation can be applied to any sector looking to improve efficiency and innovation."
    },
    {
      question: "How do you handle projects across different time zones?",
      answer: "I use a combination of asynchronous communication tools, flexible scheduling, and clear project management methodologies to ensure smooth collaboration across time zones."
    },
    {
      question: "What languages do you work in?",
      answer: "I'm fluent in English, Russian, Uzbek, and Chinese, allowing me to serve clients globally and manage multilingual projects effectively."
    }
  ];

  const blogs = [
    {
      title: "The Future of AI Chatbots in Customer Service",
      preview: "Exploring how AI-powered chatbots are revolutionizing customer service and what this means for businesses in 2024.",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Building Effective Global Teams",
      preview: "Key strategies for managing and motivating distributed teams across different time zones and cultures.",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Automation Success Stories",
      preview: "Real-world examples of how process automation has transformed business operations and improved efficiency.",
      image: "/api/placeholder/400/200"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Skills & Services */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 border border-gray-700">
                <div className="text-blue-400 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects/Portfolio */}
      <div className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900 rounded-xl overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.brief}</p>
                  <a href={project.link} className="text-blue-400 flex items-center hover:text-blue-300">
                    Visit Project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="text-sm">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mini-Blogs */}
      <div className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div key={index} className="bg-gray-900 rounded-xl overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                  <p className="text-gray-400 mb-4">{blog.preview}</p>
                  <button className="text-blue-400 hover:text-blue-300">Read More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-xl">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's discuss how we can work together to create impactful solutions tailored to your needs.
          </p>
          <button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;