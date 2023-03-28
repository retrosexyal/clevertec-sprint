import React, { createRef, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ReactComponent as Burger } from '../../assets/svg/burger_icon.svg';
import { ReactComponent as BurgerActive } from '../../assets/svg/burger_icon_active.svg';
import { BurgerMenuComp } from '../../components/burger-menu-comp';
import { Error } from '../../components/error';
import { Logo } from '../../components/logo';
import { MenuContant } from '../../components/menu-contant';
import { Person } from '../../components/person';
import { routes } from '../../constants/routes';
import { RootState } from '../../redux/store';

import styles from './header.module.scss';

export const Header = () => {
  const [isPressed, setIsPressed] = useState(false);
  const { status } = useSelector((state: RootState) => state.books);
  const categorys = useSelector((state: RootState) => state.categorys);
  const refMenu = createRef<HTMLDivElement>();
  const initialIsBurger = window.innerWidth > 769 ? false : true;
  const [isBurger, setIsburger] = useState(initialIsBurger);

  const handleBurger = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed(!isPressed);
    event.stopPropagation();
  };

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (event.target !== refMenu.current && (event.target as HTMLElement)?.innerText !== 'Витрина книг') {
        setIsPressed(false);
      }
    },
    [refMenu]
  );

  useLayoutEffect(() => {
    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick, isPressed]);

  const resize = useCallback(() => {
    setIsPressed(false);
    const isBurgerNow = window.innerWidth > 1010 ? false : true;

    setIsburger(isBurgerNow);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [resize]);

  return (
    <div className={styles.header_wrapper}>
      {(status === 'error' || categorys.status === 'error') && <Error />}
      <Link className={styles.none} to={routes.main}>
        <Logo />
      </Link>
      <button
        onClick={handleBurger}
        type='button'
        className={styles.burger}
        aria-label='Open menu'
        data-test-id='button-burger'
      >
        {!isPressed ? <Burger /> : <BurgerActive />}
      </button>

      {isBurger && (
        <div
          className={isPressed ? styles.burger_menu : styles.display_none}
          ref={refMenu}
          data-test-id='burger-navigation'
        >
          <MenuContant burger={true} />
          <BurgerMenuComp />
        </div>
      )}

      <h1>Библиотека</h1>
      <Person className={styles.none} greetings='Привет, Иван!' />
    </div>
  );
};
