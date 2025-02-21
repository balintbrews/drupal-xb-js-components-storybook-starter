const Breadcrumb = ({ links }) => {
  return (
    links && (
      <nav role="navigation" aria-labelledby="system-breadcrumb">
        <h2 id="system-breadcrumb" className="visually-hidden">
          Breadcrumb
        </h2>
        <ol>
          {links.map(({ key, text, url }) => (
            <li key={key}>{url ? <a href={url}>{text}</a> : { text }}</li>
          ))}
        </ol>
      </nav>
    )
  );
};

Breadcrumb.displayName = "Breadcrumb";
export default Breadcrumb;
