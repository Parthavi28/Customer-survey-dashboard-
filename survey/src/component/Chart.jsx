import  { useEffect ,useState} from 'react'
import { api } from '../config/api'
import BarAnimation from './ChartComponent'

const Chart = () => {
  
    const [question,setQuestion]=useState([])
    
    useEffect(() => {
        const getQuestion = () => {
            api.get("/survey/question").then((res) => {
                console.log(res)
                setQuestion(res.data)

            }).catch(error => {
              console.log("error: " + error)
          })
        }
       
        getQuestion()
        
  },[])
  return (
    <>
          {question.map((item,index) => (
              <BarAnimation key={ index} item={item} />
      ))}
    </>
  )
}

export default Chart
