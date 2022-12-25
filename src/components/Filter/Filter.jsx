import {
  Input,
  InputTitle,
  Label,
} from 'components/ContactForm/ContactForm.styled';
import PropTypes from 'prop-types';
import { Wrapper } from './Filter.styled';

export const Filter = ({ onChange, filterValue }) => {
  return (
    <Wrapper>
      <Label>
        <InputTitle>Find contacts by name</InputTitle>
        <Input
          type="text"
          name="filter"
          value={filterValue}
          onChange={onChange}
        />
      </Label>
    </Wrapper>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
