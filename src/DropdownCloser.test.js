import { shallow } from 'enzyme'
import { DropdownCloser } from './DropdownCloser'

describe('<DropdownCloser />', () => {
  const hideDropdownMenuMock = jest.fn()

  const render = () => shallow(
    <DropdownCloser
      hideDropdownMenu={hideDropdownMenuMock}
    >
      it is a child
    </DropdownCloser>
  )

  it('renders with a child inside', () => {
    expect(render()).toMatchSnapshot()
  })

  it('calls hideDropdownMenu when clicked', () => {
    const component = render()
    component.simulate('click')
    expect(hideDropdownMenuMock).toHaveBeenCalled()
  })
})
