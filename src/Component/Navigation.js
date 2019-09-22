import React, { Component } from "react";

class Nav extends Component {
  state = {
    navigation: [
      [
        { page: "home", link: "www.google.ge" },
        { nav: "Inside", href: "www.go.ge" }
      ],
      [
        { page: "about", link: "www.google.ge" },
        { nav: "Inside2", href: "www.go2.ge" }
      ],
      [
        { page: "gallery", link: "www.google.ge" },
        { nav: "Inside2", href: "www.go2.ge" }
      ],
      [
        { page: "contact", link: "www.google.ge" },
        { nav: "Inside2", href: "www.go2.ge" }
      ]
    ]
  };

  render() {
    return (
      <div className="header">
        <ul>
          {this.state.navigation.map((page, index) => {
            return (
              <li key={index}>
                <a href={this.state.navigation[index][0].link}>
                  {this.state.navigation[index][0].page}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Nav;
