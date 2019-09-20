import React, { Component } from 'react';


class Lesson extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isShowoutLine: false,
            totalStudents: 99
        };

        this.RegistLesson = this.RegistLesson.bind(this);
        this.oneClick3 = this.oneClick3.bind(this);
        this.ShowInfomationLesson = this.ShowInfomationLesson.bind(this);

    }


    oneClick1() {
        alert("Bạn vừa click vào free");
    }
    oneClick2(content) {
        alert(content);
    }
    oneClick3() {
        alert(this.props.name);
    }
    oneClick4() {
        alert("Khóa học không miễn phí");
    }
    RegistLesson() {
        console.log(this.refs.username.value);
    }

    ShowInformation() {
        const isFree = this.props.information;
        if (isFree === true) {
            return <div className="panel-footer">
                <div className="btn-group">
                    <button onClick={this.oneClick1} type="button" className="btn btn-warning">Free</button>
                    <button onClick={() => this.oneClick2("Bạn vừa click vào view")} type="button" className="btn btn-warning">View</button>
                    <button onClick={this.oneClick3} type="button" className="btn btn-warning">regist</button>
                </div>
            </div>;
        }
        return <div className="panel-footer">
            <div className="btn-group">
                <button onClick={this.oneClick4} type="button" className="btn btn-warning">Not Free</button>
                <button onClick={() => this.oneClick2("Bạn vừa click vào view")} type="button" className="btn btn-warning">View</button>
                <button onClick={this.oneClick3} type="button" className="btn btn-warning">regist</button>
            </div>
            <div>
                <div className="input-group">

                    <span className="input-group-btn">
                        <button onClick={this.RegistLesson} type="button" className="btn btn-info">Regist</button>
                    </span>

                    <input type="text" className="form-control" id="" placeholder="User name regist" ref="username" />

                </div>
            </div>
        </div>
    }

    ShowInfomationLesson() {
        this.setState({
            isShowoutLine: !this.state.isShowoutLine
        });
    }

    render() {

        console.log(this.state);
        let elementOutLine = null;
        if (this.state.isShowoutLine) {
            elementOutLine = <ul className="list-group">
                <li className="list-group-item">1.Introduction</li>
                <li className="list-group-item">2.Module1</li>
                <li className="list-group-item">3.Module2</li>
            </ul>;
        }
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">

                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.props.name}</h3>
                    </div>
                    <div className="panel-body">
                        <b>{this.props.time}</b>
                        <p>
                            <button onClick={this.ShowInfomationLesson} type="button" className="btn btn-success">Toogle outLine</button>
                        </p>
                        {elementOutLine}
                        <div className="banel-footer">
                            <b>{this.props.children}</b><br></br>
                        </div>
                        {this.ShowInformation()}
                    </div>

                </div>

            </div>




        );
    }
}
export default Lesson;



