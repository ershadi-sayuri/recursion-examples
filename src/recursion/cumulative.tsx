import React, { useState } from "react"
import { Formik } from 'formik';
import { Form, Input } from 'formik-antd';
import { Card } from "antd";

export const Cumulative: React.FunctionComponent = () => {
    const [answer, setAnswer] = useState<number>(0);

    const calculateSum = (value: number) => {
        let sum = 0;

        if (value > 0) {
            sum = value + calculateSum(value - 1);
        }

        setAnswer(sum);
        return sum;
    }

    return (
        <Card style={{ width: 500 }}>
            <label>Write a recursive function that takes a number and returns the sum of all the numbers from zero to that number.</label>

            <Formik
                onSubmit={(values) => { calculateSum(values.Value) }}
                initialValues={{ Value: 0 }} >
                <Form layout="vertical">
                    <Form.Item
                        name="Value"
                        label="Input number"
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

            Answer: {answer}
        </Card >
    );
}