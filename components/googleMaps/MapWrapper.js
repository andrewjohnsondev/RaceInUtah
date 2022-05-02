import { Wrapper, Status } from '@googlemaps/react-wrapper';
import Map from './Map';
import Loader from './Loader';
import ErrorMsg from './ErrorMsg';

const API_KEY = 'AIzaSyAMAl7qNNq6apEUPdMX4Ljrw-0GFwl3WzQ';

const MapWrapper = ({ location, className }) => {
  const zoom = 8;

  const render = (status) => {
    console.log(status);
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

  return <Wrapper className={className} render={render} apiKey={''} />;
};

export default MapWrapper;
