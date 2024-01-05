

import './App.css';
import { Form } from './component/Form';





function App() {
  
  

return(
<div className="App">
<Form/>
 
</div>
);
 
}

export default App;








//                              context api

// import './App.css';
// import{ BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import { Home } from './pages/Home';
// import{Contact} from './pages/Contact';
// import {Menu} from './pages/Menu';
// import { Navbar } from './Navbar';
// import { useState } from 'react';



// function App() {
//   const [username,setUsername]=useState("gaurav")

// return(
// <div className="App">
  
// <Router>
//  <Navbar/>
 

//  <Routes >
//  <Route path="/" element={<Home  username={username}/>}  />
//  <Route path="/menu" element={<Menu username={username} setUsername={setUsername} />}  />
// <Route path="/contact" element={<Contact username={username} />}  />

// </Routes>
//  </Router>
 
 
// </div>
// )
 
// }

// export default App;







// import{ BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import { Home } from './pages/Home';
// import{Menu} from './pages/Menu';
// import{Contact} from './pages/Contact';
// import { Navbar } from './Navbar';



// <Router>
// <Navbar/>

// <Routes >
// <Route path="/" element={<Home/>}/>
// <Route path="/menu" element={<Menu/>}/>
// <Route path="/contact" element={<Contact/>}/>

// </Routes>
// </Router>


//                                      api fetch ---1
// const [name,setName]=useState("");
// const [age,setAge]=useState(null);

//   const fetch=()=>{
//     Axios.get(`https:/api.agify.io/?name=${name}`).then((res)=>{
//       setAge(res.data);
//     });
  
//   };
//   return(
//   <div className="App">

//      <input placeholder='Enter Name' onChange={(event)=>{
//     setName(event.target.value)
//     }}
//     /> 
//     <button onClick={fetch}> Predict Age</button>
//     <h1>Predicted Age: {age?.age}</h1>
//   </div>
//   )
 





//                                     api fetch


// const [cfact,setcFact]=useState("")
  
// const click=()=>{

// Axios.get("https:/catfact.ninja/fact").then((res)=>{
//     setcFact(res.data.fact);
//   })

// }
// useEffect(()=>{
//   Axios.get("https:/catfact.ninja/fact").then((res)=>{
//       setcFact(res.data.fact);
//     })
//   }, [])

  
//   return (
//     <div className="App">
//       <button onClick={click}>Generate a cat fact</button>
//       <p>{cfact}</p>
//     </div>
//   );