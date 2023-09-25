import { Inter } from 'next/font/google'
import HeaderFooter from "../layout/HeaderFooter";
import { Web3Button } from "@web3modal/react";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <HeaderFooter>
      <main className="flex justify-center">
      </main>
    </HeaderFooter>
  );
}
