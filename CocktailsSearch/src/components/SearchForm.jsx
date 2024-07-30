import React from 'react';
import Wrapper from '../assets/wrappers/SearchForm';
import { Form, redirect, useNavigation } from 'react-router-dom';

const SearchForm = ({searchTerm}) => {
  const navigation = useNavigation();
  const isSearching = navigation.state === 'submitting';
  return <Wrapper>
    <Form className="form">
      <input type="search" name="search" className='form-input' defaultValue={searchTerm} required/>
      <button type='submit' className='btn' disabled={isSearching}>{isSearching ? 'searching...' : 'search'}</button>
    </Form>
  </Wrapper>;
};

export default SearchForm;
