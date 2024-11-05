import './App.css';
import Applying from './components/Applying Classes Conditionally in JSX Expressions/Applying';
import Button from './components/Basic Class Merging/Basic';
import DynamicPaddingBox from './components/Combining Dynamic and Static Classes/Combining';
import Conditional from './components/Conditional CSS Modules/Conditional';
import Alert from './components/Conditional Styling Based on Props/Conditional';
import CustomComponent from './components/Custom Component Class Merging/Custom';
import Dynamic from './components/Dynamic Component Variant/Dynamic';
import ResponsiveBox from './components/Managing Responsive Classes/Managing';
import Merging from './components/Merging Multiple Dynamic Classes/Merging';
import Card from './components/Overriding Default Classes/Overriding';

function App() {
  return (
    <>
      <div>
        <Button isLarge={false} />
        <Button isLarge={true} />
      </div>
      <div>
        <Alert type='error' />
        <Alert type='success' />
      </div>
      <div>
        <Card highlight={true} />
      </div>
      <div>
        {/* <DynamicPaddingBox paddingSize='50px'/> */}
        <DynamicPaddingBox paddingSize='3' />
        <DynamicPaddingBox paddingSize='8' />
        <DynamicPaddingBox paddingSize='16' />
      </div>
      <div className='flex gap-3 justify-center'>
        <Applying isNew={true} isHighlighted={true}/>
        <Applying isNew={false} isHighlighted={false}/>
      </div>
      <div>
        <Merging isPrimary={true} isDisabled={false}/>
      </div>
      <div>
        <Conditional/>
      </div>
      <div>
        <Dynamic variant='danger'/>
      </div>
      <div>
        <ResponsiveBox isLarge={false}/>
      </div>
      <div className="space-y-4">
      <CustomComponent isActive={true} />
      <CustomComponent isActive={false} />
    </div>

    </>
  );
}

export default App;
