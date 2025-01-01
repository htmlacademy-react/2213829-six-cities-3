import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map';
import {Icon, Marker, layerGroup} from 'leaflet';
import {City} from '../../types/City';
import {Point} from '../../types/Point';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City | null;
  points: Point[] | null;
  selectedPoint?: Point | null;
  isNearbyOffersMap: boolean;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({...props}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, props.city);

  useEffect(() => {
    if (map && props.points) {
      const markerLayer = layerGroup().addTo(map);
      props.points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        {
          marker.setIcon(
            (props.selectedPoint && point.id === props.selectedPoint.id)
              ? currentCustomIcon
              : defaultCustomIcon
          ).addTo(markerLayer);
        }
      });

      map.flyTo({lat: props.city?.location.latitude ?? 0, lng: props.city?.location.longitude ?? 0}, undefined, {duration: 0.01});

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, props.city?.location.latitude, props.city?.location.longitude, props.points, props.selectedPoint]);

  return <section className={props.isNearbyOffersMap ? 'offer__map map' : 'cities__map map'} ref={mapRef}></section>;
}

export default Map;
