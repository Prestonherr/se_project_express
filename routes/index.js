const router = require("express").Router();
const { NotFoundError } = require("../utils/errors");
const auth = require("../middlewares/auth");
const { getItems } = require("../controllers/clothingItems");

router.get("/items", getItems);

router.use(auth);
router.use("/items", require("./clothingItems"));
router.use("/users", require("./users"));

router.use((req, res, next) => {
  next(new NotFoundError("The requested resource was not found"));
});

module.exports = router;
