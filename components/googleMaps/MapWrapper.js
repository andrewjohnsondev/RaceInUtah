import { Wrapper, Status } from '@googlemaps/react-wrapper';
import Map from './Map';
import Loader from './Loader';
import ErrorMsg from './ErrorMsg';

const MapWrapper = ({ location, className }) => {
  const zoom = 8;

  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return <Loader />;
      case Status.FAILURE:
        return <ErrorMsg />;
      case Status.SUCCESS:
        return <Map location={location} zoom={zoom} />;
      default:
        return <ErrorMsg />;
    }
  };

  return (
    <Wrapper
      className={className}
      render={render}
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
    />
  );
};

export default MapWrapper;
