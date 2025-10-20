import React from 'react';
import { Form, Input, Button, Space, message } from 'antd';
import { CreateTaskRequest } from '../types/Task';
import { taskService } from '../services/api';

interface TaskFormProps {
  onSuccess: () => void;
  onCancel: () => void;
  initialValues?: CreateTaskRequest;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSuccess, onCancel, initialValues }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);

  const onFinish = async (values: CreateTaskRequest) => {
    console.log('🎯 Form submitted with values:', values);
    setLoading(true);
    
    try {
      const taskData: CreateTaskRequest = {
        name: values.name,
        owner: values.owner,
        command: values.command
      };
      
      console.log('📤 Sending task data to backend:', taskData);
      
      const createdTask = await taskService.createTask(taskData);
      console.log('✅ Task created successfully:', createdTask);
      
      message.success('Task created successfully');
      form.resetFields();
      onSuccess();
    } catch (error: any) {
      console.error('❌ Error creating task:', error);
      message.error(`Failed to create task: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('❌ Form validation failed:', errorInfo);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={initialValues}
      disabled={loading}
    >
      <Form.Item
        label="Task Name"
        name="name"
        rules={[{ required: true, message: 'Please enter task name' }]}
      >
        <Input placeholder="Enter task name" />
      </Form.Item>

      <Form.Item
        label="Owner"
        name="owner"
        rules={[{ required: true, message: 'Please enter owner name' }]}
      >
        <Input placeholder="Enter owner name" />
      </Form.Item>

      <Form.Item
        label="Command"
        name="command"
        rules={[
          { required: true, message: 'Please enter command' },
          { min: 1, message: 'Command cannot be empty' },
        ]}
      >
        <Input.TextArea
          placeholder="Enter shell command (e.g., echo Hello World)"
          rows={3}
        />
      </Form.Item>

      <Form.Item>
        <Space>
          <Button 
            type="primary" 
            htmlType="submit" 
            loading={loading}
            onClick={() => console.log('🖱️ Create Task button clicked')}
          >
            Create Task
          </Button>
          <Button onClick={onCancel} disabled={loading}>
            Cancel
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default TaskForm;
