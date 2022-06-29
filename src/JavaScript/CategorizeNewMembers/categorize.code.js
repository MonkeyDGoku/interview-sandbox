export const openOrSenior = (data) => {
  
  return data.map(([age,handicaps])=>(age > 54 && handicaps>7) ? 'Senior' : 'Open');
};
