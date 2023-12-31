import './globals.css';
import { Providers } from "./providers";
import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: 'Unicorns',
  description: 'Generated by create next app',
};

export default function RootLayout({ children })
{
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
