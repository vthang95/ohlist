const port = process.env.PORT || 7000;

export const getHostName = () => `http://localhost:${port}`;
export const getUserId = () => {
  let user_id = localStorage.getItem('user_id');
  return user_id;
};
