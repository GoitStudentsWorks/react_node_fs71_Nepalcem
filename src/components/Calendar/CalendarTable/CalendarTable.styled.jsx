import styled from 'styled-components';

export const CalendarTableDiv = styled.table`
  /* height: 85%; */
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 14px;
  
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin-top: 18px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 15px;
  }
`;
export const CalendarRow = styled.tr`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const CalendarCellWrap = styled.div`
  padding: 0;
  flex: 1;
`;

export const CalenderCell = styled.td`
  background-color: var(--color-btn-change-day);
  transition: background-color 1s linear;
  padding: 40px 2px 2px 2px;
  // overflow: scroll;
  // overflow-y: auto;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 4px;
}

::-webkit-scrollbar-track {
  // background:transparent
    background: var(--scrollbar-track);
    border-radius: 12px;
}

::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb);
    height: 112px;
    border-radius: 12px;
}

::-webkit-scrollbar-thumb:hover {
    background: #7c7c7c;
}
  

  border: var(--color-calendar-border);
  // border: 1px solid rgba(220, 227, 229, 0.5);
  position: relative;

  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media screen and (min-width: 375px) {
    width: 47px;
    height: 106px;
  }
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 144px;
  }
  @media screen and (min-width: 1440px) {
    width: 156px;
    height: 125px;
  }
`;

export const NumberDay = styled.div`
  position: absolute;

  padding: 4px 8px 4px 8px;
  border-radius: 8px;

  font-family: Inter;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;

  // color: #343434;
  // color: var(--color-calendar-day);
  color: ${({ currentDayNumber, dayMoment }) =>
    currentDayNumber !== dayMoment ? `var(--color - calendar - day)` : `#FFFF`};
  background-color: ${({ currentDayNumber, dayMoment }) =>
    currentDayNumber !== dayMoment ? `#fff` : '#3E85F3'}; //primaryColor

  @media screen and (min-width: 375px) {
    top: 12px;
    right: 10px;
  }
  @media screen and (min-width: 768px) {
    top: 14px;
    right: 14px;

    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const OneTaskInTable = styled.div`
  background-color: ${props => props.type === 'low' && '#CEEEFD'};
  background-color: ${props => props.type === 'medium' && '#fcf0d4'};
  background-color: ${props => props.type === 'high' && '#FFD2DD'};

  color: ${props => props.type === 'low' && '#3E85F3'};
  color: ${props => props.type === 'medium' && '#F3B249'};
  color: ${props => props.type === 'high' && '#EA3D65'};

  border-radius: 8px;
  padding: 5px;
  height: 26px;

  overflow: hidden;
  text-overflow: ellipsis;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.28571;
`;
