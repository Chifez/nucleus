import React, { useState } from 'react';
import { format, getDay, isSameMonth, isToday, startOfToday } from 'date-fns';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import useCalendar from '@/hooks/useCalendar';

const today = startOfToday();

const Calendar = () => {
  const {
    firstDayOfMonth,
    getPrevMonth,
    getNextMonth,
    days,
    daysInMonth,
    colStartClasses,
  } = useCalendar();

  return (
    <div className="w-full flex-1 flex items-end">
      <div className="w-full h-full">
        <div className="mb-2">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-base">
              {' '}
              {format(firstDayOfMonth, 'MMMM yyyy')}{' '}
            </p>
            <div className="flex items-center justify-evenly gap-8 sm:gap-12">
              <MdNavigateBefore
                className="w-4 h-4 cursor-pointer"
                onClick={getPrevMonth}
              />
              <MdNavigateNext
                className="w-4 h-4 cursor-pointer"
                onClick={getNextMonth}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-4 place-items-center">
          {days.map((day, idx) => {
            return (
              <div key={idx} className="text-sm font-semibold capitalize">
                {day}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-7 gap-4 place-items-center mt-2 ">
          {daysInMonth.map((day, idx) => {
            return (
              <div key={idx} className={colStartClasses[getDay(day)]}>
                <p
                  className={`text-sm cursor-pointer flex items-center justify-center font-semibold h-6 w-6 rounded-full  hover:text-white ${
                    isSameMonth(day, today)
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-400'
                  } ${!isToday(day) && 'hover:bg-blue-500'} ${
                    isToday(day) && 'bg-red-500 text-white'
                  }`}
                >
                  {format(day, 'd')}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
