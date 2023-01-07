import PropTypes from 'prop-types'

import { useState } from 'react'

import { WidgetWrapper } from './App.styled'
import { Statistics } from './Statistics/Statistics'
import { FeedbackOptions } from './feedbackOptions/feedbackOptions'
import { Section } from './SectionTitle/SectionTitle'
import { Notification } from './Notification/Notification'

export const App = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleFeedbackIncrement = (event, status) => {
       
        switch (status) {
            case 'good':
                setGood(prevState =>  prevState + 1 )
                break;
            case 'neutral':
                setNeutral(prevState =>  prevState + 1 )
                break;
            case 'bad':
                setBad(prevState =>  prevState + 1 )
                break;
            
            default:
                alert('something is REAAALY wrong with your feedback type')
                break;
        }
    }

    const countTotalFeedback = () => {
        
        const totalFeedback = good + neutral + bad;
        return totalFeedback;
    }
    

    const countPositiveFeedbackPercentage = () => {
        if (good === 0) {
            return
        }
        const percentage = (good * 100 / countTotalFeedback()).toFixed()
        return percentage
        

    }

    const completeStateForStatistics = {
        'good': good,
        'neutral': neutral,
        'bad': bad}

    return (
        <WidgetWrapper>
                
            <Section title="MADE WITH COMPONENT">
                <Section title="Please leave feedback">
                
                    <FeedbackOptions onLeaveFeedback={handleFeedbackIncrement} />
                </Section>
                {countTotalFeedback() ?
                    <Section title="Statistics">
                        <Statistics
                            onCountTotalFeedback={countTotalFeedback}
                            onCountPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
                            stateValue={completeStateForStatistics} />
                    </Section>
                    :
                    <Notification message="There is no feedback"></Notification>
                }
                
            </Section>
                
           

        </WidgetWrapper>
    )

}

App.propTypes = {
    status: PropTypes.string,
}







    

   
   