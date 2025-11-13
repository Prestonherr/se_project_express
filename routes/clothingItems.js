const router = require("express").Router();
const {
  createItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");
const auth = require("../middlewares/auth");
const {
  validateCreateItemBody,
  validateItemIdParam,
} = require("../middlewares/validation");

router.post("/", auth, validateCreateItemBody, createItem);
router.delete("/:itemId", auth, validateItemIdParam, deleteItem);
router.put("/:itemId/likes", auth, validateItemIdParam, likeItem);
router.delete("/:itemId/likes", auth, validateItemIdParam, dislikeItem);

module.exports = router;
