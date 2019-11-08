import React from 'react';
import './index.css';
export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"搜索案例"
        }
    }
    render(){
        return(
            <div className="header">{this.state.name}</div>
        )
    }
}