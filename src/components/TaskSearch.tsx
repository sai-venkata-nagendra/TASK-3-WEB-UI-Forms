import React from 'react';
import { Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface TaskSearchProps {
  onSearch: (searchTerm: string) => void;
  loading: boolean;
}

const TaskSearch: React.FC<TaskSearchProps> = ({ onSearch, loading }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <Space.Compact style={{ width: '100%', marginBottom: 16 }}>
      <Input
        placeholder="Search tasks by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onPressEnter={handleSearch}
        disabled={loading}
      />
      <Button
        type="primary"
        icon={<SearchOutlined />}
        onClick={handleSearch}
        loading={loading}
      >
        Search
      </Button>
      <Button onClick={handleClear} disabled={loading}>
        Clear
      </Button>
    </Space.Compact>
  );
};

export default TaskSearch;
