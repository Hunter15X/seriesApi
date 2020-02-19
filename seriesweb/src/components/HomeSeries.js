import React, { Component } from 'react';
import { render } from '@testing-library/react';

import './HomeSeries.css'


class HomeSeries extends Component{
    render(){
        return(
            <div>
                <div className="bg">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-title">Home</div>
                        </div>
                    </div>
                </div>
                <div className="card-img">
                    <div className="card-body">
                        <img src="/best.jpg" className="card-img" />
                    </div>
                </div>       
            
            </div>
        )
    }
}

export default HomeSeries