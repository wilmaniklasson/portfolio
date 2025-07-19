import { useState, useRef, useEffect } from "react";
import "../styles/WilmaBot.css";
import { useTranslation } from "react-i18next";
import VsgLogo from "../assets/VsgLogo.svg";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export const WilmaBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const lastMessageRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [messages, loading]);

  useEffect(() => {
    if (!loading) {
      inputRef.current?.focus();
    }
  }, [loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    setLoading(true);

    const userMessage: Message = {
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const baseUrl = import.meta.env.VITE_API_URL;

    try {
      const res = await fetch(`${baseUrl}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (res.status === 429) {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: t("tooManyRequests") },
        ]);
      } else {
        const data = await res.json();

        if (!res.ok) {
          setMessages((prev) => [
            ...prev,
            { sender: "bot", text: data.reply || t("somethingWentWrong") },
          ]);
        } else {
          setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
        }
      }

    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: t("somethingWentWrong") },
      ]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <div className="wilma-bot">
      <h2 className="wilma-bot__title">{t("askSomething")}</h2>

      <div className="wilma-bot__chatbox">
        {messages.map((msg, i) => (
          <div
            key={i}
            ref={i === messages.length - 1 ? lastMessageRef : null}
            className={`wilma-bot__message wilma-bot__message--${msg.sender}`}
          >
            <div className="wilma-bot__text">{msg.text}</div>
          </div>
        ))}

        {loading && (
          <div className="wilma-bot__loading-spinner" ref={lastMessageRef}>
            <div className="spinner" aria-label="Loading..."></div>
          </div>
        )}
      </div>

      <img
        src={VsgLogo}
        alt="Bot avatar"
        className="wilma-bot__avatar"
        aria-hidden="true"
      />

      <div className="wilma-bot__input-area">
        <input
          ref={inputRef}
          type="text"
          value={input}
          placeholder={t("writeAMessage")}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="wilma-bot__input"
          disabled={loading}
          autoFocus
        />
        <button
          onClick={sendMessage}
          className="wilma-bot__button"
          disabled={loading || !input.trim()}
        >
          {t("send")}
        </button>
      </div>
    </div>
  );
};
