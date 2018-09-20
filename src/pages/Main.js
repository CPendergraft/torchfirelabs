import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import App from '../containers/App_new'
import Contact from './Contact'
import Illustrations from './Illustrations'
import SoundDesign from "./SoundDesign";



const Main = () => (
    <main className="center_hold">
        <Switch>
            <Route exact path='/torchfirelabs/'  render={props => <App {...props} />}   />
            <Route exact path='/torchfirelabs/contact'  render={() => <Contact key="2"/>} />
            <Route exact path='/torchfirelabs/illustrations'  render={() => <Illustrations key="3"/>} />
            <Route  exact path='/torchfirelabs/sounddesign'  render={() => <SoundDesign key="4"/>} />
            <Route     render={props => <App {...props} />}  />
            <Route  path="/*/"   render={props => <App {...props} />}  />
        </Switch>
    </main>
)

export default Main