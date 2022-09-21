import Switch from '@mui/material/Switch';
import type { NextPage } from 'next';
import React from 'react';
import style from '../style/Home.module.scss';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Home: NextPage = () => (
  <div className={style.container}>
    <div>
      <span>With default Theme:</span>
    </div>
    <Switch {...label} defaultChecked />
    <Switch {...label} />
    <Switch {...label} disabled defaultChecked />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. At quod voluptate
    ipsam rem molestias! In exercitationem minus mollitia nemo culpa dolor
    numquam corrupti quam, cum ducimus doloremque quod perferendis atque modi
    explicabo eos doloribus voluptatibus nostrum illum perspiciatis sequi
    sapiente. Temporibus, libero amet! Fugit a, quas eveniet quod quidem
    cupiditate sit architecto debitis nesciunt perferendis, accusamus ex neque
    culpa tenetur repellat amet laudantium voluptates perspiciatis et
    consectetur maxime praesentium mollitia repudiandae atque. Cupiditate non
    necessitatibus, delectus fugit sequi laudantium eaque magni amet ipsa
  </div>
);

export default Home;
