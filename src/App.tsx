import DescribeCustomer from "./components/DescribeCustomer"

import CardUser from "./components/Card"

function App() {
  return (
    <DescribeCustomer
      render={({ data }: any) => {
        return <CardUser {...data} />
      }}
    ></DescribeCustomer>
  )
}

export default App
