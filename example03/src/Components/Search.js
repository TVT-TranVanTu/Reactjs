import React, { Component } from 'react';

class Search extends Component {

    constructor(props){
        super(props);
        this.state = {
            strsearch:'',
        };
        this.HandleSearch=this.HandleSearch.bind(this);
        this.HandelClear=this.HandelClear.bind(this);
        this.handelChange=this.handelChange.bind(this);

    }
    HandleSearch(){
       
        this.props.onClickgo(this.state.strsearch);
        
    }

    HandelClear(){
        this.setState({
            strsearch:''
        });
        this.props.onClickgo(this.state.strsearch);

    }
    handelChange(event) {
        this.setState({strsearch: event.target.value});
      }
    render() {
        return (
               <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="input-group">
                        <input value={this.state.strsearch} onChange={this.handelChange} type="text" className="form-control" placeholder="Search for..." />
                        <span className="input-group-btn">
                            <button  onClick={ this.HandleSearch} className="btn btn-info" type="button">Search</button>
                            <button onClick={this.HandelClear} className="btn btn-warning" type="button">Clear</button>
                        </span>
                    </div>
                </div>
            
        );
    }
}
export default Search;






