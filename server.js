const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(cors());

// Serve files from the current directory
app.use(express.static(__dirname));

app.get("/api/searchDemand", (req, res) => {
  const demandId = req.query.demandId; // get requedt ID

  if (demandId == 5) {
    res.json({
      demandId: 5,
      firstName: "Jean",
      lastName: "Bono",
      immatriculation: "ER-793-FC",
    });
  } else {
    // res.error(); // uncomment to test the error case
    res.json({}); // uncomment to test an empty result
  }
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
