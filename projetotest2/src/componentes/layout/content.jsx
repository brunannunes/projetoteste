import './content.css'
import React from "react"
import { Switch, Route} from 'react-router-dom'
import Inicio from '../../views/contents/inicio'
import Detalhes from '../../views/contents/detalhes'
import Introducao from '../../views/contents/introducao'

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