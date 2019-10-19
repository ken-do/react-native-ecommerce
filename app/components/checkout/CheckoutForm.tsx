import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import * as Yup from 'yup';
import { Formik, FormikProps } from 'formik';


export interface FormValues {
    email: string,
    phone: string,
    address: string,
}

const FormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email')
        .required('Required'),
    phone: Yup.string().matches(/[0-9]+/, 'Invalid phone number')
        .required('Required'),
    address: Yup.string().max(150, 'Maximum 150 characters')
})
.required('Required')

interface IProps {
    onSubmit() : void
}

interface IFormikProps<T> extends Omit<FormikProps<T>, 'handleSubmit'> {
    handleSubmit(ev: NativeSyntheticEvent<NativeTouchEvent>) : void
}

const CheckoutForm:React.SFC<IProps> = ({ onSubmit} ) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Information:</Text>
            <Formik
                initialValues={{
                    email: 'adsf@afds.com',
                    phone: '3412312',
                    address: 'fasdfasdf',
                }}
                validationSchema={FormSchema}
                onSubmit={onSubmit}
            >
                {({ errors, handleChange, handleBlur, handleSubmit, values } : IFormikProps<FormValues>) => (
                    <View>
                        <View style={styles.formGroup}>
                            <Text>Email:</Text>
                            <TextInput style={styles.input} onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email} />
                            {errors && errors.email && <Text style={styles.error}>{errors.email}</Text>}
                        </View>
                        <View style={styles.formGroup}>
                            <Text>Phone: </Text>
                            <TextInput style={styles.input} onChangeText={handleChange('phone')} onBlur={handleBlur('phone')} value={values.phone} />
                                {errors && errors.phone && <Text style={styles.error}>{errors.phone}</Text>}
                        </View>
                        <View style={styles.formGroup}>
                            <Text>Address: </Text>
                            <TextInput style={styles.input} onChangeText={handleChange('address')} onBlur={handleBlur('address')} value={values.address} />
                                {errors && errors.address && <Text style={styles.error}>{errors.address}</Text>}
                        </View>
                        <View style={styles.button}>
                            <Button onPress={handleSubmit} title="Submit" />
                        </View>
                    </View>
                    )
                }
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
    title : {
        fontSize: 20,
        marginBottom: 10
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

export default CheckoutForm;