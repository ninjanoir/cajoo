export const totalNumberOfOrders = (data: any) => {
  return data.length
}


export function totalAmount (data: any) {

 data.orders.forEach((order: {order_items: []}) => {

  return order.order_items.reduce(function(total, current: any){
      return total += current.ttc_price
  }, 0)
     
 });

}

export function oav(data: any){

    // return  (function totalAmount(data) / data.orders.length)
  
}