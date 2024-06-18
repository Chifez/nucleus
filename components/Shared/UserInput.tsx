import { ChangeEvent, useState } from 'react';
import { MdOutlineVisibilityOff, MdOutlineVisibility } from 'react-icons/md';
const UserInput = (props: {
  label?: string;
  type?: string;
  name?: string;
  value?: string | number;
  placeholder?: string;
  className?: string;
  inputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!visible);
  };
  const { label, type, name, value, placeholder, className, inputChange } =
    props;
  return (
    <div className="relative w-full ">
      <div className="px-3 py-2 flex items-center justify-between rounded-lg border border-[#551FFF]">
        <input
          type={!visible ? type : 'text'}
          id={label}
          name={name}
          value={value}
          placeholder={placeholder}
          className={`${className} flex-1 outline-none mr-1`}
          onChange={inputChange}
        />

        {type === 'password' && (
          <span onClick={toggle} className="mr-1">
            {visible ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
          </span>
        )}
        {label && (
          <label htmlFor={label} id={label} className="w-fit">
            {label}
          </label>
        )}
      </div>
    </div>
  );
};

export default UserInput;
