// src/components/Chatroom.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp
} from 'firebase/firestore';

const Chatroom = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const q = query(collection(db, "chatroom"), orderBy("createdAt"));
    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsub();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (text.trim()) {
      await addDoc(collection(db, "chatroom"), {
        text,
        createdAt: serverTimestamp(),
      });
      setText("");
    }
  };

  return (
    <div className="chatroom">
      <h3>Anonymous Peer Chat 💬</h3>
      <div className="chat-messages">
        {messages.map(msg => (
          <div key={msg.id} className="chat-msg">
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Say something kind or ask a question"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatroom;
