import styles from '../styles/Info.module.css'
import Header from '../src/Components/Header'
import { IconContext } from 'react-icons'
import { Container, Col, Row } from 'react-bootstrap'
import { DiPython, DiJsBadge, DiJava, DiReact } from 'react-icons/di'
import { SiC } from 'react-icons/si'
import { CSSProperties } from 'react'

export default function Skills() {
    return (
        <div className={styles.container}>
            <Header title="Skills"/>
            <main className={styles.main}>
                <h2>Habilidades e conhecimentos</h2>
                <Icons/>
                <p>
                    Aprendi a desenvolver com Python em 2018, estudei Java um pouco depois
                    e em seguida Javascript.
                    Vi um pouco de C# para fazer jogos e
                    agora estou estudando C na minha Universidade.
                    Já desenvolvi projetos de machine learning, fiz sites, 
                    fiz jogos e criei apps mobile.
                </p>
                <p>
                    Já usei outras linguagens em projetos isolados, 
                    como Golang, Rust e Kotlin.
                </p>
            </main>
        </div>
    )
}

const iconStyle: CSSProperties = {
    margin: '10px',
}
const iconSize: string = "40px"

function Icons() {
    return (
        <div className={styles.icons}>
            <DiPython style={iconStyle} size={iconSize}/>
            <DiJsBadge style={iconStyle} size={iconSize}/>
            <SiC style={iconStyle} size={iconSize}/>
            <DiReact style={iconStyle} size={iconSize}/>
            <DiJava style={iconStyle} size={iconSize}/>
        </div>
    )
}

