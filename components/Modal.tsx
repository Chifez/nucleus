// import React, { ReactNode } from 'react';
// import { IoMdClose } from 'react-icons/io';

// const Modal = ({
//   children,
//   openModal,
//   isDropDown = false,
//   extrastyle,
// }: {
//   children: ReactNode;
//   openModal: Boolean;
//   isDropDown: Boolean;
//   extrastyle: string;
// }) => {
//   return (
//     <div
//       className={`bg-white dark:bg-[#0c0c0d] dark:text-white p-2 border ${extrastyle}`}
//     >
//       {openModal && (
//         <div className="relative ">
//           {!isDropDown && (
//             <IoMdClose
//               className="absolute left-1 top-1"
//               onClick={() => (openModal = false)}
//             />
//           )}

//           <div onClick={() => (openModal = false)} className="mt-1">
//             {children}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Modal;

import React, { ReactNode, useRef } from 'react';
import { IoMdClose } from 'react-icons/io';

const Modal = ({
  children,
  openModal,
  onClose,
  isDropDown = false,
  extrastyle,
}: {
  children: ReactNode;
  openModal: boolean;
  onClose: () => void;
  isDropDown: boolean;
  extrastyle: string;
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleModalClick = () => {
    onClose();
  };

  return (
    <>
      {openModal && (
        <div
          className={`my-1 bg-white dark:bg-[#0c0c0d] dark:text-white  border ${extrastyle}`}
        >
          <div className="relative" ref={modalRef}>
            {!isDropDown && (
              <IoMdClose
                className="absolute left-1 top-1"
                onClick={handleModalClick}
              />
            )}

            <div
              //   onClick={handleModalClick}
              className={`${!isDropDown && 'mt-1'}`}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
