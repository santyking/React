function Carder(props) {
    return(
        <div>
            <span className="carder">{props.data.name}</span>
            <span className="carder">{props.data.gender}</span>
            <span className="carder">{props.data.id}</span>
        </div>
    );
}
export default Carder;