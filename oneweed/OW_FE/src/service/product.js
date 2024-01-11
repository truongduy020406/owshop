import request from ".";
export async function getAllProduct(params) {
  return request(`/product`, {
    method: "GET",
    params
  });
}
export async function getProductById(id) {

  return request(`/product/${id}`, {

    method: "GET",
  });

}

export async function createProduct(data) {
  return request(`/product/creteProduct`, {
    method: "POST",
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data,
  });
}
export async function updateProduct(id, data) {
  return request(`/product/editProduct/${id}`, {
    method: "POST",
    data,
  });
}
export async function deleteProduct(id) {
  return request(`/product/deleteProduct/${id}`, {
    method: "POST",
  });
}
export async function getAllCategory(params) {
    return request(`/categories`, {
      method: "GET",
      params
    });
  }