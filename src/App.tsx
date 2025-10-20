import React, { useState, useEffect } from 'react';
import {
  Layout,
  Button,
  Modal,
  Space,
  Typography,
  Card,
  message,
  Spin,
  Alert,
} from 'antd';
import {
  PlusOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { Task } from './types/Task';
import { taskService } from './services/api';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskSearch from './components/TaskSearch';
import TaskExecution from './components/TaskExecution';
import 'antd/dist/reset.css';

const { Header, Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'details'>('list');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchedTasks = await taskService.getAllTasks();
      setTasks(fetchedTasks);
    } catch (error: any) {
      const errorMessage = error.message || 'Failed to load tasks';
      setError(errorMessage);
      message.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (searchTerm: string) => {
    if (!searchTerm.trim()) {
      loadTasks();
      return;
    }

    setSearchLoading(true);
    setError(null);
    try {
      const searchResults = await taskService.searchTasksByName(searchTerm);
      setTasks(searchResults);
    } catch (error: any) {
      const errorMessage = error.message || 'Failed to search tasks';
      setError(errorMessage);
      message.error(errorMessage);
    } finally {
      setSearchLoading(false);
    }
  };

  const handleCreateTask = () => {
    setIsModalVisible(true);
  };

  const handleFormSuccess = () => {
    setIsModalVisible(false);
    loadTasks();
  };

  const handleFormCancel = () => {
    setIsModalVisible(false);
  };

  const handleViewDetails = (task: Task) => {
    setSelectedTask(task);
    setViewMode('details');
  };

  const handleBackToList = () => {
    setViewMode('list');
    setSelectedTask(null);
  };

  const handleExecuteTask = async (taskId: string) => {
    setError(null);
    try {
      await taskService.executeTask(taskId);
      message.success('Task execution started successfully');
      loadTasks(); // Refresh to get updated execution data
    } catch (error: any) {
      const errorMessage = error.message || 'Failed to execute task';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Title level={3} style={{ color: 'white', margin: 0 }}>
            <UnorderedListOutlined /> Task Management System
          </Title>
          <Button type="primary" icon={<PlusOutlined />} onClick={handleCreateTask}>
            Create Task
          </Button>
        </div>
      </Header>

      <Content style={{ padding: '24px', backgroundColor: '#f0f2f5' }}>
        {error && (
          <Alert
            message="Connection Error"
            description={error}
            type="error"
            showIcon
            closable
            style={{ marginBottom: 16 }}
          />
        )}

        {viewMode === 'list' ? (
          <Card>
            <Space direction="vertical" style={{ width: '100%' }} size="large">
              <TaskSearch onSearch={handleSearch} loading={searchLoading} />
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Title level={4}>Tasks</Title>
                <Button onClick={loadTasks} loading={loading}>
                  Refresh
                </Button>
              </div>

              {loading && !searchLoading ? (
                <div style={{ textAlign: 'center', padding: '50px' }}>
                  <Spin size="large" />
                </div>
              ) : (
                <TaskList
                  tasks={tasks}
                  loading={searchLoading}
                  onRefresh={loadTasks}
                  onViewDetails={handleViewDetails}
                  onExecuteTask={handleExecuteTask}
                />
              )}
            </Space>
          </Card>
        ) : (
          selectedTask && (
            <Card>
              <Button onClick={handleBackToList} style={{ marginBottom: 16 }}>
                Back to List
              </Button>
              <Title level={4}>Task Details</Title>
              <Card type="inner" title="Basic Information" style={{ marginBottom: 16 }}>
                <p><strong>ID:</strong> {selectedTask.id}</p>
                <p><strong>Name:</strong> {selectedTask.name}</p>
                <p><strong>Owner:</strong> {selectedTask.owner}</p>
                <p><strong>Command:</strong> <code>{selectedTask.command}</code></p>
              </Card>
              <TaskExecution task={selectedTask} />
            </Card>
          )
        )}

        <Modal
          title="Create New Task"
          open={isModalVisible}
          onCancel={handleFormCancel}
          footer={null}
          width={600}
        >
          <TaskForm
            onSuccess={handleFormSuccess}
            onCancel={handleFormCancel}
          />
        </Modal>
      </Content>
    </Layout>
  );
};

export default App;
