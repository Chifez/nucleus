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

  if (!mounted) {
    return null;
  }
  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? <RiMoonLine /> : <RiSunLine />}
    </button>
  );
};

export default ToggleTheme;
