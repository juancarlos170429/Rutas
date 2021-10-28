import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Hero from './Hero/index'
import Home from './Home'
import Ruta1 from './Ruta1'
import Ruta2 from './Ruta2'
import View from '../layout/View'

const RouterApp = () => {
  return (
   
      <BrowserRouter>
       <View>
        <Switch>
          <Route exac path="/ruta1">
            <Ruta1 />
          </Route>
          <Route exac path="/Ruta2">
            <Ruta2 />
          </Route>
          <Route exac path="/hero">
            <Hero />
          </Route>
          <Route exac path="/">
            <Home />
          </Route>
        </Switch>
        </View>
      </BrowserRouter>
   
  )
}

export default RouterApp
