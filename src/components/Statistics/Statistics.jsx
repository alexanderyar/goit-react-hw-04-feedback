
import PropTypes from 'prop-types'



import { FeedbackCount} from '../App.styled'

export const Statistics = ({onCountTotalFeedback, onCountPositiveFeedbackPercentage, stateValue}) => {
    return (
    <>
    {/* <Text type="button">Statistics</Text> */}
            <FeedbackCount>Good:{stateValue.good}</FeedbackCount>
            <FeedbackCount>Neutral:{stateValue.neutral}</FeedbackCount>
            <FeedbackCount>Bad:{stateValue.bad}</FeedbackCount>
            <FeedbackCount>Total:{onCountTotalFeedback()}</FeedbackCount>
        {stateValue.good !== 0 && <FeedbackCount>Positive feedback:{onCountPositiveFeedbackPercentage()} %</FeedbackCount>}
        </>
    )
}

Statistics.propTypes = {
    stateValue: PropTypes.objectOf(PropTypes.number),
    onCountTotalFeedback: PropTypes.func,
    onCountPositiveFeedbackPercentage: PropTypes.func
}

