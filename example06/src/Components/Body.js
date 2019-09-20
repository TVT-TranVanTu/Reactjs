import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Dalat from '../Body/Dalat';

class Body extends Component {
  render() {
    return (
      <Router>
        <div className="row">

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <NavLink to="/Dalat">
                <img className="card-img-top" src="./image/husky.jpg" alt="" />
                <div className="card-body">
                  <h4 className="card-title">
                    <b>Husky</b>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Giống chó Husky dễ thương,ngoại hình đẹp ,thông minh.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </NavLink>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <NavLink to="/">

                <img className="card-img-top" src="./image/pug.jpg" alt="" />
                <div className="card-body">
                  <h4 className="card-title">
                    <b>Pug</b>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Chó pug mặt xệ siêu dễ thương,dễ nuôi đang rất được ưa chuộng.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </NavLink>

            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <NavLink to="/">

                <img className="card-img-top" src="./image/chowchow.jpg" alt="" />
                <div className="card-body">
                  <h4 className="card-title">
                    <b>Chow chow</b>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Giống chó Chow chow lông xù rất dễ thương và dễ nuôi.</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <NavLink to="/">

                <img className="card-img-top" src="./image/rottweiler.jpg" alt="" />
                <div className="card-body">
                  <h4 className="card-title">
                    <b>Rottweiler</b>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">giống chó Rottweiler ăn tạp rất thông minh .</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <NavLink to="/">

                <img className="card-img-top" src="./image/alaska.jpg" alt="" />
                <div className="card-body">
                  <h4 className="card-title">
                    <b>Alaska</b>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">giống chó Alaska lớn lông xù oai vệ dễ thương hiểu chuyện .</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <NavLink to="/">

                <img className="card-img-top" src="/image/samayed.jpg" alt="" />
                <div className="card-body">
                  <h4 className="card-title">
                    <b>Samayer</b>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">giống chó Samayed lông trắng cực kỳ đáng yêu ăn mạnh khá thông minh khỏe mạnh .</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <Route path="/Dalat" component={Dalat}></Route>

      </Router>
    );
  }
}
export default Body;