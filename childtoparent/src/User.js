function User(props){
    const namer = "Santosh";
    return(
        <div>
            <h1>Hello!</h1>
            <button onClick={()=>props.data(namer)}>Click me</button>
        </div>
    );
}
export default User;