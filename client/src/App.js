// import { Box } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import ContextProvider from './context/ContextProvider';

import Header from './components/header/Header';
import Home from './components/home/Home';
import DetailView from './components/details/DetailView';
import CreatePost from './components/create/CreatePost';
import Update from './components/create/Update';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import TemplateProvider from './templates/TemplateProvider';

function App() {
  return (
    <TemplateProvider>
     <ContextProvider>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/details/:id" element={<DetailView/>} />
        <Route exact path="/create" element={<CreatePost/>} />
        {/* <Route exact path="/create/:category?" element={<CreatePost/>} /> */}
        <Route exact path="/update/:id" element={<Update/>} />

        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>





      {/* <Header />
        <Box style={{marginTop: 64}}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/details/:id' component={DetailView} />
            <Route exact path='/create' component={CreatePost} />
            <Route exact path='/update/:id' component={Update} />
          </Switch>
        </Box> */}
    </BrowserRouter>
     </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
