import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import SmileyDroid from '../public/SmileyDroid.png'
import { BiRightArrowAlt } from 'react-icons/bi'
import { IconContext } from "react-icons";
import Foto from '../public/Foto-de-perfil.png'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Portifólio de desenvolvedor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
          <Link href="/projetos"><a>Ir para projetos</a></Link> 
      </div>

      <main className={styles.main}>
        <div className={styles.Foto_row}>
          <div className={styles.Foto_div}>
            <Image src={Foto} alt="" className={styles.Foto}></Image>
          </div>
        </div>
        <h1 className={styles.title}>
          Gabriel Henrique Silva
        </h1>

        <p className={styles.description}>
          Desenvolvedor Python e Javascript
        </p>

        <div></div>

      </main>

      <footer className={styles.footer}>
        Feito em Next.js
      </footer>
    </div>
  )
}
