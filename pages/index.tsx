import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ImageListItemBarClasses,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import type { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import { HomePageItem } from '../models/homePage/HomePageItem';
import homePageService from '../service/homePageService';
import style from '../style/home.module.scss';
import logo from '../assets/logo/NextStopVintage_06.png';

const imageListItemStyles: Partial<ImageListItemBarClasses> = {
  title: style.imageListItemStyles,
};

const Home: NextPage = () => {
  const theme = useTheme();
  const isSmallDisplay = useMediaQuery(theme.breakpoints.down(1024));
  const [items, setItems] = React.useState<HomePageItem[]>([]);

  React.useEffect(() => {
    (async () => {
      const resp = await homePageService.getHomePageContent();
      setItems(resp);
    })();
  }, []);

  return (
    <Stack className={style.container}>
      <ImageList variant="woven" cols={isSmallDisplay ? 1 : 2} gap={20}>
        {items.map((item) => (
          <ImageListItem
            className={style.imageListItem}
            key={item.name}
            component={Link}
            href={`//${item.navigationURL}`}
            underline="none"
            rel="noreferrer"
            target="_top"
          >
            <>
              <img
                src={item.imageURL}
                alt={item.name}
                style={{ width: '100%', height: 'auto',  }}
              />
              <ImageListItemBar
                title={item.name}
                className={style.imageListItemBar}
                subtitle={item.additionalText}
                classes={imageListItemStyles}
              />
            </>
          </ImageListItem>
        ))}
      </ImageList>
      <Stack alignItems={'center'}>
        <Image
          src={logo}
          width={200}
          height={200}
          alt="logo image"
          objectFit="contain"
        />
        <Typography textAlign="center" variant="h3">
          Next Stop Vintage
        </Typography>
        <Typography textAlign="center" variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum atque
          quisquam impedit, quasi accusantium ducimus. Exercitationem, fuga
          commodi. Sed, iste ea! Perferendis optio adipisci itaque voluptatem,
          enim error modi doloremque mollitia in vel, unde molestiae officia
          ipsa hic tempora impedit aliquid debitis repellat illo, illum odio
          inventore quis dolorum ipsum? Deleniti, inventore consequuntur ea rem
          corporis illo cumque explicabo consequatur voluptas asperiores vero.
          Temporibus, eligendi omnis atque culpa
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Home;
