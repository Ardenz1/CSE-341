const carrieRoute = (req, res) => {
    res.send("Carrie Jones");
  };

  const johnRoute = (req, res) => {
    res.send("John Jones");
  };

  module.exports = {
    carrieRoute,
    johnRoute
  };