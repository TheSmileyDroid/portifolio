import styles from '../styles/Projects.module.css'
import Link from 'next/link'


interface ProjectProps {
  title: string;
  url: string;

}

export default function Projects() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link href="/"><a>Voltar para a página inicial</a></Link> 
            </div>
            <main className={styles.main}>
                <Project title="Bot para Discord" url="https://github.com/TheSmileyDroid/SmileyDroidLoco" />
            </main>
        </div>
    )
}

function Project(props: ProjectProps) {
    return (
        <div className={styles.card}>
            <a href={props.url} target="_blank" rel="noreferrer">
                <h3>{props.title}</h3>
            </a>
        </div>
    )
}