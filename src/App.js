import { createContext, useReducer } from "react";
import CourseCard from "./components/CourseCard";
import CourseForm from "./components/CourseForm";

function App() {
  return (
    <div>
      <div className="header"><h1><b> <span className="colorhgpa">GPA</span>  <span className="colorCal">CALCULATOR</span></b></h1></div>
      <div><h2 className="colorC"><b>COURSE LIST</b></h2></div>
      <div className="borderGPA1"> box of subject </div>
      <div className="inputbox">
        <aside><div className="GPATEXT">GPA : </div><div className="GPA">4.00</div></aside>
        <aside className="input">
          <aside><div><label>Subject ID :</label><input placeholder = "Input Subject ID"></input></div></aside>
          <aside>
            <div><label>Credit : </label>
              <select className ="scadit">
                <option selected disabled>Select Credit</option>
                <option value ="1">1</option>
                <option value ="2">2</option>
                <option value ="3">3</option>
              </select>
            </div>
          </aside>
          <aside>
            <div><label>Grade : </label>
              <select className ="sgrade">
                <option selected id ="selected-grade" disabled>Select Grade</option>
                <option value ="4">  A</option>
                <option value ="3.5">B+</option>
                <option value ="3">  B</option>
                <option value ="2.5">C+</option>
                <option value ="2">  C</option>
                <option value ="1.5">D+</option>
                <option value ="1">  D</option>
                <option value ="0">  F</option>
                <option value ="-1"> W</option>
              </select>
            </div>
            <div><button className="add">add</button></div>
          </aside>
        </aside>
      </div>
    </div>
  );
}

export default App;
