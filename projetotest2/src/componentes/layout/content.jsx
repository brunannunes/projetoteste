import './Content.css'
import React from "react"
import { Switch, Route} from 'react-router-dom'
import Inicio from '../../views/contents/Inicio'
import Detalhes from '../../views/contents/Detalhes'
import Introducao from '../../views/contents/Introducao'

const Content = props => (
    <main className="Content">
       <Switch>
           <Route exact path="/">
               <Inicio />
           </Route>
           <Route path="/Detalhes">
                   <Detalhes />
               </Route>
               <Route path="/Introducao">
                   <Introducao />
               </Route>
               </Switch>
    </main>
)
export default Content