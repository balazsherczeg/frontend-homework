import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReduxState } from './types'
import { isCompanySelected } from './selectors'
import { setSelectedCompanyId } from './actions'
import { Company } from './types'

import DropdownCloser from './DropdownCloser';

type Props = {
  company: Company,
}

type ReduxProps = {
  isCompanySelected: boolean,
}

type DispatchProps = {
  setSelectedCompanyId: () => void,
}

const CompanyLink = ({
  company: { name, id },
  isCompanySelected,
  setSelectedCompanyId
}: Props & ReduxProps & DispatchProps) => (
  <DropdownCloser>
    <div
      className={`CompanyLink ${isCompanySelected ? "CompanyLink--selected" : ""}`}
      onClick={() => setSelectedCompanyId(id)}
    >
      <span className="strong">{name}</span>
      {isCompanySelected && <i className="material-icons">done</i>}
    </div>
  </DropdownCloser>
)

export default connect(
  createStructuredSelector<ReduxState, ReduxProps>({
    isCompanySelected,
  }),
  { setSelectedCompanyId }
)(CompanyLink)
