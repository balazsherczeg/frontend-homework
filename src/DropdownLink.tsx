import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReduxState, Company } from './types'
import { getIsDropdownMenuVisible, getSelectedCompany } from './selectors'
import { toggleDropdownMenuVisibility } from './actions'

import OutsideClicker from './OutsideClicker'
import DropdownMenu from './DropdownMenu'

type ReduxProps = {
  isDropdownMenuVisible: boolean,
  selectedCompany: Company,
}

type DispatchProps = {
  toggleDropdownMenuVisibility: () => void,
}

export const DropdownLink = ({
  isDropdownMenuVisible,
  toggleDropdownMenuVisibility,
  selectedCompany,
}: ReduxProps & DispatchProps) => (
  <div className="DropdownLink">
    <div className="nav__link" onClick={toggleDropdownMenuVisibility} data-test-nav-link>
      <div className="nav__link-text-wrapper">
        <div className="nav__link-text">
          Elon Musk
        </div>

        <div className="nav__link-subtext">
          {selectedCompany.name}
        </div>
      </div>

      <i className="material-icons-outlined nav__link-icon">
        settings
      </i>
    </div>

    {isDropdownMenuVisible && (
      <>
        <OutsideClicker />
        <DropdownMenu />
      </>
    )}
  </div>
)


export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    isDropdownMenuVisible: getIsDropdownMenuVisible,
    selectedCompany: getSelectedCompany,
  }),
  { toggleDropdownMenuVisibility }
)(DropdownLink)
