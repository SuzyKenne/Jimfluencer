import React from 'react';

import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

import { ButtonProps } from '@/components/ui/button';

interface Props extends ButtonProps {
  className?: string;

  children: React.ReactNode;
}

const AnimatedButton = ({
  className,

  children,

  ...props
}: Props): JSX.Element => {
  return (
    <div className="relative inline-block overflow-hidden rounded-full">
      <Button
        className={cn(
          'bg-[#eb0000] hover:bg-[#eb0000] text-white rounded-full px-6 py-6 font-bold relative overflow-hidden group',

          className
        )}
        {...props}
      >
        {children}

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-[100%] top-0 h-[400%] w-[40%] bg-white/80 rotate-[35deg] group-hover:animate-stripe" />
        </div>
      </Button>
    </div>
  );
};

export default AnimatedButton;
