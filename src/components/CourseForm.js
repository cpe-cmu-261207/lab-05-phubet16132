import { GRADES } from "../utils/grades";
import { CREDITS } from "../utils/credits";
import { useContext, useReducer, useState } from "react";
import {KhemDev} from "../App"


const CourseForm = (props) => {
  const setCourse = useContext(KhemDev)
  const initState = {ID : "" , Credit : 1 , Grade : 0}
  const [state,dispatch] = useReducer((Ps,Act)=>{
      switch (Act.type){
        case "setID" : return {...Ps,ID : Act.value}
        case "setCredit" : return {...Ps,Credit : Act.value}
        case "setGrade" : return {...Ps,Grade : Act.value}
      }
  }, initState)
  return (
    
    <div className="inputbox">
        <aside><div className="GPATEXT">GPA : </div><div className="GPA">{props.gpa}</div></aside>
        <aside className="input">
          <aside><div><label>Subject ID :</label><input placeholder = "Input Subject ID" onChange = {(e) => dispatch({type : "setID" , value : e.target.value})}></input></div></aside>
          <aside>
            <div><label>Credit : </label>
              <select className ="scadit" onChange = {(e)=> dispatch({type : "setCredit" , value : e.target.value})}>
                <option selected disabled>Select Credit</option>
                <option value ="1">1</option>
                <option value ="2">2</option>
                <option value ="3">3</option>
              </select>
            </div>
          </aside>
          <aside>
            <div><label>Grade : </label>
              <select className ="sgrade" onChange = {(e)=> dispatch({type : "setGrade" , value : e.target.value})}>
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
            <div><button className="add" onClick={()=>setCourse(state)}>add</button></div>
          </aside>
        </aside>
      </div>
  );
};

export default CourseForm;
