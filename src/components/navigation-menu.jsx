const NavigationMenu = ({ id, label, links }) => {
  const headingID = id + "--heading";
  return (
    <nav role="navigation" aria-labelledby={headingID}>
      <h2 id={headingID} className="visually-hidden">
        {label}
      </h2>
      <Menu links={links} />
    </nav>
  );
};

const Menu = ({ links }) => {
  return (
    <ul>
      {links.map(
        ({
          key,
          title,
          url,
          isExpanded, // eslint-disable-line no-unused-vars
          isCollapsed, // eslint-disable-line no-unused-vars
          inActiveTrail, // eslint-disable-line no-unused-vars
          submenu,
        }) => (
          <li key={key}>
            <a href={url}>{title}</a>
            {submenu && <Menu links={submenu.links} />}
          </li>
        ),
      )}
    </ul>
  );
};

export default NavigationMenu;
