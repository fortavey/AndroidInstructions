import globalStyles from '../globalStyles'
import end from '../end.png'

function Build({ appName, upVersion}) {

    const removeSpaceFromAppName = () => {
        return appName.split(' ').join('')
    }

  return (
      <div style={styles.cont}>
        <div style={styles.h3}>Собираем билд</div>
        <div style={styles.desc}>Запускаем команду в терминале:</div>
        <div style={styles.code}>
            npx react-native build-android --mode=release
        </div>
        <button style={styles.button} onClick={upVersion}>Готово</button>
      </div>
  );
}

const styles = {
    ...globalStyles,
}

export default Build;
