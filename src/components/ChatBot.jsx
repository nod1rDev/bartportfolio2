import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

     
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              { role: "system", content: "You are a helpful assistant." },
              { role: "user", content: input },
            ],
            max_tokens: 150,
            temperature: 0.7,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Server error occurred.");
      }

      const data = await response.json();
      const botMessage = {
        sender: "bot",
        text: data.choices[0].message.content.trim(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "An error occurred. Please try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-10 z-50">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-[90px] h-[90px] bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors glowing-effect"
            onClick={() => setIsOpen(true)}
          >
            <MessageCircle size={34} />
          </motion.button>
        )}

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col w-[380px] h-[600px] bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
              <div className="flex items-center gap-3">
                <img
                  src="/ava.jpg"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold text-lg">ApexBart</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <X size={20} />
              </motion.button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 bg-gray-800">
              <AnimatePresence initial={false}>
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    } mb-4`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        msg.sender === "user"
                          ? "bg-gray-700 text-white"
                          : "bg-gray-300 text-gray-900 shadow-md"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-gray-800 border-t border-gray-700">
              <div className="flex gap-2">
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  ref={inputRef}
                  type="text"
                  className="flex-1 px-4 py-2 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors disabled:bg-gray-500"
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
