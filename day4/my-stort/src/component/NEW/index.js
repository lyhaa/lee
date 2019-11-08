import React from 'react';
export default  class News extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            val:''
        }
    }
    componentDidUpdate(){
        window.$store.subscribe(()=>{
            this.setState({
                    val: window.$store.getState().greeting
                })
        })
    }
    render(){
        // return 
        let arr = [];
        if(this.state.val){
            arr = this.props.newdata.filter((item,index)=>{
                if(item.title.indexOf(this.state.val)>=0){
                    return <a className="weui-media-box weui-media-box_appmsg" key={index} >
                                <div className="weui-media-box__hd">
                                    <img className="weui-media-box__thumb" src={item.imgsrc} alt=""/>
                                </div>
                                <div className="weui-media-box__bd">
                                    <h4 className="weui-media-box__title">{item.title}</h4>
                                    <p className="weui-media-box__desc">{item.digest}</p>
                                </div>
                            </a>
                }
            })
        }else{
            arr = this.props.newdata
        }
        return (arr.map((item, index) => {
                    return (<a className="weui-media-box weui-media-box_appmsg" key={index} >
                                <div className="weui-media-box__hd">
                                    <img className="weui-media-box__thumb" src={item.imgsrc} alt=""/>
                                </div>
                                <div className="weui-media-box__bd">
                                    <h4 className="weui-media-box__title">{item.title}</h4>
                                    <p className="weui-media-box__desc">{item.digest}</p>
                                </div>
                            </a>)
                }))
        
    }
}