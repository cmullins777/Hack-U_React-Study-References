import React, {Component} from 'react';

import './App.css';
import Button from "./components/Button";
import Header from "./components/Header";
import Week from "./components/Week";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      inputTitle: '',
      inputLink: '',
      week1: [
        {
          title: 'JavaScript Assessment',
          link: 'https://github.com/rmurphey/js-assessment',
        },
        {
          title: 'DevDocs, offline version',
          link: 'http://devdocs.io/offline',
        },
        {
          title: 'FunFunFunctions: Higher Order Functions',
          link: 'https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84',
        },
        {
          title: 'FunFunFunctions: ES6/2015 var, let, and const',
          link: 'https://www.youtube.com/watch?v=sjyJBL5fkp8',
        },
        {
          title: 'FunFunFunctions: ES6/2015 arrow functions',
          link: 'https://www.youtube.com/watch?v=6sQDTgOqh-I',
        },
        {
          title: 'Industry Talk: Women in tech',
          link: 'http://tech.co/dc-is-the-top-city-for-women-in-tech-2016-02',
        },
        {
          title: 'JavaScript: Understanding the Weird Parts',
          link: 'https://www.udemy.com/understand-javascript/?couponCode=OCT1202&siteID=Kzz30XxWgII-loSkKDchAkcHj_nnwiIBHQ&LSNPUBID=Kzz30XxWgII',
        },
        {
          title: 'ES6 at a glance',
          link: 'http://es6-features.org/',
        },
        {
          title: 'Essential ES6 / ES2015 JavaScript',
          link: 'https://www.youtube.com/watch?v=CozSF5abcTA',
        },
        {
          title: 'Javascript ES6 Cheatsheet - the best of JS ES6',
          link: 'https://www.youtube.com/watch?v=AfWYO8t7ed4',
        },
      ],
      week2: [
        {
          title: 'AirBnb Styleguide',
          link: 'https://github.com/airbnb/javascript',
        },
        {
          title: 'Learn ES6 (ECMAScript 2015) - Course by @johnlindquist',
          link: 'https://egghead.io/courses/learn-es6-ecmascript-2015',
        },
        {
          title: 'Learn Four Semesters of Computer Science in 5 Hours w/ Brian Holt',
          link: 'https://frontendmasters.com/courses/computer-science/',
        },
        {
          title: 'Git Intro',
          link: 'http://www-cs-students.stanford.edu/~blynn/gitmagic/',
        },
        {
          title: 'Sublime Text Power User Book by Wes Bos',
          link: 'https://sublimetextbook.com/',
        },
        {
          title: 'Atom keyboard shortcuts',
          link: '',
        },
      ],
      week3: [
        {
          title: 'Thinking in React',
          link: 'https://facebook.github.io/react/docs/thinking-in-react.html',
        },
        {
          title: 'REACT JS TUTORIAL #2 - Reactjs Components & Rendering',
          link: 'https://www.youtube.com/watch?v=fd2Cayhez58&feature=youtu.be',
        },
        {
          title: 'REACT JS TUTORIAL #3 - Composing Multiple React.js Components',
          link: 'https://www.youtube.com/watch?v=vu_rIMPROoQ',
        },
        {
          title: 'REACT JS TUTORIAL #4 - State vs Props & Application Data',
          link: 'https://www.youtube.com/watch?v=qh3dYM6Keuw&t=79s',
        },
        {
          title: 'React on ES6+',
          link: 'https://babeljs.io/blog/2015/06/07/react-on-es6-plus',
        },
        {
          title: 'Learn ES2015 · Babel',
          link: 'https://babeljs.io/docs/learn-es2015/',
        },
        {
          title: 'Our First 50,000 Stars - React Blog (History of React)',
          link: 'https://facebook.github.io/react/blog/2016/09/28/our-first-50000-stars.html',
        },
        {
          title: 'Ashley Williams: If you wish to learn ES6/2015 from scratch, you must first invent the universe',
          link: 'https://youtu.be/DN4yLZB1vUQ',
        },
        {
          title: 'React Developer Tools (for Chrome)',
          link: 'https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi',
        },
      ],
      week4: [
        {
          title: 'Handling Events - React',
          link: 'https://facebook.github.io/react/docs/handling-events.html',
        },
        {
          title: 'Stateless Functional Components - Nine Wins',
          link: 'https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.jblm2w9dp',
        },
        {
          title: 'Videos 7 - 10 Events and React JS',
          link: 'https://www.youtube.com/watch?v=OcM__8q6p4c&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=8',
        },
        {
          title: 'React for Beginners',
          link: 'https://reactforbeginners.com/',
        },
        {
          title: 'Top 5 Tutorials for Getting Started with React',
          link: 'http://andrewhfarmer.com/getting-started-tutorials/',
        },
        {
          title: 'Understanding JavaScript’s Function.prototype.bind – Smashing Magazine',
          link: 'https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/',
        },
         {
          title: 'React Top Level API',
          link: 'https://facebook.github.io/react/docs/react-api.html#createelement/',
        },
         {
          title: '8 no-Flux strategies for React component communication',
          link: 'http://andrewhfarmer.com/component-communication/',
        },
        {
          title: 'REACT JS TUTORIAL #5 - Javascript Events & Data Changes in React',
          link: 'http://andrewhfarmer.com/component-communication/',
        },
        {
          title: 'Fullstack React',
          link: 'http://newsletter.fullstackreact.com/',
        },
      ],
      week5: [
        {
          title: 'React For Everyone #13 - Controlled Inputs',
          link: 'https://www.youtube.com/watch?v=BvtQMxekmH0/',
        },
        {
          title: 'Forms - React',
          link: 'https://facebook.github.io/react/docs/forms.html/',
        },
      ],
     };

     this.updateTitle = this.updateTitle.bind(this);
     this.updateLink = this.updateLink.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
}

    updateTitle(event) {
      this.setState({inputTitle: event.target.value});
      console.log(event.target.value)
    }

    updateLink(event) {
      this.setState({inputLink: event.target.value});
      console.log(event.target.value)
    }

    handleSubmit(event) {
      event.preventDefault();
      const newObj = {
        title: this.state.inputTitle,
        link: this.state.inputLink
      }
      const newWeek = this.state.week1.concat(newObj);
      this.setState({week1: newWeek})
    }

  render() {
     const title = "React Reference Guide";

    return (
      <div>
        <Header title={title}/>
        <h3>Week 1</h3>
          <form>
            <input type="text" placeholder="Type here!" value={this.state.inputTitle}
            onChange={this.updateTitle.bind(this)} />
            <input type="text" placeholder="Type here!" value={this.state.inputLink}
            onChange={this.updateLink.bind(this)} />
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
          <Week cat={this.state.week1}/>
        <h3>Week 2</h3>
          <form>
            <input type="text" placeholder="Type here!" value={this.state.inputTitle}
            onChange={this.updateTitle.bind(this)} />
            <input type="text" placeholder="Type here!" value={this.state.inputLink}
            onChange={this.updateLink.bind(this)} />
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
          <Week cat={this.state.week2}/>
        <h3>Week 3</h3>
          <form>
            <input type="text" placeholder="Type here!" value={this.state.inputTitle}
            onChange={this.updateTitle.bind(this)} />
            <input type="text" placeholder="Type here!" value={this.state.inputLink}
            onChange={this.updateLink.bind(this)} />
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
          <Week cat={this.state.week3}/>
        <h3>Week 4</h3>
          <form>
            <input type="text" placeholder="Type here!" value={this.state.inputTitle}
            onChange={this.updateTitle.bind(this)} />
            <input type="text" placeholder="Type here!" value={this.state.inputLink}
            onChange={this.updateLink.bind(this)} />
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
            <Week cat={this.state.week4}/>
        <h3>Week 5</h3>
          <form>
            <input type="text" placeholder="Type here!" value={this.state.inputTitle}
            onChange={this.updateTitle.bind(this)} />
            <input type="text" placeholder="Type here!" value={this.state.inputLink}
            onChange={this.updateLink.bind(this)} />
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
            <Week cat={this.state.week5}/>
      </div>
    );
  }
}
//pass the weeks as 3 objects to Weeks.js and in Weeks.js break out the objects

