import React, { useState } from "react"
import { Formik } from 'formik';
import { Form, Input } from 'formik-antd';
import { Card } from "antd";

export const Capitalize: React.FunctionComponent = () => {
    const [answer, setAnswer] = useState<string[]>([]);

    const capitalizeValues = (array: string[]) => {
        let capitalised: string[] = [];

        if (array.length > 0) {
            capitalised.push(array[0].toUpperCase());
            capitalised = capitalised.concat(capitalizeValues(array.slice(1)));
        }

        setAnswer(capitalised);
        return capitalised;
    }

    const handleFormSubmit = (data: string) => {
        capitalizeValues(data.trim().split(' '));
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
        <Card actions={[<>Answer: {JSON.stringify(answer)}</>,]} >
            <p>Write a recursive function that takes an array of words and returns an array that contains all the words capitalized.</p>

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