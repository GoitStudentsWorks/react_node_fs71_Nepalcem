import React from 'react';
//import { useState } from 'react';
import {
  PeriodTypeSelectDiv,
  ButtonChangePeriod,
} from './PeriodTypeSelect.styled';

const PeriodTypeSelect = ({ onClick, period }) => {
  // const [activeButton, setActiveButton] = useState("month");
  // console.log(activeButton);
  return (
    <PeriodTypeSelectDiv>
      <ButtonChangePeriod
        place="left"
        period={period}
        onClick={() => {
          // console.log('Click month');
          // setActiveButton("l")
          onClick('month');
        }}
      >
        Month
      </ButtonChangePeriod>
      <ButtonChangePeriod
        place="right"
        period={period}
        onClick={() => {
          // console.log('Click day');
          onClick('day');
        }}
      >
        Day
      </ButtonChangePeriod>
    </PeriodTypeSelectDiv>
  );
};
export default PeriodTypeSelect;
// "1. Компонент рендерить блок навігації для переадресацї юзера на таблицю з задачами відповідно до обраного типу періоду day | month.
// 2. Кнопка що вказує поточний тип обраного періоду має активні стилі, як показано на макеті."
