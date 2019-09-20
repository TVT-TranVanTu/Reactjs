import React,{Component} from 'react';


class Hello extends Component{
    render(){
        return(
            <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            
            <div className="panel panel-info">
                <div className="panel-heading">
                  <h3 className="panel-title">Reactjs</h3>
                </div>
                <div className="panel-body">
                  
                  <ul className="list-group">
                    <li className="list-group-item">1.Introduction</li>
                    <li className="list-group-item">2.Module1</li>
                    <li className="list-group-item">3.Module2</li>
                  </ul>
                 
                
                
                </div>
         
            </div>
            
          </div>

          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            
              <div className="panel panel-info">
                  <div className="panel-heading">
                    <h3 className="panel-title">Angularjs</h3>
                  </div>
                  <div className="panel-body">
                      <ul className="list-group">
                          <li className="list-group-item">1.Introduction</li>
                          <li className="list-group-item">2.Module1</li>
                          <li className="list-group-item">3.Module2</li>
                        </ul>
                      
                  </div>
              </div>
              
            </div>

            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            
                <div className="panel panel-info">
                    <div className="panel-heading">
                      <h3 className="panel-title">Vuajs</h3>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">
                            <li className="list-group-item">1.Introduction</li>
                            <li className="list-group-item">2.Module1</li>
                            <li className="list-group-item">3.Module2</li>
                          </ul>
                         
                    </div>
                </div>
                
              </div>
              
        </div>
        
      
     
        );
    }
}
export default Hello;