import globalStyles from '../globalStyles'

function CreateApp({ appName, upVersion}) {

    const removeSpaceFromAppName = () => {
        return appName.split(' ').join('')
    }

  return (
      <div style={styles.cont}>
        <div style={styles.h3}>Создание приложения</div>
        <div style={styles.desc}>Открываем терминал. Удостоверится что выбрана корневая папка <span style={styles.codeSpan}>cd ~</span>
        <br />Вводим команду создания нового приложения:</div>
        <div style={styles.code}>npx @react-native-community/cli init {removeSpaceFromAppName()} --version 0.75.4</div>
        <div style={styles.desc}>Дожидаемся окончания процесса</div>
        <button style={styles.button} onClick={upVersion}>Готово</button>
      </div>
  );
}

const styles = {
    ...globalStyles,
}

export default CreateApp;
