import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { MdClose } from "react-icons/md";
import styles from "./SearchBox.module.css";
import { getFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const nameFilter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { value } = evt.target;
    dispatch(changeFilter(value));
  };

  const handleClear = () => {
    dispatch(changeFilter(""));
  };

  return (
    <div className={styles.inputGroup}>
      <input
        type="text"
        className={styles.formInput}
        value={nameFilter}
        onChange={handleChange}
        placeholder="Search contact"
      />
      {!!nameFilter && (
        <MdClose className={styles.clearIcon} onClick={handleClear} />
      )}
    </div>
  );
};

export default SearchBox;