const sarahRoute = (req, res) => {
    res.send("Sarah Birch");
  };

  const johnRoute = (req, res) => {
    res.send("John Birch");
  };

  module.exports = {
    sarahRoute,
    johnRoute
  };