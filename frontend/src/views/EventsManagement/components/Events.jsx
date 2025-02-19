import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../../../context/UserContext';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import {
  GOOGLE_MAPS_API_KEY,
  GOOGLE_MAPS_LIBRARIES,
  API_URL,
} from '../../../../config';
import Swal from 'sweetalert2';
import GoogleMapComponent from '../../CommonComponents/GoogleMapComponent';

const Events = () => {
  const { user } = useUser(); // Get user information
  // console.log('User in EventsManagement:', user);

  const [events, setEvents] = useState([]);
  const [locale, setLocale] = useState('en'); // language switch
  const [autocomplete, setAutocomplete] = useState(null); // Google Maps Autocomplete
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    event_date: '',
    start_time: '',
    end_time: '',
    location: '',
    price: '',
    image: '',
    locale: '',
    capacity: '',
  });
  const [editingEvent, setEditingEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, [locale]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${API_URL}/events`, {
        params: { locale }, // API only requests events for the current language
      });
      //console.log('Fetched events:', response.data);
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handlePlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place && place.formatted_address) {
        setFormData({ ...formData, location: place.formatted_address });
      }
    }
  };

  const handleLoad = (autoC) => setAutocomplete(autoC);

  const handleAdd = async () => {
    try {
      const newEvent = {
        title: formData.title,
        capacity: parseInt(formData.capacity, 10),
        details: [
          {
            locale_code: formData.locale,
            description: formData.description,
            location: formData.location,
            price: formData.price.startsWith('$')
              ? formData.price
              : `$${formData.price}`,
            image: formData.image,
          },
        ],
        timestamps: [
          {
            event_date: formData.event_date,
            start_time: formData.start_time,
            end_time: formData.end_time,
          },
        ],
      };

      await axios.post(`${API_URL}/events`, newEvent);
      fetchEvents();
      resetForm();
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const handleUpdate = async () => {
    if (!editingEvent) return;

    try {
      const updatedEvent = {
        title: formData.title,
        details: [
          {
            locale_code: formData.locale,
            description: formData.description,
            location: formData.location,
            price: formData.price.startsWith('$')
              ? formData.price
              : `$${formData.price}`,
            image: formData.image,
          },
        ],
        timestamps: [
          {
            event_date: formData.event_date,
            start_time: formData.start_time,
            end_time: formData.end_time,
          },
        ],
      };

      await axios.put(
        `${API_URL}/events/${editingEvent.event_id}`,
        updatedEvent
      );
      fetchEvents();
      resetForm();
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  const handleEdit = (event) => {
    const details = getLocalizedDetails(event);
    if (details) {
      setFormData({
        title: event.title,
        description: details.description || '',
        event_date: event.timestamps?.event_date || '',
        start_time: event.timestamps?.start_time || '',
        end_time: event.timestamps?.end_time || '',
        location: details.location || '',
        price: details.price || '',
        image: details.image || '',
        locale: details.locale_code || locale,
      });
      setEditingEvent(event);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      event_date: '',
      start_time: '',
      end_time: '',
      location: '',
      price: '',
      image: '',
      locale: '',
      capacity: '',
    });
    setEditingEvent(null);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this event!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${API_URL}/events/${id}`);
        Swal.fire('Deleted!', 'Event has been deleted.', 'success');
        fetchEvents();
      } catch (error) {
        Swal.fire('Error!', 'Failed to delete event.', 'error');
      }
    }
  };

  // Gets event details for the current locale
  const getLocalizedDetails = (event) => {
    if (!Array.isArray(event.details)) return null;
    return event.details.find(
      (detail) => detail.Locale?.locale_code === locale
    );
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md mt-8">
        <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">
          Events Management
        </h1>

        {/* language switch */}
        <div className="mb-4 text-center">
          <button
            onClick={() => setLocale('en')}
            className={`px-4 py-2 rounded-lg ${
              locale === 'en' ? 'bg-orange-500 text-white' : 'bg-gray-200'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLocale('zh')}
            className={`px-4 py-2 rounded-lg ml-2 ${
              locale === 'zh' ? 'bg-orange-500 text-white' : 'bg-gray-200'
            }`}
          >
            中文
          </button>
        </div>

        {/* Add/edit the event form */}
        <div className="space-y-4 mb-6">
          <input
            className="w-full p-2 border rounded-lg"
            placeholder="Event title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <textarea
            className="w-full p-2 border rounded-lg"
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          ></textarea>
          <input
            className="w-full p-2 border rounded-lg"
            type="date"
            value={formData.event_date}
            onChange={(e) =>
              setFormData({ ...formData, event_date: e.target.value })
            }
          />
          <input
            className="w-full p-2 border rounded-lg"
            placeholder="Start Time (HH:mm)"
            value={formData.start_time}
            onChange={(e) =>
              setFormData({ ...formData, start_time: e.target.value })
            }
          />
          <input
            className="w-full p-2 border rounded-lg"
            placeholder="End Time (HH:mm)"
            value={formData.end_time}
            onChange={(e) =>
              setFormData({ ...formData, end_time: e.target.value })
            }
          />

          {/* Google Maps Autocomplete */}
          <LoadScript
            googleMapsApiKey={GOOGLE_MAPS_API_KEY}
            libraries={GOOGLE_MAPS_LIBRARIES}
          >
            <Autocomplete
              onLoad={handleLoad}
              onPlaceChanged={handlePlaceChanged}
            >
              <input
                className="w-full p-2 border rounded-lg"
                placeholder="Search Location..."
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
              />
            </Autocomplete>
          </LoadScript>

          <input
            className="w-full p-2 border rounded-lg"
            placeholder="Price (e.g. $10)"
            value={formData.price}
            onChange={(e) => {
              let value = e.target.value.replace(/[^0-9.]/g, '');
              if (value) {
                value = `$${value}`;
              }
              setFormData({ ...formData, price: value });
            }}
          />
          <input
            className="w-full p-2 border rounded-lg"
            placeholder="Image URL"
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
          />
          <input
            className="w-full p-2 border rounded-lg"
            placeholder="Locale (e.g. en, zh)"
            value={formData.locale}
            onChange={(e) =>
              setFormData({ ...formData, locale: e.target.value })
            }
          />
          <input
            className="w-full p-2 border rounded-lg"
            placeholder="Capacity (Number of tickets)"
            value={formData.capacity}
            onChange={(e) =>
              setFormData({ ...formData, capacity: e.target.value })
            }
          />
          <button
            onClick={editingEvent ? handleUpdate : handleAdd}
            className={`w-full p-2 rounded-lg text-white ${
              editingEvent ? 'bg-orange-500' : 'bg-teal-500'
            }`}
          >
            {editingEvent ? 'Update Event' : 'Add Event'}
          </button>
        </div>

        {/* Events lists */}
        <table className="w-full bg-white border rounded-lg shadow">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="p-2">Title</th>
              <th className="p-2">Description</th>
              <th className="p-2">Date</th>
              <th className="p-2">Start Time</th>
              <th className="p-2">End Time</th>
              <th className="p-2">Location</th>
              <th className="p-2">Price</th>
              <th className="p-2">Image</th>
              <th className="p-2">Capacity</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => {
              const details = getLocalizedDetails(event);
              if (!details) {
                return null;
              }
              return (
                <tr key={event.event_id} className="border-t">
                  <td className="p-2">{event.title}</td>
                  <td className="p-2">{details.description || 'N/A'}</td>
                  <td className="p-2">
                    {event.timestamps?.event_date || 'N/A'}
                  </td>
                  <td className="p-2">
                    {event.timestamps?.start_time || 'N/A'}
                  </td>
                  <td className="p-2">{event.timestamps?.end_time || 'N/A'}</td>
                  <td className="p-2">
                    {details.location ? (
                      <GoogleMapComponent address={details.location} />
                    ) : (
                      'N/A'
                    )}
                  </td>
                  <td className="p-2">
                    {details.price
                      ? `$${details.price.replace(/^\$/, '')}`
                      : 'N/A'}
                  </td>
                  <td className="p-2">
                    {details.image ? (
                      <img
                        src={details.image}
                        alt={event.title}
                        className="h-20 w-20 object-cover rounded-lg"
                      />
                    ) : (
                      'N/A'
                    )}
                  </td>
                  <td className="p-2">{details.capacity || 'N/A'}</td>
                  <td className="p-2">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(event)}
                        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(event.event_id)}
                        className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;
