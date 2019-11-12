import React from 'react';
import { Button, View, Text, TextInput, NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import { Formik, FormikProps, Form } from 'formik';
import * as Yup from 'yup';

export interface IFormValues {
    email: string,
    password: string
}
interface IProps {
    onSubmit(values: IFormValues): void
}

interface IFormikProps<T> extends Omit<FormikProps<T>, 'handleSubmit'> {
    handleSubmit(ev: NativeSyntheticEvent<NativeTouchEvent>): void
}

const FormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email')
        .required('Required'),
    password: Yup.string().max(150, 'Maximum 150 characters')
})
    .required('Required')

const LoginForm: React.FC<IProps> = ({ onSubmit }) => {
    return (
        <View>
            <Text>Login Now</Text>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={FormSchema}
                onSubmit={onSubmit}
            >
                {({ errors, handleChange, handleBlur, handleSubmit, values }: IFormikProps<IFormValues>) => (
                    <View>
                        <View>
                            <Text>Email:</Text>
                            <TextInput onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email} />
                            {errors && errors.email && <Text>{errors.email}</Text>}
                        </View>
                        <View>
                            <Text>Password: </Text>
                            <TextInput onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password} />
                            {errors && errors.password && <Text>{errors.password}</Text>}
                        </View>
                        <View>
                            <Button onPress={handleSubmit} title="Login" />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default LoginForm;