import { FaSearch } from 'react-icons/fa';
import { styled } from 'styled-components';

export const A11yHidden = styled.h1`
  overflow: hidden;
  position: absolute !important;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
`;

export const SearchResultWrapper = styled.div`
  width: 490px;
  height: 420px;
  background-color: #fff;
  padding: 24px;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  & > p {
    font-size: 14px;
    padding: 10px;
    color: #939191;
  }

  & > ul {
    padding: 10px;
    cursor: pointer;
  }
`;

export const ResultDataContainer = styled.div`
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
  border-bottom: 1px solid #dfd7d7;
`;

export const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0;
  margin-top: 4px;
  background-color: transparent;
  border-radius: 6px;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;

  &.focused {
    background-color: #eef1f1;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }

  &:hover {
    background-color: #eef1f1;
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */
  }
`;

export const ResultDataList = styled.div`
  margin-top: 2px;
  padding: 8px 2px;
  width: 100%;
  font-weight: 400;
`;

export const StyledResultIcon = styled(FaSearch)`
  margin-left: 7px;
  margin-right: 12px;
`;

export const NoSearchData = styled.p`
  margin-left: 7px;
  margin-right: 12px;
  margin-top: 12px;
  color: #a7afb7;
`;
