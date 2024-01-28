import styles from './Button.module.css';
function Button3() {
  const handleClick = (e) => (e.target.textContent = 'Ouch!');

  return (
    <>
      <button onDoubleClick={(e) => handleClick(e)} className={styles.button}>
        Click Me too 😇
      </button>
    </>
  );
}

export default Button3;
