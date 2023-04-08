import React from "react"
import { BrowserRouter, Route, Switch } from 'reat-router-dom'
import { AppProvider } from "../component/AppContext"
import Home from "./Home"
import {History, HistoryDetail} from './Historique'

const _Apps = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/history" component={History} />
          <Route exact path="/history/:id" component={HistoryDetail} />
        </Switch>
      </AppProvider>
    </BrowserRouter>
  )
}

export default _Apps