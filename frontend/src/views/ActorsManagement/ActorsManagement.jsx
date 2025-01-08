import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ActorsManagement = () => {
  const [actors, setActors] = useState([]);
  const [locale, setLocale] = useState('en'); // Add locale state
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    locale_code: '', // Add locale field
    image: '',
  });
  const [editingActor, setEditingActor] = useState(null);

  useEffect(() => {
    fetchActors();
  }, [locale]);

  const fetchActors = async () => {
    try {
      const response = await axios.get('http://localhost:3000/actors', {
        params: {
          locale,
        },
      });
      // console.log('Fetched actors:', response.data);
      setActors(response.data);
    } catch (error) {
      console.error('Error fetching actors:', error);
    }
  };

  const getLocalizedDetails = (actor) => {
    // Check if ActorDetails exists and is an array
    if (Array.isArray(actor.ActorDetails)) {
      return actor.ActorDetails.find(
        (detail) => detail.Locale?.locale_code === locale
      );
    }
    return null; // Return null if ActorDetails is not valid
  };

  const handleAdd = async () => {
    try {
      // Add new actor
      await axios.post('http://localhost:3000/actors', formData);
      fetchActors(); // Refresh actor list
      resetForm(); // Reset form fields
    } catch (error) {
      console.error('Error adding actor:', error);
    }
  };

  const handleUpdate = async () => {
    if (!editingActor) {
      console.error('No actor selected for updating.');
      return; // Ensure an actor is being edited
    }

    try {
      // Restructure formData into the expected format
      const requestData = {
        name: editingActor.name, // Use the existing actor's name
        details: [
          {
            title: formData.title,
            subtitle: formData.subtitle,
            description: formData.description,
            image: formData.image,
            locale_code: formData.locale, // Match the expected field name
          },
        ],
      };
      // console.log('Sending update request with data:', requestData);

      // Send the PUT request with the correctly formatted data
      const response = await axios.put(
        `http://localhost:3000/actors/${editingActor.actor_id}`,
        requestData
      );

      // console.log('Update response:', response.data);

      // Refresh the actor list and reset the form
      fetchActors();
      resetForm();
    } catch (error) {
      console.error('Error updating actor:', error.response?.data || error);
    }
  };

  const handleEdit = (actor) => {
    const details = getLocalizedDetails(actor);

    if (details) {
      setFormData({
        title: details.title || '',
        subtitle: details.subtitle || '',
        description: details.description || '',
        image: details.image || '',
        locale: details.Locale?.locale_code || locale,
      });
      setEditingActor(actor); // Set the actor being edited
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      description: '',
      image: '',
      locale: '',
    });
    setEditingActor(null); // Clear editing state
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/actors/${id}`);
      fetchActors();
    } catch (error) {
      console.error('Error deleting actor:', error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">
        Actors Management
      </h1>

      {/* Locale Switcher */}
      <div className="mb-4 text-center">
        <button
          className={`px-4 py-2 rounded-lg ${
            locale === 'en' ? 'bg-orange-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setLocale('en')}
        >
          English
        </button>
        <button
          className={`px-4 py-2 rounded-lg ml-2 ${
            locale === 'zh' ? 'bg-orange-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setLocale('zh')}
        >
          中文
        </button>
      </div>

      {/* Form Section */}
      <div className="space-y-4 mb-6">
        <input
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-200"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <input
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-200"
          placeholder="Subtitle"
          value={formData.subtitle}
          onChange={(e) =>
            setFormData({ ...formData, subtitle: e.target.value })
          }
        />
        <textarea
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-200"
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        ></textarea>
        <input
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-200"
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />
        <input
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-orange-200"
          placeholder="Locale"
          value={formData.locale}
          onChange={(e) => setFormData({ ...formData, locale: e.target.value })}
        />
        <button
          className={`w-full p-2 rounded-lg text-white ${
            editingActor
              ? 'bg-orange-500 hover:bg-orange-600'
              : 'bg-teal-500 hover:bg-teal-600'
          }`}
          onClick={editingActor ? handleUpdate : handleAdd}
        >
          {editingActor ? 'Update Actor' : 'Add Actor'}
        </button>
      </div>

      {/* Table Section */}
      <table className="w-full table-auto bg-white border border-gray-300 rounded-lg shadow">
        <thead className="bg-orange-500 text-white">
          <tr>
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-left">Subtitle</th>
            <th className="p-2 text-left">Description</th>
            <th className="p-2 text-left">Image</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {actors.map((actor) => {
            const details = getLocalizedDetails(actor);
            if (!details) {
              // Skip rendering this actor if details for the current locale are not found
              return null;
            }

            return (
              <tr key={actor.actor_id} className="border-t">
                <td className="p-2">{details.title}</td>
                <td className="p-2">{details.subtitle}</td>
                <td className="p-2">{details.description}</td>
                <td className="p-2">
                  <img
                    src={details.image}
                    alt={details.title}
                    className="h-20 w-20 object-cover rounded-lg shadow"
                  />
                </td>
                <td className="p-2">
                  <div className="flex space-x-2">
                    <button
                      className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      onClick={() => handleEdit(actor)}
                    >
                      Edit
                    </button>
                    <button
                      className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      onClick={() => handleDelete(actor.actor_id)}
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
  );
};

export default ActorsManagement;
