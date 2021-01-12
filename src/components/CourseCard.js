const CourseCard = (props) => {
  return (
      <div className="courseCard">
        <aside>
          <div>Subject ID : <span> {props.ID}</span> </div>
        </aside>
        <aside>
          <div>Credit : <span>{props.Credit}</span> </div>
        </aside>
        <aside>
          <div>Grade : <span>{props.Grade}</span> </div>
        </aside>
        <aside><button className="button" onClick={()=> props.onDeleteCourse(props.ID)}>x</button></aside>
      </div>
  );
};

export default CourseCard;
