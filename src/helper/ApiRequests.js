const sendRequest = async (url, data, method) => {
  const response = await fetch(url, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cache: "no-cache",
    },
    body: JSON.stringify(data),
  });

  if (response.status === 200 || response.status === 201) {
    return response;
  } else if (response.status === 204) {
    return true;
  } else {
    const data = response;
    return { error: true, message: data?.message };
  }
};

export const postRequest = async (url, data) => sendRequest(url, data, "POST");

export const putRequest = async (url, data) => sendRequest(url, data, "PUT");

export const getRequest = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cache: "no-cache",
    },
  });

  if (response.status === 200) {
    return await response.json();
  } else {
    const data = await response.json();

    return { error: true, message: data.message };
  }
};
