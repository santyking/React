function User(props){
    console.log(props);
    return(
        <>
            <p>{props.name}</p>
            <p>{props.wife}</p>
            <p>{props.daughter}</p>
            <p>{props.other.add}</p>
            <p>{props.other.city}</p>
        </>
    );
}
export default User;