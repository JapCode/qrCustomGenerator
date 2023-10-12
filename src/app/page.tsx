'use client';

import OptionsElement from '@/components/OptionsElement';
import QrElement from '@/components/QrElement';
import { useState } from 'react';
import styles from './page.module.css';

interface IconElement {
  name: string;
  route: string;
}

const iconElements = [
  {
    name: 'logoDefault',
    route: '/logoDefault.svg',
  },
  {
    name: 'logoPinkDark',
    route: '/logoPink-dark.svg',
  },
  {
    name: 'logoPurpleWhite',
    route: '/logoPurple-white.svg',
  },
  {
    name: 'logoPurpleDark',
    route: '/logoPurple-dark.svg',
  },
  {
    name: 'resetButton',
    route: '/cancel.svg',
  },
] as IconElement[];

const Home = (): JSX.Element => {
  const [qrValue, setQrValue] = useState('');
  const [fgColorValue, setFgColorValue] = useState('#000000');
  const [bgColorValue, setBgColorValue] = useState('#ffffff');
  const [iconValue, setIconValue] = useState('');

  return (
    <main className={styles.main}>
      {/* <h1 className={styles.title}>Welcome to my template!</h1> */}
      <div className={styles.container}>
        <OptionsElement
          qrValue={qrValue}
          fgColorValue={fgColorValue}
          bgColorValue={bgColorValue}
          iconElements={iconElements}
          setQrValue={setQrValue}
          setFgColorValue={setFgColorValue}
          setBgColorValue={setBgColorValue}
          setIconValue={setIconValue}
        />
        <QrElement
          qrValue={qrValue}
          fgColorValue={fgColorValue}
          bgColorValue={bgColorValue}
          iconValue={iconValue}
        />
      </div>
    </main>
  );
};

export default Home;
