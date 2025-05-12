// config/db.js

import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.uri;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

export const connectToDB = async () => {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Alhamdulillah, connected to MongoDB!");

    db = client.db("simple-crud"); // replace with your actual DB name
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err);
  }
};

export const getDB = () => db;
