import ListItem from "./listItem"
import "./list.css";
function List(props){
    let ownerData = props.ownerData;
    let owner = 
        <div className="OwnerWrapper">
            <div>
                <img  height={100} width={100} src={ownerData.avatar_url} alt={ownerData.name} />
            </div>
            <div>{ownerData.name}</div>
            <div>{ownerData.login}</div> 
            <div>{ownerData.bio}</div> 
            <div>
                <div  className="Followers"onClick={() => props.setPage("followersList")}>
                <svg  height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path  d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path></svg>
                {ownerData.followers} Followers</div>
                <div>{ownerData.following} Following</div>
            </div>
        </div>
    let list = "";
    console.log(props.data)
    console.log(props.data.length)
    if(props.data.length) 
        list = props.data.map(item =>{
            console.log(item.owner)
            return <ListItem data={item} key={item.id} img={ownerData.avatar_url} setPage={props.setPage} setRepo={props.setRepo}/>
        })
 return(
     <div className="mainWrapper">
        {owner}
        <div className="repoList">
            {list} 
        </div>
     </div>
 )
}
export default List;