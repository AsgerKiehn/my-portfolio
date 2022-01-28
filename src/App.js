import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Page from './components/Page'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Page} path='/' exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
