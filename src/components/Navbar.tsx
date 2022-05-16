import { Layout, Menu, Alert } from 'antd'
import { UserOutlined, CalendarOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'

const Navbar = () => {
    const navigate = useNavigate()
    const { isAuth } = useTypedSelector((state) => state.auth)
    const [showLoginAlert, setShowLoginAlert] = useState(false)

    const items = [
        {
            icon: UserOutlined,
            name: isAuth ? 'Logout' : 'Login',
            onClick: () => navigate('/login', { replace: true }),
        },
        {
            icon: CalendarOutlined,
            name: 'Calendar',
            onClick: () => {
                if (isAuth) {
                    navigate('/', { replace: true })
                } else {
                    setShowLoginAlert(true)
                    setTimeout(() => setShowLoginAlert(false), 2000)
                }
            },
        },
    ]

    return (
        <Layout.Header>
            <Menu
                theme='dark'
                mode='horizontal'
                style={{ justifyContent: 'flex-end' }}
                selectable={false}
            >
                {items.map(({ icon: Icon, name, onClick }) => {
                    return (
                        <Menu.Item key={name} icon={<Icon />} onClick={onClick}>
                            {name}
                        </Menu.Item>
                    )
                })}
            </Menu>
            {showLoginAlert && (
                <Alert
                    message='You have to log in first'
                    type='error'
                    closable
                />
            )}
        </Layout.Header>
    )
}

export default Navbar
