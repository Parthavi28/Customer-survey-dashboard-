const express = require('express')

const router = express.Router()
const { getSurveyDataPercentage, storeSurveyData,getQuestion } = require("../service/surveyService")

router.post("/store", storeSurveyData)
router.post('/getData', getSurveyDataPercentage)
router.get('/question',getQuestion)

module.exports=router