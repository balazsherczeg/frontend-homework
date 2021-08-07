import MenuLink from './MenuLink'
import Companies from './Companies'

const DropdownMenu = () => (
  <div className="DropdownMenu">
    <Companies />

    <div className="DropdownMenu__section">
      <MenuLink
        text="Get the mobile app"
        icon="phone_iphone"
        href="#getApp"
      />

      <MenuLink
        text="Community"
        icon="people"
        href="#community"
      />

      <MenuLink
        text="Knowledge base"
        icon="book"
        href="#knowledgeBase"
      />
    </div>

    <div className="DropdownMenu__section">
      <MenuLink
        text="Settings"
        icon="settings"
        onClick={() => console.log("Changing settings")}
      />

      <MenuLink
        text="Log out"
        icon="exit_to_app"
        onClick={() => console.log("Logging out")}
        className="red-text"
      />
    </div>
  </div>
)

export default DropdownMenu
