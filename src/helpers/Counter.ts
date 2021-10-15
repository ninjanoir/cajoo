export const totalNumberOfOrders = (data: any) => {
  return data.users_by_pk.orders.length
}

export const totalAmount = (data: any): number => {

  let total = 0

  data.users_by_pk.orders.forEach((order: { order_items: [] }) => {
    total = order.order_items.reduce(function (total, current: any) {
      return (total += current.ttc_price)
    }, 0)


  })

  return total
}

export function oav(data: any) {
  const total: number = totalAmount(data)

  return total / data.orders.length
}
