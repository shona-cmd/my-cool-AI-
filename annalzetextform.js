jsx
// components/AnalyzeTextForm.js
import { Button, TextField, Paper } from "@material-ui/core";

function AnalyzeTextForm() {
  return (
    <Paper elevation={3} style={{ padding: 20 }}>
      <form>
        <TextField
          label="Enter your text"
          multiline
          rows={4}
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">
          Analyze Text
        </Button>
      </form>
    </Paper>
  );
}

export default AnalyzeTextForm;

