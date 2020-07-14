import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Hello from "./hello";
//mport Wish from "./Wish";
//import Greeting from './components/Greeting';
//import Welcome from './components/Welcome';
import States from './components/States';
import Hooks from './components/Hooks';
import data from "./data/data.json";
import Img from "./image1.svg";
import { Route ,Link, BrowserRouter } from 'react-router-dom';
import Resume from "./components/Resume";
function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" />
      <States></States>
      <h1>Using Hooks</h1>
      <Hooks/> */}
        {/* <h1>
        apssdc
      </h1>
      <h2>
        supraja
      </h2>
      <Home nme="apssdc"/>
      <Hello></Hello> 
<Wish/> */}
{/* <Greeting name="supraja" mail="supraja@gmail.com">
  </Greeting>
  <img src={logo} style={{width:"100px"}} />
 <Greeting name="supraja" mail="supraja@gmail.com">
   <p>hi</p>
 <p>Hello Da</p>
 </Greeting>
  <h2>Welcome</h2> */}
    {/* //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
          //Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a */}
          {/* //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
          //Learn React
        //</a>
      //</header>
    //</div> */}
   {/* <h1>
      its home component
    </h1>
    <Welcome name="supraja" college="svecw"></Welcome> */} 
  <BrowserRouter>
  <Route exact path="/" component={Home}/>
  <Route path="/resume" component={Resume}/>
  </BrowserRouter>
  {/* <Home/>  */}
  </div>
    );
  }
  let Home=()=>{
    let profile=data.profiles;
     console.log(profile);
     return(
      <div className="row justify-content-center">
        {
          profile.map((value,index)=>(
            <div className="col-sm-10 col-md-4 col-lg-4 mt-1" key={index}>
              <div className="card pic">
              <div className="card-body">
                <img src={Img} alt="profile" style={{width:"8em"}}></img>
          <h2 className="h3">{value.basic.name}</h2>
          <h4 className="h3">{value.basic.role}</h4>
          <a href="tel:6303930796">{value.basic.phone}</a><br></br>
          <a href="mailto:suprajagurlinka5725@gmail.com">{value.basic.email}</a><br></br>
          <Link to={{pathname:"/resume",profilesData:{i:index} }}className="btn btn-primary">Profile</Link>
              </div>
              </div>
            </div>
          ))
        }
      </div>
     );
   }
export default App;