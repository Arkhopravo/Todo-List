import React, { useState, useEffect } from 'react';
import MapPicker from 'react-google-map-picker';
import io from 'socket.io-client';

const DefaultLocation = { lat: 10, lng: 106 };
const DefaultZoom = 10;

const Map = () => {
    const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);
    const [location, setLocation] = useState(defaultLocation);
    const [zoom, setZoom] = useState(DefaultZoom);

    const socket = io('http://localhost:4000'); // Replace with your server URL

    useEffect(() => {
        // Get the user's current location
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setDefaultLocation({ lat: latitude, lng: longitude });
            setLocation({ lat: latitude, lng: longitude });

            // Send the user's location to the server
            socket.emit('location', { latitude, longitude });
        });

        // Listen for location updates from the server
        socket.on('location', (data) => {
            setLocation(data); // Update the map based on received location
        });

        return () => {
            // Cleanup: Disconnect from the server
            socket.disconnect();
        };
    }, [socket]);

    function handleChangeLocation(lat, lng) {
        setLocation({ lat: lat, lng: lng });
    }

    function handleChangeZoom(newZoom) {
        setZoom(newZoom);
    }

    function handleResetLocation() {
        setDefaultLocation({ ...DefaultLocation });
        setZoom(DefaultZoom);
    }

    return (
        <div>
            <button onClick={handleResetLocation} className='bg-slate-500 p-2 m-4 rounded-md shadow-xl text-white font-serif'>Reset Location</button>

            <label className='font-serif font-bold'>Latitude:</label>
            <input type='text' className='rounded-lg shadow-md ' value={location.lat} disabled />
            <label className='font-serif font-bold' >Longitude:</label>
            <input className='font-serif rounded-lg m-2 shadow-lg' type='text' value={location.lng} disabled />
            <label className='font-serif font-bold  ' >Zoom:</label>
            <input className='font-serif rounded-lg shadow-lg m-2' type='text' value={zoom} disabled />

            
            <MapPicker
                defaultLocation={defaultLocation}
                zoom={zoom}
                mapTypeId="roadmap"
                style={{ height: '700px' }}
                onChangeLocation={handleChangeLocation}
                onChangeZoom={handleChangeZoom}
                apiKey = {import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            />
        </div>
    );
};

export default Map;

