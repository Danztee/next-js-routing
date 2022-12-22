// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";

import Link from "next/link";
import { useRouter } from "next/router";

// const inter = Inter({ subsets: ["latin"] });

function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/product");
    console.log("placing order...");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link> <br /> <br />
      <Link href="/product">Product</Link> <br /> <br />
      <button onClick={handleClick}>Place order</button>
    </div>
  );
}

export default Home;
