const changeProp = (obj, value, path) => {
  const copy = JSON.parse(JSON.stringify(obj));
  let curObj = copy;

  let i;
  path = path.split('.');
  for (i = 0; i < path.length - 1; i++) {
    curObj = curObj[path[i]];
  }
  curObj[path[i]] = value;
  return copy;
};

export default changeProp;
