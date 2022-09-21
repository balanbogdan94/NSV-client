import React from 'react';
import Image from 'next/image';
import {
  AppBar,
  Badge,
  Button,
  Container,
  Drawer,
  Fade,
  IconButton,
  List,
  Menu,
  Toolbar,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ShoppingBagOutlined,
  Close,
} from '@mui/icons-material';
import Link from 'next/link';
import styles from './style/NSVNavBar.module.scss';
import logo from '../../assets/logo/NextStopVintage_06.png';
import menuOptions from '../../config/menuOptions';
import { showOnlyOnPhone, hideOnPhone } from './style/NSVNavBar.style';
import CheckoutLayout from './CheckoutLayout';

const paperProps = {
  className: styles.paper,
};

const menuListPros = {
  className: styles.menuList,
};

const checkoutDrawer = {
  className: styles.checkoutDrawer,
};

const NSVNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = React.useState(false);
  const navElAnchor = React.useRef<HTMLButtonElement | null>(null);
  const onMenuButtonClicked = React.useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  const onCheckoutClicked = React.useCallback(() => {
    setIsCheckoutOpen((prevState) => !prevState);
  }, []);

  const onCheckoutClosed = React.useCallback(() => {
    setIsCheckoutOpen(false);
  }, []);

  return (
    <AppBar position="sticky" className={styles.appBar}>
      <Container>
        <Toolbar disableGutters className={styles.toolbar}>
          <IconButton
            onClick={onMenuButtonClicked}
            ref={navElAnchor}
            size={'large'}
            sx={showOnlyOnPhone}
          >
            {isMenuOpen ? <Close /> : <MenuIcon />}
          </IconButton>
          <Menu
            id="menu-appbar"
            open={isMenuOpen}
            anchorEl={navElAnchor.current}
            className={`${styles.mobileMenu} ${
              isMenuOpen ? styles.pushAnimation : styles.pullAnimation
            }`}
            sx={showOnlyOnPhone}
            TransitionComponent={Fade}
            transitionDuration={800}
            PaperProps={paperProps}
            MenuListProps={menuListPros}
          >
            {menuOptions.map((item, index) => (
              <Link key={`menu-item-${index}`} href={item.url.toString()}>
                <Button className={styles.menuLink}>{item.title}</Button>
              </Link>
            ))}
          </Menu>
          <Link aria-label="menu" href="http://localhost:3000/">
            <IconButton className={styles.logo}>
              <Image src={logo} alt="logo image" objectFit="contain" />
            </IconButton>
          </Link>
          <List className={styles.menuLinks} sx={hideOnPhone}>
            {menuOptions.map((item, index) => (
              <Link key={`menu-item-${index}`} href={item.url.toString()}>
                <Button color="secondary" className={styles.menuLink}>
                  {item.title}
                </Button>
              </Link>
            ))}
          </List>
          <IconButton
            aria-label="cart"
            className={styles.cart}
            onClick={onCheckoutClicked}
          >
            <Badge badgeContent={4} color="error">
              <ShoppingBagOutlined />
            </Badge>
          </IconButton>
          <Drawer
            anchor="right"
            open={isCheckoutOpen}
            onClose={onCheckoutClosed}
            className={styles.drawer}
            transitionDuration={700}
            PaperProps={checkoutDrawer}
          >
            <CheckoutLayout onClosedPressed={onCheckoutClosed}>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque repellat, quos esse sunt, et nihil iure quam dolore
                quia tempore a possimus. Voluptas facere quasi ad, assumenda
                consequuntur velit sequi, nihil accusamus quo, hic dicta cum
                harum laboriosam deleniti soluta. Modi laudantium ad sed
                consequuntur fugiat. Veritatis molestiae beatae quod harum
                itaque eos, sunt labore saepe, molestias, magni quisquam! Saepe
                illo obcaecati natus, veniam nemo at laboriosam velit
                accusantium expedita ipsam rerum dolorum deleniti ab soluta
                corporis mollitia harum vero. Reiciendis voluptatum natus sit,
                dolor iusto dolores sint voluptates aut laboriosam, illum
                molestias possimus, ullam esse. Sit ad tempore repellendus saepe
                ex aut enim dolor magnam quos amet, veritatis animi molestias
                distinctio aliquam repudiandae fugit cupiditate, modi porro
                voluptatum? Id unde quisquam eveniet quaerat. Fugiat vel ea
                nobis et, quae delectus libero illum natus qui. Mollitia
                assumenda magnam maxime corporis? Exercitationem explicabo enim,
                quo saepe alias ipsa nemo delectus esse. Quas consequatur, omnis
                doloremque dolor ad temporibus similique, totam, sunt esse
                accusamus culpa assumenda nostrum nam ullam consectetur soluta
                in corrupti quia reprehenderit ab distinctio quam odio! Id
                nesciunt quas itaque provident tempore, facilis ab ratione,
                possimus architecto quam aspernatur quod sequi similique. Modi
                rerum illo quisquam explicabo. Blanditiis, sapiente.
              </span>
            </CheckoutLayout>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NSVNavBar;
