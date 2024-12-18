import { useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { ChevronDown, Menu } from 'lucide-react';

import AnimatedButton from '../AnimatedButton/AnimatedButton';

const services = [
  { title: 'Workout Plan', href: '/services/workout' },

  { title: 'Diet Plan', href: '/services/diet' },
];

const navigationLinks = [
  { title: 'Home', href: '/' },

  { title: 'About', href: '/about' },

  { isDropdown: true, title: 'Our Services' },

  { title: 'Benefits', href: '/benefits' },

  { title: 'Blogs', href: '/blogs' },

  { title: 'Contact', href: '/contact' },
];

const mobileLinks = [
  { title: 'Home', href: '/' },

  { title: 'About', href: '/about' },

  { title: 'Services', href: '/services' },

  { title: 'Blogs', href: '/blogs' },

  { title: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 text-white font-orbitron flex gap-2 h-20 items-center rounded-full px-6 py-2 justify-between w-full max-w-6xl mx-auto z-50 bg-black/50 backdrop-blur-sm">
      <div className="flex items-center">
        <img
          src="/images/logo.png"
          alt="Framer Logo"
          className="h-12 w-10 mr-1"
        />

        <span className="font-bold text-xl">GymFluencer</span>
      </div>

      {/* Desktop Navigation */}

      <div className="hidden lg:flex items-center gap-4">
        {navigationLinks.map((link) => (
          <div key={link.title}>
            {link.isDropdown ? (
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                  <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 text-[#96979c] hover:text-[#eb0000] transition-colors duration-200 font-bold outline-none group">
                    {link.title}

                    <ChevronDown
                      className={`h-5 w-5 transition-colors duration-200 ${
                        isOpen
                          ? 'text-yellow-400'
                          : 'text-[#96979c] group-hover:text-yellow-400'
                      }`}
                    />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    className="bg-[#0B0B0B] border-none p-0 mt-1"
                    sideOffset={5}
                  >
                    {services.map((service) => (
                      <DropdownMenuItem
                        key={service.title}
                        className="focus:bg-transparent px-0"
                      >
                        <a
                          href={service.href}
                          className="font-orbitron text-[#96979c] hover:text-[#eb0000] transition-colors duration-200 px-4 py-2 block w-full"
                        >
                          {service.title}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <a
                href={link.href}
                className="px-4 py-2 text-[#96979c] hover:text-[#eb0000] transition-colors duration-200 font-bold"
              >
                {link.title}
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Navigation */}

      <div className="lg:hidden">
        <DropdownMenu
          open={isMobileMenuOpen}
          onOpenChange={setIsMobileMenuOpen}
        >
          <DropdownMenuTrigger className="outline-none">
            <Menu className="h-6 w-6 text-[#96979c]" />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="bg-[#0B0B0B] border-none mt-2 w-48">
            {mobileLinks.map((link) => (
              <DropdownMenuItem
                key={link.title}
                className="focus:bg-transparent px-0"
              >
                <a
                  href={link.href}
                  className="font-orbitron text-[#96979c] hover:text-[#eb0000] transition-colors duration-200 px-4 py-2 block w-full"
                >
                  {link.title}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="hidden lg:block">
        <AnimatedButton>Join Us Now</AnimatedButton>
      </div>
    </nav>
  );
};

export default Navbar;
