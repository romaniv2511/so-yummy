import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container } from '../Container/Container';
import { Logo } from './Logo/Logo';
import { UserLogo } from './UserLogo/UserLogo';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { Navigation } from './Navigation/Navigation';
import { ThemeToggler } from './ThemeToggler/ThemeToggler';
import sprite from 'img/sprite.svg';
import {
  Button,
  HeaderBox,
  Modal,
  UserBox,
  HeaderModal,
  Section,
} from './Header.styled';

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleOpenBurger = e => {
    setOpenMenu(!openMenu);
  };
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });

  return (
    <>
      <HeaderBox>
        <Container>
          <Section>
            <Logo />
            {isDesktop && <Navigation />}
            <UserBox>
              <UserLogo />
              {isDesktop ? (
                <ThemeToggler />
              ) : (
                <BurgerMenu onClick={toggleOpenBurger} />
              )}
            </UserBox>
          </Section>
        </Container>
      </HeaderBox>
      <Modal isOpen={openMenu}>
        <div>
          <HeaderModal>
            <Logo
              onClick={() => {
                setOpenMenu(false);
              }}
            />
            <Button type="button" onClick={toggleOpenBurger}>
              <svg width={32} height={32}>
                <use href={sprite + '#icon-x'} />
              </svg>
            </Button>
          </HeaderModal>
          <Navigation
            onClick={() => {
              setOpenMenu(false);
            }}
          />
        </div>
        <div>
          <ThemeToggler />
        </div>
      </Modal>
    </>
  );
};
