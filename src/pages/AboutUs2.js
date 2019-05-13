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
        'https://media.licdn.com/dms/image/C5103AQGVdibzE2KuZw/profile-displayphoto-shrink_800_800/0?e=1563408000&v=beta&t=wJvZiEMFfL8tvn8XlgeMwNuFFLfhMA5J_m5PDe-hGys',
        'https://media.licdn.com/dms/image/C4E03AQFU4bvO5nyT_Q/profile-displayphoto-shrink_200_200/0?e=1563408000&v=beta&t=yhmK_baJxPNAI1VAKRiVTLhgU9hf5cSCodSDwTPwcOQ',
        'https://drive.google.com/uc?id=1RPS8iypYQMKidFsdtxPlSmQ3RJrefEcr'
      ],
      memberBio: ['bla', 'bla', 'bla'],
      memberGithub: [
        'https://github.com/laura-mso',
        'https://github.com/Campalo',
        'https://github.com/Datingel'
      ],
      memberLinkedin: [
        'https://www.linkedin.com/in/laura-sochaczewski-70863b121/',
        'https://www.linkedin.com/in/camille-charteau/',
        'https://www.linkedin.com/in/raphael-lautenbacher-4940a6171/'
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
