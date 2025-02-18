const Branding = ({ homeUrl, logo, siteName, siteSlogan }) => {
  return (
    <div>
      {logo && (
        <a href={homeUrl} rel="home">
          <img src={logo} alt="Home" fetchPriority="high" />
        </a>
      )}
      {siteName && (
        <a href={homeUrl} rel="home">
          {siteName}
        </a>
      )}
      {siteSlogan}
    </div>
  );
};

export default Branding;
