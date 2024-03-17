import React from 'react';
import Theme from './components/theme';
import './App.css';
import { connect } from 'react-redux';

function App({ theme }) {
  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <h1>Welcome to the Theme Switcher App</h1>
      <Theme />
    </div>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme
});

export default connect(mapStateToProps)(App);
