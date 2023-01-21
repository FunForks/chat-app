import { Messages } from './components/Messages'
import { post } from './api/requests'


// This line is not needed yet, but it will be needed later
const backend = process.env.REACT_APP_BACKEND
const endpoint = `${backend}/chat`


const App = () => {
  return (
    <Messages
      endpoint={endpoint}
      post={post}
    />
  );
}


export default App;
