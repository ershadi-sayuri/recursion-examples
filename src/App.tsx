import React from 'react';
import { Col, Row } from 'antd';
import { Cumulative } from './recursion/cumulative';
import { Factorial } from './recursion/factorial';
import { FibonacciSeries } from './recursion/fibonacciSeries';
import { Product } from './recursion/product';
import { Palindrome } from './recursion/palindrome';
import { Reverse } from './recursion/reverse';
import { FlatternArray } from './recursion/flatternArray';
import { Capitalize } from './recursion/capitalize';

import "antd/dist/antd.css";
import { NumberType } from './recursion/numberType';

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
        <Row gutter={16}>
          <Col span={6}>
            <Palindrome />
          </Col>
          <Col span={6}>
            <Reverse />
          </Col>
          <Col span={6}>
            <FlatternArray />
          </Col>
          <Col span={6}>
            <Capitalize />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={6}>
            <NumberType />
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default App;
