import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReduxState, Company } from './types'
import { getIsDropdownMenuVisible, getSelectedCompany } from './selectors'
import { toggleDropdownMenuVisibility } from './actions'

import OutsideClicker from './OutsideClicker'
import DropdownMenu from './DropdownMenu'
import Animator from './Animator'

type ReduxProps = {
  isDropdownMenuVisible: boolean,
  selectedCompany?: Company,
}

type DispatchProps = {
  toggleDropdownMenuVisibility: () => void,
}

export const DropdownLink = ({
  isDropdownMenuVisible,
  toggleDropdownMenuVisibility,
  selectedCompany,
}: ReduxProps & DispatchProps) => (
  <div className="DropdownLink__wrapper">
    <div className="DropdownLink" onClick={toggleDropdownMenuVisibility} data-test-nav-link>
      <div className="DropdownLink__text-wrapper">
        <div className="DropdownLink__text">
          Elon Musk
        </div>

        {selectedCompany && (
          <div className="DropdownLink__subtext">
            {selectedCompany.name}
          </div>
        )}
      </div>

      <i className="material-icons-outlined DropdownLink__icon">
        settings
      </i>
    </div>

    {isDropdownMenuVisible && <OutsideClicker />}

    <Animator
      className="DropdownAnimator"
      isMounted={isDropdownMenuVisible}
    >
      <DropdownMenu />
    </Animator>
  </div>
)

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    isDropdownMenuVisible: getIsDropdownMenuVisible,
    selectedCompany: getSelectedCompany,
  }),
  { toggleDropdownMenuVisibility }
)(DropdownLink)
