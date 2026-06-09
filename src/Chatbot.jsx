import React, { useState, useEffect, useRef } from 'react';
import './index.css';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to MP Mohan & Co. How can I assist you today?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);
  const [isTooltipVisible, setIsTooltipVisible] = useState(true);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    // Add user message
    const newMsg = { text: userText, sender: "user" };
    setMessages((prev) => [...prev, newMsg]);
    setInputValue("");

    // Simulate smart bot reply
    setTimeout(() => {
      const lower = userText.toLowerCase();
      let botReply = "I understand. To give you the most accurate information, could you please provide your phone number so one of our partners can call you directly?";

      if (lower.includes("audit")) {
        botReply = "We provide comprehensive Statutory, GST, and Tax Audit services to ensure absolute compliance. Would you like to schedule a consultation with our audit team?";
      } else if (lower.includes("startup") || lower.includes("fund")) {
        botReply = "We specialize in startup funding, seed capital advisory, and business registration. You can check our 'Startup Funding In India' service page for detailed info!";
      } else if (lower.includes("tax") || lower.includes("gst")) {
        botReply = "Our expert tax consultants handle Income Tax planning, GST filing, and International Taxation. Are you looking for corporate or individual tax services?";
      } else if (lower.includes("price") || lower.includes("fee") || lower.includes("cost")) {
        botReply = "Our professional fees depend on the specific scope of services required. Could you share your email so we can send you a detailed quote?";
      } else if (lower.includes("contact") || lower.includes("call") || lower.includes("number")) {
        botReply = "You can reach our lead partners directly at +91 98765 43210 or email us at info@mpmohan.com. We are available Monday to Saturday, 9 AM to 6 PM.";
      } else if (lower.includes("hello") || lower.includes("hi")) {
        botReply = "Hello! Welcome to MP Mohan & Co. How can I help you today?";
      }

      setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chatbot Button & Tooltip */}
      {!isOpen && (
        <div className="floating-chatbot">
          {isTooltipVisible && (
            <div className="chatbot-tooltip">
              <button className="close-tooltip" onClick={(e) => { e.stopPropagation(); setIsTooltipVisible(false); }}>×</button>
              <p>Got any questions? I'm happy to help.</p>
            </div>
          )}
          <div className="chatbot-icon" onClick={() => { setIsOpen(true); setIsTooltipVisible(false); }}>
            <i className="fas fa-comment-dots"></i>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div>
              <h4 style={{ margin: 0, color: 'white' }}>MP Mohan Assistant</h4>
              <span style={{ fontSize: '0.8rem', color: '#e0e0e0' }}>Online</span>
            </div>
            <button className="chatbot-close-btn" onClick={() => setIsOpen(false)}>×</button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.sender}`}>
                <div className="chat-bubble">
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form className="chatbot-input-area" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Type your message..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit"><i className="fas fa-paper-plane"></i></button>
          </form>
        </div>
      )}
    </>
  );
}

export default Chatbot;
