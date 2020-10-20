const router = require("express").Router();
const {
  getCarByOwner,
  getCars,
  addCar,
  getCarByChassyNr,
  deleteCar,
  updateCar,
} = require("../controllers/carsController");

router.route("/").get(getCars);
router.route("/add").post(addCar);
router.route("/chassynr/:chassyNr").get(getCarByChassyNr);
router.route("/owner/:owner").get(getCarByOwner);
router.route("/:chassyNr").delete(deleteCar);
router.route("/:chassyNr").put(updateCar);

module.exports = router;
