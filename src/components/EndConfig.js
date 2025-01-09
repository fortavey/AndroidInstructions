import globalStyles from '../globalStyles'
import end from '../end.png'

function EndConfig({ appName, upVersion}) {

    const removeSpaceFromAppName = () => {
        return appName.split(' ').join('')
    }

  return (
      <div style={styles.cont}>
        <div style={styles.h3}>Завершение настройки</div>
        <div style={styles.desc}>Редактируем файл android/gradle.properties</div>
        <div style={styles.desc}>Добавляем эти строки во 2-ю строчку файла</div>
        <div style={styles.code}>
            MYAPP_UPLOAD_STORE_FILE={removeSpaceFromAppName().toLowerCase()}.keystore <br />
            MYAPP_UPLOAD_KEY_ALIAS={removeSpaceFromAppName().toLowerCase()}<br />
            MYAPP_UPLOAD_STORE_PASSWORD=12345678<br />
            MYAPP_UPLOAD_KEY_PASSWORD=12345678<br />
        </div>
        <div style={styles.desc}>Редактируем файл android/app/build.gradle</div>
        <div style={styles.desc}>Добавляем эти строки в файл</div>
        <div style={styles.code}><pre>{`
release {
    if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
        storeFile file(MYAPP_UPLOAD_STORE_FILE)
        storePassword MYAPP_UPLOAD_STORE_PASSWORD
        keyAlias MYAPP_UPLOAD_KEY_ALIAS
        keyPassword MYAPP_UPLOAD_KEY_PASSWORD
    }
}
            `}</pre>
        </div>
        <div style={styles.desc}>Строку</div>
        <div style={styles.code}>
            signingConfig signingConfigs.debug
        </div><div style={styles.desc}>Меняем на</div>
        <div style={styles.code}>
            signingConfig signingConfigs.release
        </div>
        <img src={end} alt='end' style={{marginTop:10, display:'block'}}/>
        <button style={styles.button} onClick={upVersion}>Готово</button>
      </div>
  );
}

const styles = {
    ...globalStyles,
}

export default EndConfig;
