import { shallow } from 'enzyme'
import OutsideClicker from './OutsideClicker'

describe('<OutsideClicker />', () => {
  it('renders', () => {
    expect(shallow(<OutsideClicker />)).toMatchSnapshot()
  })
})
