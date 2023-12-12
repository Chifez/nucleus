//I need to figure out why this doesn't work

'use client';

import { ReactNode, useEffect, useState } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
  currentIndex: number;
}
const Carousel = ({ children, currentIndex }: Props) => {
  const [translateSize, setTranslateSize] = useState('-translate-x-[0]');

  useEffect(() => {
    setTranslateSize(`-translate-x-[${currentIndex * 100}%]`);
    console.log(translateSize);
  }, [currentIndex]);

  return (
    <div className={`w-full flex overflow-x-hidden`}>
      <div className={`${translateSize} w-full flex transition`}>
        {children}
      </div>
    </div>
  );
};
export default Carousel;

// 'use client';

// import { ReactNode } from 'react';

// interface Props {
//   children: ReactNode | ReactNode[];
//   currentIndex: number;
// }
// const Carousel = ({ children, currentIndex }: Props) => {
//   const TRANSLATE = {
//     0: '-translate-x-[0]',
//     1: '-translate-x-[100%]',
//     2: '-translate-x-[200%]',
//   };

//   return (
//     <div className={`w-full flex overflow-x-hidden`}>
//       <div className={`${TRANSLATE[currentIndex]} w-full flex transition`}>
//         {children}
//       </div>
//     </div>
//   );
// };
// export default Carousel;
