import { useEffect, useRef, useState } from 'react';
import Marker from './Marker';

function Map({ location, zoom }) {
  const ref = useRef();
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState(null);

  useEffect(() => {
    if (ref.current && !map && center) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom }));
    }
  }, [ref, map, center]);

  useEffect(() => {
    const geo = new window.google.maps.Geocoder();

    geo.geocode({ address: location }, (res, status) => {
      if (status === window.google.maps.GeocoderStatus.OK) {
        const lat = +res[0].geometry.location.lat();
        const lng = +res[0].geometry.location.lng();
        setCenter({ lat, lng });
      }
    });
  }, [location]);

  return (
    <div ref={ref} id="map">
      <Marker options={{ position: center, map }} />
    </div>
  );
}

export default Map;
