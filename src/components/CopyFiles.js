import globalStyles from '../globalStyles'

function CopyFiles({ appName, upVersion}) {

    const removeSpaceFromAppName = () => {
        return appName.split(' ').join('')
    }

  return (
      <div style={styles.cont}>
        <div style={styles.h3}>Копируем файлы в проект</div>
        <div style={styles.desc}>
            Файлы - <strong>App.jsx, babel.config.js, react-native.config</strong> <br />
            Папки - <strong>src, assets</strong> <br />
            Копируем с заменой в корневую папку приложения
        </div>
        <div style={styles.desc}>Удаляем файл <strong>App.tsx</strong></div>
        <button style={styles.button} onClick={upVersion}>Готово</button>
      </div>
  );
}

const styles = {
    ...globalStyles,
}

export default CopyFiles;
