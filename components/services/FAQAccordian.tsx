import React, { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
  active?: boolean;
};
function FAQAccordion({ children, title, active = false }: Props) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const accordion = useRef(null);

  useEffect(() => {
    setAccordionOpen(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accordion]);

  return (
    <li>
      <button
        className="flex items-center w-full py-5 text-lg font-medium text-left border-t border-gray-200 dark:border-gray-700 dark:text-gray-100"
        onClick={(e) => {
          e.preventDefault();
          setAccordionOpen(!accordionOpen);
        }}
        aria-expanded={accordionOpen}
      >
        <svg
          className="flex-shrink-0 w-4 h-4 mr-8 -ml-12 fill-current text-primary-500"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && 'rotate-90 hidden'
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              !accordionOpen && '-rotate-90'
            }`}
          />
        </svg>
        <span>{title}</span>
      </button>
      <div
        ref={accordion}
        className="overflow-hidden text-gray-700 transition-all duration-300 ease-in-out dark:text-gray-100"
        style={
          accordionOpen
            ? { maxHeight: accordion.current.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <p className="pb-5">{children}</p>
      </div>
    </li>
  );
}

export default FAQAccordion;
