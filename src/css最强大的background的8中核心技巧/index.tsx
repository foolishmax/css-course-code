import './index.less'

export default function App() {
  return (
    <div className='app'>
      <div className="item1">
        <h1>技巧一：渐变的颜色可以是透明色</h1>
        <ul>
          <li>Button</li>
          <li>Button</li>
          <li>Button</li>
          <li>Button</li>
          <li>Button</li>
          <li>Button</li>
        </ul>
      </div>
      <div className='item2'>
        <h1>技巧二：渐变可以是从一种颜色直接到另外一种颜色</h1>
        <div className='item2-1'></div>
        <div className='item2-2'></div>
      </div>
      <div className='item3'>
        <h1>技巧三：渐变多层叠加</h1>
        <div className='item3-1'></div>
      </div>
      <div className='item4'>
        <h1>技巧四：利用 repeating-linear-gradient 节省代码</h1>
        <div className='item4-1'></div>
      </div>
      <div className='item5'>
        <h1>技巧五：预留衔接空间消除渐变产生的锯齿</h1>
        <div className='item5-1'></div>
      </div>
      <div className='item6'>
        <h1>技巧六：利用多层渐变组合图形</h1>
        <div className="item6-1">50</div>
        <div className="item6-2">50</div>
      </div>
    </div>


  )
}