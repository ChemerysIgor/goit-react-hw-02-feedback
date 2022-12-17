import PropTypes, { arrayOf } from 'prop-types';

import { ButtonDiv } from './FeeddbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ButtonDiv>
        {options.map(option => {
          return (
            <button
              type="button"
              key={option}
              id={option}
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          );
        })}
      </ButtonDiv>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: arrayOf(PropTypes.string.isRequired),
};
