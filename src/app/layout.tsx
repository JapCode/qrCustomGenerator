import { Inter } from 'next/font/google';
import '../assets/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js Template',
  description: 'Generated by create next app and modified by me',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};
export default RootLayout;
