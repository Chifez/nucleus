'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

const ToggleTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  // if (!mounted) {
  //   return null;
  // }
  return (
    <button
      onClick={toggleTheme}
      title="toggle theme"
      className=" bg-[#EAEAEA] dark:bg-white flex items-center justify-center p-2 rounded-full"
    >
      {theme === 'light' ? (
        <RiMoonLine className="text-[#0c0c0d]" />
      ) : (
        <RiSunLine className="text-[#0c0c0d]" />
      )}
    </button>
  );
};

export default ToggleTheme;
