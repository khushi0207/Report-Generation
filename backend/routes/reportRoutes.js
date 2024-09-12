const express = require('express');
const { createReport, getAllReport, getReportById, updateReport, deleteReport } = require('../controllers/reportController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post("/createReport",createReport);
router.get("/getAllReport",getAllReport);
router.get("/getReportById/:id",getReportById);
router.patch("/updateReport/:id",updateReport);
router.delete("/deleteReport/:id",deleteReport);

module.exports = router;