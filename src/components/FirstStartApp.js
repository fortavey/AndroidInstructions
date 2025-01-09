import { useState } from 'react';
import globalStyles from '../globalStyles'

function FirstStartApp({ appName, upVersion}) {
    const [error, setError] = useState(false)

    const removeSpaceFromAppName = () => {
        return appName.split(' ').join('')
    }

  return (
      <div style={styles.cont}>
        <div style={styles.h3}>Первый запуск приложения</div>
        <div style={styles.desc}>Работа в терминале. Переходим в папку только что созданного приложения <span style={styles.codeSpan}>cd {removeSpaceFromAppName()}</span>
        <br />Вводим команду запуска приложения:</div>
        <div style={styles.code}>npx react-native start</div>
        <div style={styles.desc}>Дожидаемся окончания процесса</div>
        {!error &&<button style={styles.button} onClick={upVersion}>Все норм</button>}
        <button style={styles.button} onClick={() => setError(true)}>Ошибка</button>
        {error && <>
            <div style={{...styles.h3, marginTop: 10}}>Если терминал выдал ошибку</div>
            <div style={styles.desc}>Вводим команду для открытия папки проекта <span style={styles.codeSpan}>open .</span>
            <br />В открывшемся окне удаляем папку "node_modules"</div>
            <div style={styles.desc}>Переустанавливаем зависимости проекта <span style={styles.codeSpan}>npm i</span></div>
            <div style={styles.desc}>Еще раз вводим команду запуска приложения:</div>
            <div style={styles.code}>npx react-native start</div>
            <button style={styles.button} onClick={upVersion}>Готово</button>
        </>}
      </div>
  );
}

const styles = {
    ...globalStyles,
}

export default FirstStartApp;
