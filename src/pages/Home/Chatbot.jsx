import React, { useEffect, useRef, useState } from "react";
import classes from "../../styles/css/home.module.css";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { fetchApi } from "../../service/fetch";
import Toastify from "../../components/Toastify";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import botImg from "../../assets/img/S00.png";

export function Chatbot({ onOpen }) {
  const [userInput, setUserInput] = useState("");
  const [input, setInput] = useState([
    {
      type: "",
      text: "Hi ,I can connect you with an Social Wing representative or answer questions you have on social wing",
    },
  ]);

  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  function handleChange(e) {
    const value = e.target.value;
    setUserInput(value);
  }

  async function handleSubmit() {
    const trimmed = userInput.trim();
    if (trimmed.length == 0) return;

    setInput((prev) => [...prev, { type: "customer", text: userInput }]);

    const url = "http://13.55.164.165:8000/api/bot";

    const data = {
      message: userInput,
    };
    try {
      setUserInput("");
      const response = await fetchApi(url, data);
      const chatResponse = await response.json();

      if (response.ok) {
        setInput((prev) => [
          ...prev,
          { type: "bot", text: chatResponse.response },
        ]);
      } else {
        Toastify("Something went wrong ", 2000);
      }
    } catch (error) {
      Toastify(error.message);
    }
  }

  return (
    <div className={classes.chatBotContainer}>
      <header className={classes.chatbotHead}>
        <CloseIcon fontSize="medium" onClick={() => onOpen(false)} />
      </header>
      <Chats inputs={input} />
      <div className={classes.chatbotInputContainer}>
        <div className={classes.chatbotInputs}>
          <input
            ref={ref}
            type="text"
            onChange={handleChange}
            required
            value={userInput}
            placeholder="Type a message..."
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
          />
          <SendIcon
            fontSize="large"
            sx={{ color: "#2a57b8" }}
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default function ChatbotContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  function handleMouseHover() {
    setIsMouseEnter(true);
  }
  function handleMouseLeave() {
    setIsMouseEnter(false);
  }

  return (
    <section>
      <div
        className={classes.chatbot}
        onClick={() => setIsOpen(true)}
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundColor: isMouseEnter ? "white" : "transparent" }}
      >
        <img src={botImg} alt="" />

        {isMouseEnter && (
          <>
            <p>what can i help for you</p>

            <div>
              <KeyboardDoubleArrowUpIcon fontSize="large" />
            </div>
          </>
        )}
      </div>

      {isOpen && <Chatbot onOpen={setIsOpen} />}
    </section>
  );
}

function Chats({ inputs }) {
  return (
    <div className={classes.chatContainer}>
      {inputs.map((item, index) => (
        <div key={index}>
          {item.type === "customer" && <CustomerChat text={item.text} />}
          {item.type !== "customer" && <BotChat text={item.text} />}
        </div>
      ))}
    </div>
  );
}

function BotChat({ text }) {
  return (
    <div className={classes.botTextContainer}>
      <p className={classes.botText}>{text}</p>
    </div>
  );
}

function CustomerChat({ text }) {
  return (
    <div className={classes.customerTextContainer}>
      <p className={classes.customerText}>{text}</p>
    </div>
  );
}
