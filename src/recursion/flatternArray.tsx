import React, { useState } from "react"
import { Formik } from 'formik';
import { Form, Input } from 'formik-antd';
import { Card } from "antd";

export const FlatternArray: React.FunctionComponent = () => {
    const [answer, setAnswer] = useState<any>([]);

    const flatternData = (array: any[]) => {
        let flatArray: any = [];

        for (let i of array) {
            if (Array.isArray(i)) {
                flatArray = flatArray.concat(flatternData(i));
            } else {
                flatArray.push(i);
            }
        }

        setAnswer(flatArray);
        return flatArray;
    }

    return (
        <Card actions={[<>Answer: {JSON.stringify(answer)}</>,]} >
            <p>Write a recursive function that takes an array that may contain more arrays in it and returns an array with all values flattened.</p>

            <Formik
                onSubmit={(values) => { JSON.stringify(flatternData([1, [2, 3], [4], [3, [2, 4]]])) }}
                initialValues={{ Value: '' }} >
                <Form layout="inline">
                    <Form.Item
                        name="Value"
                        required
                    >
                        <Input
                            type="text"
                            name="Value"
                            value="[1, [2, 3], [4], [3, [2, 4]]]"
                            disabled />
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