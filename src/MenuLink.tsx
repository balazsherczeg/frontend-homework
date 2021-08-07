import DropdownCloser from './DropdownCloser';

type Props = {
  text: string,
  icon: string,
  className?: string,
} & ({ onClick: () => void } | { href: string })

const MenuLink = (props: Props) => {
  const { icon, text, className } = props;

  const handleClick = () => {
    if ("href" in props) {
      window.location.assign(props.href)
    } else {
      props.onClick()
    }
  }

  return (
    <div className={`MenuLink ${className}`}>
      <DropdownCloser>
        <div
          className="MenuLink__inner align-items-vertically-center"
          role="button"
          onClick={handleClick}
        >
          <i className="MenuLink__icon material-icons">
            {icon}
          </i>

          {text}
        </div>
      </DropdownCloser>
    </div>
  )
}

export default MenuLink
