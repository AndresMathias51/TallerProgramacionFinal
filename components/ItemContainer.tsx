import styles from "@/components/ItemContainer.module.css"
import Item from "@/components/Item";

const ItemContainer = () => {
  return (
    <div className={styles.itemContainer}>
        <Item imagen="/puxadaFrontalImagen.png" nombre="Puxada Frontal"/>
        <Item imagen="/remadaCurvadaImagen.png" nombre="Remada Curvada"/>
        <Item imagen="/remadaUnilateralImagen.png" nombre="Remada Unilateral"/>
        <Item imagen="/levantamentoTerraImagen.png" nombre="Levantamento Terra"/>
    </div>
  )
}

export default ItemContainer