import { useLocation } from "react-router-dom";

export const NoMatch = () => {
    const location = useLocation();
  
    return (
      <div>
        <h3>
          Error 404! No match for <code>{ location.pathname }</code>
        </h3>
      </div>
    );
}