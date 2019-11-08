import React from 'react';
import {
    HashRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Antable from '../component/Antable';
import WrappedRegistrationForm from '../component/WrappedRegistrationForm';
import EchartsRadar from '../echarts';
import EchartsRadar2 from '../echarts/index2';
import EchartsRadar3 from '../echarts/index3';
import EchartsRadar4 from '../echarts/index4';
import EchartsRadar5 from '../echarts/index5';
import EchartsRadar6 from '../echarts/index6';
import EchartsRadar7 from '../echarts/index7';
import EchartsRadar8 from '../echarts/index8';
import EchartsRadar9 from '../echarts/index9';
import EchartsRadar10 from '../echarts/index10';
export default class Conten extends  React.Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Antable}></Route>
                    <Route exact path="/iform" component={WrappedRegistrationForm}></Route>
                    <Route exact path="/echarts" component={EchartsRadar}></Route>
                    <Route exact path="/echarts2" component={EchartsRadar2}></Route>
                    <Route exact path="/echarts3" component={EchartsRadar3}></Route>
                    <Route exact path="/echarts4" component={EchartsRadar4}></Route>
                    <Route exact path="/echarts5" component={EchartsRadar5}></Route>
                    <Route exact path="/echarts6" component={EchartsRadar6}></Route>
                    <Route exact path="/echarts7" component={EchartsRadar7}></Route>
                    <Route exact path="/echarts8" component={EchartsRadar8}></Route>
                    <Route exact path="/echarts9" component={EchartsRadar9}></Route>
                    <Route exact path="/echarts10" component={EchartsRadar10}></Route>
                </Switch>
                <Redirect to="/"></Redirect>
            </HashRouter>
        )
    }
}