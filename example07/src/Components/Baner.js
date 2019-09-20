import React, { Component } from 'react';
import Banerleft from '../Components/Banerleft';
import Banerright from '../Components/Banerright';

class Baner extends Component {
    render() {
        return (
            <div className="row">
                <Banerleft></Banerleft>
                <Banerright></Banerright>
            </div>
        );
    }
}
export default Baner;