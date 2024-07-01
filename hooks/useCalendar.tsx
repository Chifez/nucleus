'use client';

import React, { useState } from 'react';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  parse,
  startOfToday,
} from 'date-fns';

const today = startOfToday();

const useCalendar = () => {
  const [currMonth, setCurrMonth] = useState(() => format(today, 'MMM-yyyy'));
  let firstDayOfMonth = parse(currMonth, 'MMM-yyyy', new Date());
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
  ];

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: endOfMonth(firstDayOfMonth),
  });
  // React.MouseEvent<SVGSVGElement>
  const getPrevMonth = (event: any) => {
    console.log('clicked prevMonth');
    event.preventDefault();
    const firstDayOfPrevMonth = add(firstDayOfMonth, { months: -1 });
    setCurrMonth(format(firstDayOfPrevMonth, 'MMM-yyyy'));
  };

  const getNextMonth = (event: any) => {
    console.log('clicked nextMonth');
    event.preventDefault();
    const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
    setCurrMonth(format(firstDayOfNextMonth, 'MMM-yyyy'));
  };
  return {
    currMonth,
    setCurrMonth,
    firstDayOfMonth,
    days,
    colStartClasses,
    daysInMonth,
    getNextMonth,
    getPrevMonth,
  };
};

export default useCalendar;
