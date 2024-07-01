import { AccordionItem as Item } from '@szhsin/react-accordion';
import { FaChevronDown } from 'react-icons/fa';

const AccordionItem = ({
  header,
  ...rest
}: {
  children: string;
  header: string;
  key: number;
}) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <FaChevronDown
          className={`ml-auto transition-transform duration-200 ease-out ${
            isEnter && 'rotate-180'
          }`}
        />
      </>
    )}
    className="border-b"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-4 text-left hover:bg-slate-100 ${
          isEnter && 'bg-slate-200'
        }`,
    }}
    contentProps={{
      className: 'transition-height duration-200 ease-out',
    }}
    panelProps={{ className: 'p-4' }}
  />
);
export default AccordionItem;
