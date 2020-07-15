import "leaflet/dist/leaflet.css";

import L from "leaflet/dist/leaflet";


export function initMainMap() {

    const coords = [60, 60];
    const map = L.map('map', { scrollWheelZoom: false }).setView(coords,4);

    L.tileLayer('https://tilessputnik.ru/{z}/{x}/{y}.png?from_api=v0.3', {
        attributionControl: false,
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}