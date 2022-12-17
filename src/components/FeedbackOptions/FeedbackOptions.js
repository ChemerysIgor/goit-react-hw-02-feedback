import PropTypes from 'prop-types';

import { ButtonDiv } from './FeeddbackOptions.styled';

export const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <>
      <ButtonDiv>
        <button type="button" onClick={onGood}>
          Good
        </button>
        <button type="button" onClick={onNeutral}>
          Neutral
        </button>
        <button type="button" onClick={onBad}>
          Bad
        </button>
      </ButtonDiv>
    </>
  );
};

FeedbackOptions.propTypes = {
  onGood: PropTypes.func,
  onBad: PropTypes.func,
  onNeutral: PropTypes.func,
};
