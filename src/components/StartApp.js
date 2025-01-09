import globalStyles from '../globalStyles'

function StartApp({ appName, upVersion}) {

    const removeSpaceFromAppName = () => {
        return appName.split(' ').join('')
    }

  return (
      <div style={styles.cont}>
        <div style={styles.h3}>Запускаем приложение</div>
        <div style={styles.desc}>После этого запускаем проект в терминале:</div>
        <div style={styles.code}>npx react-native start</div>
        <div style={styles.desc}>И запускаем в Android Studio</div>
        <button style={styles.button} onClick={upVersion}>Готово</button>
      </div>
  );
}

const styles = {
    ...globalStyles,
}

export default StartApp;
