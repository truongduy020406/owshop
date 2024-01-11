import request from ".";


export async function updateProduct(id, data) {
    return request(`/product/editProduct/${id}`, {
      method: "POST",
      data,
    });
  }

  export async function createOrder( data) {
    return request(`/Order/creteOrder`, {
      method: "POST",
      data,
    });
  }

  export async function getAllOrder(params) {
    return request(`/Order/Orderad`, {
      method: "GET",
      params
    });
  }

  export async function deleteOrder(id) {
    return request(`/Order/deleteOrder/${id}`, {
      method: "POST",
    });
  }