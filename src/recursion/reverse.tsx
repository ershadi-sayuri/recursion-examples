import React, { useState } from "react"
import { Formik } from 'formik';
import { Form, Input } from 'formik-antd';
import { Card } from "antd";

export const Reverse: React.FunctionComponent = () => {
    const [answer, setAnswer] = useState<string>('');

    const reverse = (value: string) => {
        let reversedString = '';

        if (value.length > 0) {
            reversedString = value.charAt(value.length - 1) + reverse(value.substring(0, value.length - 1));
        }

        setAnswer(reversedString);
        return reversedString;
    }

    return (
        <Card actions={[<>Answer: {answer}</>,]} >
            <p>Write a recursive function that takes a string and reverse the string.</p>

            <Formik
                onSubmit={(values) => { reverse(values.Value) }}
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