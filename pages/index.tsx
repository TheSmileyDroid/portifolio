import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import SmileyDroid from '../public/SmileyDroid.png'
import { BsCaretDown } from 'react-icons/bs'
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

      <main className={styles.main}>
        
        <Info/>

        <Links/>
        

      </main>

      <footer className={styles.footer}>
        Feito em Next.js
      </footer>
    </div>
  )
}

function Info() {
  return(
    <div className={styles.info}>
        <div className={styles.Foto_div}>
            <Image src={Foto} alt="" className={styles.Foto}></Image>
        </div>
        <h1 className={styles.title}>
          Gabriel Henrique Silva
        </h1>

        <p className={styles.description}>
          Desenvolvedor de Software e Fullstack
        </p>
        
        </div>
  )
}

function Links() {
  return (
    <div className={styles.links}>
      <h2><Link href="/projetos" passHref><a>Projetos</a></Link></h2>
      <h2><Link href="/skills" passHref><a>Skills</a></Link></h2>
      <h2><Link href="/contato" passHref><a>Contato</a></Link></h2>
    </div>
  )
}