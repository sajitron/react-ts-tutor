import {Child} from './Child';

const Parent = () => {
  return <Child color="yellow" onClick={() => console.log('clicked')} />
}

export default Parent;
