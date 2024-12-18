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
      <div className="mx-auto p-10 py-8 bg-red-700 text-white relative">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              className="m-8 py-2 border border-creator-bg-200 px-6 rounded-md"
              value={`item-${index}`}
            >
              <AccordionTrigger onClick={() => toggleItem(index)}>
                <span className="flex items-center">
                  {openItems[index] ? (
                    <Plus className="h-6 w-6 mr-4 text-white transition-transform duration-200" />
                  ) : (
                    <X className="h-6 w-6 mr-4 text-white transition-transform duration-200" />
                  )}
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }
  
  export default FaqsComponent;
  