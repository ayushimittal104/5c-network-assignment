import './repoPage.css';
function RepoPage(props){
    console.log(props)
    let data =props.data;
    let ownerData = props.ownerData;
    return(
        <div className="repoMainWrapper">
            <div className="leftSideWrapper">
                <div>
                <img  height={100} width={100} src={ownerData.avatar_url} alt={ownerData.name} />
                </div>
                <div className="tick">
                    Verified By Github
                </div>
                {data.forks_count ?<div>
                    <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path  d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
                    {data.forks_count} forks
                </div> :""}
                {data.language ? 
                <div>
                    <div style={{color:"gray"}}>Language</div>
                    <div className="language">{data.language }</div>
                </div>
                :""}
            </div>
            <div className="RightSideWrapper">
                <div style={{color:"gray",marginBottom:"10px"}}>Application</div>
                <div style={{fontSize:"20px",marginBottom:"10px",fontWeight:"700"}}>{data.name}</div>
                <div>{data.description}</div>
                {data.homepage ? <div>
                    <svg  height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>
                    <a href={data.homepage}>{data.homepage} </a>
                </div>
                :""}
            </div>
        </div>
    )
}
export default RepoPage;