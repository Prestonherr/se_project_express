const router = require("express").Router();
const { NOT_FOUND } = require("../utils/errors");
const auth = require("../middlewares/auth");
const { getItems } = require("../controllers/clothingItems");

router.get("/items", getItems);

router.use(auth);
router.use("/items", require("./clothingItems"));
router.use("/users", require("./users"));

router.use((req, res) => {
  res.status(NOT_FOUND).send({ message: "Route not found" });
});

module.exports = router;
