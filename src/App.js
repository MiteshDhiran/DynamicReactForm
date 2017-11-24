import React,{Component} from "react"
import { Provider} from "react-redux"
import store from "./store"
import showResults from "./showResults"
import SimpleForm from "./SimpleForm"

class App extends Component {
  render() {
    return (
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Simple Form</h2>
      <SimpleForm onSubmit={showResults} />
    </div>
  </Provider>
    )
  }
}

export default App;
