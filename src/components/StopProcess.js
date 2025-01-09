import globalStyles from '../globalStyles'

function StopProcess({ appName, upVersion}) {

    const removeSpaceFromAppName = () => {
        return appName.split(' ').join('')
    }

  return (
      <div style={styles.cont}>
        <div style={styles.h3}>Останавливаем процессы</div>
        <div>В терминале останавливаем процесс <span style={styles.codeSpan}>Ctrl+C</span></div>
        <div>В Andriod Studio останавливаем процесс, нажимаем ⬛​​</div>
        <button style={styles.button} onClick={upVersion}>Готово</button>
      </div>
  );
}

const styles = {
    ...globalStyles,
}

export default StopProcess;
