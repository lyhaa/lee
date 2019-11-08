import React,{Component} from 'react';
// import Stort from '../../stroe';
export default class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            isfocus:false,
            searchtext:''
        }
    }
    // componentDidMount(){
    //     // this.refs.myInput.focus();
    //     window.$store
    // }
    changeGreeting(text) {
        return {
            type: 'SETAUTHOR',
            text
        };
    }
    isf(){
        this.setState({
            isfocus:!this.state.isfocus
        })
        if(!this.state.isfocus){
            this.refs.myInput.focus();
        }
    }
    onchg(e){
        // let _this = this;
        console.log(e)
        this.setState({
            searchtext:e.target.value
        })
        // console.log(this.state.searchtext)
    }
    componentDidUpdate(){
        window.$store.dispatch(this.changeGreeting(this.state.searchtext))
    }
    render(){
        return(
            <div className={this.state.isfocus?"weui-search-bar weui-search-bar_focusing":"weui-search-bar"} id="searchBar">
            <form className="weui-search-bar__form">
                <div className="weui-search-bar__box">
                    <i className="weui-icon-search"></i>
                    <input type="search" ref="myInput" className="weui-search-bar__input" id="searchInput" placeholder="搜索" required="" 
                    onChange={
                        (e)=>{
                            this.setState({
                                searchtext: e.target.value
                            })
                            }
                        } value={this.state.searchtext}
                    />
                    <a className="weui-icon-clear" id="searchClear" 
                    onClick={
                        ()=>{
                            this.setState({
                                searchtext:''
                            })
                        }
                    }
                    style={{
                        display:this.state.searchtext.length>0?'block':'none'
                    }} ></a>
                </div>
                <label className="weui-search-bar__label" onClick={this.isf.bind(this)} id="searchText">
                    <i className="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
            </form>
            <a className="weui-search-bar__cancel-btn" id="searchCancel" onClick={this.isf.bind(this)} >取消</a>
        </div>
        )
    }
}