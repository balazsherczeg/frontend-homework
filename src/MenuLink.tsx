import { connect } from 'react-redux'

import { hideDropdownMenu } from './actions'

import DropdownCloser from './DropdownCloser';

type Props = {
  text: string,
  icon: string,
  onClick: () => void,
  href: string,
}

const MenuLink = ({ icon, text, onClick, href }: Props) => {
  const handleClick = () => {
    if (href) {
      console.log("Going somewhere")
      window.location.href = href
    } else {
      console.log("Doing something")
      onClick()
    }
  }

  return (
    <DropdownCloser>
      <div
        className="MenuLink align-items-vertically-center"
        role="button"
        onClick={handleClick}
      >
        <i className="MenuLink__icon material-icons">
          {icon}
        </i>

        {text}
      </div>
    </DropdownCloser>
  )
}

export default MenuLink
