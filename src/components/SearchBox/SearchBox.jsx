import styles from './SearchBox.module.css'

const SearchBox = ({value, onFilter}) => { 

    return (
        <div>
            <p className={styles.label}>Find contacts by name</p>
            <input className={styles.searchbox} type="text" value={value} onChange={(event) => onFilter(event.target.value)} />      
        </div>
    )
}
 
export default SearchBox