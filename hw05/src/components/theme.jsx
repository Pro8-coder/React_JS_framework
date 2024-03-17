import React from "react";
import { connect } from "react-redux";
import { toggleTheme } from "./actions";

const ThemeSwitcherComponent = ({ theme, toggleTheme }) => {
  return (
    <div>
      <h2>Theme Switcher</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme,
});

const mapDispatchToProps = {
  toggleTheme,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeSwitcherComponent);
