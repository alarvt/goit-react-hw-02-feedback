import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';


export class App extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

    update = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positiveResult = good;
    return positiveResult;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>        
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.update} />
        </Section>        
        {this.countTotalFeedback() ?
        (<Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>) :
        (<Notification message={"There is no feedback"}/>)}
      </>
    );
  }
}