function sqInRect(lng, wdth){
  if(lng === wdth) return null;
  let area = lng * wdth;
  let result = [];
  while(lng !== wdth) {
    if(lng > wdth) {
      lng -= wdth;
      result.push(wdth);
    } else {
      wdth -= lng;
      result.push(lng);
    }
  }
  result.push(lng);
  return result;
}