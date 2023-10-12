import styles from './colorButton.module.css';

interface IColorButton {
  hexadecimalColor: string;
  changeButtonColor: (newColor: string) => void;
}

const ColorButton = (props: IColorButton): JSX.Element => {
  const { hexadecimalColor, changeButtonColor } = props;
  const newColor = (): void => {
    changeButtonColor(hexadecimalColor);
  };
  return (
    <button
      type="button"
      onClick={newColor}
      className={styles.colorButton}
      style={{ backgroundColor: hexadecimalColor }}
    >
      {hexadecimalColor}
    </button>
  );
};
export default ColorButton;
