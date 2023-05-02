function getPrice(time,quickly){
  let payhour = 1500;
  if (quickly){
    time /= 2;
    payhour *=2.5;
  }
  if (time>150){
    payhour -=250;
  }
  return time*payhour;
}
alert("Стоимость несрочного проекта: "+ getPrice(180,false)+"\nСтоимость срочного проекта: "+ getPrice(180,true))
