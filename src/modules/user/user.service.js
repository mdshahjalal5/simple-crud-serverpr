import { getDB } from "../../config/db";

const usersCollection = getDB().collection("users");

const getAllUsersFromDB = async () => {
  const users = await usersCollection.find().toArray();
  return users;
};

export const UserServices = {
  getAllUsersFromDB,
};
