import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards(props) {
   const { characters, onClose } = props;

   return (<div className={styles.ContainerCards}>
      {
         characters.map((char) => (
         <Card 
         id={char.id}
         key={char.name}
         name={char.name}
         species={char.species}
         gender={char.gender}
         image={char.image}
         onClose={()=> onClose(char.id)}
         />)
     ) }
   
   </div>
)}
