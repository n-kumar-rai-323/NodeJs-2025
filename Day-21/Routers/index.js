const router = require("express").Router();
router.get("/:id", (req, res) => {
  console.log(req.params.id);
  
  res.json({
    data: `Hello how are you  ${
      req?.params?.id
    } with query data ${JSON.stringify(req.query)}`,
  });
});

router.post("/", (req, res) => {
  req.headers["content-type"];
  console.log(req?.body);
  res.json({
    data: "Hello post",
    receivedData: req.body,
  });
});
module.exports = router;
