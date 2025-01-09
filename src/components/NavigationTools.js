import globalStyles from '../globalStyles'
import navigation from '../navigation.png'

function NavigationTools({ appName, upVersion}) {

    const removeSpaceFromAppName = () => {
        return appName.split(' ').join('')
    }

  return (
      <div style={styles.cont}>
        <div style={styles.h3}>Настройки навигации</div>
        <div style={styles.desc}> Отредактировать файл MainActivity.kt который находится по адресу android/app/src/main/java/com/{removeSpaceFromAppName().toLowerCase()}/
        <br />Добавить строки:</div>
        <div style={styles.code}>import android.os.Bundle;</div>
        <div style={styles.desc}>и</div>
        <div style={styles.code}><pre>{
`override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
}`
        }</pre></div>
        <img style={{marginTop: 10}} src={navigation} alt='desc' />
        <div style={styles.desc}>Сохраняем файл</div>
        <button style={styles.button} onClick={upVersion}>Готово</button>
      </div>
  );
}

const styles = {
    ...globalStyles,
}

export default NavigationTools;
