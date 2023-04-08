import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container } from '../Container/Container';
import { Logo } from './Logo/Logo';
import { User } from './User/User';
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
  GlobalStyle,
} from './Header.styled';

export const Header = ({ onToggle, isToggle }) => {
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
              <User />
              {isDesktop ? (
                <ThemeToggler onToggle={onToggle} isToggle={isToggle} />
              ) : (
                <BurgerMenu onClick={toggleOpenBurger} />
              )}
            </UserBox>
          </Section>
        </Container>
      </HeaderBox>
      <GlobalStyle isOpen={openMenu} />
      <Modal isOpen={openMenu}>
        <div>
          <HeaderModal>
            <Logo
              onClick={() => {
                setOpenMenu(false);
              }}
            />
            <Button type="button" onClick={toggleOpenBurger} aria-label="Close">
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
          <ThemeToggler onToggle={onToggle} isToggle={isToggle} />
        </div>
      </Modal>
    </>
  );
};
