import globalStyles from '../globalStyles'

function Keytool({ appName, upVersion}) {

    const removeSpaceFromAppName = () => {
        return appName.split(' ').join('')
    }

  return (
      <div style={styles.cont}>
        <div style={styles.h3}>Создание Keytool для GooglePlay</div>
        <div style={styles.desc}>Работа в терминале. Удостоверится что выбрана папка <span style={styles.codeSpan}>{removeSpaceFromAppName()}</span>
        <br />Вводим команду для генерации нового ключа:</div>
        <div style={styles.code}>
            sudo keytool -genkey -v -keystore {removeSpaceFromAppName().toLowerCase()}.keystore -alias {removeSpaceFromAppName().toLowerCase()} -keyalg RSA -keysize 2048 -validity 10000
        </div>
        <div style={styles.desc}>Вводим пароли и всю необходимую информацию</div>
        <div style={styles.desc}>После завершения в папке {removeSpaceFromAppName()} должен появится файл {removeSpaceFromAppName().toLowerCase()}.keystore</div>
        <div style={styles.desc}>Этот файл нужно переместить в папку android/app</div>
        <button style={styles.button} onClick={upVersion}>Готово</button>
      </div>
  );
}

const styles = {
    ...globalStyles,
}

export default Keytool;
