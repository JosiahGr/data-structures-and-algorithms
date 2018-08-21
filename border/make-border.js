const makeBorder = (image) => {
  for (let i = 0; i < image.length; i++) {
    image[i] = `*${image[i]}*`;
  }
  
  const len = image[0].length;
  let border = '';
  
  for (let i = 0; i < len; i++) {
    border += '*';
  }
  
  image.push(border);
  image.unshift(border);
  return image;
};

export default makeBorder;
