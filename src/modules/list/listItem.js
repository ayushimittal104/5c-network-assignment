function ListItem(props){
    // console.log(props.data)
    let data = props.data;
    return(
        <div className="listItem" onClick={() =>{props.setPage("showDetails");props.setRepo(data)}}>
            <div>
                <img height={75} width={75}src={props.img} alt={data.name}/>
            </div>
            <div className="infoContainer">
                <div className="nameData">{data.name}</div>
                <div className="description">{data.description}</div>
            </div>
        </div>
    )
}
export default ListItem;