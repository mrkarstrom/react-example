import styles from './Button.module.css';
function Button3(props) {
  /*const handleClick = () => {
    console.log('Ouch');
  };*/
  const handleClick2 = (name) => {
    console.log(`${name} - Stop clicking me!`);
  };

  return (
    <>
      {/* <button onClick={handleClick} className={styles.button}>
        Click Me 😇
      </button> */}
      <button onClick={() => handleClick2('Magnus')} className={styles.button}>
        Click Me too 😇
      </button>
    </>
  );
}

export default Button3;
