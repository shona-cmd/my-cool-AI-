
jsx
// components/ResultsSection.js
import { Grid, Paper } from "@material-ui/core";
import SentimentAnalysisResult from "./SentimentAnalysisResult";
import TextClassificationResult from "./TextClassificationResult";
import NamedEntityRecognitionResult from "./NamedEntityRecognitionResult";

function ResultsSection() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <SentimentAnalysisResult />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextClassificationResult />
      </Grid>
      <Grid item xs={12} sm={4}>
        <NamedEntityRecognitionResult />
      </Grid>
    </Grid>
  );
}

export default ResultsSection;


