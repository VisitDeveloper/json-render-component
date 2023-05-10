import {renderComponent} from './components/render-component';
import {headerConfig} from './config/components-config/header';

function App() {
  return (
    <div className="App">
      {renderComponent(headerConfig)}
    </div>
  );
}

export default App;
