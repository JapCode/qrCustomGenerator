import colors from '@/constants/colors';
import colorsThemes from '@/constants/colorsThemes';
import Image from 'next/image';
import { ChangeEvent } from 'react';
import Collapse from '../Collapse';
import ColorButton from '../ColorButton';
import ColorTheme from '../ColorTheme';
import styles from './optionsElement.module.css';

interface IconElement {
  name: string;
  route: string;
}

interface IOpcionesElementProps {
  qrValue: string;
  fgColorValue: string;
  bgColorValue: string;
  iconElements: IconElement[];
  setQrValue: (value: string) => void;
  setFgColorValue: (value: string) => void;
  setBgColorValue: (value: string) => void;
  setIconValue: (value: string) => void;
}

const OptionsElement = (prop: IOpcionesElementProps): JSX.Element => {
  const {
    setQrValue,
    setFgColorValue,
    setBgColorValue,
    setIconValue,
    qrValue,
    fgColorValue,
    bgColorValue,
    iconElements,
  } = prop;
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQrValue(e.target.value);
  };
  const handleChangeFgColor = (e: ChangeEvent<HTMLInputElement>): void => {
    setFgColorValue(e.target.value);
  };
  const handleChangeBgColor = (e: ChangeEvent<HTMLInputElement>): void => {
    setBgColorValue(e.target.value);
  };

  const colorValues = Object.values(colors);

  function generateUniqueId(): string {
    const timestamp = new Date().getTime();
    const randomValue = Math.floor(Math.random() * 10000); // Puedes ajustar el rango según tus necesidades
    return `${timestamp}-${randomValue}`;
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <label className={styles.label} htmlFor="urlInput">
          <span>Enter a URL:</span>
          <input
            id="urlInput"
            className={styles.urlInput}
            type="text"
            value={qrValue}
            onChange={handleChange}
            placeholder="Enter URL to generate QR Code"
          />
        </label>
      </div>
      {/* <Collapse title="Colores sugeridos">
      <div>aksjdlakjsd</div>
    </Collapse> */}
      <div className={styles.inputContainer}>
        <label className={styles.label} htmlFor="fgInput">
          <span>Enter a color:</span>
          <input
            id="fgInput"
            className={styles.urlInput}
            type="text"
            value={fgColorValue}
            onChange={handleChangeFgColor}
            placeholder="Enter the color of the QR Code"
          />
        </label>
        <Collapse title="Suggested color">
          <div className={styles.colorButtonContainer}>
            {colorValues.map((color) => (
              <ColorButton
                key={generateUniqueId()}
                hexadecimalColor={color}
                changeButtonColor={(): void => setFgColorValue(color)}
              />
            ))}
          </div>
        </Collapse>
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.label} htmlFor="bgInput">
          <span>Enter a background color:</span>
          <input
            id="bgInput"
            className={styles.urlInput}
            type="text"
            value={bgColorValue}
            onChange={handleChangeBgColor}
            placeholder="Enter the color of the QR Code"
          />
        </label>
        <Collapse title="Suggested color">
          <div className={styles.colorButtonContainer}>
            {colorValues.map((color) => (
              <ColorButton
                key={generateUniqueId()}
                hexadecimalColor={color}
                changeButtonColor={(): void => setBgColorValue(color)}
              />
            ))}
          </div>
        </Collapse>
      </div>
      <Collapse title="Icons Options">
        <div className={styles.iconsContainer}>
          {iconElements.map((icon) => (
            <button
              key={icon.name}
              type="button"
              onClick={(): void => {
                if (icon.name === 'resetButton') {
                  setIconValue('');
                } else {
                  setIconValue(icon.route);
                }
              }}
            >
              <Image src={icon.route} alt="Logo" width={50} height={50} />
            </button>
          ))}
        </div>
      </Collapse>
      <Collapse title="Color theme">
        <div className={styles.themeContainer}>
          {colorsThemes.map((element) => (
            <button
              className={styles.themeButton}
              type="button"
              onClick={(): void => {
                setFgColorValue(element.color);
                setBgColorValue(element.backgroundColor);
              }}
              key={generateUniqueId()}
            >
              <ColorTheme
                circleColor="#D9D9D9"
                rect1Color={element.color}
                rect2Color={element.backgroundColor}
              />
            </button>
          ))}
        </div>
      </Collapse>
    </div>
  );
};
export default OptionsElement;
