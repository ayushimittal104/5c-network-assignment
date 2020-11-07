import { useState } from 'react';
import List from './modules/list/list';
import FollowersList from './modules/followersList/followersList';
import RepoPage from './modules/repoPage/repoPage';
import './App.css';

function App() {
  const [input,setInput] = useState("");
  const [page,setPage] = useState('');
  const [userData,getUserData] = useState([]);
  const [ownerData,getOwnerData] = useState("");
  const [repo,setRepo] = useState("")
  const handleSearch =(input) =>{
    console.log(input)
    fetch(`https://api.github.com/users/${input}`)
    .then(res=>res.json())
    .then(res =>{
        console.log(res)
        getOwnerData(res)
    })
    .catch(error => console.log(error));
    fetch(`https://api.github.com/users/${input}/repos`)
    .then(res => res.json())
    .then(response => {
      if(response.message == "Not Found")
        setPage("notFound")
      else{
        getUserData(response)
        setPage('showList')
      }
    })
    .catch(error => console.log(error));
  }
  let content =        
    <div className="search-bar">
      <div className="search-input-wrapper">
        <input type="text" placeholder="Search by name" onChange={(event) =>setInput(event.target.value)}/>
      </div>
      <div className="button" onClick={() =>handleSearch(input)}>Search</div>
    </div>
  if(page === 'showList'){
     content = <List data={userData} ownerData={ownerData} setPage={setPage} setRepo={setRepo}/>
  }
  else if(page === 'showDetails'){
    content = <RepoPage data={repo} ownerData={ownerData}/>
  }
  else if(page === 'followersList'){
    content = <FollowersList url={ownerData.followers_url}  handleSearch={handleSearch}/>
  }
  else if(page === "notFound"){
    content = <div className="notFound">No Result Found!!!!!!!!</div>
  }
    return (
      <div className="App">
        <div className="App-header">
          <div className="close" onClick={() => setPage("")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#888888" viewBox="0 0 20 20" height="30" width="40">
                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg> Go To Search Bar
          </div>
        </div>
        {content}
      </div>
    );
 
}

export default App;
