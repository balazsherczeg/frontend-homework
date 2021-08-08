import { mount } from 'enzyme'
import Animator from './Animator'

describe('<Animator />', () => {
  const render = (props) => mount( // Any better way to test component with a useEffect hook?
    <Animator className="Test" {...props}><div>a child</div></Animator>
  )

  it('renders its child if mounted', () => {
    expect(render({ isMounted: true })).toMatchSnapshot()
  })

  it('doesn’t render its child if unmounted', () => {
    expect(render({ isMounted: false })).toMatchSnapshot()
  })
})
