import { Result, Button } from 'antd';

export function Error() {
  return (<Result
    status="error"
    title="There are some problems with your operation."
    extra={
      <Button type="primary" key="refresh">
        refresh
      </Button>
    }
  />)
}
