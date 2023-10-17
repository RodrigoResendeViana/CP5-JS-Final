import {} from 'react'
import styles from '../Css/Sobre.module.css'
import caique from '../assets/imagens/caique.png'
import giuliano from '../assets/imagens/giuliano.png'
import pedro from '../assets/imagens/pedro.png'
import rafael from '../assets/imagens/rafa.png'
import rodrigo from '../assets/imagens/rodrigo.png'

function Sobre(){

    return(
        <>
        
        <div className={styles.container}>
            <div className={styles.integrantes}>
                <img className={styles.foto} src={caique} alt="" />
                <p>CAIQUE CHAGAS</p>
            </div>
            <div className={styles.integrantes}>
                <img className={styles.foto} src={giuliano} alt="" />
                <p>GIULIANO ROMANETO</p>
            </div>
            <div className={styles.integrantes}>
                <img className={styles.foto} src={pedro} alt="" />
                <p>PEDRO CRISPIM</p>
            </div>
            <div className={styles.integrantes}>
                <img className={styles.foto} src={rafael} alt="" />
                <p>RAFAEL AUTIERI</p>
            </div>
            <div className={styles.integrantes}>
                <img className={styles.foto} src={rodrigo} alt="" />
                <p>RODRIGO VIANA</p>
            </div>
        </div>
       
            
        </>
    )
}

export default Sobre