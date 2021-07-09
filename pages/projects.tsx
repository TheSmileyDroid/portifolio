import styles from '../styles/Projects.module.css'

interface ProjectProps {
  title: string;
  url: string;

}

export default function Projects() {
    return (
        <div className={styles.container}>
            
        </div>
    )
}

function Project(props: ProjectProps) {
    return (
        <div className={styles.card}>
            <h3>{props.title}</h3>
        </div>
    )
}