import { useState } from "react";
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
  const { t } = useTranslation();

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json(); 

      if (!res.ok) {
      
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: data.reply || t("somethingWentWrong") },
        ]);
        return;
      }

      const botMessage: Message = {
        sender: "bot",
        text: data.reply,
      };

      setMessages((prev) => [...prev, botMessage]);
      setInput("");
    } catch {
      // Om det blir ett nätverksfel eller något annat riktigt knas
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: t("somethingWentWrong") },
      ]);
    }
  };

  return (
    <div className="wilma-bot">
      <h2 className="wilma-bot__title">{t("askSomething")}</h2>

      <div className="wilma-bot__chatbox">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`wilma-bot__message wilma-bot__message--${msg.sender}`}
          >
            <div className="wilma-bot__text">{msg.text}</div>
          </div>
        ))}
      </div>

      <img
        src={VsgLogo}
        alt="Bot avatar"
        className="wilma-bot__avatar"
        aria-hidden="true"
      />

      <div className="wilma-bot__input-area">
        <input
          type="text"
          value={input}
          placeholder={t("writeAMessage")}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="wilma-bot__input"
        />
        <button onClick={sendMessage} className="wilma-bot__button">
          {t("send")}
        </button>
      </div>
    </div>
  );
};
