import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';

export default function Forms() {
  const [formData, setFormData] = useState({});
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [showThirdForm, setShowThirdForm] = useState(false);

  const handleFirstFormSubmit = (e) => {
    e.preventDefault();
    // Process first form data if needed
    // Example: Send form data to server or update state
    setShowSecondForm(true);
  };

  const handleSecondFormSubmit = (e) => {
    e.preventDefault();
    // Process second form data if needed
    // Example: Send form data to server or update state
    setShowThirdForm(true);
  };

  const handleThirdFormSubmit = (e) => {
    e.preventDefault();
    // Process third form data if needed
    // Example: Send form data to server or update state
    console.log('All forms submitted!');
  };

  return (
    <Container>
      {showThirdForm ? (
        <form onSubmit={handleThirdFormSubmit}>
          <TextField label="Third Form Field" fullWidth variant="outlined" />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      ) : showSecondForm ? (
        <form onSubmit={handleSecondFormSubmit}>
          <TextField
            label="Second Form Field"
            fullWidth
            variant="outlined"
            value={formData.secondField}
            onChange={(e) => setFormData({ ...formData, secondField: e.target.value })}
          />
          <Button type="submit" variant="contained" color="primary">
            Next
          </Button>
        </form>
      ) : (
        <form onSubmit={handleFirstFormSubmit}>
          <TextField
            label="First Form Field"
            fullWidth
            variant="outlined"
            value={formData.firstField}
            onChange={(e) => setFormData({ ...formData, firstField: e.target.value })}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit1
          </Button>
        </form>
      )}
    </Container>
  );
}
