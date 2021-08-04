import styles from '../styles/Info.module.css'
import Header from '../src/Components/Header'

interface ProjectProps {
  title: string;
  url: string;
}

export default function Projects() {
    return (
        <div className={styles.container}>
            <Header title="Projetos"/>
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