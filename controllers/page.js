export const Home = (req, res) => {
  res.status(200).json({
    message: "Welcome to Home Page",
  });
};

export const About = (req, res) => {
  const UserId = req.headers["user-id"];
  const Scope = req.headers["scope"];

  try {
    if (UserId === "ifabula" && Scope === "user") {
      return res.status(200).json({
        message: `Welcome to About Page ${UserId}`,
      });
    }

    return res.status(401).json({
      responseCode: 401,
      responseMessage: "UNAUTHORIZED",
    });
  } catch (err) {
    console.log("Error: ", err);
    return res.send(`Error: ${err}`);
  }
};
