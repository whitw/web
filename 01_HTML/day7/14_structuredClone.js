const orderList = [
  {
    menu: "치킨",
    price: 17000,
    event: false,
    count: 50,
  },
  {
    menu: "돈까스",
    price: 8500,
    event: true,
    count: 99,
  },
  {
    menu: "마라탕",
    price: 8800,
    event: false,
    count: 100,
  },
  {
    menu: "쫄면",
    price: 5500,
    event: true,
    count: 30,
  },  
]

const menuBoard = orderList
.filter(item=>item.count !== 0)
.map(item=>{
  const newItem = structuredClone(item); 
  if(item.event){
    newItem.saledPrice = item.price * 0.9;
  }
  else{
    newItem.saledPrice = item.price;
  }
  return newItem;
});
console.log(orderList);
console.log(menuBoard);