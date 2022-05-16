import { Button, Form, Input, Checkbox } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onFinish = (values: FormDataEntryValue) => {
        navigate('/', { replace: true })
    }

    const messages = {
        required: 'Please input your ${name}',
        string: {
            max: '${label} is too long',
            min: '${label} is too short',
        },
    }

    return (
        <Form
            name='basic'
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 30,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            autoComplete='off'
            validateMessages={messages}
        >
            <Form.Item
                label='Username'
                name='username'
                rules={[
                    {
                        required: true,
                        min: 2,
                    },
                    { max: 20 },
                ]}
            >
                <Input placeholder='user' />
            </Form.Item>

            <Form.Item
                label='Password'
                name='password'
                rules={[
                    {
                        required: true,
                        min: 4,
                    },
                    { max: 20 },
                ]}
            >
                <Input.Password placeholder='1234' />
            </Form.Item>

            <Form.Item
                name='remember'
                valuePropName='checked'
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type='primary' htmlType='submit'>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm
