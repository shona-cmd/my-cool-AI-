jsx
// components/TextSummarization.js
import { Button, TextField, Paper } from "@material-ui/core";

function TextSummarization() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarize = async () => {
    // Call text summarization API
    const response = await fetch("/api/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    setSummary(data.summary);
  };

  return (
    <Paper elevation={3} style={{ padding: 20 }}>
      <TextField
        label="Enter your text"
        multiline
        rows={4}
        fullWidth
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSummarize}>
        Summarize Text
      </Button>
      {summary && (
        <div>
          <h2>Summary:</h2>
          <p>{summary}</p>
        </div>
      )}
    </Paper>
  );
}

export default TextSummarization;


