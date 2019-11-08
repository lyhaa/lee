import React from 'react';
import axios from 'axios';
import News from '../NEW';
export default class Panel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newS:[],
            sreachdata:''
        }
    } v
    async componentWillMount(){
        let data = await axios.get("http://127.0.0.1:5000");
        this.setState({
            newS: data.data.BBM54PGAwangning
        });
    }
    render(){
        return(
            <div className="weui-panel weui-panel_access">
            <div className="weui-panel__hd">图文组合列表{this.state.sreachdata}</div>
            <News newdata={this.state.newS} sdata={this.state.sreachdata} ></News>
            <div className="weui-panel__ft">
                <a  className="weui-cell weui-cell_access weui-cell_link">
                    <div className="weui-cell__bd">查看更多</div>
                    <span className="weui-cell__ft"></span>
                </a>    
            </div>
        </div>
        )
    }
}