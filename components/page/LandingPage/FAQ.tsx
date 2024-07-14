'use client';

import { Accordion } from '@szhsin/react-accordion';
import AccordionItem from '@/components/Shared/Accordion';

const FAQ = () => {
  const items = [
    {
      header: 'What is Lorem Ipsum?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing...',
    },
    {
      header: 'Where does it come from?',
      content: 'Quisque eget luctus mi, vehicula mollis lorem...',
    },
    {
      header: 'Why do we use it?',
      content: 'Suspendisse massa risus, pretium id interdum in...',
    },
  ];

  return (
    <section id="faq" className="py-5 px-5 md:px-20">
      <div className="text-center py-4">
        <h1 className="font-[500] text-3xl mb-2">FAQs</h1>
        <p className="text-sm font-normal text-zinc-500">
          What are your questions?
        </p>
      </div>
      <div className="mx-2 my-4 border-t">
        <Accordion transition transitionTimeout={200}>
          {items.map(({ header, content }, i) => (
            <AccordionItem header={header} key={i}>
              {content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
export default FAQ;
