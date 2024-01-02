import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  return (
    <div className="flex gap-2">
      <div className="lg:w-72 h-10 relative flex items-center gap-2 bg-white dark:bg-[#0c0c0d] dark:text-white rounded-full px-3">
        <BsSearch className="" />
        <input
          type="text"
          placeholder="Search invoice"
          className="w-full focus-within:outline-none bg-transparent"
        />
      </div>
    </div>
  );
};
export default SearchBar;
