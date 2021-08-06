import styles from '../styles/Info.module.css'
import Header from '../src/Components/Header'

export default function Contato() {
    return (
        <div className={styles.container}>
            <Header title="Contato"/>
            <main className={styles.main}>
                <h2>Formas de contato</h2>
                <b>Email: </b> 
                <a href="mailto:ghsilha@gmail.com" target="_blank" rel="noreferrer">ghsilha@gmail.com</a> 
                <b>Linkedin</b> 
                <a href="https://www.linkedin.com/in/gabriel-henrique-silva-439774210/" target="_blank" rel="noreferrer">linkedin.com/in/gabriel-henrique-silva-439774210</a>
                <b>Github</b> 
                <a href="https://github.com/TheSmileyDroid" target="_blank" rel="noreferrer">TheSmileyDroid</a>
            </main>
        </div>
    )
}