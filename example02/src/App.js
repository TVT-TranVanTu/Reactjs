import React,{Component} from 'react';
import './App.css';
import Lesson from './Component/Lesson';

class App extends Component{

  render(){

    const items=[
      {
        name:"Reactjs",
        time:"25 buổi",
        information:true ,
        desc:"Thông tin khóa học :"
      },
      {
        name:"Angularjs",
        time:"30 buổi",
        information:false ,
        desc:"Thông tin khóa học :"
      },
      {
        name:"Reactjs",
        time:"30 buổi",
        information:true ,
        desc:"Thông tin khóa học :"
      }
    ];
    const elementLesson = items.map((item,index)=>
          <Lesson key={index} name={item.name} time={item.time} information={item.information} >{item.desc}</Lesson>
    
    );

    return(
      
      <div className="row">
        {elementLesson}
      </div>
      
    );
  }
 
 
}

export default App;
