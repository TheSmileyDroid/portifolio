import styles from '../styles/Info.module.css'
import Header from '../src/Components/Header'

export default function AboutMe() {
    return (
        <div className={styles.container}>
            <Header title="Sobre mim"/>
            <main className={styles.mainAbout}>
                <h2>Gabriel Henrique Silva</h2>
                <p>
                    Sou um programador estudando atualmente
                    no <b>Ict-Unifesp</b>, Instituto de Ciências e Tecnologia da Universidade
                    Federal de São Paulo.
                </p>
                <p>
                    Estudo programação desde 2017, quando ganhei um Arduino, desde então
                    busco aprender sempre mais. A partir daí descobri o <b>Python</b> e me aprofundei nele. Começei a ter interesse em criar jogos logo depois
                    por participar de um projeto promovido pela minha escola, <b>Colégio Embraer Juarez Wanderley</b>,
                    em 2019, onde trabalhei no desenvolvimento de um jogo como programador da equipe.
                    Uso a Godot engine, que possui uma forma de programar semelhante a Python, para fazer
                    jogos para Game Jams, pequenas competições de criação de jogos.
                </p>
                <p>
                    Já participei de competições como o Desafio Recoders, onde criei um app de conversa. Participei
                    de uma competição de arduino chamada Arduino Challenge, onde o objetivo era criar um robô que passa-se
                    por uma série de obstáculos.
                </p>
                <p>
                    Gosto muito de estudar programação, já estudei diversas línguagens e ferramentas
                    de programação. Não me vejo trabalhando em algo que não seja relacionado 
                    a desenvolvimento.
                </p>
            </main>
        </div>
    )
}