import React, { Component } from "react";

class Nav extends Component {
  state = {
    navigation: [
      { page: "home", link: "www.google.ge" },
      { page: "about", link: "www.google.ge" },
      { page: "gallery", link: "www.google.ge" },
      { page: "contact", link: "www.google.ge" }
    ]
  };

  navHandler = Navindex => {
    console.log(Navindex);
  };

  render() {
    return (
      <div className="header">
        <ul>
          {this.state.navigation.map((page, index) => {
            return (
              <li onMouseEnter={() => this.navHandler(index)} key={index}>
                <a href={this.state.navigation[0].link}>
                  {this.state.navigation[index].page}
                </a>
                <div class="dropdown">
                  <a href>{this.state.navigation[0].page}</a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Nav;
