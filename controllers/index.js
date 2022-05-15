const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// Define a catch-all route for any resource that doesn't exist
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
