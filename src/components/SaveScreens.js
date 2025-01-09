import globalStyles from '../globalStyles'

function SaveScreens({ appName, upVersion}) {

    const removeSpaceFromAppName = () => {
        return appName.split(' ').join('')
    }

  return (
      <div style={styles.cont}>
        <div style={styles.h3}>Сохраняем скриншоты</div>
        <div style={styles.desc}>
            В Android Studio делаем скриншоты и сохраняем их для гарузки в GooglePlay
        </div>
        <button style={styles.button} onClick={upVersion}>Готово</button>
      </div>
  );
}

const styles = {
    ...globalStyles,
}

export default SaveScreens;
