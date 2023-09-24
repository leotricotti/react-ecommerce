export default function useGetUserInfo() {
  async function getUserInfo() {
    const response = await fetch("http://localhost:3000/api/sessions/current");
    const data = await response.json();
    localStorage.setItem("user", JSON.stringify(data));
  }

  return getUserInfo;
}
