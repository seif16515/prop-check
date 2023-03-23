import './App.css';
import Profile from './profile/profile';
import Card from './profile/card';
function App() {
  function like(e){
    e.preventdefault
    alert("you now like this account")
  }
  return (
    <>
    <div style={{display : "flex" , alignItems : "center", paddingLeft:"40%", paddingTop: 50}}>
      <Profile name="seif bhiri" like={like} dateofbirth="13/03/2006" bio='this i a very profissional one and can easily take all the responsibility' profesion="full stack developer co founder and ceo of the united states" >
        
      </Profile>
    </div>
    <div style={{display : "flex" , alignItems : "center", paddingLeft:"45%", }}>
    <Card >
      <img src='/imgs/download.jpg' style={{ width: '200px',
        height: '200px',
        border : '1.5px solid lightgrey',
        borderRadius: '25px',
        padding: '4px ',
        margin: '4 px ',}}></img>
    </Card>
    </div>
    </>
  )
  ;
}


export default App;
