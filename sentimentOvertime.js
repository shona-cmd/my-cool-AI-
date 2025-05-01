jsx
// components/SentimentOverTime.js
import { LineChart, Line, XAxis, YAxis } from "recharts";

function SentimentOverTime() {
  const [data, setData] = useState([]);

  const handleFetchData = async () => {
    // Call sentiment analysis API
    const response = await fetch("/api/sentiment-over-time", {
      method: "GET",
    });
    const data = await response.json();
    setData(data);
  };

  return (
    <div>
      <LineChart width={500} height={300} data={data}>
        <Line type="monotone" dataKey="sentiment" stroke="#8884d8" />
        <XAxis dataKey="date" />
        <YAxis />
      </LineChart>
      <Button variant="contained" color="primary" onClick={handleFetchData}>
        Fetch Data
      </Button>
    </div>
  );
}

export default
SentimentOverTime;