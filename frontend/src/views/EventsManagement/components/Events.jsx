import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useUser } from '../../../context/UserContext';

const API_URL = process.env.VITE_API_URL || 'http://localhost:3000';

const Events = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);

  console.log('User in EventsManagement:', user);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!user || user.role !== 'admin') {
    console.warn('User not logged in or not an admin. Redirecting...');
    return <Navigate to="/login" replace />;
  }

  const [events, setEvents] = useState([]);
  const [locale, setLocale] = useState('en');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    image: '',
    locale: '',
  });
  const [editingEvent, setEditingEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, [locale]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${API_URL}/events`, {
        params: { locale },
      });
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleAdd = async () => {
    try {
      await axios.post(`${API_URL}/events`, { ...formData });
      fetchEvents();
      resetForm();
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const handleUpdate = async () => {
    if (!editingEvent) return;
    try {
      await axios.put(`${API_URL}/events/${editingEvent.id}`, { ...formData });
      fetchEvents();
      resetForm();
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  const handleEdit = (event) => {
    setFormData({ ...event });
    setEditingEvent(event);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/events/${id}`);
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      date: '',
      location: '',
      image: '',
      locale: '',
    });
    setEditingEvent(null);
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md mt-8">
        <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">
          Events Management
        </h1>

        <div className="mb-4 text-center">
          <button
            onClick={() => setLocale('en')}
            className={`px-4 py-2 rounded-lg ${locale === 'en' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
          >
            English
          </button>
          <button
            onClick={() => setLocale('zh')}
            className={`px-4 py-2 rounded-lg ml-2 ${locale === 'zh' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
          >
            中文
          </button>
        </div>

        <div className="space-y-4 mb-6">
          <input
            className="w-full p-2 border rounded-lg"
            placeholder="Title"
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
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
          <input
            className="w-full p-2 border rounded-lg"
            placeholder="Location"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />
          <input
            className="w-full p-2 border rounded-lg"
            placeholder="Image URL"
            value={formData.image}
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
          />
          <button
            onClick={editingEvent ? handleUpdate : handleAdd}
            className={`w-full p-2 rounded-lg text-white ${editingEvent ? 'bg-orange-500' : 'bg-teal-500'}`}
          >
            {editingEvent ? 'Update Event' : 'Add Event'}
          </button>
        </div>

        <table className="w-full bg-white border rounded-lg shadow">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="p-2">Title</th>
              <th className="p-2">Date</th>
              <th className="p-2">Location</th>
              <th className="p-2">Image</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-t">
                <td className="p-2">{event.title}</td>
                <td className="p-2">{event.date}</td>
                <td className="p-2">{event.location}</td>
                <td className="p-2">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-20 w-20 object-cover rounded-lg"
                  />
                </td>
                <td className="p-2">
                  <button
                    onClick={() => handleEdit(event)}
                    className="p-2 bg-blue-500 text-white rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="p-2 bg-red-500 text-white rounded-lg ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Events;
