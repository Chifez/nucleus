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
      <div className="px-2 flex items-center justify-between border border-secondary rounded-md">
        <input
          type={!visible ? type : 'text'}
          id={label}
          name={name}
          value={value}
          placeholder={placeholder}
          className={`${className} outline-none peer placeholder-transparent placeholder:line-clamp-1`}
          onChange={inputChange}
        />
        {type === 'password' && (
          <span onClick={toggle}>
            {visible ? (
              <MdOutlineVisibilityOff className="fill-white" />
            ) : (
              <MdOutlineVisibility className="fill-white" />
            )}
          </span>
        )}
        {label && (
          <label
            htmlFor={label}
            id={label}
            className="absolute capitalize text-xs left-3 md:text-sm -top-3 bg-primary mt-[4px] px-[1px]  peer-placeholder-shown:text-capitalize peer-placeholder-shown:text-sm peer-placeholder-shown:top-[6px] peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-[lightgrey] opacity-80 transition-all"
          >
            {label}
          </label>
        )}
      </div>
    </div>
  );
};

export default UserInput;
