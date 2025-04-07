import React, { useState, useEffect } from 'react';
import Invoice from "../forms/Invoice/Invoice";
import Refill_initial from "../forms/refill_initial/Refill_initial";
import Refill_methods from "../forms/refill_methods/Refill_methods";
import Refill_SBP from "../forms/refill_sbp/Refill_SBP";
import Refill_sber_disabled from "../forms/refill_sbp/Refill_sber_disabled";
import Transfer from "../forms/transfer/Transfer";
import Fail_modal from "../modals/fail_modal/Fail_modal";
import Success_modal from "../modals/success_modal/Success_modal";
import { useGlobalContext } from '../context/GlobalContext';
//import { useFetch } from '@np/np_webcomponentlib';
import { API_PFAPI } from '../shared/api';
import axios from 'axios';
import { PaymentForm } from './PaymentFormData';
import { TypePaymentMethodEnum } from '../shared/const';
import InvoiceTransgran from '../forms/Invoice/InvoiceTransgran';

// Определяем тип для состояний
type PaymentStep = 'init' | 'precreated' | 'selectPaymentMethod' | 'showReq';

const MainPage: React.FC = () => {

  const [paymentFormData, setPaymentFormData] = useState<PaymentForm | null>(null);

  const [currentStep, setCurrentStep] = useState<PaymentStep>('init');

  // const [paymentMethodName, setPaymentMethodName] = useState<string | null>('sber');
  // Так как состояние по умолчанию уже является строкой то состояние не может быть null.
  // В таком случае стоит использовать такую типизацию

  const [paymentMethodName, setPaymentMethodName] = useState<string>('sber');

  // Как альтернатива если в потенциале значение может быть null то стоит в состояние по умолчанию указать null
  
  // const [paymentMethodName, setPaymentMethodName] = useState<string | null>(null);



  const [bbToken, setBBToken] = useState<string | null>(null);

  const { turnstileToken } = useGlobalContext();

  // const [, doFetchLoad] = useFetch(
  //   `${API_PFAPI}paymentform?tokenCF=${turnstileToken}`)//{ error: errLoad, isLoading: isLoadLoad, response: respLoad }



  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const token = searchParams.get('token');
    if (token) {
      setBBToken(token);
    }

    //Так как useEffect с пустым массивом зависимостей выполняется при рендере компонента изменять состояния на дефолтные нет смысла (Закоммментировал их)

    // setCurrentStep('init');
    // setPaymentMethodName('sber');

  }, []);

  useEffect(() => {
    if (bbToken) {
      loaddPreCreatedPaymentForm();
    }
  }, [bbToken]);

  const loadPaymentForm = () => {
    axios.get(`${API_PFAPI}paymentform?tokenCF=${turnstileToken}`,{
      headers: {
      'Authorization': `Bearer ${bbToken}`
      }
      })
      .then(response => {

        

      const statusReulst = response.data.result.status;

      if (statusReulst === 'authError')
      {
        console.error('Ошибка при отправке данных:', statusReulst);
          return
      }

      if (response.data.data.operationData.status === 'created')
        {
          setCurrentStep('selectPaymentMethod');
        }

      setPaymentFormData(response.data.data);


      
    }).catch(error => {
      console.error('Ошибка при отправке данных:', error);
    });
  }

  const loaddPreCreatedPaymentForm = () => {
    axios.get(`${API_PFAPI}paymentform/precreated`,{
      headers: {
      'Authorization': `Bearer ${bbToken}`
      }
      })
      .then(response => {

        

      const statusReulst = response.data.result.status;

      if (statusReulst === 'authError')
      {
        console.error('Ошибка при отправке данных:', statusReulst);
          return
      }

      setPaymentFormData(response.data.data);

      if (response.data.data.operationData.status === 'precreated')
      {
        setCurrentStep('precreated');
      }

      
    }).catch(error => {
      console.error('Ошибка при отправке данных:', error);
    });
  }


  const createPayment = (paymentMethodName: string) => {
    //Проверка на наличие turnstileToken
    console.log(turnstileToken);
    
    if (!turnstileToken) return;
    axios.post(`${API_PFAPI}/paymentform/payment`, 
      { 
          paymentMethod: paymentMethodName, 
          tokenCF: turnstileToken 
      }, 
      {
          headers: {
              'Authorization': `Bearer ${bbToken}`
          }
      })
    .then(response => {
      const newPaymentData = paymentFormData;
      if (newPaymentData) {
        
        newPaymentData.status = 'in_progress';
        console.log(newPaymentData.status);
        setPaymentFormData(newPaymentData);
      }
    })
    .catch(error => {
      console.error('Ошибка при отправке данных:', error);
    });
  }


  useEffect(() => {
    //Стоить проверять оба токена на ненулл и на изменение
    if (turnstileToken && bbToken) {
      loadPaymentForm();

      // doFetchLoad({
      //   method: 'POST',
      //   body: JSON.stringify({ token: bbToken })
      // });
    }
  }, [turnstileToken, bbToken]);

  const handleSelectPaymentMethod = (paymentMethod: string) => {
    if (!turnstileToken) {
      alert('Пожалуйста, подтвердите, что вы не робот');
      return;
    }
    console.log(paymentMethod);
    
    createPayment(paymentMethod);
  }

  const renderStep = () => {
    console.log(paymentFormData?.operationData.status)

    // В switch лучше проверять значение состояния в currentStep для рендера соответсвующего этапа операции
    switch (paymentFormData?.operationData.status) {
      case 'init':
        return <>Грузим данные</>;

      case 'precreated':
        return <Refill_methods paymentForm={paymentFormData} handleSelectPaymentMethod={handleSelectPaymentMethod} />;
         
      case 'created':
        return <Refill_methods paymentForm={paymentFormData} handleSelectPaymentMethod={handleSelectPaymentMethod} />;
      case 'in_progress':
        {/*  === null лищний, так как лучше перевернуть буллевое значение */}

        if (!paymentFormData?.operationData.paymentDetailsData) {
          return <Refill_initial paymentForm={paymentFormData} getSelectPaymentMethod={loadPaymentForm} />;
        }

        // здесь стоит использовать еще один switch case так как проевряется одно и то же значение
        // также значение на проверку стоит использовать  уже созданный state paymentMethodName

        if (paymentFormData?.operationData.paymentDetailsData.paymentMethod === TypePaymentMethodEnum.sbp) {
          return <Refill_SBP paymentForm={paymentFormData} checkPayment={loadPaymentForm} />;
        }
        if (paymentFormData?.operationData.paymentDetailsData.paymentMethod === TypePaymentMethodEnum.toCard) {
          return <Invoice paymentForm={paymentFormData} checkPayment={loadPaymentForm} />;
        }

        if (paymentFormData?.operationData.paymentDetailsData.paymentMethod === TypePaymentMethodEnum.transgran) {
          return <InvoiceTransgran paymentForm={paymentFormData} checkPayment={loadPaymentForm} />;
        }

        if (paymentFormData?.operationData.paymentDetailsData.paymentMethod === TypePaymentMethodEnum.transgranSBP) {
          return <Refill_SBP paymentForm={paymentFormData} checkPayment={loadPaymentForm} />;
        }

        if (paymentFormData?.operationData.paymentDetailsData.paymentMethod === TypePaymentMethodEnum.toAccount) {
          return <Transfer paymentForm={paymentFormData} checkPayment={loadPaymentForm} />;
        }
        return null;

        case 'success':
          return <Success_modal paymentForm={paymentFormData} />;

        case 'failed':
          return <Fail_modal paymentForm={paymentFormData} />;
      default:
        return null;
    }
  };


  if (!paymentFormData) {
    return <div>Загрузка...</div>;
  }
  

  return (
    <div>

      
      {renderStep()}
      {/* <Refill_initial paymentForm={paymentFormData} getSelectPaymentMethod={loadPaymentForm} /> */}
{/* 
      <Refill_initial paymentForm={paymentFormData} />   */}
    {/* <Refill_SBP paymentForm={paymentFormData} checkPayment={loadPaymentForm} />
      <Invoice paymentForm={paymentFormData} checkPayment={loadPaymentForm} /> */}
      {/* <Refill_sber_disabled /> */}
      {/* <Invoice /> */}
      {/* <Transfer paymentForm={paymentFormData} checkPayment={loadPaymentForm} />
      <Success_modal paymentForm={paymentFormData} />
      <Fail_modal paymentForm={paymentFormData} /> */}
    </div>
  );
};

export default MainPage;