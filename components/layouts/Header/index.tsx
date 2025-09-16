import React from 'react';
import Container from '../Container';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon';
import FavoriteIcon from './FavoriteIcon';
import SignIn from './SignIn';
import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    <header className="bg-white py-4 shadow-md border-b border-black/20">
      <Container className='flex items-center justify-between font-montserrat '>
        <div className="flex items-center justify-start gap-4 w-auto md:gap-0">
          <MobileMenu />
          <Logo />
        </div>

        <HeaderMenu />

        <div className='flex items-center gap-6 w-auto'>
          <SearchBar />
          <FavoriteIcon />
          <CartIcon />
          <div className='hidden sm:block'> <SignIn /></div>
        </div>

      </Container>
    </header>
  )
}

export default Header
