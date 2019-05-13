import React, { Component } from 'react';
import AboutCard from '../components/AboutCards';
import Navbar2 from '../components/globalComponents/Navbar2';
import Footer2 from '../components/globalComponents/Footer2';

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberName: ['Laura Sochaczewski', 'Camille Charteau', 'Raphael Lautenbacher'],
      memberPhoto: [
        'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1535136029863-4a3e36ab2dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1331&q=80',
        'https://images.unsplash.com/photo-1488375634201-b85b28653a79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=973&q=80'
      ],
      memberBio: ['bla', 'bla', 'bla'],
      memberGithub: [
        'https://github.com/laura-mso',
        'https://github.com/laura-mso',
        'https://github.com/laura-mso'
      ],
      memberLinkedin: [
        'https://github.com/laura-mso',
        'https://github.com/laura-mso',
        'https://github.com/laura-mso'
      ]
      // TO DO : CREATE AN OBJECT WITH 3 MEMBERS AND ALL THERE INFO INSIDE, INSTEAD OF MULTIPLE ARRAYS
    };
  }

  render() {
    return (
      <div>
        <Navbar2 />
        <main className="mainSize">
          <section id="AboutUs">
            <h1>Discover our team</h1>
            <div className="flexCards">
              <AboutCard
                photo={this.state.memberPhoto[0]}
                name={this.state.memberName[0]}
                bio={this.state.memberBio[0]}
                github={this.state.memberGithub[0]}
                linkedin={this.state.memberLinkedin[0]}
              />
              <AboutCard
                photo={this.state.memberPhoto[1]}
                name={this.state.memberName[1]}
                bio={this.state.memberBio[1]}
                github={this.state.memberGithub[1]}
                linkedin={this.state.memberLinkedin[1]}
              />
              <AboutCard
                photo={this.state.memberPhoto[2]}
                name={this.state.memberName[2]}
                bio={this.state.memberBio[2]}
                github={this.state.memberGithub[2]}
                linkedin={this.state.memberLinkedin[2]}
              />
            </div>
          </section>
        </main>
        <Footer2 />
      </div>
    );
  }
}

export default AboutUs;
