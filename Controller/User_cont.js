const User = require("../Module/user_module");
const register = async (req, res) => {
  // console.log(req.body);
  try {
    // const err = validationResult(req);
    // if (err.isEmpty()) {
    //   let newarray;
    //   newarray = err.array().map((er) => {
    //     return { key: er.param, message: er.msg };
    //   });
    //   return res.status(400).send({ errors: newarray });
    // }
    let user = await User.findOne({ email: req.body.email }).lean().exec();
    const username = req.body.username;
    const alpha = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
    if (!alpha.test(username)) {
      return res
        .status(400)
        .send({ error: true, message: "username shld be alphanumaric" });
    }
    if (user)
      return res
        .status(400)
        .send({ message: "please use reg err another email id" });
    user = await User.create(req.body);
    // console.log(token, "im token");
    return res.status(500).send({ user });
  } catch (er) {
    return res.status(500).send(er.message);
  }
};

const login = async (req, res) => {
  // console.log(req);
  try {
    let user = await User.findOne({ username: req.body.username });
    // const username = req.body.username;
    // const alpha = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
    // // console.log(alpha.test(username))
    // if (!alpha.test(username)) {
    //   return res
    //     .status(400)
    //     .send({ error: true, message: "username shld be alphanumaric" });
    // }

    let pass = await User.findOne({ password: req.body.password });

    if (!user || !pass)
      return res.status(400).send({ error: true, message: "inavlid user" });

    //   const match = user.checkpassword(req.body.password);
    // console.log(match);
    //   if (!match) return res.status(400).send({ error: true, token: "invali" });
    //   const token = newToken(user);

    return res.status(200).send({ user });
  } catch (er) {
    return res.status(500).send(er.message);
  }
};
module.exports = { register, login };
