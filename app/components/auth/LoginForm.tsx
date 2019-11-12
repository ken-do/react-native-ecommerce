import React from 'react';
import { Button, View, Text, TextInput, NativeSyntheticEvent, NativeTouchEvent, StyleSheet } from 'react-native';
import { Formik, FormikProps, Form } from 'formik';
import * as Yup from 'yup';
import ILoginForm from '../../interfaces/LoginForm';

interface IProps {
    onSubmit(values: ILoginForm): void
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
        <View style={styles.container}>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={FormSchema}
                onSubmit={onSubmit}
            >
                {({ errors, handleChange, handleBlur, handleSubmit, values }: IFormikProps<ILoginForm>) => (
                    <View>
                        <View style={styles.formGroup}>
                            <Text>Email:</Text>
                            <TextInput onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email} style={styles.input} />
                            {errors && errors.email && <Text>{errors.email}</Text>}
                        </View>
                        <View style={styles.formGroup}>
                            <Text>Password: </Text>
                            <TextInput onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password} style={styles.input} />
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


const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
    },
    formGroup: {
        marginBottom: 10
    },
    input: {
        borderBottomColor: '#000',
        borderBottomWidth: 1
    },
    button: {
        marginTop: 15
    },
    error: {
        color: 'red'
    }
})

export default LoginForm;