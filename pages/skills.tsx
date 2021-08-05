import styles from '../styles/Info.module.css'
import Header from '../src/Components/Header'
import { IconContext } from 'react-icons'
import { Container, Col, Row } from 'react-bootstrap'
import { DiPython, DiJsBadge, DiJava, DiReact } from 'react-icons/di'
import { SiC } from 'react-icons/si'

export default function Skills() {
    return (
        <div className={styles.container}>
            <Header title="Skills"/>
            <main className={styles.main}>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col md="auto"><DiPython size="50px"/> </Col>
                        <Col md="auto"><DiJsBadge size="50px"/></Col>
                        <Col md="auto"><SiC size="50px"/></Col>
                        <Col md="auto"><DiReact size="50px"/></Col>
                        <Col md="auto"><DiJava size="50px"/></Col>
                    </Row>
                </Container>
            </main>
        </div>
    )
}