import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import React, {FC} from "react";
import {MapContainer, Marker, TileLayer, useMapEvents} from "react-leaflet";

const icon = L.icon({iconUrl: "/images/leaflet/marker-icon.png"});

type PingProps = {
    center: [number, number];
    onCenter: (center: [number, number]) => void;
}
const Ping: FC<PingProps> = ({center, onCenter}) => {
    const map = useMapEvents({
        move: () => {
            onCenter([map.getCenter().lat, map.getCenter().lng]);
        },
    })

    return <Marker position={center} icon={icon}/>
}

export type MapWithPingProps = {
    center: [number, number];
    onCenter: (center: [number, number]) => void;
    className?: string;
}
const MapWithPing: React.FC<MapWithPingProps> = ({center, onCenter}) => {
    return <MapContainer
        className="h-[32rem]"
        center={center}
        zoom={17}
        scrollWheelZoom={false}
    >
        <TileLayer
            detectRetina
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Ping center={center} onCenter={onCenter}/>
    </MapContainer>
};
export default MapWithPing
