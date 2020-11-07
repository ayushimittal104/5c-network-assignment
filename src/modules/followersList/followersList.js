import { useState, useEffect } from "react" ;
import './followersList.css';

function FollowersList(props){
    const [followers,getFollowers] = useState([]);
    useEffect(() =>{
        fetch(props.url)
        .then(res => res.json())
        .then(res =>{
            console.log(res)
            getFollowers(res)
        })
        .catch(error => console.log(error));
    }, [])
    let list = "";
    if(followers.length)
        list = followers.map(item =>{
            return <div onClick={()=>{props.handleSearch(item.login)}} className="followerListItem" key={item.id}><div><img height={100} width={100} src={item.avatar_url} alt={item.login}/></div><div className="name">{item.login}</div></div>
    })

    return(
        <div className="followersWrapper">
            <div className="heading">FOLLOWERS</div>
            <div className="followerList">{list}</div>
        </div>
    )
}
export default FollowersList;