export const inProduction = process.env.NODE_ENV === 'production';
export const apiUrl = inProduction ? '' : 'http://localhost:3000';
