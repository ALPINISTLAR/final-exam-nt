async function getToken() {
  try {
    const resp = await fetch(import.meta.env.VITE_API_TOKEN_URL, {
      method: "POST",
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(import.meta.env.VITE_CLIENT_ID + ':' + import.meta.env.VITE_CLIENT_SECRET)}`
      },
      body: 'grant_type=client_credentials'
    });

    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }

    const auth = await resp.json();
    const expireDate = getOneHourLater();
    localStorage.setItem('expireDate', expireDate);
    localStorage.setItem('token', auth.access_token);
    console.log('Token obtained:', auth.access_token); // Log the token

    return { token: auth.access_token, date: expireDate }; // Return the token and date
  } catch (error) {
    console.error('Error fetching token:', error);
    return null; // Return null if there's an error
  }
}

function getOneHourLater() {
  let currentDate = new Date();
  let OneHourLater = new Date(currentDate.getTime() + 3600000);
  let day = String(OneHourLater.getDate()).padStart(2, '0');
  let month = String(OneHourLater.getMonth() + 1).padStart(2, '0');
  let year = OneHourLater.getFullYear();
  let hours = String(OneHourLater.getHours()).padStart(2, '0');
  let minutes = String(OneHourLater.getMinutes()).padStart(2, '0');
  let formattedDateTime = `${day}.${month}.${year} ${hours}:${minutes}`;
  return formattedDateTime;
}

export { getToken };