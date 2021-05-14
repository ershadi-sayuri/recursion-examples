import React, { useState } from "react"
import { Formik } from 'formik';
import { Form, Input } from 'formik-antd';
import { Card } from "antd";

export const FibonacciSeries: React.FunctionComponent = () => {
    const [answer, setAnswer] = useState<number>(0);

    const calculateFibonacci = (value: number) => {
        let fibonacci = value;

        if ((value - 2) >= 0) {
            fibonacci = calculateFibonacci(value - 1) + calculateFibonacci(value - 2);
        }

        setAnswer(fibonacci);
        return fibonacci;
    }

    return (
        <Card actions={[<>Answer: {answer}</>,]} >
            <p>Write a recursive function that takes a number ‘n’ and returns the nth number of the Fibonacci number.</p>

            <Formik
                onSubmit={(values) => { calculateFibonacci(values.Value) }}
                initialValues={{ Value: 0 }} >
                <Form layout="inline">
                    <Form.Item
                        name="Value"
                        required
                    >
                        <Input
                            type="number"
                            name="Value" />
                    </Form.Item>

                    <Form.Item
                        name="Calculate"
                    >
                        <Input
                            type="submit"
                            name="Calculate"
                            value="Calculate" />
                    </Form.Item>
                </Form>
            </Formik>
        </Card >
    );
}