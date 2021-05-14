import React from 'react';
import { Cumulative } from './recursion/cumulative';

import "antd/dist/antd.css";
import { Factorial } from './recursion/factorial';
import { Col, Row } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Row gutter={16}>
          <Col span={6}>
            <Cumulative />
          </Col>
          <Col span={6}>
            <Factorial />
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default App;
