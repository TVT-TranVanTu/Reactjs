import React, { Component } from 'react';

class Item extends Component {
    constructor(props){
        super(props);
        this.state={

        };
    }
    ShowElementLever(lever){
        let elementlever=null;
        if(lever===0){
            elementlever=<span className="label label-danger">Small</span>
        }
        else if(lever===1){
            elementlever= <span className="label label-danger">Medium</span>
        }
        else if(lever>1){
            elementlever=<span className="label label-danger">High</span>
        }
        else{
            elementlever=<span className="label label-danger">Notvalid</span>
        }
        return elementlever;
    }
    render() {
        const {item}=this.props;
        const index=this.props.index;
        
        return (
            <tr>
                <td className="text-center">{index+1}</td>
                <td>{item.name}</td>
                <td className="text-center">{this.ShowElementLever(item.lever)}</td>
                <td>
                    <button type="button" className="btn btn-warning">Edit</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}
export default Item;