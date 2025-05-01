jsx
// pages/dashboard.js
import { useSession } from "next-auth/react";
import { analyzeSentiment } from "../lib/sentimentAnalysis";

function Dashboard() {
  const { data: session, status } = useSession();
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const sentiment = await analyzeSentiment(text);
    setSentiment(sentiment);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {session.user.name}!</p>
      <form onSubmit={handleSubmit}>
        <label>
          Text:
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Analyze Sentiment</button>
      </form>
      {sentiment && (
        <p>Sentiment: {sentiment > 0.5 ? 'Positive' : 'Negative'}</p>
      )}
    </div>
  );
}

export default Dashboard;

