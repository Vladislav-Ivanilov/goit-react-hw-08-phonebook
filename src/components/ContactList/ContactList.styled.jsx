import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  margin-top: 15px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const Name = styled.span`
  &:first-child {
    margin-right: 15px;
  }
  color: #004971;
  font-size: 16px;
  font-weight: 600;
`;

export const BtnDel = styled.button`
  background-color: #848d8d;
  color: #004971;
  border: none;
  display: block;

  padding: 5px;
  font-size: 12px;
  border-radius: 3px;
  &:hover,
  &:focus {
    background-color: #004971;
    color: #848d8d;
  }
`;
