import { shallow } from 'enzyme'
import { CompanyLink } from './CompanyLink'

describe('<CompanyLink />', () => {
  const setSelectedCompanyIdMock = jest.fn()

  const render = (props) => shallow(
    <CompanyLink
      setSelectedCompanyId={setSelectedCompanyIdMock}
      company={{
        id: 1,
        name: "Dummy company",
      }}
      {...props }
    />
  )

  it('renders selected', () => {
    expect(render({ isCompanySelected: true })).toMatchSnapshot()
  })

  it('renders not selected', () => {
    expect(render({ isCompanySelected: false })).toMatchSnapshot()
  })

  it('calls setSelectedCompanyId when clicked', () => {
    const component = render({ isCompanySelected: false })
    component.find('[role="button"]').simulate('click')
    expect(setSelectedCompanyIdMock).toHaveBeenCalled()
  })
})
