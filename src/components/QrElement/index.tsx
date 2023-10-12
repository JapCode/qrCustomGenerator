import { QRCodeCanvas } from 'qrcode.react';
import { useRef } from 'react';
import styles from '../../app/page.module.css';

interface IQrElementProps {
  qrValue: string;
  fgColorValue: string;
  bgColorValue: string;
  iconValue: string;
}

const QrElement = ({
  qrValue,
  fgColorValue,
  bgColorValue,
  iconValue,
}: IQrElementProps): JSX.Element => {
  const qrCodeRef = useRef(null);
  const handleDownload = (): void => {
    if (qrCodeRef.current === null) return;
    const canvas = qrCodeRef.current.querySelector('canvas');
    const url = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.href = url;
    link.download = 'qrcode.png';
    link.click();
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingBottom: 20,
      }}
    >
      <div ref={qrCodeRef} className={styles.center}>
        <QRCodeCanvas
          size={350}
          value={qrValue}
          level="Q"
          includeMargin
          bgColor={bgColorValue}
          fgColor={fgColorValue}
          imageSettings={{
            src: iconValue,
            height: 110,
            width: 110,
            excavate: true,
          }}
        />
      </div>
      <p
        style={{
          paddingBottom: 20,
        }}
      >
        Scam you QR or download
      </p>
      <button
        style={{
          width: 300,
          height: 40,
          border: 'none',
          backgroundColor: '#7f77e0',
          color: '#ffffff',
          fontWeight: 'bold',
        }}
        type="button"
        onClick={handleDownload}
      >
        Download
      </button>
    </div>
  );
};
export default QrElement;
