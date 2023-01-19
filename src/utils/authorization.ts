export const Authorization = {
  headers: {
    Authorization:
      typeof window !== 'undefined' ? `Bearer ${window.localStorage.getItem('token')!}` : ''
  }
};
