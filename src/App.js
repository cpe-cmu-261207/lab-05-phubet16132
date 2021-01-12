import { createContext, useEffect, useReducer, useState } from "react";
import CourseCard from "./components/CourseCard";
import CourseForm from "./components/CourseForm";
export const KhemDev = createContext()






function App() {



  const [myCourse,setMyCourse] = useState([]);

  useEffect(()=>{
    const temp = localStorage.getItem("save")
    if(temp !== null){
      setMyCourse(JSON.parse(temp))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("save",JSON.stringify(myCourse))
  },[myCourse.length])


  function onDeleteCourse(id) {
    setMyCourse(myCourse.filter(e=> e.ID != id))
  }

  function setCourse (data){
    setMyCourse([...myCourse,data])
  }

  function renderCard() {
    return myCourse.map((course, i) => <CourseCard key={i} {...course} onDeleteCourse={onDeleteCourse}/>)
  }

  function calculateGPA() {
    let sum_credit=0 , sum_grade=0
    myCourse.forEach(value=>{
      if(parseFloat(value.Grade)>=0){
        sum_credit += parseFloat(value.Credit)
        sum_grade += parseFloat(value.Grade)*parseFloat(value.Credit) 
      }     
    })
    return (sum_grade/sum_credit).toFixed(2)
  }

  return (
  <KhemDev.Provider value={setCourse}> 
    <div>
      <div className="header"><h1><b> <span className="colorhgpa">GPA</span>  <span className="colorCal">CALCULATOR</span></b></h1></div>
      <div><h2 className="colorC"><b>COURSE LIST</b></h2></div>
      <div className="borderGPA1"> {renderCard()} </div>
      <CourseForm gpa = {calculateGPA()}/>
    </div>
  </KhemDev.Provider>
  );
}

export default App;
