import React from "react";
import ModifiedHeader from "../../../modifiedHeader/modifiedHeader.component";

import {PostContainer} from "../generalStyles.styles";
import {
  BodyContainer,
  ParagraphContainer,
  ImportantSideNote, ListContainer, VideoContainer, ResourceTitle,
} from "./LearnFrontEnd.styles";
import {GeneralLink} from "../FirstPost/FirstPost.styles";

const LearnFrontEnd = () => {
  return (
    <>
      <ModifiedHeader/>
      <BodyContainer>
        <PostContainer>
          <ParagraphContainer>
            <p>21.07.2021</p>
            <ImportantSideNote>
              This is only my personal, subjective and based on my experience way of doing it. I'm not saying is the
              best way, but I'm sure it's not the worst.
              I get 0 money from you following this. I'm only doing it because nobody did it for me.
              I finished pharmacy at UMF Cluj and now I am 27 years old and have one year of web development experience.
              No matter what you did in the past, this can make you a developer.
            </ImportantSideNote>
            <p>
              There will be a short and a long version. The short is for those who only think of
              becoming a web developer and the long version is for those who want to start first thing tomorrow in the
              morning.
            </p>
            <h3>Short version: </h3>
            <p>
              <b>
                If you're here there is no need to tell you why to do it.
              </b>
            </p>
            <p>
              - In my opinion the easiest way is to learn <b>front-end development </b> because it's the most visual and
              friendly way to do it.
            </p>
            <p>
              - It takes about 4 months of 1-1.5 hours/day of studying without breaks or phone or etc to get an
              internship(if there are any available in that period),
              or 6-8 months to get a junior job. You have to study at least 5 days/week or your brain will forget what
              you learned in the past week.
            </p>
            <p>
              - All you need is basic english, any laptop, freeCodeCamp.org and some Udemy courses(list in long
              version).
            </p>
            <p>
              - My feeling is that at least 90% of those who start never finish. It's not a hard thing to do. Most
              people lack discipline.
              I would say that this journey is more a discipline test than a study program.
            </p>
            <p>
              For me it took 9 months do to it all the way to job level and a little bit beyond,
              it was the easiest thing to study and the hardest test of discipline and patience I've ever had. Zero
              help, zero guidance,
              with no one to talk to about it,
              and a lot of "barking at the wrong tree". <b>
              Because I remember the feeling, I wrote this.
            </b>
            </p>
            <p>
              - Budget: about 60 euros.
            </p>
            <br/>
            <br/>
            <h3>Long version: </h3>
            <ImportantSideNote>
              I really hate all those who say online that you can learn everything in 2 months just a little bit of
              everything and you are a web developer.
              Yes you can learn a little bit of everything and then be useless for a company if they don't spend 3-6
              months on learning you things.
              This will be a step by step from 0 lines of code seen to making a small website on your own (I made this
              website just for fun at the end with what I learned).
              This path gives you a really
              strong base on which you can easily build your developer career and makes you useful from day 1 to any
              company.
            </ImportantSideNote>
            <p>
              Let's start with false myths:
            </p>
            <ul>
              <ListContainer>You have to be good at math - Literally addition of a+ b is the only thing you
                need for front-end development</ListContainer>
              <ListContainer>You must have an IT background in highschool</ListContainer>
              <ListContainer>You'll ruin your eye sight in time from the computer screen - You'll ruin it from netflix
                too if
                you don't
                take breaks
              </ListContainer>
              <ListContainer>You have to be very smart - Those who are smart make google and tesla but they are the
                exception, not
                the rule
              </ListContainer>
              <ListContainer><b>You need a collage degree</b> - noupe</ListContainer>
              <ListContainer>You need a teacher to learn it - It helps but no</ListContainer>
              <ListContainer>It takes years - Yes it takes if you study 10 minutes a day</ListContainer>
              <ListContainer>You are a computer rat - so everyone who works at a computer from 9-5 is a rat
                ?</ListContainer>
            </ul>
            <p>
              <b>
                What is web development you ask ?
              </b>
            </p>
            <p>
              - Web development means making websites or web applications. Facebook is a website, also a simple blog can
              be a website.
              This is the biggest market in the world in programming and this is what you will learn.
            </p>
            <p>
              - I don't know why but collage students in Romania don't learn a lot about web development. And that's why
              this is the best spot for you.
              In the interview they can be as prepared as you, or even less prepared. They do know a lot
              of things well though.
              But web development it's not one of them.
            </p>
            <p>
              Before you jump into learning, you first must understand what are you going to learn, and what are you
              going to do for the rest of your life if you make it.
              So watch all of this:
            </p>
            <h3>Frontend Development explained in 2 minutes:</h3>
            <VideoContainer src="https://www.youtube.com/embed/qyHyFsT7Hig"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></VideoContainer>
            <h3>Backend Development explained in 2 minutes:</h3>
            <VideoContainer src="https://www.youtube.com/embed/cbSrsYiRamo"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></VideoContainer>
            <h3>Frontend vs Backend vs Fullstack Web Development:</h3>
            <VideoContainer src="https://www.youtube.com/embed/pkdgVYehiTE"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></VideoContainer>
            <h3>A REAL Day in the Life of a Software Engineer:</h3>
            <VideoContainer src="https://www.youtube.com/embed/j1fc0FlCjyI"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></VideoContainer>
            <h3>A Realistic Week in the Life of a Software Engineer:</h3>
            <VideoContainer src="https://www.youtube.com/embed/fGMesOdqZuA"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></VideoContainer>
            <br/>
            <br/>
            <br/>
            <p>
              - This videos take so much space here but I think they're worth it. Let's continue.
            </p>
            <p>
              Useful dictionary:
            </p>
            <ul>
              <ListContainer>UI, client side, front-end - it's what we see when we look at a website and the
                interaction(clicks, hover etc) with it</ListContainer>
              <ListContainer>Server side, back-end - it's about where the information is stored, how it's processed and
                how it's send to the front-end for consumption/visual display</ListContainer>
            </ul>
            <p>
              <b>My personal advice for you:</b>
            </p>
            <p>
              - It's just like learning french or english. You must write the words and the signs, speak them,
              understand them,
              make sentences and only at the end be able to make an essay. You will most likely never be fluent, and
              that's ok. You just need to make sens when you use it.
            </p>
            <p>
              - At first the words and signs look weird and you move really slow so it's important for you to practice
              so you must do whatever they do in their videos.
              After awhile you will understand everything they do and be able to only re-watch videos on speed to
              remember something.
              You must be able to explain outloud a concept that you've learned and don't sound stupid when you do it.
              They speak in english so you can try to explain
              things in your native language (assuming that's not english) so you make sure you're not only repeating
              what they said like a robot.
            </p>
            <p>
              - For me it took 4-5 months until I became so familiar with all of the syntax and the specific words that
              everything felt natural and "logic".
              I still remember that after 3 months I was desperate because nothing made any sense and I thought that I
              was never going to understand it.
              For me quiting was not an option because I was willing to put in whatever it took but that feeling made me
              later understand why so
              many people just give up after some time.
            </p>
            <p>
              - 5 hours of learning in a day is worse than 45 minutes of learning everyday for 5 days. Our brain can
              fully concentrate in a day for about 2 hours.
              The rest is at 30-50% or autopilot. This was an important lesson I learned from <GeneralLink
              to={{pathname: "https://www.goodreads.com/book/show/25744928-deep-work"}}
              target="_blank">Cal Newport's Deep Work</GeneralLink>
              . Even more than that, the human brain is very adaptable.
              But for it to adapt to a new way of thinking it needs constant exercise. In everything you do in life, if
              you want to get better in the fasted way possible,
              you must insert it into your daily routine.
            </p>
            <p>
              - You must learn for at least 5 days a week. But if for some reason you have a very busy week and don't
              really feel like it, just make sure that
              you give your brain the daily dose. Just watch a 10 minute video on youtube. It's important to never break
              the habit. I used
              <GeneralLink to={{pathname: "https://www.youtube.com/channel/UCTBGXCJHORQjivtgtMsmkAQ"}}
                           target="_blank">Steve Griffith</GeneralLink> videos on youtube for this.
              The ideal day must be at least 40-60 minutes (the higher the better) of net time of learning. Do whatever
              you like. Long sessions with long brakes or short ones with short breaks.
            </p>
            <p>
              - If you get blocked, figure it out. An important attribute of a programmer is the ability to find an
              answer. Even if you don't figure it out, the simple exercise
              of trying is preparing you for your job. Learn how to search on google or youtube, how to find keywords in
              a page using ctrl + f, how to formulate the question.
              You must learn how to learn. If you're here, and you're stuck on something, you can ever write to me. I
              am more than glad to help you.
            </p>
            <p>
              Be organised!! This is a skill that takes you to another level in life. I have all my life saved in
              Notion. From learning notes, to monthly spendings,
              to daily check lists.
              It's a free and awesome app for all kind of notes. Watch this to learn how to use it. 100% worth it. And
              also subscribe to Ali. His channel in great.
            </p>
            <VideoContainer src="https://www.youtube.com/embed/ONG26-2mIHU"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></VideoContainer>
            <p>
              - A lot of talking and not a single thing to learn. Ok let's start the program:
            </p>
            <p>
              1. Make and account on <ResourceTitle
              to={{pathname: "https://www.freecodecamp.org/learn/responsive-web-design/"}}
              target="_blank">FreeCodeCamp</ResourceTitle> and start there. It's free. Stop after "CSS Grid".
            </p>
            <ImportantSideNote>
              Regarding udemy courses. They are half of the time at a sale for 14-15$. You don't have to buy them
              at the full price of 100$.
              If you need one and it's at full price, just wait for a few days, recap what you learned until then.
            </ImportantSideNote>
            <ImportantSideNote>You will see some information repeats itself when you move from resource to resource.
              This is because when you first see it you may not understand it because you miss "the bigger picture".
              At the second encounter you'll assimilate the things that you missed in the first one. I only do this with
              the crucial parts.
            </ImportantSideNote>
            <p>
              2. Your first Udemy course is <ResourceTitle
              to={{pathname: "https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/"}}
              target="_blank">The Complete Web Developer in 2021: Zero to
              Mastery</ResourceTitle>.
              Start from lesson 1 and stop after "Career Of A Web developer"
            </p>
            <p>
              3. Your next course is <ResourceTitle
              to={{pathname: "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/"}}
              target="_blank">Build Responsive Real-World Websites with HTML and CSS</ResourceTitle>. Stop after
              "Layouts:
              Floats, Flexbox, and CSS Grid Fundamentals".
              This is the minimum. If you want to go deeper then stop after "Omnifood Project – Responsive Web Design"
              but you can skip the "Web Design Rules and Framework".
            </p>
            <p>
              4. Back to <ResourceTitle to={{pathname: "https://www.freecodecamp.org/learn/responsive-web-design/"}}
                                        target="_blank">FreeCodeCamp</ResourceTitle>, start with Basic Javascript, stop
              after ES6.
            </p>
            <p>
              5. And now we bring out the big guns. <ResourceTitle
              to={{pathname: "https://www.udemy.com/course/the-complete-javascript-course/"}}
              target="_blank">The Complete JavaScript Course 2021: From Zero to
              Expert!</ResourceTitle> .
              Do all of it, but you can skip “Numbers, Dates, Intl and Timers”,” Advanced DOM and Events”.
              This is going to be hard. This is the core of what you'll work with for the rest of your life. It's the
              most complete course there is.
              A masterpiece. And the instructor is one of the best in the world. After this one, you're ready for an
              internship or if you're lucky, a job.
              But I don't recommend a job at this point. You still need to build that base of knowledge. But online
              courses don't put food on the table so do as you wish.
            </p>
            <p>
              6. Return to <ResourceTitle
              to={{pathname: "https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/"}}
              target="_blank">The Complete Web Developer in 2021: Zero to Mastery</ResourceTitle> and
              continue. Stop after "NPM + NPM Scripts".
            </p>
            <p>
              7. Next one on the list is <ResourceTitle
              to={{pathname: "https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/"}}
              target="_blank">The Coding Interview bootcamp: Algorithms + Data
              Structures</ResourceTitle>.
              You can stop after "Runtime Complexity in Practice - Fibonacci". This will test your javascript logical
              thinking.
              It's the most enjoyable course in this list. Fun and easy.
              The algorithms you see here are used all day at work and can be asked at the interview.
            </p>
            <ImportantSideNote>
              If you are here, you can contact me for guidance. I made a facebook messenger private group with people
              who learn programming.
              We help eachother with things we do not understand, with questions about anything and most important we
              help one another find a job.
              The only selection criteria is that you made every course I mentioned until now. It's a private group with
              awesome
              people who learn a lot and I want to make sure everyone here means serious business.
              As I said, 90% give up after 1-2 months. As I write this 4 people got hired in the past 7 months, 2 got an
              internship and 2
              are 1-2 months away of getting a job, and none of them had any programing background or collage. Really
              proud of them.
            </ImportantSideNote>
            <ImportantSideNote>
              It's time to start learning a front-end framework.
              The reason I recommend React.js is that at the time I write this, it's much much bigger than all the
              others worldwide.
              It's the easiest way to find a job.
            </ImportantSideNote>
            <p>
              8. Start with <ResourceTitle
              to={{pathname: "https://www.udemy.com/course/react-redux/"}}
              target="_blank">Modern React with Redux</ResourceTitle>. Stephen Grider is one of the best
              for theory understanding.
              Start from lesson 0 and stop after "REST-Based React Apps". Some of the videos require multiple views. I
              recommend you don't skip a lesson without understanding it
              because nothing will make any sense shortly in this way.
            </p>
            <p>
              9. There is one more step for becoming a great junior developer. <ResourceTitle
              to={{pathname: "https://www.udemy.com/course/complete-react-developer-zero-to-mastery/"}}
              target="_blank">Complete React Developer
              in 2021 (w/ Redux, Hooks, GraphQL)</ResourceTitle>.
              Stop after "Bonus: Progressive Web App" but without "GraphQL + Apollo". This course is hands down the one
              that will make you not only a junior developer,
              but a really really good junior developer and will build a base that will help you even when you have 1-2
              years experience.
              It has a lot of important concepts in it but it's hard, that's why it's at the end. You'll
              build <ResourceTitle
              to={{pathname: "https://sergiu-clothing-app.herokuapp.com/"}}
              target="_blank">this
              big website</ResourceTitle> that will put everything you learned so far in perspective.
              This one made me realise I was just an unmade puzzle and put all the pieces in my head together.
              I think I watched it 3 times and everytime I learned something new.
              The reason why I made you do the Grider one first is because this course is not for absolute beginners in
              React.js.
            </p>
            <br/>
            <br/>
            <p>
              This is it. You made it. You are now a web developer. But I'm sorry to say that for at least the next 5
              years you still have to learn things.
              If you stop learning you will forever stay a junior or best case scenario a mid developer. It would be a
              shame if you came this far only to miss greatness.
              Good luck on your journey!!
            </p>
            <p>
              <b>Disclaimer: All the resources I gave you above I tested on me on my journey. I did all of those + a lot
                more in about 9 months.
                After that I made a path that I wish somebody gave me at the beginning because I wasted at least 3
                months with poor resources.</b>
            </p>
            <p>
              After every technology learned (css, javascript, react) I suggest to search on google or youtube for
              interview questions.
              It will show you your weaknesses and where you need to improve yourself. It will also prepare you for your
              interview but if you finish all
              of these courses that interview will be the easiest thing in all of this process. I'll leave some
              resources here :<br/>
              - <ResourceTitle
              to={{pathname: "https://www.edureka.co/blog/interview-questions/top-50-html-interview-questions-and-answers/"}}
              target="_blank">Top 50 HTML Interview Questions and Answers</ResourceTitle><br/>
              - <ResourceTitle
              to={{pathname: "https://www.edureka.co/blog/interview-questions/css-interview-questions/"}}
              target="_blank">Top 50 CSS Interview Questions You Should Prepare For In 2021</ResourceTitle><br/>
              - <ResourceTitle
              to={{pathname: "https://www.edureka.co/blog/interview-questions/javascript-interview-questions/"}}
              target="_blank">Top 50 JavaScript Interview Questions You Must Prepare in 2021</ResourceTitle><br/>
              - <ResourceTitle
              to={{pathname: "Top 50 React Interview Questions You Must Prepare In 2021"}}
              target="_blank">Top 50 React Interview Questions You Must Prepare in 2021</ResourceTitle><br/>
              - <ResourceTitle
              to={{pathname: "https://frontendmasters.com/books/front-end-handbook/2018/practice/interview-q.html"}}
              target="_blank">Front-End Interviews from FrontEndMasters</ResourceTitle><br/>
              - <ResourceTitle
              to={{pathname: "https://github.com/lydiahallie/javascript-questions"}}
              target="_blank">Javascript Questions</ResourceTitle><br/>
              - <ResourceTitle
              to={{pathname: "https://zerotomastery.io/resources/"}}
              target="_blank">ZeroToMastery Resources</ResourceTitle><br/>
            </p>
            <br/>
            <br/>
            <div style={{border: '1px solid grey'}}></div>
            <br/>
            <br/>
            <p>
              I'm going to also leave here what I think are the best things to learn <b>AFTER</b> you get hired for you to become a better developer:
            </p>
            <p>
              <ResourceTitle
                to={{pathname: "https://www.udemy.com/course/advanced-css-and-sass/"}}
                target="_blank">- Advanced CSS and Sass: Flexbox, Grid, Animations and More!</ResourceTitle> : Only what you don't already know<br/>
              <ResourceTitle
                to={{pathname: "https://www.udemy.com/course/writing-clean-code/"}}
                target="_blank">- Clean Code</ResourceTitle> : The quality of the code is something that will take years to develop. Here is some help<br/>
              <ResourceTitle
                to={{pathname: "https://www.udemy.com/course/react-and-typescript-build-a-portfolio-project/"}}
                target="_blank">- React and Typescript: Build a Portfolio Project</ResourceTitle>: Typescript is becoming a standard so it's best to know it<br/>
              <ResourceTitle
                to={{pathname: "https://www.udemy.com/course/implement-high-fidelity-designs-with-material-ui-and-reactjs/"}}
                target="_blank">- Implement High Fidelity Designs with Material-UI and ReactJS</ResourceTitle>: Material UI it's a great tool to build fast front-end components<br/>
              <ResourceTitle
                to={{pathname: "Jhttps://www.udemy.com/course/advanced-javascript-concepts/"}}
                target="_blank">- JavaScript: The Advanced Concepts (2021)</ResourceTitle> : This will give you a great recap of all that you forgot and dive even deeper into javascript. Great great course<br/>
              <ResourceTitle
                to={{pathname: "https://www.udemy.com/course/learning-to-learn-efficient-learning-zero-to-mastery/"}}
                target="_blank">- Learning to Learn [Efficient Learning]: Zero to Mastery</ResourceTitle> : Not web related but very well done<br/>
              <ResourceTitle
                to={{pathname: "https://www.udemy.com/course/complete-web-designer-mobile-designer-zero-to-mastery/"}}
                target="_blank">- Complete Web & Mobile Designer in 2021: UI/UX, Figma, +more</ResourceTitle> : This is extra extra,
              maybe do it after 1 year of working or more but it will make you understand how a user wants a website to be delivered.<br/>
            </p>
            <br/>
            <div style={{border: '1px solid grey'}}></div>
            <br/>
            <p>
              Now let's start the full stack journey of a web developer. I only recommend starting this after 1
              year of working. After you learn this you will be able to make a website front to back: <br/>
              <ResourceTitle
                to={{pathname: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/"}}
                target="_blank">- Node.js, Express, MongoDB & More: The Complete Bootcamp 2021</ResourceTitle> : The best course on Node.js for beginners<br/>
              <ResourceTitle
                to={{pathname: "https://www.udemy.com/course/react-node-ecommerce/"}}
                target="_blank">- MERN Stack React Node Ecommerce from Scratch to Deployment</ResourceTitle> : Combine everything together<br/>
              <ResourceTitle
                to={{pathname: "https://www.udemy.com/course/sql-and-postgresql/"}}
                target="_blank">- SQL and PostgreSQL: The Complete Developer's Guide</ResourceTitle> : Because the previous ones used a relational database(MongoDB),
              this course is a must for a full stack developer because it's about SQL databases, the second cool kid at the block<br/>
              <ResourceTitle
                to={{pathname: "https://www.udemy.com/course/the-complete-junior-to-senior-web-developer-roadmap/"}}
                target="_blank">- The Complete Junior to Senior Web Developer Roadmap (2021)</ResourceTitle> : It's hard to become a senior developer. Some never do.
              But here is a roadmap of what you need to pay attention to in the following years.<br/>
            </p>
            <br/>
            <p>
              Never stop learning. Take one day at a time. Do what you do with passion. Focus only on the present and live your life. At the end of the day, nothing else matters
            </p>


          </ParagraphContainer>
        </PostContainer>
      </BodyContainer>
    </>
  );
};

export default LearnFrontEnd;