import styles from '../styles/EntradaNumerica.module.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
interface EntradaNumericaProps{
    text: string
    value : number
    onChange: (newValue:number) => void
}


export default function EntradaNumerica(props: EntradaNumericaProps){
    const dec =() => props.onChange(props.value - 1)
    const inc =() => props.onChange(props.value + 1)
    
    return (
        <div className={styles.entradaNumerica}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.botoes}>

                <div className={styles.btn} onClick={dec}><RemoveIcon fontSize="large"/></div>
                <div className={styles.btn} onClick={inc}><AddIcon fontSize="large"/></div>
            </div>
        </div>
    )
}