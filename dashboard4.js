jsx
// pages/dashboard.js
import { Grid, Container } from "@material-ui/core";
import AnalyzeTextForm from "../components/AnalyzeTextForm";
import ResultsSection from "../components/ResultsSection";

function Dashboard() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AnalyzeTextForm />
        </Grid>
        <Grid item xs={12}>
          <ResultsSection />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;

