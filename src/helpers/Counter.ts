export const totalNumberOfOrders = (data: any) => {
  return data?.users_by_pk?.orders?.length
}

export const totalAmount = (data: any): number => {
  let total = 0

  data?.users_by_pk.orders?.forEach((order: { order_items: [] }) => {
    total += order.order_items.reduce(function (amount, current: any) {
      return (amount += current.ttc_price)
    }, 0)
  })

  return Math.ceil(total)
}

export function oav(data: any) {
  const total: number = totalAmount(data)
  const ordersCount = totalNumberOfOrders(data)

  return Math.ceil(total / ordersCount)
}
