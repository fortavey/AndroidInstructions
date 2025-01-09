import globalStyles from '../globalStyles'

function StartAndroidStudio({ appName, upVersion}) {

    const removeSpaceFromAppName = () => {
        return appName.split(' ').join('')
    }

  return (
      <div style={styles.cont}>
        <div style={styles.h3}>Запуск приложения в Andriod Studio</div>
        <div style={styles.desc}>Запускаем Andriod Studio. В Andriod Studio нажимаем "Open" и выбираем папку {removeSpaceFromAppName()}/android </div>
        <div style={styles.desc}>Дожидаемся окончания процесса загрузки в правом нижнем углу</div>
        <div style={styles.desc}>Запускаем приложение и ждем успешного запуска</div>
        <button style={styles.button} onClick={upVersion}>Готово</button>
      </div>
  );
}

const styles = {
    ...globalStyles,
}

export default StartAndroidStudio;
