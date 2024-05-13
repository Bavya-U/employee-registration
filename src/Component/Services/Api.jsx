// const BASE_URL = 'https://64cc86e22eafdcdc8519ed83.mockapi.io/Employee/EmployeeRegistration';

// export const getItemsService = () => {
//   return fetch(BASE_URL)
//     .then(res => res.json())
//     .catch(error => {
//       console.error('Error fetching items:', error);
//       throw error;
//     });
// };

// export const addItemService = (name) => {
//   return fetch(BASE_URL, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ name })
//   })
//     .then(res => res.json())
//     .catch(error => {
//       console.error('Error adding item:', error);
//       throw error;
//     });
// };

// export const deleteItemService = (id) => {
//   return fetch(`${BASE_URL}/${id}`, {
//     method: 'DELETE'
//   })
//     .then(() => id)
//     .catch(error => {
//       console.error('Error deleting item:', error);
//       throw error;
//     });
// };



// const BASE_URL = 'https://64cc86e22eafdcdc8519ed83.mockapi.io/Employee/EmployeeRegistration';

// export const getItemsService = () => {
//   return fetch(BASE_URL)
//     .then(res => res.json())
//     .catch(error => {
//       console.error('Error fetching items:', error);
//       throw error;
//     });
// };

// export const getItemByIdService = (id) => {
//   return fetch(`${BASE_URL}/${id}`)
//     .then(res => res.json())
//     .catch(error => {
//       console.error(`Error fetching item with ID ${id}:`, error);
//       throw error;
//     });
// };

// export const addItemService = (name) => {
//   return fetch(BASE_URL, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ name })
//   })
//     .then(res => res.json())
//     .catch(error => {
//       console.error('Error adding item:', error);
//       throw error;
//     });
// };

// export const updateItemService = (id, updatedData) => {
//   return fetch(`${BASE_URL}/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(updatedData)
//   })
//     .then(res => res.json())
//     .catch(error => {
//       console.error(`Error updating item with ID ${id}:`, error);
//       throw error;
//     });
// };

// export const deleteItemService = (id) => {
//   return fetch(`${BASE_URL}/${id}`, {
//     method: 'DELETE'
//   })
//     .then(() => id)
//     .catch(error => {
//       console.error('Error deleting item:', error);
//       throw error;
//     });
// };



const BASE_URL = 'https://64cc86e22eafdcdc8519ed83.mockapi.io/Employee/EmployeeRegistration';

export const getItemsService = async () => {
  try {
    const response = await fetch(BASE_URL);
    return await response.json();
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

export const getItemByIdService = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching item with ID ${id}:`, error);
    throw error;
  }
};

export const addItemService = async (name) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    });
    return await response.json();
  } catch (error) {
    console.error('Error adding item:', error);
    throw error;
  }
};

export const updateItemService = async (id, updatedData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });
    return await response.json();
  } catch (error) {
    console.error(`Error updating item with ID ${id}:`, error);
    throw error;
  }
};

export const deleteItemService = async (id) => {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    });
    return id;
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
};
