/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const createUser = async (req, res) => {
  const user = req.body;

  console.log(user, "user.controller.js", 3);
};
