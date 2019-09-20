import React, { Component } from 'react';

class Sort extends Component {
    constructor(props){
        super(props);
        this.state={

        };
        this.handleSort=this.handleSort.bind(this);
    }
    handleSort(oderBy,oderDir){
        console.log(oderBy +"-"+ oderDir);
        this.props.onclickSort(oderBy,oderDir);
    }
    render() {
        let {oderBy,oderDir} = this.props;
        let strSort=oderBy +"-"+ oderDir;
        return (
            
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="dropdown">
                        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            Sort by <span className="caret" />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><a role="button" onClick={() =>this.handleSort('Name','Asc')}  >Name ASC</a></li>
                            <li><a onClick={() =>this.handleSort('Name','DESC')}  role="button">Name DESC</a></li>
                            <li role="separator" className="divider" />
                            <li><a onClick={() =>this.handleSort('lever','ASC')}  role="button">lever ASC</a></li>
                            <li><a onClick={() =>this.handleSort('lever','DESC')}  role="button">Level DESC</a></li>
                        </ul>
                        <span className="label label-success label-medium">{ strSort }</span>
                    </div>
                </div>

        );
    }
}
export default Sort;