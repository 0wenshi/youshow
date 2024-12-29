import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ActorsManagement = () => {
  const [actors, setActors] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    image: '',
  });
  const [editingActor, setEditingActor] = useState(null);

  useEffect(() => {
    fetchActors();
  }, []);

  const fetchActors = async () => {
    try {
      const response = await axios.get('http://localhost:3000/actors');
      setActors(response.data);
    } catch (error) {
      console.error('Error fetching actors:', error);
    }
  };

  const handleAddOrUpdate = async () => {
    try {
      if (editingActor) {
        await axios.put(
          `http://localhost:3000/actors/${editingActor.id}`,
          formData
        );
      } else {
        await axios.post('http://localhost:3000/actors', formData);
      }
      fetchActors();
      setFormData({ title: '', subtitle: '', description: '', image: '' });
      setEditingActor(null);
    } catch (error) {
      console.error('Error adding/updating actor:', error);
    }
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
      <h1 className="text-2xl font-bold text-center text-teal-600 mb-6">
        Actors Management
      </h1>

      {/* Form Section */}
      <div className="space-y-4 mb-6">
        <input
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-200"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <input
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-200"
          placeholder="Subtitle"
          value={formData.subtitle}
          onChange={(e) =>
            setFormData({ ...formData, subtitle: e.target.value })
          }
        />
        <textarea
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-200"
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        ></textarea>
        <input
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-200"
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />
        <button
          className={`w-full p-2 rounded-lg text-white ${
            editingActor ? 'bg-orange-500 hover:bg-orange-600' : 'bg-teal-500 hover:bg-teal-600'
          }`}
          onClick={handleAddOrUpdate}
        >
          {editingActor ? 'Update Actor' : 'Add Actor'}
        </button>
      </div>

      {/* Table Section */}
      <table className="w-full table-auto bg-white border border-gray-300 rounded-lg shadow">
        <thead className="bg-teal-500 text-white">
          <tr>
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-left">Subtitle</th>
            <th className="p-2 text-left">Description</th>
            <th className="p-2 text-left">Image</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {actors.map((actor) => (
            <tr key={actor.id} className="border-t">
              <td className="p-2">{actor.title}</td>
              <td className="p-2">{actor.subtitle}</td>
              <td className="p-2">{actor.description}</td>
              <td className="p-2">
                <img
                  src={actor.image}
                  alt={actor.title}
                  className="h-20 w-20 object-cover rounded-lg shadow"
                />
              </td>
              <td className="p-2">
                <div className="flex space-x-2">
                  <button
                    className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    onClick={() => setEditingActor(actor)}
                  >
                    Edit
                  </button>
                  <button
                    className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    onClick={() => handleDelete(actor.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActorsManagement;
