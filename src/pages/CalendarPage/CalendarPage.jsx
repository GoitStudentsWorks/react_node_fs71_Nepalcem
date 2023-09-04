import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CalendarToolbar from 'components/Calendar/CalendarToolbar/CalendarToolbar/CalendarToolbar';
import { fetchAllTasks } from 'redux/tasks/tasksOperation';
import { editTitle } from 'redux/title/titleSlice';

const CalendarPage = () => {
  // стейт для передачи дня по клику в таблице месяца CalendarTable
  const [onClickDay, setOnClickDay] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(editTitle('Calendar'));
  });

  useEffect(() => {
    // Dispatch the loadTasks for Current Month action when the component mounts for one first time
    dispatch(fetchAllTasks({}));
  }, [dispatch]);

  return (
    <div>
      <CalendarToolbar onClickDay={onClickDay} />

      <Outlet context={[onClickDay, setOnClickDay]} />
    </div>
  );
};

export default CalendarPage;
// "1. Компонент рендериться на маршрут /calendar.
// 2. При першому вході на сторінку компонент виконує переадресацію на розширений маршрут /calendar/month/:currentDate для відображення календяря місяця
// 2. Сторінка повинна відображатись відповідно до макету на 3х розширеннях(375, 768, 1440)
// 3. На сторінці знаходиться модуль CalendarToolbar - з яким користувач може обрати тип періоду, та його інтервал
// 4. На сторінці відображаеться один з модулів періоду дат календаря:
//  - ChoosedMonth - дозволяє подивитись всі задачі на місяць, перейти на сторінку одного дня ChoosedDay.
//  - ChoosedDay - дозволяє створювати задачі та розділити ці задачі  на групи по ступеню їх виконання.
// 5. При новому відвідуванні додатку та першому вході на сторінку відображаеться модуль ChoosedMonth з розкладкою комірок з датами поточного місяця.
// 6. На сторінці повинен здійснюватись запит за завданнями, якщо вони відсутні в глобальному стейті
// 7. Успіх - дані записуються у відповідний стейт
// 8. Помилка - користувачу показується відповідне пуш-повідомлення"
