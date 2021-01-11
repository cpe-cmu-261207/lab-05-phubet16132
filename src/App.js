import { createContext, useReducer, useState } from "react";
import CourseCard from "./components/CourseCard";
import CourseForm from "./components/CourseForm";
export const KhemDev = createContext()





function App() {
  const [myCourse,setMyCourse] = useState([]) 
  return (
  <KhemDev.Provider value={}> 
    <div>
      <div className="header"><h1><b> <span className="colorhgpa">GPA</span>  <span className="colorCal">CALCULATOR</span></b></h1></div>
      <div><h2 className="colorC"><b>COURSE LIST</b></h2></div>
      <div className="borderGPA1"> <CourseCard/> </div>
      <CourseForm/>
    </div>
  </KhemDev.Provider>
  );
}

export default App;
