import React from "react";
import { useEffect, useState, useRef } from "react";
import dayjs from "dayjs";
// import { Link } from "react-router-dom";

export default function ChatScreen() {
  const intRef = useRef(null);
  const [finished, setFinished] = useState(false);
  const [text, setText] = useState("");
  const [userName, setUserName] = userName("Zocin");
  const [chats, setChats] = useState();

  useEffect(() => {
    fetch("http://192.168.1.49:3005/chats")
      .then((res) => res.json())
      .then((data) => {
        setChats(data.body.reverse());
        setFinished(true);
      });
  }, []);

  useEffect(() => {
    if (finished) {
      clearInterval(intRef.current);
      intRef.current = setInterval(() => {
        fetch("http://192.168.1.49:3005/last")
          .then((res) => res.json())
          .then((data) => {
            setChats(data.body, ...chats);
          });
      }, 500);
    }
  }, [finished]);

  const send = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("hooson zurwas bicih bolomjgui");
      return;
    }
    fetch("http://192.168.1.49:3005/chats", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name: userName, text }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      {/* <Link to="/ChatScreen"> */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <div className="chat-container">
              <div className="wrapper">
                <ul>
                  {chats.map((chat) => (
                    <ChatItem chat={chat} key={chat.id} />
                  ))}
                </ul>
              </div>
              <form onSubmit={send}>
                <textarea
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
                <button>Send </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
}

const ChatItem = ({ chat }) => {
  return (
    <li className="chat-item">
      <div className="text">
        <strong className="author">{chat.name}</strong> {chat.text}
      </div>
      <div className="createdAt">{dayjs(chat.createdAt).fromNow()}</div>
    </li>
  );
};
