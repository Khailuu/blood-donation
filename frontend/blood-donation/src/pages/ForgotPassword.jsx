import { Modal, Form, Input, Button, Typography } from 'antd';
import PropTypes from 'prop-types';


const { Text } = Typography;

export default function ForgotPassword({ open, handleClose }) {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields()
      .then((values) => {
        console.log('Email:', values.email);
        handleClose(); // Đóng modal sau khi submit
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Modal
      open={open}
      title="Reset Password"
      onCancel={handleClose}
      footer={null}
    >
      <Text>
        Enter your account's email address, and we’ll send you a link to reset your password.
      </Text>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        style={{ marginTop: 16 }}
      >
        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            { required: true, message: 'Please input your email!'},
            { type: 'email', message: 'Please enter a valid email!'},
          ]}
        >
          <Input placeholder="Email address" />
        </Form.Item>

        <Form.Item style={{ textAlign: 'right', marginBottom: 0 }}>
          <Button onClick={handleClose} style={{ marginRight: 8,  fontWeight: "600"}}>
            Cancel 
          </Button>
          <Button htmlType="submit" style={{backgroundColor: '#bd0026', color: 'white', fontWeight: "600"}}>
            Continue
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

ForgotPassword.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};