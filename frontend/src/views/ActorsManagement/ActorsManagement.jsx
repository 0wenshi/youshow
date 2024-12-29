import React, { useState, useEffect } from 'react';
import { Box, Button, Input, VStack, HStack, Heading } from '@chakra-ui/react';
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
    <Box maxW="6xl" mx="auto" p="6" bg="gray.50" borderRadius="lg" shadow="md">
      <Heading as="h1" size="lg" mb="6" textAlign="center" color="teal.600">
        Actors Management
      </Heading>

      {/* Form Section */}
      <VStack spacing={4} mb={6} align="stretch">
        <Input
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <Input
          placeholder="Subtitle"
          value={formData.subtitle}
          onChange={(e) =>
            setFormData({ ...formData, subtitle: e.target.value })
          }
        />
        <Input
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <Input
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />
        <Button
          colorScheme={editingActor ? 'orange' : 'teal'}
          onClick={handleAddOrUpdate}
        >
          {editingActor ? 'Update Actor' : 'Add Actor'}
        </Button>
      </VStack>

      {/* Table Section */}
      <table variant="striped" colorScheme="teal" size="lg">
        <thead>
          <tr>
            <th>Title</th>
            <th>Subtitle</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {actors.map((actor) => (
            <tr key={actor.id}>
              <td>{actor.title}</td>
              <td>{actor.subtitle}</td>
              <td>{actor.description}</td>
              <td>
                <img
                  src={actor.image}
                  alt={actor.title}
                  className="h-20 w-20 object-cover rounded-lg shadow"
                />
              </td>
              <td>
                <HStack spacing={2}>
                  <Button
                    size="sm"
                    colorScheme="blue"
                    onClick={() => setEditingActor(actor)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    colorScheme="red"
                    onClick={() => handleDelete(actor.id)}
                  >
                    Delete
                  </Button>
                </HStack>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default ActorsManagement;
