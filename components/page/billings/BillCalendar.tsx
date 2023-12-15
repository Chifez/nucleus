import Calendar from '@/components/Calendar';

const BillCalendar = () => {
  return (
    <div className="h-[50vh] rounded-md ">
      <section className="h-full bg-white dark:bg-[#0c0c0d] dark:text-white overflow-hidden rounded-md py-2 px-5">
        {/* <h3 className="font-semibold">Calendar</h3> */}
        <Calendar />
      </section>
    </div>
  );
};
export default BillCalendar;
