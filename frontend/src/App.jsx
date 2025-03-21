import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [comments, setComments] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:8080/sent-comments");
    eventSource.onmessage = (event) => {
      const comment = JSON.parse(event.data);
      console.log(event);

      setComments((prev) => [...prev, comment]);
    };

    eventSource.onerror = (error) => {
      console.log(error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  const useAutoScroll = (element) => {
    const scrollToBottom = () => {
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    useEffect(() => {
      scrollToBottom();
    }, [comments]);
  };

  useAutoScroll(scrollRef.current);

  return (
    <div className="container">
      <div className="box">
        <div className="title">
          <h1>Live Commentrry</h1>
        </div>
        <div className="divider"></div>
        <div className="comments">
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <span className="comment_title">{comment.title}</span>
              <p>{comment.comment}</p>
              <small>{comment.time}</small>
              <div className="graphic">
                <div className="icon">
                  <img src="/bat.png" alt="" />
                </div>
                <div className="line"></div>
              </div>
            </div>
          ))}
        </div>
        <div ref={scrollRef} />
      </div>
    </div>
  );
}

export default App;
