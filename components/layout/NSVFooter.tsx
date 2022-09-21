import { Container, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import style from './style/NSVFooter.module.scss';

const year = new Date().getFullYear();

const NSVFooter = () => (
  <footer>
    <Container className={style.FooterContainer}>
      <Stack
        direction={'row'}
        alignItems="center"
        justifyContent="center"
        className={style.SocialLinks}
      >
        <IconButton color="secondary">
          <Link href={'https://www.facebook.com/NextStopVintageShop/'}>
            <FacebookIcon />
          </Link>
        </IconButton>
        <IconButton color="secondary">
          <Link href="https://www.instagram.com/next_stop_vintage_shop/">
            <InstagramIcon />
          </Link>
        </IconButton>
      </Stack>
      <Stack
        alignItems="center"
        justifyContent="center"
        className={style.Links}
      >
        <Link href={'./contact'}>
          <Typography variant="body2" gutterBottom>
            Contact
          </Typography>
        </Link>
        <Link href={'./delivery'}>
          <Typography variant="body2" gutterBottom>
            Livrare si retur
          </Typography>
        </Link>
        <Link href={'./termsAndCond'}>
          <Typography variant="body2" gutterBottom>
            Termeni si conditii
          </Typography>
        </Link>
        <Link href={'https://anpc.ro/'} target="_blank">
          <Typography variant="body2" gutterBottom>
            ANPC
          </Typography>
        </Link>
      </Stack>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
        textAlign="center"
        className={style.Caption}
      >
        © {year} NextStopVintage
      </Typography>
    </Container>
  </footer>
);

export default NSVFooter;
