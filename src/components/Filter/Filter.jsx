import React from 'react';
import { Input } from 'components/Form/Form.styled';
import { useDispatch } from 'react-redux';
import { setFilterTerm } from 'Redux/asyncRedux/contactReducers';

const Filter = ({ filter }) => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    dispatch(setFilterTerm(filterValue)); 
  };

  return (
    <Input
      placeholder="Search name"
      type="text"
      name="filter"
      value={filter}
      onChange={handleFilterChange} 
    />
  );
};

export default Filter;