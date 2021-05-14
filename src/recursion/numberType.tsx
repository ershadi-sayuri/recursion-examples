import React, { useState } from "react"
import { Formik } from 'formik';
import { Form, Input } from 'formik-antd';
import { Card } from "antd";

export const NumberType: React.FunctionComponent = () => {
    const [answer, setAnswer] = useState<number>(0);

    // example of using callbacks in recursion
    const anyEven = (array: number[], callback: (value: number) => void) => {
        let even: number = 0;

        if (isEven(array[0]) === 1) {
            even = 1;
        } else if (array.length > 0) {
            even = anyEven(array.slice(1), callback);
        }

        setAnswer(even);
        return even;
    }

    const isEven = (value: number) => {
        if (value % 2 === 0) {
            return 1;
        }
        return 0;
    }

    const handleFormSubmit = (data: string) => {
        anyEven(data.trim().split(' ').map((value) => parseInt(value)), isEven);
    }

    const handleFormValidate = (values: { Value: string }) => {
        const errors: { [P in keyof { Value: string }]?: string } = {};

        if (!values.Value) {
            errors.Value = 'Value is required.';
        }

        return Object.keys(errors).length > 0
            ? errors
            : undefined;
    };


    return (
        <Card actions={[<>Answer: {answer === 0 ? "is not even" : "is even"}</>,]} >
            <p>Write a recursive function that takes an array and a callback function and returns True if any value of that array returns True from that callback function otherwise returns False.</p>

            <Formik
                onSubmit={(values) => { handleFormSubmit(values.Value) }}
                validate={handleFormValidate}
                initialValues={{ Value: '' }} >
                <Form layout="inline">
                    <Form.Item
                        name="Value"
                        required
                    >
                        <Input
                            type="text"
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