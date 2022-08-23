import styles from '../styles/Porta.module.css'
import PortaModel from '../model/PortaModel'
import Presente from './Presente'
interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
    const porta = props.value
    const select = porta.selecionada ? styles.selecionada : ''
    const animationOpen = porta.aberta ? styles.rodar : ''
    const ShadowSelectec = porta.selecionada && !porta.aberta ? styles.shadow : ''
    const alternarSelecao = e => props.onChange(porta.alternarSelecao())
    const abrir = e => {
        e.stopPropagation();
        props.onChange(porta.abrir())
    }

   

    return (
        <>
            <div className={styles.BaseEporta} onClick={alternarSelecao}>
                <div className={`${styles.batente} ${ShadowSelectec} `}>
                    {porta.temPresente?<div className={styles.presente}><Presente /></div>:''}
                    <div className={`${styles.borda} ${select} ${animationOpen}`}>
                        <div className={styles.porta}>
                            <div className={styles.numero}>{porta.numero}</div>
                            <div className={styles.containerPorta}>
                                <div className={styles.meioPorta}>
                                    <div className={styles.macaneta} onClick={abrir}>
                                        <div className={styles.macaneta1}></div>
                                        <div className={styles.macaneta2}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.base}></div>
            </div>

        </>
    )
}
