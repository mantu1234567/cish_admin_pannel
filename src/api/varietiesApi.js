import axios from 'axios';

export const publishVariety = async (data) => {
    console.log(data,"ddddddddddddddddddddddddddddddddd")
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (key === 'files') {
      data.files.forEach((file) => formData.append('files', file));
    } else {
      formData.append(key, data[key]);
    }
  });

  return axios.post('/api/varieties/publish', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
