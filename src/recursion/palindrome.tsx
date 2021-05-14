import React, { useState } from "react"
import { Formik } from 'formik';
import { Form, Input } from 'formik-antd';
import { Card } from "antd";

export const Palindrome: React.FunctionComponent = () => {
    const [answer, setAnswer] = useState<number>(0);

    const findPalindrome = (value: string) => {
        let isPalindrome = 0;

        if (value.charAt(0) === value.charAt(value.length - 1)) {
            const a = value.substring(1, (value.length - 1));

            if (a.length > 1) {
                isPalindrome = findPalindrome(a);
            } else {
                isPalindrome = 1;
            }
        }

        setAnswer(isPalindrome);
        return isPalindrome;
    }

    return (
        <Card actions={[<>Answer: {answer === 0 ? "Not a palindrome" : "Palindrome"}</>,]} >
            <p>Write a function that takes a string and returns if the string is a palindrome.</p>

            <Formik
                onSubmit={(values) => { findPalindrome(values.Value) }}
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