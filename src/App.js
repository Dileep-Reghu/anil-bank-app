import { Route, Switch, Redirect } from 'react-router-dom';

import AllAccountDetails from './pages/AllAccountDetails';
import QuoteDetail from './pages/AccountDetail';
import NewLoan from './pages/NewLoan';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import AuthPage from './pages/AuthPage';



function App() {



  return (
    <Layout>
      <Switch> 
            
        <Route path='/auth' exact>
          <AuthPage />
        </Route>
       
        <Route path='/accounts' exact>
          <AllAccountDetails />
        </Route>
      
        <Route path='/accounts/:quoteId'>
          <QuoteDetail />
        </Route>
      
        <Route path='/new-loan'>
          <NewLoan />
        </Route>
       
        <Route path='*'>
           <Redirect to="/auth" />
        </Route>
       
      </Switch>
    </Layout>
  );
}

export default App;