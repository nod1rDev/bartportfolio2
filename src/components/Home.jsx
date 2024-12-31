import { useState, useEffect } from "react";

import Spline from "@splinetool/react-spline";
import { projects, skills } from "./utils";
import { Link } from "react-router-dom";
import ChatBot from "./ChatBot";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const singaporeTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Singapore",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(singaporeTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row text-white w-full bg-[#000] h-full md:h-screen gap-4 p-2 md:p-6">
      <div className="flex flex-col md:gap-4 w-full md:w-1/4 justify-between">
        <div className="flex-0 h-auto md:h-2/3 flex flex-col border border-[#101010] justify-between bg-[#101010] p-5 rounded-[23px]">
          <h1 className=" text-[4rem] md:text-[4.5rem] tracking-tighter  leading-[3.6rem]  md:leading-[5rem] mb-4">
            Hello! <br /> I{"'"}m{" "}
            <span className="font-bold text-[4rem] md:text-[5.5rem]">Bart</span>
          </h1>
          <p className="mb-6 text-[#FFFFFFB3] text-[0.8rem] md:text-[0.8vw] max-w-full md:max-w-[95%] font-[500]">
            The founder of{" "}
            <span className="text-white">ApexBart Solutions</span>. I specialize
            in delivering complete, end-to-end solutions in voice data,
            chatbots, and digital transformation. With experience managing 20+
            multilingual voice recording projects and building AI-powered tools,
            I bridge the gap between humans and technology to help businesses
            scale globally.
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((e) => (
              <span
                key={e}
                className="border cursor-pointer text-[11px] md:text-[0.56vw] border-slate-400 hover:bg-gray-700 hover:bg-opacity-[30%] transition-all duration-700 px-3 py-1 rounded-[24px]"
              >
                {e}
              </span>
            ))}
          </div>
        </div>
        <div
          className="flex-0 bg-[#101010] border border-[#101010] flex justify-between rounded-[23px] h-1/6 bg-cover bg-center mt-4 md:mt-0"
          style={{
            backgroundImage:
              "url('https://framerusercontent.com/images/HFLO9jxwhZXs3FhX4jM8zPTcs.png')",
          }}
        >
          <div id="Location" className="p-5">
            <p className="font-bold text-[1.2rem]">Singapore, SG</p>
            <p className="text-[#FFFFFFB3] text-[0.9rem] font-[500]">
              {time} GMT+8 Local time
            </p>
          </div>
          <div className="h-full flex items-center justify-center">
            <div
              id="oq_nuqta"
              className="w-2 h-2 mr-[70px] mt-[25px] md:mt-0 bg-white rounded-full"
            ></div>
          </div>
        </div>
        <div className="flex-0 bg-[#101010] border border-[#101010] p-5 rounded-[23px] h-[14%] items-center flex justify-between mt-4 md:mt-0">
          <Link className="w-[56%]" to="/about">
            <button className="px-5  py-[16px] max-h-[56px] w-[100%] hover:shadow-white shadow-md transition-all duration-700 rounded-[30px] bg-white text-black text-center text-[1.1rem] font-[700]">
              About Me
            </button>
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#ffffff1a]  w-[40%]  h-[56px]  max-h-[56px] py-[16px] font-bold text-[0.8rem] rounded-[30px]  hover:border hover:border-white transition-all duration-700 hover:bg-opacity-[50%]"
          >
            Contact me
          </button>
        </div>
      </div>
      <div className="h-[650px] md:h-full border bg-[#101010] border-[#101010] w-full md:w-1/2 p-5 rounded-[23px]">
        <Spline
          scene="https://prod.spline.design/cSx-xLZzhArfk7bC/scene.splinecode"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            borderRadius: "23px",
          }}
        />
      </div>
      <div className="flex flex-col w-full md:w-1/4 gap-4 justify-between">
        <div
          id="logos"
          className="flex-0 min-h-[60%]  md:pb-0 flex flex-col border rounded-[23px] bg-[#101010] border-[#101010] items-center justify-center"
        >
          <span className="font-bold mt-[1rem] mb-3 text-[2rem]  text-[#FFFFFFB3]">
            Contacts
          </span>
          <div className="containerr">
            <div className="hexagonArea">
              <div className="hexagon group">
                <a href={"https://t.me/whynotbart"}>
                  <img
                    src="/telegram.png"
                    className="w-[48px] h-[48px]"
                    alt=""
                  />
                </a>
                <div className="hidden transition-all duration-700 group-hover:block text-[1rem] font-bold">
                  Telegram
                </div>
              </div>
              <div className="hexagon group">
                <a
                  href="https://www.instagram.com/cobrabart/"
                  className="flex flex-col items-center"
                >
                  <img src="/insta.png" className="w-[48px] h-[48px]" alt="" />
                  <div className="hidden transition-all duration-700 group-hover:block text-[1rem] font-bold">
                    Instagram
                  </div>
                </a>
              </div>
            </div>
            <div className="hexagonArea lasta">
              <div className="hexagon group">
                <a
                  href="https://x.com/apexbart"
                  className="flex flex-col items-center"
                >
                  <img src="/twitterr.svg" className="" alt="" />
                  <div className="hidden transition-all duration-700 group-hover:block text-[1rem] font-bold">
                    Twitter
                  </div>
                </a>
              </div>
              <div className="hexagon group">
                <a
                  href="https://apexbart.xyz"
                  className="flex flex-col items-center"
                >
                  <img src="/logo.svg" className="w-[48px] h-[48px]" alt="" />
                  <div className="hidden transition-all duration-700 group-hover:block text-[1rem] font-bold">
                    ApexBart
                  </div>
                </a>
              </div>
              <div className="hexagon group">
                <a
                  href="https://medium.com/@bartyanyan"
                  className="flex flex-col items-center"
                >
                  <img
                    src="/medium.png"
                    className="bg-white rounded-[7px] w-[48px] h-[48px]"
                    alt=""
                  />
                  <div className="hidden transition-all duration-700 group-hover:block text-[1rem] font-bold">
                    Medium
                  </div>
                </a>
              </div>
            </div>
            <div className="hexagonArea translate-y-[-40px] md:translate-y-[-48px]">
              <div className="hexagon group">
                <a href="/qr.png" className="flex flex-col items-center">
                  <img src="/weChat.png" className="w-[48px] h-[48px]" alt="" />
                  <div className="hidden transition-all duration-700 group-hover:block text-[1rem] font-bold">
                    WeChat
                  </div>
                </a>
              </div>
              <div className="hexagon group">
                <a
                  href="https://www.facebook.com/profile.php?id=61550044081295"
                  className="flex flex-col items-center"
                >
                  <img
                    src="/facebook.png"
                    className="w-[48px] bg-white rounded-[7px] h-[48px]"
                    alt=""
                  />
                  <div className="hidden transition-all duration-700 group-hover:block text-[1rem] font-bold">
                    Facebook
                  </div>
                </a>
              </div>
            </div>
          </div>
          <span className="font-bold  translate-y-[-30px] md:translate-y-[-40px] text-center max-w-[90%]  text-[0.8rem] text-[#FFFFFFB3]">
            Let’s discuss how we can work together to create impactful solutions
            tailored to your needs.
          </span>
        </div>
        <div className="flex-0 min-h-[36%] border rounded-[23px] p-6 bg-[#101010] border-[#101010] overflow-y-auto">
          <h3 className="text-[1.4rem] text-center font-bold text-[#FFFFFF] mb-4">
            Latest projects
          </h3>

          <div className="flex flex-col gap-3">
            {projects.map((e, i) => (
              <a key={i} href={e.link}>
                <div className="flex gap-3 relative group cursor-pointer rounded-[12px] p-[8px] hover:bg-[#2e2e2e] transition-all duration-700 items-center">
                  <div className="absolute top-5 hidden group-hover:block left-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="36"
                      height="36"
                      fill="rgba(246,241,241,1)"
                    >
                      <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
                    </svg>
                  </div>
                  <img
                    src={e.image}
                    className="w-[56px] group-hover:bg-black group-hover:bg-opacity-[30%] rounded-[12px] h-[56px]"
                    alt=""
                  />
                  <div className="flex flex-col ">
                    <span className="font-bold">{e.title}</span>
                    <span className="text-[#FFFFFFB3] text-[0.8rem]">
                      {e.description}
                    </span>{" "}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed framer inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-[#1a1a1a] p-4 md:p-12 rounded-[32px] shadow-lg max-w-[340px] md:max-w-[500px] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-[2rem] md:text-[5rem] font-bold text-center mb-4">
              Say hi!
            </h2>
            <p className="mb-8 text-[#FFFFFFB3] md:text-center">
              Approximate response time: 1-2 days.
            </p>
            <form onSubmit={() => setIsModalOpen(false)}>
              <input
                type="email"
                required
                placeholder="Email"
                className="w-full p-3 mb-4 bg-[#333] rounded-xl"
              />
              <textarea
                required
                placeholder="How can I help you?"
                className="w-full p-3 mb-4 bg-[#333] rounded-xl"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="w-full py-2 bg-white text-black rounded-xl font-bold"
              >
                Send
              </button>
            </form>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full py-2 bg-red-500 text-white rounded-xl font-bold mt-2"
            >
              Back
            </button>
          </div>
        </div>
      )}

      <ChatBot />
    </div>
  );
}

export default Home;
