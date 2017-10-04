import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.jsx';
import Main from './components/main.jsx';
import Footer from './components/footer.jsx';
import '../scss/main.scss';
import "bootstrap-sass";


class App extends React.Component {
  render() {
    return(
      <div className="container-fluid">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
