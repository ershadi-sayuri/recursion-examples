import React, { useState } from "react"
import { Formik } from 'formik';
import { Form, Input } from 'formik-antd';
import { Card } from "antd";

export const Factorial: React.FunctionComponent = () => {
    const [answer, setAnswer] = useState<number>(0);

    const calculateFactorial = (value: number) => {
        let factorial = 1;

        if (value > 0) {
            factorial = value * calculateFactorial(value - 1);
        }

        setAnswer(factorial);
        return factorial;
    }

    return (
        <Card actions={[<>Answer: {answer}</>,]} >
            <p>Write a recursive function that takes a number as an input and returns the factorial of that number.</p>

            <Formik
                onSubmit={(values) => { calculateFactorial(values.Value) }}
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