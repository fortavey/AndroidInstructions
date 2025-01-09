import { useState } from 'react';
import CreateApp from './components/CreateApp'
import FirstStartApp from './components/FirstStartApp';
import StartAndroidStudio from './components/StartAndroidStudio';
import StopProcess from './components/StopProcess';
import InstallDependencies from './components/InstallDependencies';
import NavigationTools from './components/NavigationTools';
import Keytool from './components/Keytool';
import CopyFiles from './components/CopyFiles';
import StartApp from './components/StartApp';
import AddIcon from './components/AddIcon';
import SaveScreens from './components/SaveScreens';
import EndConfig from './components/EndConfig';
import Build from './components/Build';

function App() {
  const [appName, setAppName] = useState('')
  const [version, setVersion] = useState(0)
  const [start, setStart] = useState(false)

  const startHandle = () => {
    if(appName){
      setStart(true)
    }
  }

  const upVersion = () => {
    setVersion(version + 1)
  }

  const renderSections = () => {
    if(!start) return <></>
    return (
    <>
      <div>
        <CreateApp appName={appName} upVersion={upVersion}/>
        <div style={styles.border}></div>
      </div>
      {version > 0 && <div>
        <FirstStartApp appName={appName} upVersion={upVersion}/>
        <div style={styles.border}></div>
      </div>}
      {version > 1 && <div>
        <StartAndroidStudio appName={appName} upVersion={upVersion}/>
        <div style={styles.border}></div>
      </div>}
      {version > 2 && <div>
        <StopProcess appName={appName} upVersion={upVersion}/>
        <div style={styles.border}></div>
      </div>}
      {version > 3 && <div>
        <InstallDependencies appName={appName} upVersion={upVersion}/>
        <div style={styles.border}></div>
      </div>}
      {version > 4 && <div>
        <NavigationTools appName={appName} upVersion={upVersion}/>
        <div style={styles.border}></div>
      </div>}
      {version > 5 && <div>
        <Keytool appName={appName} upVersion={upVersion}/>
        <div style={styles.border}></div>
      </div>}
      {version > 6 && <div>
        <CopyFiles appName={appName} upVersion={upVersion}/>
        <div style={styles.border}></div>
      </div>}
      {version > 7 && <div>
        <StartApp appName={appName} upVersion={upVersion}/>
        <div style={styles.border}></div>
      </div>}
      {version > 8 && <div>
        <StopProcess appName={appName} upVersion={upVersion}/>
        <div style={styles.border}></div>
      </div>}
      {version > 9 && <div>
        <AddIcon appName={appName} upVersion={upVersion}/>
        <div style={styles.border}></div>
      </div>}
      {version > 10 && <div>
        <StartApp appName={appName} upVersion={upVersion}/>
        <div style={styles.border}></div>
      </div>}
      {version > 11 && <div>
        <SaveScreens appName={appName} upVersion={upVersion}/>
        <div style={styles.border}></div>
      </div>}
      {version > 12 && <div>
        <EndConfig appName={appName} upVersion={upVersion}/>
        <div style={styles.border}></div>
      </div>}
      {version > 13 && <div>
        <Build appName={appName} upVersion={upVersion}/>
        <div style={styles.border}></div>
      </div>}
    </>)
  }

  return (
    <>
      <div style={styles.cont}>
        <div>Название приложения - {appName}</div>
        <input value={appName} onChange={e => setAppName(e.target.value)} style={styles.input} />
        <button style={styles.button} onClick={startHandle}>Начать</button>
      </div>
      <div style={styles.border}></div>
      {
        renderSections()
      }
    </>
  );
}

const styles = {
  cont: {
    padding:20,
  },
  input: {
    marginTop: 10,
    width: 400,
    height: 30,
    padding: 0,
    paddingLeft: 20,
  },
  button: {
    height:30,
    marginLeft:10
  },
  border: {
    height: 5,
    width: '100%',
    backgroundColor: 'grey',
    marginTop:10,
    marginBottom:10
  }
}

export default App;
