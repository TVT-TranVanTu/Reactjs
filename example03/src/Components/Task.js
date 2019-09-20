import React, { Component } from 'react';

class Task extends Component {
    constructor(props){
        super(props);
        this.state={
            
        };
        this.HandelAdd1=this.HandelAdd1.bind(this);
    }
    HandelAdd1(){
        this.props.onClickAdd1();
    }
                
    render() {
         let elementButton =  <button onClick={this.HandelAdd1} type="button" className="btn btn-info btn-block">Add Task</button>;
         if(this.props.isShowForm===true){
            elementButton= <button onClick={this.HandelAdd1} type="button" className="btn btn-success btn-block">Close Task</button>;
         }
        return (
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                {elementButton}
            </div>
        );
    }
}
export default Task;