const { DataTypes } = require('sequelize')
const {sequelize}=require("../config/db")

const Question = sequelize.define('Question', {
    text_question: {
        type: DataTypes.STRING,
        allowNull: false,
       
       
    }
})

const Answer = sequelize.define('Answer', {
    text: {
        type: DataTypes.STRING,
        allowNull:false
    },

   
})

Question.hasMany(Answer)
Answer.belongsTo(Question)

const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Tables created successfully');
    } catch (error) {
        console.error('Error creating tables:', error);
    }
};

module.exports = {Answer,Question, syncDatabase}