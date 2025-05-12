import { app } from "./app.js";
import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

// healtcare user:alluser sp: shahjalal
const uri2 =
  process.env.uri ||
  "mongodb+srv://alluser:shahjalal@cluster0.2a3wrvq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri2, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function main() {
  try {
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. alhamdulillh, successfully connected to MongoDB!",
    );
  } catch (err) {
    console.log(err, "err from sever.js 22");
  }
}

main();

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
