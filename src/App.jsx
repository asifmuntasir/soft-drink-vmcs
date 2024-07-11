import { Button } from 'antd';
import VMCS from './components/VMCS';
import MaintanerPanel from './components/MaintanerPanel';
import MachineryControllPanel from './components/MachineryControllPanel';
import SimulatorPanel from './components/SimulatorPanel';

function App() {


  return (
    <>
      <div className="App">
        {/* <Button type="primary">Button</Button> */}
        {/* <VMCS></VMCS> */}
        {/* <MaintanerPanel></MaintanerPanel> */}
        {/* <MachineryControllPanel></MachineryControllPanel> */}
        <SimulatorPanel></SimulatorPanel>
      </div>
    </>
  )
}

export default App
