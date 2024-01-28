import styles from './Button.module.css';
function Button3(props) {
  let count = 0;
  const handleClick2 = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} - You clicked me: ${count} times`);
    } else {
      console.log(`${name} - Stop clicking me!`);
    }
  };

  return (
    <>
      <button onClick={() => handleClick2('Magnus')} className={styles.button}>
        Click Me too 😇
      </button>
    </>
  );
}

export default Button3;
