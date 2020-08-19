import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import Starships from './containers/Starship/Starships';
import Footer from './components/Navigation/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Starships />
        </Layout>
        <Footer/>
      </div>
    );
  }
}

export default App;
