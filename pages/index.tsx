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
        <IconContext.Provider value={{ size: 3+'em', className: styles.header_icon }}>
          <Link href="/projects"><a>Ir para projetos<BiRightArrowAlt /></a></Link> 
            
          </IconContext.Provider>
      </div>

      <main className={styles.main}>
        <Image src={Foto} alt=""></Image>
        <h1 className={styles.title}>
          Gabriel Henrique Silva
        </h1>

        <p className={styles.description}>
          Desenvolvedor Python e Javascript
        </p>

      </main>

      <footer className={styles.footer}>
        Feito em Next.js
      </footer>
    </div>
  )
}
