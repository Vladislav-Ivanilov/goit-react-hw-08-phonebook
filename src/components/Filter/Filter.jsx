import { useDispatch, useSelector } from 'react-redux';
import { selectContactsFilter } from '../../redux/filter/selector';
import { WrapFilter, FilterLabel, FilterInput } from './Filter.styled';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  return (
    <WrapFilter>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onInput={e => dispatch(selectContactsFilter(e.target.value))}
      />
    </WrapFilter>
  );
}
