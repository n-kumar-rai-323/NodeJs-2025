const router = require("express").Router();

router.get("/:id", (req, res) => {
  // qurery (?)
  // parameter  (:/id)
  // body
  console.log(req?.query);
  res.json({
    data: `hello id number ${req?.params?.id} with query data ${JSON.stringify(
      req.query
    )}`,
  });
});

module.exports = router;
