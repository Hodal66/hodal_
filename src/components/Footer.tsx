"use client";

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";
import HodalLogo from "/images/Logo/Hodal_Logo_No_Bg.png";

export function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <Footer container className="p-4 flex flex-col gap-8 bg-white dark:bg-gray-900">
      <div className="w-full">
        {/* Top section */}
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          {/* Brand logo and name */}
          <div>
            <FooterBrand
              href="/"
              src={HodalLogo} // Update with your real logo path
              alt="Muheto Hodal Logo"
              name="Hodal"
            />
          </div>

          {/* Link sections */}
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="About" />
              <FooterLinkGroup col>
                <FooterLink href="#about">Who I Am</FooterLink>
                <FooterLink
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow Me" />
              <FooterLinkGroup col>
                <FooterLink
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </FooterLink>
                <FooterLink
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                <FooterLink href="/terms-and-conditions">Terms & Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <FooterDivider />

        {/* Bottom section */}
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            href="/"
            by="Muheto Hodal™"
            year={currentYear}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon
              href="https://facebook.com/yourusername"
              icon={BsFacebook}
              target="_blank"
              rel="noopener noreferrer"
            />
            <FooterIcon
              href="https://instagram.com/yourusername"
              icon={BsInstagram}
              target="_blank"
              rel="noopener noreferrer"
            />
            <FooterIcon
              href="https://twitter.com/yourusername"
              icon={BsTwitter}
              target="_blank"
              rel="noopener noreferrer"
            />
            <FooterIcon
              href="https://github.com/yourusername"
              icon={BsGithub}
              target="_blank"
              rel="noopener noreferrer"
            />
            <FooterIcon
              href="https://dribbble.com/yourusername"
              icon={BsDribbble}
              target="_blank"
              rel="noopener noreferrer"
            />
            <FooterIcon
              href="https://linkedin.com/in/yourusername"
              icon={BsLinkedin}
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
