import React, {Component} from "react";
import { GlobalStyles } from "./GlobalStyles";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics.js";
import { Notification } from "./Notification/Notification";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
clickOnNeutral  = (e) => { this.setState(prevState => {
          return { neutral: prevState.neutral + 1 }
        })}

 clickOnGood = (e) => { this.setState(prevState => {
          return { good: prevState.good + 1 }
 })
  }
  clickOnBad = (e) => { this.setState(prevState => {
          return { bad: prevState.bad + 1 }
  })
  }
  
 

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round(good * 100 / total);
  };


  render() {
    return (

      <>
        < GlobalStyles />
        <Section title = {'Please leave feedback'}>
       <FeedbackOptions onGood={this.clickOnGood} onNeutral={this.clickOnNeutral} onBad={this.clickOnBad} />
        </Section>
       
        <Section title={'Statistics'} >
          {this.countTotalFeedback() !== 0
            ? (<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />)
            :(<Notification message="There is no feedback"></Notification>)}
        </Section>
         
       
      </>
      
    )
};
};
