jsx
// components/EntityRecognitionVisualization.js
import { ForceGraph2D } from "react-force-graph";

function EntityRecognitionVisualization() {
  const [entities, setEntities] = useState([]);

  const handleFetchEntities = async () => {
    // Call entity recognition API
    const response = await fetch("/api/entities", {
      method: "GET",
    });
    const data = await response.json();
    setEntities(data);
  };

  return (
    <div>
      <ForceGraph2D
        graphData={entities}
        nodeAutoColorBy="type"
        linkDirectionalParticles={2}
      />
      <Button variant="contained" color="primary" onClick={handleFetchEntities}>
        Fetch Entities
      </Button>
    </div>
  );
}



export default 
EntityRecognitionVisualisation;