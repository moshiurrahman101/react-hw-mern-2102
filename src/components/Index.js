import React from 'react';
import Blog from './Blog';
import Header from './Header';
import Signup from './Signup';

function Index() {
  return <div>
      <Header/>
      <hr/>
      <Signup/>
      <hr/>
      <Blog/>
  </div>;
}

export default Index;
