const app = require("express")();
const cors = require("cors");
const router = require("./src/routes");

app.use(cors());
app.use("/api", router);

app.get("/", (req, res) => res.status(200).json({ message: "Get is running" }));

app.listen(4500, () => console.log("Server Running on Port 3000"));
