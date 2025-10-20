import React, { useState } from 'react';
import { Table, Button, Space, Tag, Popconfirm, message, Tooltip } from 'antd';
import { DeleteOutlined, PlayCircleOutlined, EyeOutlined, LoadingOutlined } from '@ant-design/icons';
import { Task } from '../types/Task';
import { taskService } from '../services/api';

interface TaskListProps {
  tasks: Task[];
  loading: boolean;
  onRefresh: () => void;
  onViewDetails: (task: Task) => void;
  onExecuteTask: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  loading,
  onRefresh,
  onViewDetails,
  onExecuteTask,
}) => {
  const handleDelete = async (taskId: string) => {
    try {
      await taskService.deleteTask(taskId);
      message.success('Task deleted successfully');
      onRefresh();
    } catch (error) {
      message.error('Failed to delete task');
    }
  };

  const handleExecute = async (taskId: string) => {
    try {
      await onExecuteTask(taskId);
      message.success('Task execution started');
      onRefresh();
    } catch (error) {
      message.error('Failed to execute task');
    }
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 100,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
    },
    {
      title: 'Command',
      dataIndex: 'command',
      key: 'command',
      render: (command: string) => (
        <Tag color="blue" style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {command}
        </Tag>
      ),
    },
    {
      title: 'Executions',
      dataIndex: 'taskExecutions',
      key: 'executions',
      render: (executions: any[]) => (
        <Tag color={executions.length > 0 ? 'green' : 'red'}>
          {executions.length} execution(s)
        </Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: unknown, record: Task) => (
        <Space size="small">
          <Button
            type="primary"
            icon={<EyeOutlined />}
            size="small"
            onClick={() => onViewDetails(record)}
          >
            Details
          </Button>
          <Button
            type="default"
            icon={<PlayCircleOutlined />}
            size="small"
            onClick={() => handleExecute(record.id)}
          >
            Run
          </Button>
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="default" danger icon={<DeleteOutlined />} size="small">
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={tasks}
      rowKey="id"
      loading={loading}
      pagination={{ pageSize: 10 }}
      scroll={{ x: 800 }}
    />
  );
};

export default TaskList;
