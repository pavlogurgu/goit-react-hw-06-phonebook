import PropTypes from 'prop-types';
import { Input, Lable } from 'components/InputForm/InputForm.styled';

export const Filter = ({ filterValue, onValueChange }) => {
  return (
    <Lable htmlFor=""> 
      Find contact by name: 
      <Input type="text" value={filterValue} onChange={onValueChange} />
    </Lable>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};