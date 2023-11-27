import { useState } from 'react';
import { Center, Tooltip, UnstyledButton, rem } from '@mantine/core';
import {
  IconHome2,
  IconUser,
  IconLogout,
  IconDashboard,
  IconSearch,
  IconBan,
} from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Navbar.module.css';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconDashboard, label: 'Dashboard' },
  { icon: IconSearch, label: 'Search Plate' },
  { icon: IconBan, label: 'Blacklisted' },
];

export function Navbar() {
  const [active, setActive] = useState(0);
  const isMobile = useMediaQuery('(max-width: 767px)');

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <MantineLogo type="mark" inverted size={30} />
      </Center>

      <div className={classes.navbarMain}>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'row' : 'column' }}>{links}</div>
      </div>

      {/* Use inline styles or additional classes to override stacking */}
      <div className={classes.navbarBottom}>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'row' : 'column' }}>
          <NavbarLink icon={IconUser} label="Account" />
          <NavbarLink icon={IconLogout} label="Logout" />
        </div>
      </div>
    </nav>
  );
}
