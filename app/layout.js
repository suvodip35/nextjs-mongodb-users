import './globals.css';

export const metadata = {
  title: 'User Management System',
  description: 'Next.js with MongoDB - Create and manage users',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
