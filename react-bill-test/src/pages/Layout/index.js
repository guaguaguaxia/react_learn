import { TabBar } from 'antd-mobile'
import { Outlet } from 'react-router-dom'
import {
  BillOutline,
  CalculatorOutline,
  AddCircleOutline
} from 'antd-mobile-icons'
import './index.scss'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getBillList } from '@/store/modules/billStore'

const tabs = [
  {
    key: '/',
    title: '月度账单',
    icon: <BillOutline />,
  },
  {
    key: '/new',
    title: '记账',
    icon: <AddCircleOutline />,
  },
  {
    key: '/year',
    title: '年度账单',
    icon: <CalculatorOutline />,
  },
]

const Layout = () => {
  const dispatch = useDispatch() 
  useEffect(() => {
    dispatch(getBillList())
  }, [dispatch])

  return (
    <div className="layout">
      <div className="container">
        <Outlet />
      </div>
      <div className="footer">
        <TabBar>
            {tabs.map((item) => (
                <TabBar.Item  key={item.key} icon={item.icon} title={item.title} ></TabBar.Item>
            ))}
        </TabBar>
      </div>
    </div>
  )
}

export default Layout
