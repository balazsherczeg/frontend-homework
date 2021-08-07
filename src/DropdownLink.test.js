import { shallow } from 'enzyme'
import { DropdownLink } from './DropdownLink'

const selectedCompany = { name: 'Viljatootja AS' }

describe('<DropdownLink />', () => {
  const toggleDropdownMenuVisibilityMock = jest.fn()

  const render = (props) => shallow(
    <DropdownLink
      toggleDropdownMenuVisibility={toggleDropdownMenuVisibilityMock}
      {...props}
    />
  )

  it('renders without dropdown menu', () => {
    expect(render({ isDropdownMenuVisible: false, selectedCompany })).toMatchSnapshot()
  })

  it('renders with dropdown menu', () => {
    expect(render({ isDropdownMenuVisible: true, selectedCompany })).toMatchSnapshot()
  })

  it('calls toggleDropdownMenuVisibility when nav link is clicked', () => {
    const component = render({ isDropdownMenuVisible: false, selectedCompany })
    component.find('[data-test-nav-link]').simulate('click')

    expect(toggleDropdownMenuVisibilityMock).toHaveBeenCalled()
  })
})
