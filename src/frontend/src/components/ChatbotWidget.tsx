import { Bot, MessageSquare, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";

interface QuickOption {
  id: number;
  label: string;
  reply: string;
}

const QUICK_OPTIONS: QuickOption[] = [
  {
    id: 1,
    label: "Website Development",
    reply:
      "We build modern, fast, and mobile-friendly websites tailored to your brand. Let's discuss your project!",
  },
  {
    id: 2,
    label: "Logo Design",
    reply:
      "We craft creative, memorable logos that reflect your brand identity. Let's get started!",
  },
  {
    id: 3,
    label: "Social Media Design",
    reply:
      "Eye-catching social media graphics to boost your online presence. Tell us more!",
  },
  {
    id: 4,
    label: "SEO Services",
    reply:
      "We help your business rank higher on Google and drive more organic traffic.",
  },
  {
    id: 5,
    label: "Contact Support",
    reply:
      "Our team is ready to help! Reach us directly via WhatsApp for the fastest response.",
  },
];

type ChatState = "greeting" | "replied";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [chatState, setChatState] = useState<ChatState>("greeting");
  const [selectedOption, setSelectedOption] = useState<QuickOption | null>(
    null,
  );

  const handleOptionClick = (option: QuickOption) => {
    setSelectedOption(option);
    setChatState("replied");
  };

  const handleReset = () => {
    setSelectedOption(null);
    setChatState("greeting");
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3">
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, scale: 0.85, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="w-80 sm:w-96 rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.12 0.015 270), oklch(0.08 0.01 270))",
              border: "1px solid oklch(0.25 0.03 270)",
              backdropFilter: "blur(20px)",
              boxShadow:
                "0 25px 60px oklch(0 0 0 / 0.6), 0 0 0 1px oklch(0.52 0.28 285 / 0.1)",
            }}
          >
            {/* Header */}
            <div
              className="px-4 py-3.5 flex items-center gap-3"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.45 0.28 220), oklch(0.38 0.26 285))",
                borderBottom: "1px solid oklch(0.3 0.04 270)",
              }}
            >
              <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                <Bot size={18} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white text-sm leading-tight">
                  NextYU Solution
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-white/70">
                    Online — replies instantly
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleClose}
                data-ocid="chatbot.close_button"
                aria-label="Close chat"
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/15 transition-colors duration-150"
              >
                <X size={16} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
              {/* Bot greeting */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-2.5"
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: "oklch(0.45 0.28 220 / 0.2)",
                    border: "1px solid oklch(0.52 0.28 285 / 0.4)",
                  }}
                >
                  <Bot size={13} style={{ color: "oklch(0.78 0.18 220)" }} />
                </div>
                <div
                  className="rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[85%]"
                  style={{
                    background: "oklch(0.16 0.018 270)",
                    border: "1px solid oklch(0.25 0.03 270)",
                  }}
                >
                  <p className="text-sm text-white/90 leading-relaxed">
                    Hello 👋 Welcome to <strong>NextYU Solution</strong>. How
                    can we help you today?
                  </p>
                </div>
              </motion.div>

              {/* Quick options */}
              <AnimatePresence mode="wait">
                {chatState === "greeting" && (
                  <motion.div
                    key="options"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col gap-2 pl-9"
                  >
                    {QUICK_OPTIONS.map((option) => (
                      <motion.button
                        key={option.id}
                        data-ocid={`chatbot.option.${option.id}`}
                        onClick={() => handleOptionClick(option)}
                        whileHover={{ scale: 1.02, x: 3 }}
                        whileTap={{ scale: 0.97 }}
                        className="text-left text-sm px-3.5 py-2 rounded-xl font-medium transition-all duration-150"
                        style={{
                          background: "oklch(0.14 0.016 270)",
                          border: "1px solid oklch(0.52 0.28 285 / 0.3)",
                          color: "oklch(0.78 0.18 220)",
                        }}
                      >
                        {option.label}
                      </motion.button>
                    ))}
                  </motion.div>
                )}

                {chatState === "replied" && selectedOption && (
                  <motion.div
                    key="reply"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-3"
                  >
                    {/* User message */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 }}
                      className="flex justify-end"
                    >
                      <div
                        className="rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[80%]"
                        style={{
                          background:
                            "linear-gradient(135deg, oklch(0.45 0.28 220), oklch(0.38 0.26 285))",
                        }}
                      >
                        <p className="text-sm text-white font-medium">
                          {selectedOption.label}
                        </p>
                      </div>
                    </motion.div>

                    {/* Bot reply */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-start gap-2.5"
                    >
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          background: "oklch(0.45 0.28 220 / 0.2)",
                          border: "1px solid oklch(0.52 0.28 285 / 0.4)",
                        }}
                      >
                        <Bot
                          size={13}
                          style={{ color: "oklch(0.78 0.18 220)" }}
                        />
                      </div>
                      <div
                        className="rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[85%]"
                        style={{
                          background: "oklch(0.16 0.018 270)",
                          border: "1px solid oklch(0.25 0.03 270)",
                        }}
                      >
                        <p className="text-sm text-white/90 leading-relaxed">
                          {selectedOption.reply}
                        </p>
                      </div>
                    </motion.div>

                    {/* WhatsApp CTA + Reset */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55 }}
                      className="pl-9 flex flex-col gap-2"
                    >
                      <a
                        href="https://wa.me/919360193948"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-ocid="chatbot.whatsapp_button"
                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-150"
                        style={{
                          background:
                            "linear-gradient(90deg, oklch(0.5 0.18 145), oklch(0.42 0.16 145))",
                          boxShadow: "0 4px 14px oklch(0.5 0.18 145 / 0.3)",
                        }}
                      >
                        <SiWhatsapp size={15} />
                        Chat on WhatsApp
                      </a>
                      <button
                        type="button"
                        onClick={handleReset}
                        data-ocid="chatbot.reset_button"
                        className="text-xs text-center py-1.5 rounded-lg transition-colors duration-150"
                        style={{
                          color: "oklch(0.6 0.05 270)",
                        }}
                      >
                        ← Ask something else
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer hint */}
            <div
              className="px-4 py-2.5 text-center"
              style={{ borderTop: "1px solid oklch(0.2 0.02 270)" }}
            >
              <p className="text-xs" style={{ color: "oklch(0.45 0.04 270)" }}>
                Powered by NextYU Solution
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        data-ocid="chatbot.toggle_button"
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl relative"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.55 0.26 220), oklch(0.42 0.28 285))",
          boxShadow:
            "0 8px 30px oklch(0.55 0.26 220 / 0.5), 0 2px 8px oklch(0 0 0 / 0.4)",
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.18 }}
            >
              <X size={22} className="text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.18 }}
            >
              <MessageSquare size={22} className="text-white" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Pulse ring when closed */}
        {!isOpen && (
          <motion.span
            className="absolute inset-0 rounded-full"
            animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              background: "oklch(0.55 0.26 220 / 0.25)",
              pointerEvents: "none",
            }}
          />
        )}
      </motion.button>
    </div>
  );
}
