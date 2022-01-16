import React from 'react';
import './App.css'
import StudentClass from './StudentClass';

var students = [
  {id: 1,name:"Sirojiddin",status:'Student'},
  {id:2,name:"Sardor",status: 'Manager'},
  {id:3,name:"Sanjar",status: 'Student'},
  {id:4,name:"Jumanazar",status :'Mentor'},
  {id:5,name:"Toshmat",status :'Student'},
  {id:6,name:"Gulbashakar",status :'CEO'},
]
 class App extends React.Component{
   render(){
     return(
      <div className="container">
                <StudentClass data={students}/>
   </div>
     )
   }
 }
  

export default App;
