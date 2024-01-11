import request from ".";

export async function updateStore(id, data) {
    try {
      const response = await request(`/user/updateStore/${id}`, {
        method: "POST",
        data,
      });
  
      console.log("Response:", response); // Log the response
      return response.data;  // Assuming the actual data is within the 'data' property
    } catch (error) {
      console.error("Error updating store:", error);
      throw error;
    }
  }
  

  export async function getnamestore(id) {
    return request(`/user/getnamestore/${id}`, {
  
      method: "GET",
    });
  }
  

  