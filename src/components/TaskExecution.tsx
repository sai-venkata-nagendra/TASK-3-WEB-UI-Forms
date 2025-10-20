import React from 'react';
import { Card, List, Tag, Empty, Typography, Space, Divider } from 'antd';
import { ClockCircleOutlined, CheckCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Task } from '../types/Task';

const { Text, Paragraph } = Typography;

interface TaskExecutionProps {
  task: Task;
}

const TaskExecution: React.FC<TaskExecutionProps> = ({ task }) => {
  const getExecutionStatus = (output: string) => {
    if (output.includes('Error executing command')) {
      return { color: 'red', icon: <ExclamationCircleOutlined />, text: 'Failed' };
    }
    return { color: 'green', icon: <CheckCircleOutlined />, text: 'Success' };
  };

  const formatDuration = (startTime: string, endTime: string) => {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const duration = end.getTime() - start.getTime();
    return `${duration}ms`;
  };

  return (
    <Card 
      title={
        <Space>
          <ClockCircleOutlined />
          Task Executions ({task.taskExecutions?.length || 0})
        </Space>
      } 
      style={{ marginTop: 16 }}
    >
      {task.taskExecutions && task.taskExecutions.length > 0 ? (
        <List
          dataSource={task.taskExecutions}
          renderItem={(execution, index) => {
            const status = getExecutionStatus(execution.output);
            return (
              <List.Item>
                <Card 
                  size="small" 
                  style={{ width: '100%' }}
                  title={
                    <Space>
                      {status.icon}
                      <Text strong>Execution #{index + 1}</Text>
                      <Tag color={status.color}>{status.text}</Tag>
                    </Space>
                  }
                  extra={
                    <Text type="secondary" style={{ fontSize: '12px' }}>
                      Duration: {formatDuration(execution.startTime, execution.endTime)}
                    </Text>
                  }
                >
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <div>
                      <Text type="secondary" style={{ fontSize: '12px' }}>
                        <strong>Started:</strong> {new Date(execution.startTime).toLocaleString()}
                      </Text>
                    </div>
                    <div>
                      <Text type="secondary" style={{ fontSize: '12px' }}>
                        <strong>Completed:</strong> {new Date(execution.endTime).toLocaleString()}
                      </Text>
                    </div>
                    <Divider style={{ margin: '8px 0' }} />
                    <div>
                      <Text strong>Command Output:</Text>
                      <div 
                        style={{ 
                          backgroundColor: '#f5f5f5', 
                          padding: '8px', 
                          borderRadius: '4px',
                          marginTop: '4px',
                          fontFamily: 'monospace',
                          fontSize: '12px',
                          whiteSpace: 'pre-wrap',
                          maxHeight: '200px',
                          overflow: 'auto',
                          border: '1px solid #d9d9d9'
                        }}
                      >
                        {execution.output}
                      </div>
                    </div>
                  </Space>
                </Card>
              </List.Item>
            );
          }}
        />
      ) : (
        <Empty 
          description="No executions yet" 
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        >
          <Text type="secondary">Click the "Run" button to execute this task</Text>
        </Empty>
      )}
    </Card>
  );
};

export default TaskExecution;
