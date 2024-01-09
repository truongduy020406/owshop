import request from ".";

export async function loginUser(data) {
  return request(`/user/login`, {
    method: "POST",
    data
  });
}