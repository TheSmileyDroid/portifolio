import styles from '../../../styles/Info.module.css'
import Link from 'next/link'
import { ReactElement } from 'react'

interface HeaderProps {
    title: String,
}


export default function Header(props: HeaderProps) {
    const links = [
        "/",
        "/aboutme",
        "/projetos",
        "/skills",
        "/contato",
    ]
    const names = [
        "Início",
        "Sobre mim",
        "Projetos",
        "Skills",
        "Contato"
    ]
    var elements:React.ReactNode[] = []
    names.forEach((name, idx) => {
        if (name != props.title) {
            elements.push(<b><Link href={links[idx]} passHref><a>{name}</a></Link></b>)
        } else {
            elements.push(<b>{name}</b>)
        }
    })
    
    return (
        <div className={styles.header}>
            {elements}
        </div>
    )
}