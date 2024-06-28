import React from "react";
import GoogleMapReact from "google-map-react";
type Props = {};

export default function DoctorsMap({}: Props) {
  const [center, setCenter] = React.useState<{
    lat: number;
    lng: number;
  }>({ lat: 59.95, lng: 30.33 });

  const [zoom, setZoom] = React.useState<number>(11);


  const AnyReactComponent = ({
    text,
    lat,
    lng,
  }: {
    text: string;
    lat: number;
    lng: number;
  }) => <div>{text}</div>;

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <AnyReactComponent lat={center.lat} lng={center.lng} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
