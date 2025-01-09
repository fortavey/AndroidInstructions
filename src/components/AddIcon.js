import globalStyles from '../globalStyles'

function AddIcon({ appName, upVersion}) {

    const removeSpaceFromAppName = () => {
        return appName.split(' ').join('')
    }

  return (
      <div style={styles.cont}>
        <div style={styles.h3}>Добавляем иконку в приложение</div>
        <div style={styles.desc}>
            В Android Studio нажать правой кнопкой на папку app/res в левом столбце <br />
            В контекстном меню выбрать New - Image Assets <br />
            После чего выбрать картинку и подогнать размеры
        </div>
        <button style={styles.button} onClick={upVersion}>Готово</button>
      </div>
  );
}

const styles = {
    ...globalStyles,
}

export default AddIcon;
