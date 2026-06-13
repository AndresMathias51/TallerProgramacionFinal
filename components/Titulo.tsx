import styles from "@/components/Titulo.module.css"
const Titulo = () => {
  return (
    <div className={styles.tituloContainer}>
        <h1 className={styles.titulo}>Exercícios</h1>
        <span className={styles.cantEjercicios}>4</span>
    </div>
  )
}

export default Titulo