import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  return (
    <div className="flex gap-2">
      <div className="w-72 h-10 relative flex items-center gap-2 bg-white rounded-full px-3">
        <BsSearch className="" />
        <input
          type="text"
          placeholder="Search invoice"
          className="w-full focus-within:outline-none"
        />
      </div>
    </div>
  );
};
export default SearchBar;
