import React, { useState } from 'react'
import { Image, Button, Input } from 'antd'
import { deleteItem, updateItem } from '../../helpers/cart'
export default function CartItem({ product, setCart }) {

  const [, setCount] = useState(product.count)

  const handleChange = event => {
    const count = parseInt(event.target.value)
    setCount(count)
    setCart(updateItem(product._id, count))
  }

  return (
    <tr className="ant-table-row">
      <td className="ant-table-cell">
        <Image width={120} src={`http://localhost/public/upload/${product.photo}`} />
      </td>
      <td className="ant-table-cell">{product.name}</td>
      <td className="ant-table-cell">{product.price}</td>
      <td className="ant-table-cell">{product.category.name}</td>
      <td className="ant-table-cell">
        <Input type="number" value={product.count} onChange={handleChange}  />
      </td>
      <td className="ant-table-cell">
        <Button onClick={() => { setCart(deleteItem(product._id)) }} type="primary" danger >
          删除
        </Button>
      </td>
    </tr>
  )
}
