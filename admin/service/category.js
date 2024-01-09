import request from ".";

export async function getAllCategory(params) {
  return request(`/categories`, {
    method: "GET",
    params
  });
}
export async function getCategoryById(id) {
  return request(`/category/${id}`, {
    method: "GET",
  });
}
export async function createCategory(data) {
  return request(`/categories/create`, {
    method: "POST",
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data,
  });
}
export async function updateCategory(id, data) {
  return request(`/categories/update/${id}`, {
    method: "PUT",
    data
  });
}
export async function deleteCategory(id) {
  return request(`/categories/${id}`, {
    method: "DELETE",
  });
}