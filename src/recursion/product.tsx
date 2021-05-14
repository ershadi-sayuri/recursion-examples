import React, { useState } from "react"
import { Formik } from 'formik';
import { Form, Input } from 'formik-antd';
import { Card } from "antd";

export const Product: React.FunctionComponent = () => {
    const [answer, setAnswer] = useState<number>(0);

    const calculateProduct = (array: number[]) => {
        let product = array[0];

        if (array.length > 1) {
            // since array.length > 1 pop will never be undefined
            const pop = array.pop();
            product = calculateProduct(array) * pop!;
        }

        setAnswer(product);
        return product;
    }

    const handleFormSubmit = (data: string) => {
        calculateProduct(data.trim().split(' ').map((value) => parseInt(value)));
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
        <Card actions={[<>Answer: {answer}</>,]} >
            <p>Write a recursive function that takes a list of numbers as an input and returns the product of all the numbers in the list.</p>

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