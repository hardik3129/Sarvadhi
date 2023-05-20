import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { FormSelect } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

const AddData = () => {

    const [selectBrand, setselectBrand] = useState("D-Mart");
    const navigate = useNavigate()

    let currentDate = new Date().toJSON().slice(0, 10);

      const brandOption = [
        { value: "D-Mart" },
        { value: "Reliance" },
        { value: "Zara" },
        { value: "Pantaloons" },
        { value: "Westsides" }
      ];
    
  return (
    <>
    <Formik
        initialValues={{ coupan_per : '', start_date : '', end_date : '', desciption :''}}
        validationSchema={
            Yup.object().shape({
                coupan_per: Yup.number()
                  .min(1, 'Too Short!')
                  .max(100, 'Too Long!')
                  .required('Required'),
                start_date: Yup.date().min(currentDate).required('Required'), //start Date
                end_date: Yup
                .date()
                .required()
                .min(Yup.ref('start_date'), 'End date cannot be earlier than start date'), //End Date
                desciption : Yup.string().required('Requiredr')
              })
        }
        onSubmit={(value) => {
            const data = {...value, brand : selectBrand}
            const checkData = JSON.parse(localStorage.getItem('MangageCoupan'))
            checkData.map((data) => {
                
            })
            if (localStorage.getItem('MangageCoupan')) {
                let val = JSON.parse(localStorage.getItem('MangageCoupan'))
                val.push(data)
                localStorage.setItem('MangageCoupan', JSON.stringify(val))
            } else {
                localStorage.setItem('MangageCoupan', JSON.stringify([data]))
            }
            navigate('list')
        }}
    >
    <Form>
        <div>
        <label>Add Brand</label>
        <div className='col-3 my-3'>
            <select onChange={(e) => setselectBrand(e.target.value)}>
                {brandOption.map(i => <option value={i.value}>{i.value}</option>)}
            </select>
        </div>
        </div>
        <div className='my-3'>
            <label>Add Coupan percantage</label>
            <Field type='number' name='coupan_per' />
            <ErrorMessage name='coupan_per' component={'span'} />
        </div> 
        <div className='my-3'>
            <label>Start Date</label>
            <Field type='date' name={'start_date'} />
            <ErrorMessage name='start_date' component={'span'} />
        </div>
        <div className='my-3'>
            <label>End Date</label>
            <Field type='date' name={'end_date'} />
            <ErrorMessage name='end_date' component={'span'} />
        </div>
        <div className='my-3'>
            <label>Description</label>
            <Field name='desciption' />
            <ErrorMessage name='desciption' component={'span'} />
        </div>
        <button type='submit'>Submit</button>
    </Form>
    </Formik>
    </>
  )
}

export default AddData
