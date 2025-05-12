import { connectToDB } from "./config/db.js";
import { app } from "./app.js";

const PORT = process.env.PORT || 5000;
const startServer = async () => {
  try {
    await connectToDB();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Couldn't start server:", error);
  }
};

startServer();
