import Header from "./component/Header"
import Table from "./component/Table"



function App() {
  

  return (
    <div className="flex justify-center  bg-gray-100 h-[100vh]">
      <div className="w-[1100px] flex flex-col gap-1">
        
        <Header />
        <Table/>
       </div>
     </div>
  )
}

export default App
