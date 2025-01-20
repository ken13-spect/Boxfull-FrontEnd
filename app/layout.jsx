import 'antd/dist/reset.css'
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <main className="flex h-screen w-auto justify-center bg-slate-200 items-center p-2">
      <AntdRegistry>{children}</AntdRegistry>
      </main>
      </body>
    </html>
  );

}
