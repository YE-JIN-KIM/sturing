import Header from '@/components/common/Header';
import './globals.css';
import { getSession } from '@/utils/getSessions';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  let id = session?.user?.id;
 

  return (
    <html lang="ko">
      <body>
        <Header id={id} />
        {children}
      </body>
    </html>
  );
}
