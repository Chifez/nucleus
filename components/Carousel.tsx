import { ReactNode } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
  currentIndex: number;
}
const Carousel = ({ children, currentIndex }: Props) => {
  return (
    <div className="w-full flex overflow-x-hidden">
      <div
        className={`-translate-x-[${
          currentIndex * 100
        }%] w-full flex transition `}
      >
        {children}
      </div>
    </div>
  );
};
export default Carousel;
