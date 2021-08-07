import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReduxState } from './types'
import { getIsCompanySelected } from './selectors'
import { setSelectedCompanyId } from './actions'
import { Company } from './types'

import DropdownCloser from './DropdownCloser';

type OwnProps = {
  company: Company,
}

type ReduxProps = {
  isCompanySelected: boolean,
}

type DispatchProps = {
  setSelectedCompanyId: (id: number) => void,
}

export const CompanyLink = ({
  company: { name, id },
  isCompanySelected,
  setSelectedCompanyId
}: OwnProps & ReduxProps & DispatchProps) => (
  <DropdownCloser>
    <div
      className={`CompanyLink ${isCompanySelected ? "CompanyLink--selected" : ""}`}
      role="button"
      onClick={() => setSelectedCompanyId(id)}
    >
      <span className="strong">{name}</span>
      {isCompanySelected && <i className="material-icons">done</i>}
    </div>
  </DropdownCloser>
)

export default connect(
  createStructuredSelector<ReduxState, OwnProps, ReduxProps>({
    isCompanySelected: getIsCompanySelected,
  }),
  { setSelectedCompanyId }
)(CompanyLink)
