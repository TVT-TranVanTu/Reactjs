import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
import Task from './Task';




class Controler extends Component {
    constructor(props){
        super(props);
        this.state={
            
        };
        this.HandelAdd=this.HandelAdd.bind(this);

    }
    HandelAdd(){
        this.props.onclickAdd();
    }
    render() {
        let {oderBy,oderDir} = this.props;
        return (
            <div className="row">
                <Search onClickgo={this.props.onClickSearch}></Search>
                <Sort onclickSort={this.props.onclickSort} oderBy={oderBy} oderDir={oderDir} ></Sort>
                <Task isShowForm={this.props.isShowForm}  onClickAdd1={this.HandelAdd}></Task>
            </div>
        );
    }
}
export default Controler;