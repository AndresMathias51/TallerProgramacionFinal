import styles from "@/components/Item.module.css"
import Image from "next/image"

type Props= {
    imagen: string;
    nombre: string;
}

const Item = ({ imagen, nombre }: Props) => {
    const iconoFlecha = "/iconoFlecha.svg"
    return (
    <div className={styles.itemContainer}>
        <div className={styles.infoContainer}>
            <Image src={imagen} alt="imagen" width={67} height={67}/>
            <div className={styles.info}>
                <h2 className={styles.nombre}>{nombre}</h2>
                <span className={styles.repeticiones}>3 séries x 12 repetições</span>
            </div>
        </div>
        <button className={styles.botonFlecha}>
            <Image src={iconoFlecha} alt="flecha" width={24} height={24}/>
        </button>
    </div>
  )
}

export default Item