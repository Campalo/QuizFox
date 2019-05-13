import React, { Component } from 'react';
import CategoryCard from '../components/CategoryCards';
import Navbar2 from '../components/globalComponents/Navbar2';
import Footer from '../components/globalComponents/Footer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [17, 18, 22],
      categoryName: ['Nature', 'Computer', 'Geography'],
      categoryPhoto: [
        'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1535136029863-4a3e36ab2dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1331&q=80',
        'https://images.unsplash.com/photo-1488375634201-b85b28653a79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=973&q=80'
      ]
    };
  }

  render() {
    return (
      <div>
        <Navbar2 />
        <main className="mainSize">
          <h1>Eager to play QuizFox?</h1>
          <h3>Choose a category and a level of difficulty to start!</h3>

          <section className="flexCards">
            <CategoryCard
              category={this.state.categoryList[0]}
              name={this.state.categoryName[0]}
              photo={this.state.categoryPhoto[0]}
            />
            <CategoryCard
              category={this.state.categoryList[1]}
              name={this.state.categoryName[1]}
              photo={this.state.categoryPhoto[1]}
            />
            <CategoryCard
              category={this.state.categoryList[2]}
              name={this.state.categoryName[2]}
              photo={this.state.categoryPhoto[2]}
            />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
