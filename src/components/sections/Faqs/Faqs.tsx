import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';

interface FaqsInterface {
  question: string;
  answer: string;
}

interface FaqsInterfaceProps {
  faqs: FaqsInterface[];
}

function FaqsComponent({ faqs }: FaqsInterfaceProps) {
  // Track open/closed state for each FAQ item
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat py-16 text-white -z-0"
      style={{
        backgroundImage: 'url("/images/Section.png")',
        backgroundSize: 'cover',
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron text-center mb-12 text-white">
          Frequently Asked Questions
        </h2>

        <Accordion
          type="single"
          collapsible
          className="w-full max-w-4xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              className="mb-4 py-2 border border-creator-bg-200 px-6 rounded-md bg-white/10 backdrop-blur-sm"
              value={`item-${index}`}
            >
              <AccordionTrigger onClick={() => toggleItem(index)}>
                <span className="flex items-center">
                  {openItems[index] ? (
                    <X className="h-6 w-6 mr-4 text-white transition-transform duration-200" />
                  ) : (
                    <Plus className="h-6 w-6 mr-4 text-white transition-transform duration-200" />
                  )}
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-white">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FaqsComponent;
