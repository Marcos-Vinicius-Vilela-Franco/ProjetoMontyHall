import { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import styles from '../../../styles/Jogo.module.css'
import Link from "../../../node_modules/next/link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from "../../../node_modules/next/router";
import ErrorIcon from '@mui/icons-material/Error';

export default function Jogo(){
    const router = useRouter();
    const [portas, setPortas] = useState([]);
    const [valido,setValido]=useState(false);

    useEffect(()=>{
        const portas = +router.query.portas;
        const temPresente = +router.query.temPresente;
        setPortas(criarPortas(portas,temPresente));
    },[router?.query])
    useEffect(()=>{
        const portas = +router.query.portas;
        const temPresente = +router.query.temPresente;
       const qtdPortasValida = portas>= 3 && portas<=30;
       const temPresenteValido= temPresente>=1 && temPresente<= portas
        setValido(qtdPortasValida && temPresenteValido)
    },[portas])
    

    function renderizarPortas() {
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta}
                onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }

    return (
        <div className={styles.jogo}>
            <div className={styles.container}>
                <div className={styles.NavBar}>
                    <div className={styles.button}>
                        <Link href="/">
                            <ArrowBackIcon fontSize="large" />
                        </Link>
                    </div>
                    <h1 className={styles.title}>Portas</h1>
                </div>
                <div className={styles.portas}>
                    {valido ? renderizarPortas():
                    <h1 className={styles.notification}><ErrorIcon fontSize="large" /> <span>Valores inválidos </span></h1>
                    }
                </div>
            </div>
        </div>
    )
}
