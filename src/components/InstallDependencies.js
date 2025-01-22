import globalStyles from '../globalStyles'

function InstallDependencies({ appName, upVersion}) {

    const removeSpaceFromAppName = () => {
        return appName.split(' ').join('')
    }

  return (
      <div style={styles.cont}>
        <div style={styles.h3}>Устанавливаем зависимости</div>
        <div style={styles.desc}>Работа в терминале. Удостоверится что выбрана папка <span style={styles.codeSpan}>{removeSpaceFromAppName()}</span>
        <br />Вводим команду для установки зависимостей приложения:</div>
        <div style={styles.code}>
        npm i @fortawesome/fontawesome-svg-core @fortawesome/react-native-fontawesome @react-native-async-storage/async-storage @react-navigation/bottom-tabs @react-navigation/drawer @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-qrcode-svg react-native-reanimated react-native-safe-area-context react-native-screens react-native-svg react-native-vector-icons mobx mobx-react-lite @fortawesome/free-solid-svg-icons @react-navigation/native-stack
        </div>
        <div style={styles.desc}>Дожидаемся окончания процесса</div>
        <button style={styles.button} onClick={upVersion}>Готово</button>
      </div>
  );
}

const styles = {
    ...globalStyles,
}

export default InstallDependencies;
