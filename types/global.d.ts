import { ReactNode } from 'react';

declare global {
  type SiteLogoProps = {
    href: string;
    text?: string;
    classes?: string;
    imgSrc?: string;
    imgAlt?: string;
    imgWidth?: number;
    imgHeight?: number;
    imgClasses?: string;
    onClick?: () => void;
    isSidebar?: boolean;
  };

  type NavLinkProps = {
    id: string;
    href: string;
    label: string;
    classes?: string;
    isMobile?: boolean;
    onClick?: () => void;
  };

  type PageHeaderProps = {
    title: string;
    children?: ReactNode;
  };
}

export {};
