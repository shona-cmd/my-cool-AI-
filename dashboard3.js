jsx
// pages/dashboard.js
import { useSession } from "next-auth/react";
import { analyzeSentiment } from "../lib/sentimentAnalysis";
import { classifyText } from "../lib/textClassification";
import { recognizeEntities } from "../lib/namedEntityRecognition";

function Dashboard() {
  const { data: session, status } = useSession();
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [classification, setClassification] = useState(null);
  const [entities, setEntities] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const sentiment = await analyzeSentiment(text);
    const classification = await classifyText(text);
    const entities = await recognizeEntities(text);
    setSentiment(sentiment);
    setClassification(classification);
    setEntities(entities);
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
        <button type="submit">Analyze Text</button>
      </form>
      {sentiment && (
        <p>Sentiment: {sentiment > 0.5 ? 'Positive' : 'Negative'}</p>
      )}
      {classification && (
        <p>Classification: {classification}</p>
      )}
      {entities && (
        <p>Entities: {entities.join(', ')}</p>
      )}
    </div>
  );
}

export default Dashboard;

