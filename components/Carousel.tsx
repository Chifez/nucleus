import { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
  currentIndex: number;
}
const Carousel = ({ children, currentIndex }: Props) => {
  const [translateSize, setTranslateSize] = useState(0);

  useEffect(() => {
    setTranslateSize(currentIndex * 100);
  }, [currentIndex]);
  return (
    <div className="w-full flex overflow-x-hidden">
      <div
        className={`-translate-x-[${translateSize}%] w-full flex transition `}
      >
        {children}
      </div>
    </div>
  );
};
export default Carousel;
