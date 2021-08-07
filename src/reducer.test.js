import * as actions from './actions'
import { isDropdownMenuVisible, selectedCompanyId } from './reducer'

const doesNotUpdateState = (reducer, initialState) => {
  it('does not update state on a random action', () => {
    expect(reducer(initialState, { type: 'random' })).toEqual(initialState)
  })
}

describe('isDropdownMenuVisible()', () => {
  it('toggles state on actions.toggleDropdownMenuVisibility', () => {
    expect(isDropdownMenuVisible(false, actions.toggleDropdownMenuVisibility())).toBe(true)
  })

  it('toggles state the other way round on actions.toggleDropdownMenuVisibility', () => {
    expect(isDropdownMenuVisible(true, actions.toggleDropdownMenuVisibility())).toBe(false)
  })

  it('hides menu on actions.hideDropdownMenu', () => {
    expect(isDropdownMenuVisible(true, actions.hideDropdownMenu())).toBe(false)
  })

  it('doesn’t do anything on actions.hideDropdownMenu if the menu was hidden before', () => {
    expect(isDropdownMenuVisible(false, actions.hideDropdownMenu())).toBe(false)
  })

  doesNotUpdateState(isDropdownMenuVisible, false)
})

describe('selectedCompanyId()', () => {
  it('sets given value to state on actions.setSelectedCompanyId', () => {
    expect(selectedCompanyId(null, actions.setSelectedCompanyId(123))).toBe(123)
  })

  doesNotUpdateState(selectedCompanyId, null)
})
