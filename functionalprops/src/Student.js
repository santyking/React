function Student(props) {
    console.log(props.fname);
    return(
        <div id="studentData">
            <h1>{props.fname}, {props.gender}</h1>
            <h2> {props.others.city} </h2>
        </div>
    );    
}

export default Student;