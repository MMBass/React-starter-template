
// shared layout for all pages
function Layout(props) {
  return (
    <div className="pageLayout">
      {props.children}
    </div>
  );
}

export default Layout;
