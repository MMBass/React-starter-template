
interface Props{
  lightColor:string,
  darkColor:string
}

function LoaderLine<Props>(props) {
  let loaderLine;
  if(loaderLine){
    return (
      <div className="loaderLine">
        <div className="innerLoaderLine"></div>
      </div>
    );
  }
  return null;
}

export default LoaderLine;
