import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title';
import Form from './Components/Form';
import List from './Components/List';
import items from './Components/Mock/Taks';
import Controler from './Components/Controler';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      items:items, 
      isShowForm:false,
      strsearch:'',
      oderBy:"Lever",
      oderDir:"Asc",
    };
    this.CloseForm=this.CloseForm.bind(this);
    this.ShowAtbForm=this.ShowAtbForm.bind(this);
    this.HandleSearchgo=this.HandleSearchgo.bind(this);
    this.HandleSort=this.HandleSort.bind(this);
  }
  ShowAtbForm(){
    this.setState({
      isShowForm:!this.state.isShowForm,
    });
  }
  CloseForm(){
    this.setState({
      isShowForm:false
    });
  }

  HandleSearchgo(value){ 
    this.setState({
      strsearch:value
    });
  }

  HandleSort(oderBy,oderDir){
    this.setState({
      oderBy:oderBy,
      oderDir:oderDir,
    });
  }
  render() {
    
    let itemsorigin=this.state.items;
    let items =[];
    let {oderBy,isShowForm,oderDir} =this.state;
    let ShowForm = null;
    let search = this.state.strsearch;

    if(search.length > 0){
      itemsorigin.forEach((item) =>{
        if(item.name.toLocaleLowerCase().indexOf(search) !==-1){
          items.push(item);
        }
    });
    }
    else{
      items=itemsorigin;
    }
   

    if(isShowForm){
      ShowForm=<Form onclickCance={this.CloseForm}></Form>;
    }
    return (

      <div>
        <Title></Title>

        <Controler
        oderBy={oderBy}
        oderDir={oderDir}
        onclickSort={this.HandleSort}
        onClickSearch={this.HandleSearchgo} 
        isShowForm={isShowForm} 
        onclickAdd={this.ShowAtbForm}></Controler>

        {ShowForm}

        <List items={items}></List>
      </div>
    );
  }
}


export default App;
