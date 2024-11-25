import { useRef, useEffect } from 'react';
import L, { Map as LeafletMap, Marker, LayerGroup } from 'leaflet';
import cn from 'classnames';
import { CityType, OffersType } from '../types/offers';
import { Screen } from '../constans';
import 'leaflet/dist/leaflet.css';

const defaultCustomIcon = new L.Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const currentCustomIcon = new L.Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

type MapProps = {
  cityInfo: CityType;
  points: OffersType;
  activeOfferID?: string | null;
  screenClass: Screen;
};

const Map = ({ cityInfo, points, activeOfferID, screenClass }: MapProps): JSX.Element => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<LeafletMap | null>(null);
  const markersLayer = useRef<LayerGroup | null>(null);

  const mapClassName = cn('map', {
    'cities__map': screenClass === Screen.main,
    'property__map': screenClass === Screen.offer,
  });

  useEffect(() => {
    if (!mapInstance.current && mapRef.current) {
      // Инициализация карты
      const { latitude, longitude, zoom } = cityInfo.location;
      mapInstance.current = L.map(mapRef.current, {
        center: [latitude, longitude],
        zoom: zoom,
        layers: [
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }),
        ],
      });

      // Инициализация слоя для маркеров
      markersLayer.current = new LayerGroup().addTo(mapInstance.current);
    }
  }, [cityInfo]);

  useEffect(() => {
    if (mapInstance.current && markersLayer.current) {
      // Очистка старых маркеров
      markersLayer.current.clearLayers();

      // Добавление новых маркеров
      points.forEach((point) => {
        const marker = new Marker([point.location.latitude, point.location.longitude], {
          icon: point.id === activeOfferID ? currentCustomIcon : defaultCustomIcon,
        });

        marker
          .bindPopup(`<b>${point.title}</b><br />${point.price}€/night`)
          .addTo(markersLayer.current!);
      });

      // Центрирование карты на основе города
      const { latitude, longitude, zoom } = cityInfo.location;
      mapInstance.current.setView([latitude, longitude], zoom);
    }
  }, [points, activeOfferID, cityInfo]);

  return <div ref={mapRef} className={mapClassName} style={{ height: '100%', width: '100%' }} />;
};

export default Map;
