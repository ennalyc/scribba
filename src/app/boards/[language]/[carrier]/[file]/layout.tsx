import "./globals.css";
import ClientLayout from '@/components/ClientLayout';
import DictBox from "@/components/DictBox";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <DictBox/>
      </body>
    </html>
  );
}
