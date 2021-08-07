import styles from '../styles/Info.module.css'
import Header from '../src/Components/Header'
import {Card, Container} from 'react-bootstrap'
import React from 'react'

interface ProjectProps {
  title: string,
  url?: string,
  img?: string,
  children?: React.ReactNode,
}

export default function Projects() {
    return (
        <div className={styles.container}>
            <Header title="Projetos"/>
            <main className={styles.main}>
                <Container fluid>
                <Project title="Bot para Discord" url="https://github.com/TheSmileyDroid/SmileyDroidLoco">
                    Um bot com várias funções para se utilizar em servers do Discord. Feito Com a biblioteca Discord.py
                </Project>
                <Project title="Robô em Arduino">
                    Um robô feito com arduino que pode seguir uma linha e desviar de obstáculos no caminho.
                    Feito para o Arduino Challenge.
                </Project>
                <Project title="Jogos para Game Jams" url="https://smileydroid.itch.io">
                    Alguns jogos que foram feitos para competições de jogos na plataforma itch.io
                </Project>
                </Container>
            </main>
        </div>
    )
}

function Project(props: ProjectProps) {
    var link = <Card.Link href={props.url} target="_blank">Ir para o projeto</Card.Link>
    if (props.url == null) {
        link = <div></div>
    }
    return (
        <Card>
            <Card.Img src={props.img} variant="top"/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.children}
                </Card.Text>
                {link}
            </Card.Body>
        </Card>
        /*
        <div className={styles.card}>
            <a href={props.url} target="_blank" rel="noreferrer">
                <h3>{props.title}</h3>
            </a>
        </div>
        */
    )
}