import { setContactFilter } from '../../Redux/filterSlice';

import { useDispatch, useSelector } from 'react-redux';
import { WrapFilter, FilterLabel, FilterInput } from '../PhoneBook.styled';
import { getContactsFilter } from 'components/Redux/selector';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getContactsFilter);

  return (
    <WrapFilter>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onInput={e => dispatch(setContactFilter(e.target.value))}
      />
    </WrapFilter>
  );
}
