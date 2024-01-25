import playerRoutes from "./player.js";


const constructorMethod = (app) => {
  app.use("/player", playerRoutes);
 

  app.use("*", (req, res) => {
    res.status(404).json({ error: "This route does not exist" });
  });
};

export default constructorMethod;