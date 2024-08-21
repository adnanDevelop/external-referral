const decodeToken = (token: string) => {
  if (!token) return {};
  const decodedToken = JSON.parse(atob(token.split('.')[1]));
  return decodedToken;
};

export default decodeToken;
