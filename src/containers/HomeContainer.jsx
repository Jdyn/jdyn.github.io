import React from "react";
import Home from "../components/Home";
import tech from "../lib/technologies";
import project from "../lib/projects";
import lang from "../lib/languages";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.cards = [
      tech.docker,
      tech.django,
      tech.css,
      tech.phoenix,
      tech.ios,
      tech.node,
      tech.react
    ];

    this.projects = [
      project.academus,
      project.typer,
      project.jdyn,
      project.lemonade,
      project.window
    ];

    this.languages = [lang.Python, lang.Swift, lang.javaScript, lang.elixir];
  }

  render() {
    const { changeTheme } = this.props;
    return (
      <Home
        changeTheme={changeTheme}
        cards={this.cards}
        projects={this.projects}
        languages={this.languages}
      />
    );
  }
}

export default HomeContainer;
