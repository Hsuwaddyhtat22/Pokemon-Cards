async function createLike(appId, itemId) {
  const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;

  const requestBody = JSON.stringify({
      item_id: itemId
  });

  try {
      const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: requestBody
      });

      if (response.status === 201) {
          console.log('Like created successfully!');
      } else {
          console.log('Failed to create like.');
      }
  } catch (error) {
      console.error('An error occurred:', error.message);
  }
}

// Usage
const appId = 'BkQKkTlkOempsoUdqokb';
const itemId = 'item1';
createLike(appId, itemId);
