import { connect } from 'react-redux'

import { hideDropdownMenu } from './actions'

type OwnProps = {
  children: React.ReactNode,
}

type DispatchProps = {
  hideDropdownMenu: () => void,
}

const DropdownCloser = ({ children, hideDropdownMenu }: OwnProps & DispatchProps) => (
  <div onClick={ hideDropdownMenu }>
    {children}
  </div>
)

export default connect(
  null,
  { hideDropdownMenu }
)(DropdownCloser)
