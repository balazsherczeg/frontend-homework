import { shallow } from 'enzyme'
import MenuLink from './MenuLink'

const render = (props) => shallow(
  <MenuLink
    icon="phone"
    text="Call me"
    {...props}
  />
)

const handleClickMock = jest.fn()

describe('<MenuLink />', () => {

  it('renders link', () => {
    expect(render({ onClick: handleClickMock })).toMatchSnapshot()
  })
})

describe('<MenuLink /> behaves as a button', () => {
  it('calls handleClickMock on click if onClick prop is provided', () => {
    const component = render({  onClick: handleClickMock })
    component.find('[role="button"]').simulate('click')
    expect(handleClickMock).toHaveBeenCalled()
  })
})

describe('<MenuLink /> behaves as link', () => {
  const { location } = window;

  beforeAll(() => {
    delete window.location;
    window.location = { assign: jest.fn() };
  });

  afterAll(() => {
    window.location = location;
  });

  it('and changes location on click if href prop is provided', () => {
    const component = render({  href: '#aSimpleUrl' })
    component.find('[role="button"]').simulate('click')
    expect(window.location.assign).toHaveBeenCalled()
  })
})
