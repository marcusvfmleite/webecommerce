import '../App.css';
import React from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Menu from '../Components/Menu';
import Page1 from '../Pages/Page1';
import Page2 from '../Pages/Page2';
import Page3 from '../Pages/Page3';

const Routes = () => {
  return(
    <BrowserRouter>
			<Menu />
      <Switch>
        <Route path="/" exact element={<Page1 />} />
        <Route path="/cadastro" element={<Page2 />} />
        <Route path="/login" element={<Page3 />} />
      </Switch>
    </BrowserRouter>    
  )
}

export default Routes;