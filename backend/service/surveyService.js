const {Question,Answer}= require("../model/survey")

const storeSurveyData = async (req, res) => {
 
     try {
    const formData = req.body;
console.log("formadata:",formData)
         for (const question in formData) {
        console.log("quesiton:",question)
      const answers = formData[question];
      console.log("answers:",answers)
      // Find the question by text (or create it if it doesn't exist)
      const [dbQuestion] = await Question.findOrCreate({ where: { text_question: question } });
console.log("dbQuestion:",dbQuestion)
      // Create answers associated with the question
      
        await Answer.create({ text: answers, QuestionId: dbQuestion.dataValues.id });
      
    }

    res.status(200).json({ message: 'Form data submitted to MySQL using Sequelize successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while submitting the form data' });
  }
}

const getQuestion = async (req,res) => {
  try {
    const question = await Question.findAll()
    if (!question) {
      res.status(404).json({error:"No Question Found "})
    }
    res.status(200).json(question)
  } catch (error) {
    res.status(500).json({ error:"Server error "})
  }
}


const getSurveyDataPercentage = async (req, res) => {
  try {
    const {data} = req.body
    //console.log("body",req.body)
    const ques = await Question.findOne({where:{text_question:data}})
   // console.log("ques",ques)
        if (!ques) {
            return res.status(404).json({ message: "Question not found" })
            
        }
    const answers = await ques.getAnswers()
    //console.log("answers",answers)
    const answerCounts = {
      "Highly Satisfied": 0,
      "Highly Dissatisfied": 0,
      "Satisfied": 0,
      "Neither Satisfied nor Dissatisfied": 0,
      "Dissatisfied":0
        }
        answers.forEach((answer) => {
            answerCounts[answer.dataValues.text]=(answerCounts[answer.dataValues.text] ||0)+1
        })
    console.log("answerCounts", answerCounts)
    var totalAnswers = 0;
    answers.forEach((answer) => {
      totalAnswers+=answerCounts[answer.dataValues.text]
    })

        const percentages = {}
    for (const option in answerCounts) {
          console.log("options",option)
            percentages[option] = (answerCounts[option] / totalAnswers) * 100;

    }
    console.log("percentages", percentages)
        res.status(200).json(percentages)
        
    } catch (error) {
        console.log("error getting survey data", error)
        res.status(500).json({ error: "Internal Server Error" })
    }
}




module.exports = {
    storeSurveyData,
  getSurveyDataPercentage,
    getQuestion
}

