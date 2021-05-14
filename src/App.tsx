import React from 'react';
import { Col, Row } from 'antd';
import { Cumulative } from './recursion/cumulative';
import { Factorial } from './recursion/factorial';
import { FibonacciSeries } from './recursion/fibonacciSeries';
import { Product } from './recursion/product';

import "antd/dist/antd.css";

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
          <Col span={6}>
            <FibonacciSeries />
          </Col>
          <Col span={6}>
            <Product />
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default App;
